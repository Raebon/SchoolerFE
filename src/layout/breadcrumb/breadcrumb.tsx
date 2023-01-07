import React from 'react'
import { useLocation } from 'react-router-dom';
import { items, bottomItems } from "../SidebarMenu/SidebarMenu"
import { MenuItemType } from "../types"

const filterCurrentMenuItem = (items: MenuItemType[], paths: string[]) => {
  return items.filter(obj => paths.includes(obj.path));
}

interface Props {
  name: string;
}

const BreadcrumbItem: React.FC<Props> = ({ name }) => {
  return (
    <>
      {name && (
        <li>
          <div className="flex items-center">
            <span className="px-3 py-2 text-sm font-normal text-center text-gray-400">{name}
            </span>
          </div>
        </li>
      )}
    </>
  )
}

export const Breadcrumb = () => {
  const location = useLocation();
  const path = filterCurrentMenuItem(
    items.concat(bottomItems),
    location.pathname.split('/').filter(val => val !== '')
  );

  return (
    <nav className="flex justify-between" aria-label="Breadcrumb">
      <ol className="inline-flex items-center mb-3 sm:mb-0">
        <li>
          <div className="flex items-center">
            <span className="flex gap-2 px-3 py-2 text-sm font-normal text-center text-gray-400">
              {path[0]?.smallIcon}
              {path[0]?.name}
            </span>
          </div>
        </li>
        <span className="mx-2 text-gray-400">/</span>
        {path[0]?.children.map((item, index) => {
          if (location.pathname !== `/${item.path}`) return null;
          return <BreadcrumbItem key={index} name={item.name} />;
        })}
      </ol>
    </nav>
  )
}
