import style from "./MenuItem.module.scss";

import { Link } from "react-scroll";
import { motion } from "framer-motion";

const MenuItem = ({ to, label, index, buttonVariants, hideMenu }) => (
  <Link
    key={index}
    activeClass="active"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={1200}
  >
    <motion.div
      onClick={hideMenu}
      className={style.item}
      variants={buttonVariants}
      whileHover="hover"
    >
      {label}
    </motion.div>
  </Link>
);

export default MenuItem;
