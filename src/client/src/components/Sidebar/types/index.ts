export type SidebarLink = {
  name: string;
  icon: JSX.Element;
  path: string;
  ifLoggedIn?: boolean;
};
