import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div id="sidebar">
      <h2>Menu</h2>
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
