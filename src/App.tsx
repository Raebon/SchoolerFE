import { Outlet } from 'react-router-dom'
import NavBar from './layout/NavBar'
import SidebarMenu from './layout/SidebarMenu/SidebarMenu'
import Footer from './layout/Footer'

function App() {
  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex bg-gray-50">
        <SidebarMenu />
        <div className="w-full bg-white rounded-t-lg">
          <Outlet />

        </div>
        {/* <div className="bg-gray-50 w-[20%]">
          sad
        </div> */}
      </div>
    </div>
  )
}

export default App
