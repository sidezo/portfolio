import React from "react";
import "./sidebar.css";
import Logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className="aside">
      <a href="#home" className="nav__logo">
        <img src={Logo} alt="" />
      </a>

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav_item">
              <a href="#home" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link"></a>
            </li>
            <li className="nav_item">
              <a href="" className="nav_link"></a>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
