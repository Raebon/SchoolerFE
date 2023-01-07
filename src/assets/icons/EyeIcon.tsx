import React from "react"
import classNames from "classnames"

interface Props {
  xs?: boolean
  lightColor?: boolean
}

export const EyeIcon: React.FC<Props> = ({ xs, lightColor }) => {
  const iconClass = classNames("transition duration-75", { "w-6 h-6": !xs, "w-5 h-5": xs, "text-white hover:text-gray-300": lightColor, "text-gray-500 hover:text-gray-900": !lightColor })
  return (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
  )
}
