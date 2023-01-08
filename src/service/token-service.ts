class TokenService {
  getLocalRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  getLocalAccessToken() {
    return localStorage.getItem('accessToken');
  }

  updateLocalAccessToken(token: any) {
    localStorage.setItem('accessToken', token);
  }

  updateLocalRefreshToken(token: any) {
    return localStorage.setItem('refreshToken', token);
  }

  /*   getUser() {
      return JSON.parse(localStorage.getItem("snm_user"));
    } */


  setRefreshToken(e: any) {
    return localStorage.setItem('refreshToken', e);
  }

  setAccessToken(e: string) {
    console.log(e, "asdasd")
    return localStorage.setItem('accessToken', e);
  }


  removeTokens() {
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accessToken');
  }

  /*  getUserRole(){
     const user = snmUser ? JSON.parse(snmUser) : undefined;;
     return user ?  jwt_decode(user?.accessToken) : null
   } */
}

export default new TokenService();