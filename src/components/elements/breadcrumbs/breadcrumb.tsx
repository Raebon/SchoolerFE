import React from 'react'

export const Breadcrumb = () => {
  return (
    <nav className="flex justify-between" aria-label="Breadcrumb">
      <ol className="inline-flex items-center mb-3 sm:mb-0">
        <li>
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-400">Test-Page
            </span>
          </div>
        </li>
        <span className="mx-2 text-gray-400">/</span>
        <li aria-current="page">
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-400">Test-Page
            </span>
          </div>
        </li>
      </ol>
    </nav>
  )
}
