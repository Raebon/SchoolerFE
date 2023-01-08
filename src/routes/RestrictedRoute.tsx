import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext, { AuthContextType } from '../context/AuthContext'

interface Props {
  children: JSX.Element;
}

const RestrictedRoute: React.FC<Props> = ({ children }) => {
  const { accessToken } = useContext<AuthContextType | any>(AuthContext)
  const hasJWT = () => {
    return accessToken
  }

  return hasJWT() ? <Navigate to="/home" /> : children;
};

export default RestrictedRoute;