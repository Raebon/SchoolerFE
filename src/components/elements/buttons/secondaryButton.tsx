import React from 'react'

interface Props {
  type?: "button" | "submit"
  children: React.ReactNode
  onClick?: () => void
}

export const SecondaryButton: React.FC<Props> = ({ type, children, onClick }) => {
  return (
    <button className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200" type={type ?? "button"} onClick={onClick}>{children}</button>
  )
}
