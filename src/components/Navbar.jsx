import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbar">
            <ul className="navbar-nav">

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Add Registration
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search Registration
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/delete">
                  Delete Registration
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/view">
                  View All
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;