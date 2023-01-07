import React from "react"
import classNames from "classnames"

interface Props {
  xs?: boolean
  lightColor?: boolean
}

export const LoginIcon: React.FC<Props> = ({ xs, lightColor }) => {
  const iconClass = classNames("transition duration-75", { "w-6 h-6": !xs, "w-5 h-5": xs, "text-white hover:text-gray-300": lightColor, "text-gray-500 hover:text-gray-900": !lightColor })
  return (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
  )
}
