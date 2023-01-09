import { useQuery, UseQueryResult } from "@tanstack/react-query"
import UserService from "../../../service/services/user-service"
import { UserDtoListResultDto } from "../../../service/utils/types"

/**
 * Prefix for the users query key.
 */
export const usersQueryKeyPrefix = "users"

/**
 * Returns the users query key.
 */
export const getUsersQueryKey = (): string[] => [usersQueryKeyPrefix]

/**
 * Fetches a list of users from the API.
 */
export const fetchUsers = (): Promise<UserDtoListResultDto> => {
  return UserService.getAllUsers()
}

/**
 * Hook for querying a list of users.
 */
export const useUsersQuery = (): UseQueryResult<UserDtoListResultDto> => {
  return useQuery(getUsersQueryKey(), () => fetchUsers())
}

/**
 * Hook for querying a selected list of users.
 */
export const useSelectedUsersQuery = (): UseQueryResult<UserDtoListResultDto> => {
  return useQuery(getUsersQueryKey(), () => fetchUsers())
}

