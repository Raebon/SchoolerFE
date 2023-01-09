import api from "../utils/api"
import { AxiosResponse } from "axios"
import { UserDtoListResultDto } from "../utils/types"

class UsersService {
  async getAllUsers(): Promise<UserDtoListResultDto> {
    try {
      const response: AxiosResponse<UserDtoListResultDto> = await api.get(`/v1/users`)
      return response.data
    } catch (error) {
      // Handle the error
      throw error
    }
  }
}

export default new UsersService();