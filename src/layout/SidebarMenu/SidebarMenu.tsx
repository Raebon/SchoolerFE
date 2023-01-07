import { MenuItem } from './components/menuItem'
import { useNavigate } from "react-router"
import { MenuItemType } from "../types"
import { HomeIcon, GraduationCapIcon, InfoIcon, ScissorsIcon, LogOutIcon, UserIcon, CogIcon } from "../../assets/icons"
import BlankUser from "../../assets/img/profile-picture-5.jpg"

export const items: MenuItemType[] = [
  {
    index: 0,
    name: "Domů",
    path: "home",
    icon: <HomeIcon />,
    children: []
  },
  {
    index: 1,
    name: "Nástroje",
    path: "tool",
    icon: <ScissorsIcon />,
    children: [
      {
        index: 0,
        name: "Vytvořit test",
        path: "tool/create-test",
      },
      {
        index: 0,
        name: "Vytvořit poznámky",
        path: "tool/create-note",
      }
    ]
  }
]

const SidebarMenu = () => {
  const navigate = useNavigate()

  const logout = () => console.log("logout")
  return (
    <aside className="w-64 h-[91.5vh] bg-gray-50">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50">
        <ul className="space-y-2">
          {items.map((item) => (
            <MenuItem
              key={item.index}
              name={item.name}
              path={item.path}
              icon={item.icon}
              children={item.children}
            />
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <img className="w-10 h-10 rounded-full" alt="" src={BlankUser} />
            <div className="font-medium dark:text-white">
              <div>Jan Novák</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">uživatel</div>
            </div>
          </div>
          <li>
            <span
              onClick={logout}
              className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <CogIcon />
              <span className="ml-3">Nastavení</span>
            </span>
          </li>
          <li>
            <span
              onClick={logout}
              className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <LogOutIcon />
              <span className="ml-3">Odhlásit se</span>
            </span>
          </li>
          <li>
            <span
              onClick={() => navigate(`/help`)}
              className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <InfoIcon />
              <span className="ml-3">Napověda</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default SidebarMenu