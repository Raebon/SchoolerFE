import api from "./api"
import { AxiosResponse } from "axios"
import TokenService from "./token-service";
import { AuthenticationResult } from "./types"

class AuthService {
  async login(email: string, password: string) {
    return api
      .post(`/v1/auth/login?UserEmail=${email}&Password=${password}`)
      .then((response: AxiosResponse<AuthenticationResult>) => {
        return response.data;
      });
  }
}

export default new AuthService();