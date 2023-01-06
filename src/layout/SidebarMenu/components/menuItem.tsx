import React, { useState } from 'react'
import { useNavigate } from "react-router"
import { MenuItemChildrenType } from "../../types"
import classnames from "classnames";

interface Props {
  name: string
  icon?: React.ReactNode
  path: string
  children: MenuItemChildrenType[]
}

export const MenuItem: React.FC<Props> = ({ name, icon, path, children }) => {
  const [showMenuChildreItems, setShowMenuChildreItems] = useState<boolean>(false)
  const navigate = useNavigate()

  const onClick = () => navigate(`/${path}`)
  const onClickChildren = (path: string) => navigate(`/${path}`)


  const onClickChildrenItemButton = () => setShowMenuChildreItems(!showMenuChildreItems)

  if (children.length > 0) {
    let isPressed = classnames("py-2 space-y-2", { "": showMenuChildreItems, "hidden": !showMenuChildreItems })
    return (
      <li>
        <button
          type="button"
          className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
          onClick={onClickChildrenItemButton}>
          {icon}
          <span className="ml-3">{name}</span>
        </button>
        <ul className={isPressed}>
          {children.map((item, index) => (
            <div
              key={index}
              onClick={() => onClickChildren(item.path)} className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
              <span className="ml-9">{item.name}</span>
            </div>
          ))}
        </ul>
      </li>
    )
  }

  return (
    <li>
      <span onClick={onClick} className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
        {icon}
        <span className="ml-3">{name}</span>
      </span>
    </li>
  )
}