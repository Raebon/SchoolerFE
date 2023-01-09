import api from "../utils/api"
import { AxiosResponse } from "axios"
import { AuthenticationResult } from "../utils/types"

class AuthService {
  async login(email: string, password: string): Promise<AuthenticationResult> {
    try {
      const response: AxiosResponse<AuthenticationResult> = await api.post(`/v1/auth/login?UserEmail=${email}&Password=${password}`)
      return response.data
    } catch (error) {
      // Handle the error
      throw error
    }
  }
}

export default new AuthService();