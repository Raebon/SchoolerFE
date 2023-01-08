export type MenuItemType = {
  name: string;
  path: string;
  icon?: JSX.Element;
  smallIcon?: JSX.Element;
  news?: number;
  children: MenuItemChildrenType[]
}

export type MenuItemChildrenType = {
  index?: number;
  name: string;
  path: string;
}