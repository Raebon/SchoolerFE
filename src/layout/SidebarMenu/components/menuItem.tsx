import React from 'react'
import { useNavigate } from "react-router"

interface Props {
  name: string
  icon?: React.ReactNode
  path: string
}

export const MenuItem: React.FC<Props> = ({ name, icon, path }) => {
  const navigate = useNavigate()
  const onClick = () => navigate(`/${path}`)

  return (
    <li>
      <span onClick={onClick} className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
        {icon}
        <span className="ml-3">{name}</span>
      </span>
    </li>
  )
}
