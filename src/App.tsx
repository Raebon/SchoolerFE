import { Outlet } from 'react-router-dom'
import NavBar from './layout/NavBar'
import SidebarMenu from './layout/SidebarMenu/SidebarMenu'
import Footer from './layout/Footer'

function App() {
  return (
    <div className="h-screen bg-gray-50">
      <NavBar />
      <div className="flex">
        <SidebarMenu />
        <div className="w-full bg-white rounded-l-lg drop-shadow-md">
          <Outlet />
        </div>
        {/* <div className="bg-gray-50 w-[20%]">
          sad
        </div> */}
      </div>
      <Footer />
    </div>
  )
}

export default App
