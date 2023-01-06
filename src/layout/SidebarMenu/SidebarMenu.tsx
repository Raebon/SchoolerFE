import React from 'react'
import { MenuItem } from './components/menuItem'
import { useNavigate } from "react-router"
import { MenuItemType } from "../types"

export const items: MenuItemType[] = [
  {
    index: 0,
    name: "Domů",
    path: "home",
    icon: <svg className="w-6 h-6 text-gray-500 transition duration-75 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>,
    children: []
  },
  {
    index: 1,
    name: "Vytvořit test",
    path: "create-test",
    icon: <svg className="w-6 h-6 text-gray-500 transition duration-75 hover:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>,
    children: [
      {
        index: 0,
        name: "Test1",
        path: "create-test/test-1",
      },
      {
        index: 0,
        name: "Test2",
        path: "create-test/test-2",
      }
    ]
  }
]

const SidebarMenu = () => {
  const navigate = useNavigate()
  return (

    <aside className="w-64" aria-label="Sidebar">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50">
        <ul className="space-y-2">
          {items.map(item => (
            <MenuItem key={item.index} name={item.name} path={item.path} icon={item.icon} />
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200">
          <li>
            <span onClick={() => navigate(`/help`)} className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group">
              <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd"></path></svg>
              <span className="ml-3">Pomoc</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>

  )
}

export default SidebarMenu