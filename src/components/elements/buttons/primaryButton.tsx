import React from 'react'
import { LoadingSpinnerIcon } from "../../../assets/icons/LoadingSpinnerIcon"

interface Props {
  type?: "button" | "submit"
  children: React.ReactNode
  onClick?: () => void
  loading?: boolean
}

export const PrimaryButton: React.FC<Props> = ({ type, children, onClick, loading }) => {
  return (
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none text-center inline-flex items-center gap-1" type={type ?? "button"} onClick={onClick}>
      {loading && <LoadingSpinnerIcon />}
      {children}
    </button>
  )
}
