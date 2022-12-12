import React from "react";

function Header() {
  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>

          <div>
            <a href="#" className="nav__logo">
              Taiyeb Nirjhor
            </a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <div className="nav__close" id="nav-close">
              <i className="bx bx-x"></i>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                {" "}
                <a href="/#home" className="nav__link active">
                  Home
                </a>{" "}
              </li>
              <li className="nav__item">
                {" "}
                <a href="/#about" className="nav__link">
                  About
                </a>{" "}
              </li>
              <li className="nav__item">
                {" "}
                <a href="/#skills" className="nav__link">
                  Skills
                </a>{" "}
              </li>

              <li className="nav__item">
                {" "}
                <a href="/#works" className="nav__link">
                  Works
                </a>{" "}
              </li>
              <li className="nav__item">
                <a href="/#contact" className="nav__link">
                  Contact
                </a>
              </li>
              <li className="nav__item">
                <a href="/#contact" className="nav__link">
                  Blog
                </a>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
