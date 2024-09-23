import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      
      <ul>
        <li>
          <Link to="/">
            <a href="#inicio">Inicio</a>
          </Link>
        </li>
        <li>
          <Link to="/acercade">
            <a href="#AcercaDe">Acerca de</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
