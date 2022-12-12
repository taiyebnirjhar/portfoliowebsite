import React, { useState } from "react";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <>
      <header className="l-header">
        <nav className="nav bd-grid">
          {/* nav-toggle >>  toggleMenu*/}
          <div className="nav__toggle" id="nav-toggle" onClick={toggleHandler}>
            <i className="bx bx-menu"></i>
          </div>

          <div>
            <a href="/" className="nav__logo">
              Taiyeb Nirjhor
            </a>
          </div>
          {/* nav-menu >> navMenu*/}
          <div
            className={toggleMenu ? "show nav__menu" : "nav__menu"}
            id="nav-menu"
          >
            {/* nav-close >> closeMenu*/}
            <div className="nav__close" onClick={toggleHandler} id="nav-close">
              <i className="bx bx-x text-white"></i>
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
