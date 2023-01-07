import React from "react"
import classNames from "classnames"

interface Props {
  xs?: boolean
  lightColor?: boolean
}

export const GraduationCapIcon: React.FC<Props> = ({ xs, lightColor }) => {
  const iconClass = classNames("transition duration-75", { "w-6 h-6": !xs, "w-5 h-5": xs, "text-white hover:text-gray-300": lightColor, "text-gray-500 hover:text-gray-900": !lightColor })
  return (
    <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
  )
}
