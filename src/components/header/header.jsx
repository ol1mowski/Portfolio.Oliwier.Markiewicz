import style from "./header.module.scss";
import x from "../../assets/icons/hamburger_x.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import { useEffect, useRef } from "react";
import NavBar from "./NavBar/NavBar";
import MenuItem from "./MenuItem/MenuItem";

const Header = () => {
  const hamburegr = useRef(null);
  const menu = useRef(null);
  const closeRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  useEffect(() => {
    const hamburgerClickHandler = () => {
      menu.current.style.display = "block";
    };

    const menuClickHandler = () => {
      menu.current.style.display = "none";
    };

    hamburegr.current.addEventListener("click", hamburgerClickHandler);
    closeRefs.forEach((ref) =>
      ref.current.addEventListener("click", menuClickHandler)
    );

    return () => {
      hamburegr.current.removeEventListener("click", hamburgerClickHandler);
      closeRefs.forEach((ref) =>
        ref.current.removeEventListener("click", menuClickHandler)
      );
    };
  }, [hamburegr, menu, closeRefs]);

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
              ref={hamburegr}
              src={hamburger}
              alt="hamburger manu icon"
              className={style.headerContainer__navSection__icon__img}
            />
          </div>
        </nav>
        <NavBar />
      </header>

      <nav ref={menu} className={style.headerContainer__menu}>
        <div className={style.headerContainer__menu__x}>
          <img
            ref={closeRefs[0]}
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
              closeRef={closeRefs[index + 1]}
            />
          ))}
        </section>
      </nav>
    </>
  );
};

export default Header;
