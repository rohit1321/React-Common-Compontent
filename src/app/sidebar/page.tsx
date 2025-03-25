// App.tsx or any other component where you want to use Sidebar
import React from "react";
import Sidebar from "../../../utils/components/common/sidenavbar";


interface SidebarItem {
    id: number;
    text: string;
    href: string;
    iconClass: string;
  }

const dashBoardSidebar: SidebarItem[] = [
  { id: 1, text: "Dashboard", href: "/dashboard", iconClass: "fas fa-tachometer-alt"},
  { id: 2, text: "Profile", href: "/profile", iconClass: "fas fa-user" },
  { id: 3, text: "Settings", href: "/settings", iconClass: "fas fa-cogs"  },
  { id: 4, text: "Notifications", href: "/notifications", iconClass: "fas fa-bell" },
  { id: 5, text: "Logout", href: "/logout", iconClass: "fas fa-sign-out-alt" },
  { id: 4, text: "Notifications", href: "/notifications", iconClass: "fas fa-bell" },
  { id: 5, text: "Logout", href: "/logout", iconClass: "fas fa-sign-out-alt" },
  
];

export default function App() {
  return <Sidebar items={dashBoardSidebar}  dashBoardName="My Dashhboard"   />;
}
