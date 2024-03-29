import { useContext } from 'react'
import { MenuItem } from './components/menuItem'
import { useNavigate } from "react-router"
import { MenuItemType } from "../types"
import { HomeIcon, GraduationCapIcon, InfoIcon, ScissorsIcon, LogOutIcon, UserIcon, CogIcon, Inbox } from "../../assets/icons"
import BlankUser from "../../assets/img/profile-picture-5.jpg"
import { Verified, Premium, Boosted } from '../../components/elements/badges'
import AuthContext, { AuthContextType } from "../../context/AuthContext"

export const items: MenuItemType[] = [
  {
    name: "Domů",
    path: "home",
    icon: <HomeIcon />,
    smallIcon: <HomeIcon xs />,
    children: []
  },
  {
    name: "Učení",
    path: "practise",
    icon: <GraduationCapIcon />,
    smallIcon: <GraduationCapIcon xs />,
    children: [
      {
        name: "Drillování",
        path: "practise/test",
      },
      {
        name: "Test na nečisto",
        path: "practise/easy-test",
      },
      {
        name: "Test na ostro",
        path: "practise/hard-test",
      }
    ]
  },
  {
    name: "Nástroje",
    path: "tool",
    icon: <ScissorsIcon />,
    smallIcon: <ScissorsIcon xs />,
    children: [
      {
        name: "Vytvořit test",
        path: "tool/create-test",
      },
      {
        name: "Vytvořit poznámky",
        path: "tool/create-note",
      }
    ]
  },
  {
    name: "Inbox",
    path: "inbox",
    icon: <Inbox />,
    smallIcon: <Inbox xs />,
    news: 3,
    children: []
  }
]

export const bottomItems: MenuItemType[] = [
  {
    name: "Nastavení",
    path: "settings",
    icon: <CogIcon />,
    smallIcon: <CogIcon xs />,
    children: []
  },
  {
    name: "Nápověda",
    path: "help",
    icon: <InfoIcon />,
    smallIcon: <InfoIcon xs />,
    children: []
  }
]

const SidebarMenu = () => {
  let { logoutUser } = useContext<AuthContextType | any>(AuthContext)
  const navigate = useNavigate()
  return (
    <aside className="w-64  bg-gray-50">
      <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50">
        <ul className="space-y-2">
          {items.map((item, index) => (
            <MenuItem
              key={index}
              name={item.name}
              path={item.path}
              icon={item.icon}
              children={item.children}
              news={item.news}
            />
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200">
          <div className="flex items-center space-x-4 mb-4">
            <img className="w-10 h-10 rounded-full" alt="" src={BlankUser} />
            <div className="font-medium">
              <div className="flex gap-1"><span>Jan Novák</span><Verified /> <Premium /> <Boosted /></div>
              <div className="text-sm text-gray-500">uživatel</div>
            </div>
          </div>
          <li>
            <span
              onClick={() => navigate(`/settings`)}
              className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <CogIcon />
              <span className="ml-3">Nastavení</span>
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
          <li>
            <span
              onClick={logoutUser}
              className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group"
            >
              <LogOutIcon />
              <span className="ml-3">Odhlásit se</span>
            </span>
          </li>

        </ul>
      </div>
    </aside>
  )
}

export default SidebarMenu