class TokenService {
  getLocalRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  getLocalAccessToken() {
    return localStorage.getItem('accessToken');
  }

  updateLocalAccessToken(token: string) {
    localStorage.setItem('accessToken', token);
  }

  updateLocalRefreshToken(token: string) {
    return localStorage.setItem('refreshToken', token);
  }

  setRefreshToken(token: string) {
    return localStorage.setItem('refreshToken', token);
  }

  setAccessToken(token: string) {
    return localStorage.setItem('accessToken', token);
  }

  removeTokens() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
  }
}

export default new TokenService();