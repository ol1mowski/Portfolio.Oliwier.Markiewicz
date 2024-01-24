// MenuItem.js
import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import style from './menuItem.module.scss';

const MenuItem = ({ to, label, index, buttonVariants, closeRef }) => (
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
      ref={closeRef}
      className={style.item}
      variants={buttonVariants}
      whileHover="hover"
    >
      {label}
    </motion.div>
  </Link>
);

export default MenuItem;
