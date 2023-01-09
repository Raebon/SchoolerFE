import axios, { AxiosRequestConfig } from "axios";
import TokenService from "../services/token-service";

const BASE_URL = import.meta.env.VITE_API_URL;

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

    if (originalConfig.url !== `${BASE_URL}/v1/auth/login` && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        if (originalConfig.url === `${BASE_URL}/v1/auth/refresh-token`) {
          TokenService.removeTokens();
          window.location.reload();
        }
        try {
          const res = await instance.post(`${BASE_URL}/v1/auth/refresh-token`, {
            authToken: TokenService.getLocalAccessToken(),
            refreshToken: TokenService.getLocalRefreshToken()
          });
          TokenService.updateLocalAccessToken(res.data.accessToken);
          TokenService.updateLocalRefreshToken(res.data.refreshToken);
          originalConfig.headers["Authorization"] = 'Bearer ' + TokenService.getLocalAccessToken();
          return instance(originalConfig);
        } catch (error) {
          return Promise.reject(error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default instance;