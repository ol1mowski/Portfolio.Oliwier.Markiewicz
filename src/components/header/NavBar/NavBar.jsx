import { Link } from "react-scroll";
import { motion } from "framer-motion";

import style from "./NavBar.module.scss";

const NavBar = () => {
  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <>
      <nav className={style.navSectionBig}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Home
          </motion.div>
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            About
          </motion.div>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Projects
          </motion.div>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1200}
        >
          <motion.div
            className={style.navSectionBig__items}
            variants={buttonVariants}
            whileHover="hover"
          >
            Contact
          </motion.div>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
