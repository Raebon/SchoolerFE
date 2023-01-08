import axios, { AxiosRequestConfig } from "axios";
import jwt_decode from "jwt-decode";
import TokenService from "./token-service";

//const BASE_URL = process.env.REACT_APP_API_URL;
const BASE_URL = "https://localhost:44350/";

const instance = axios.create({
  baseURL: `${BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = TokenService.getLocalAccessToken();
    if (token && config.headers) {
      (config.headers as { [key: string]: string })["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/v1/auth/login" && err.response) {
      // Access Token was expired
      const accessToken = jwt_decode(TokenService.getLocalAccessToken() ?? "");

      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const res = await instance.post(`${BASE_URL}/v1/auth/refresh-token`, {
            refreshToken: TokenService.getLocalRefreshToken()
          });
          TokenService.updateLocalAccessToken(res.data.access_token);
          TokenService.updateLocalRefreshToken(res.data.refresh_token);

          return instance(originalConfig);
        } catch (error) {
          if (originalConfig.url === "/v1/auth/refresh-token") {
            TokenService.removeTokens();
            window.location.reload();
          }
          return Promise.reject(error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default instance;