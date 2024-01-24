import style from "./header.module.scss";

import x from "../../assets/icons/hamburger_x.svg";
import hamburger from "../../assets/icons/hamburger.svg";

import { useRef } from "react";

import NavBar from "./NavBar/NavBar";
import MenuItem from "./MenuItem/MenuItem";

const Header = () => {
  const menu = useRef(null);

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  const showMenuHandler = () => {
    menu.current.style.display = "block";
  };

  const hideMenuHandler = () => {
    menu.current.style.display = "none";
  };


  const menuItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <header className={style.headerContainer}>
        <section className={style.headerContainer__nameSection}>
          <h3 className={style.headerContainer__nameSection__content}>
            Oliwier.dev
          </h3>
        </section>
        <nav className={style.headerContainer__navSection}>
          <div className={style.headerContainer__navSection__icon}>
            <img
              onClick={showMenuHandler}
              src={hamburger}
              alt="hamburger manu icon"
              className={style.headerContainer__navSection__icon__img}
            />
          </div>
        </nav>
        <NavBar />
      </header>

      <nav ref={menu} onClick={hideMenuHandler} className={style.headerContainer__menu}>
        <img
          width="150"
          height="150"
          src="https://img.icons8.com/clouds/150/react.png"
          alt="react"
          className={style.headerContainer__menu__img}
        />
        <div className={style.headerContainer__menu__x}>
          <img
            src={x}
            alt="close icon"
            className={style.headerContainer__menu__x__icon}
          />
        </div>
        <section className={style.headerContainer__menu__nav}>
          {menuItems.map((item, index) => (
            <MenuItem
              key={index}
              to={item.to}
              label={item.label}
              index={index + 1}
              buttonVariants={buttonVariants}
              hideMenu={hideMenuHandler}
            />
          ))}
        </section>
        <img
          className={style.headerContainer__menu__imgPy}
          width="150"
          height="150"
          src="https://img.icons8.com/clouds/150/python.png"
          alt="python"
        />
      </nav>
    </>
  );
};

export default Header;
