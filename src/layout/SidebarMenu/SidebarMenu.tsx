import { MenuItem } from './components/menuItem'
import { useNavigate } from "react-router"
import { MenuItemType } from "../types"
import { HomeIcon, GraduationCapIcon, InfoIcon } from "../../assets/icons"

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
    name: "Učitelské nástroje",
    path: "teacher-tool",
    icon: <GraduationCapIcon />,
    children: [
      {
        index: 0,
        name: "Vytvořit test",
        path: "teacher-tool/create-test",
      },
      {
        index: 0,
        name: "Test2",
        path: "create-test/test-1",
      }
    ]
  }
]

const SidebarMenu = () => {
  const navigate = useNavigate()
  return (
    <aside className="w-64 h-[90vh] bg-gray-50">
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