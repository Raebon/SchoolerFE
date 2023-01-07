import React from 'react'
import { Breadcrumb } from '../../../layout/breadcrumb/breadcrumb'
Breadcrumb

interface Props {
  title: string
  children: React.ReactNode
}

export const PageContainer: React.FC<Props> = ({ title, children }) => {

  return (
    <>
      <Breadcrumb />
      <div className="p-5">
        <h1 className="text-5xl text-gray-700 mb-6">{title}</h1>
        {children}
      </div>
    </>
  )
}