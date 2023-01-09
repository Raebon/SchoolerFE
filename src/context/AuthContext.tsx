import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthService from "../service/services/auth-service"
import TokenService from "../service/services/token-service";

export type AuthContextType = {
  accessToken: string | null,
  refreshToken: string | null,
  loginLoading: boolean,
  loginError: boolean,
  setAccessToken: (e: any) => void,
  setRefreshToken: (e: any) => void,
  loginUser: (e: any) => void,
  logoutUser: () => void,
}
const AuthContext = createContext<AuthContextType | null>(null)

export default AuthContext;

interface Props {
  children: React.ReactNode
}

interface ILoginValue {
  login: string,
  password: string
}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(TokenService.getLocalAccessToken())
  const [refreshToken, setRefreshToken] = useState<string | null>(TokenService.getLocalRefreshToken())
  const [loginLoading, setLoginLoading] = useState<boolean>(false)
  const [loginError, setLoginError] = useState<boolean>(false)

  const [loading, setLoading] = useState(true)

  const history = useNavigate()

  let loginUser = async (e: ILoginValue) => {
    setLoginLoading(true)
    AuthService.login(e.login, e.password).then((res) => {
      setLoading(false)
      setAccessToken(res.accessToken ?? null)
      setRefreshToken(res.refreshToken ?? null)
      TokenService.setAccessToken(String(res.accessToken))
      TokenService.setRefreshToken(String(res.refreshToken))
      setLoginLoading(false)
      setLoginError(false)
      history('/')
    }).catch(err => {
      setLoginLoading(false)
      setLoginError(true)
    })
  }

  let logoutUser = () => {
    setAccessToken(null)
    setRefreshToken(null)
    setLoading(false)
    TokenService.removeTokens()
    history('/login')
  }

  let contextData = {
    accessToken: accessToken,
    refreshToken: refreshToken,
    loginLoading: loginLoading,
    loginError: loginError,
    setAccessToken: setAccessToken,
    setRefreshToken: setRefreshToken,
    loginUser: loginUser,
    logoutUser: logoutUser,
  }

  useEffect(() => {
    setLoading(false)
  }, [accessToken, loading])


  return (
    <AuthContext.Provider value={contextData} >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}