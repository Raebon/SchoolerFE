import React from "react"
import classNames from "classnames"

interface Props {
  xs?: boolean
  lightColor?: boolean
}

export const InfoIcon: React.FC<Props> = ({ xs, lightColor }) => {
  const iconClass = classNames("transition duration-75", { "w-6 h-6": !xs, "w-5 h-5": xs, "text-white hover:text-gray-300": lightColor, "text-gray-500 hover:text-gray-900": !lightColor })
  return (
    <svg
      className={iconClass}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clipRule="evenodd"
      />
    </svg>
  )
}
