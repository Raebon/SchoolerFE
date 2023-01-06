export type MenuItemType = {
  index: number;
  name: string;
  path: string;
  icon: JSX.Element;
  children: MenuItemChildrenType[]
}

export type MenuItemChildrenType = {
  index: number;
  name: string;
  path: string;
}