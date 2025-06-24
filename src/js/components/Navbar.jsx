import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {

return (
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">GGS</a>
    <button className="navbar-toggler border-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Featured</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-light" aria-disabled="true">Genres</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
);

};

export default Navbar;