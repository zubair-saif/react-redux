import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="container-fluid navbar navbar-light bg-light">
      <div className="container">
        <Link to='/' style={{ textDecoration: 'none' }}>FakeShop</Link>
      </div>
    </nav>
  );
}

export default Header;
