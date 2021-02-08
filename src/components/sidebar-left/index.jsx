import React from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import SideBarBottomLeft from "../sidebar-bottom-left";
import { menuContent } from "../../common/menuLinks";
import "./styles.css";

export default function SideBarLeft(props) {
  return (
    <>
      <Menu>
        {menuContent.map((menuItem) => {
          return (
            <NavLink
              className='menu-item'
              to={menuItem.address}
              key={menuItem.id}
            >
              {menuItem.text}
            </NavLink>
          );
        })}
      </Menu>
      <SideBarBottomLeft />
    </>
  );
}
