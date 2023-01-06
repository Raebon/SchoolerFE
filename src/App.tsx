import { Outlet } from 'react-router-dom'
import NavBar from './layout/NavBar'
import SidebarMenu from './layout/SidebarMenu/SidebarMenu'
import Footer from './layout/Footer'

function App() {

  return (

    <div className="h-screen">
      <NavBar />
      <div className="flex">
        <SidebarMenu />
        <div className="w-full bg-white">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
