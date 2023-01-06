import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { MenuItemChildrenType } from '../../types';
import classnames from 'classnames';
import { ChevronDownIcon, HomeIcon } from "../../../assets/icons"

interface Props {
  name: string;
  icon?: React.ReactNode;
  path: string;
  children: MenuItemChildrenType[];
}

export const MenuItem: React.FC<Props> = ({ name, icon, path, children }) => {
  const [showMenuChildreItems, setShowMenuChildreItems] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => navigate(`/${path}`);
  const handleClickChildren = (path: string) => navigate(`/${path}`);
  const handleClickChildrenItemButton = () => setShowMenuChildreItems(!showMenuChildreItems);

  useEffect(() => {
    isRouteActive()
  }, [location.pathname])

  const isRouteActive = () => {
    const childrenPaths: any[] = []
    children.map((item) => childrenPaths.push(item.path))

    setShowMenuChildreItems(childrenPaths.includes(location.pathname.slice(1)) || showMenuChildreItems)
  }

  if (children.length > 0) {
    const isPressed = classnames('py-2 space-y-2', {
      '': showMenuChildreItems,
      hidden: !showMenuChildreItems
    });

    return (
      <li>
        <button
          type="button"
          className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
          onClick={handleClickChildrenItemButton}
        >
          {icon}
          <span className="flex-1 ml-3 text-left whitespace-nowrap">{name}</span>
          <span
            className={classnames({ 'rotate-180': showMenuChildreItems })}>
            <ChevronDownIcon />
          </span>
        </button>
        <ul className={isPressed}>
          {children.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClickChildren(item.path)}
              className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <span className="ml-9">{item.name}</span>
            </div>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <li>
      <span
        onClick={handleClick}
        className="cursor-pointer flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100"
      >
        {icon}
        <span className="ml-3">{name}</span>
      </span>
    </li>
  );
};