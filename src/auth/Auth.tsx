import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer'
import NavBar from '../layout/NavBar'

const Auth = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
      {/* <div className="place-items-end w-full">
      </div> */}
    </div>
  );
}

export default Auth;