import { Outlet } from 'react-router-dom'
import NavBar from './layout/NavBar'
import SidebarMenu from './layout/SidebarMenu/SidebarMenu'

function App() {

  return (

    <div className="h-screen">
      <NavBar />
      <div className="flex">
        <SidebarMenu />
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
