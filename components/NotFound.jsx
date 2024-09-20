import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h3>Vuelve a intentarlo</h3>

      <Link to="/"> Ir a casa</Link>
    </div>
  );
}

export default NotFound;
