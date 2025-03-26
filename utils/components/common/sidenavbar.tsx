
"use client";

import { useState } from "react";

interface SidebarItem {
    id: number;
    text: string;
    href: string;
    iconClass: string;
  }

  interface SidebarProps {
    items: SidebarItem[]; 
    dashBoardName:string;
  }

const Sidebar: React.FC<SidebarProps> = ({items , dashBoardName}) => {
  
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
      setCollapsed(!collapsed);
    };
  return (
    <div className={`sidebar ${collapsed ?"c-side":""}`} >
      <div className="bg-dark text-white  vh-100 rounded-3 p-4">
      <div className="sidebar-header d-flex  justify-content-between">
          <div className={`font-bold h4  ${collapsed ? 'd-none' : ''}`}>{dashBoardName}</div>
          <button onClick={toggleSidebar} className="btn text-white">
          <i className={collapsed ? "fa fa-arrow-right" : "fa fa-arrow-left"} />
          </button>
        </div>
        <ul >
          {items.map((item) => (
            <li
              key={item.id}
              className={`py-2 ps-2 rounded cursor-pointer `}
            >
              <div className="flex items-start text-decoration-none">
                <i className={ `h5 mt-2 justify-center ${item.iconClass} pe-2`}></i>
                {!collapsed && item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
