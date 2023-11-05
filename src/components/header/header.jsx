import style from './header.module.scss';
import x from '../../assets/icons/hamburger_x.svg';
import hamburger from '../../assets/icons/hamburger.svg';
import { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = () => {

    const hamburegr = useRef(null);
    const menu = useRef(null);
    const close = useRef(null);
    const close1 = useRef(null);
    const close2 = useRef(null);
    const close3 = useRef(null);
    const close4 = useRef(null);


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
            menu.current.style.transform = 'translateX(0)';
            menu.current.style.transition = 'transform 0.7s';
            menu.current.style.display = 'block';
        };

        const menuClickHandler = () => {
            menu.current.style.display = 'none';
        };

        hamburegr.current.addEventListener('click', hamburgerClickHandler);
        close.current.addEventListener('click', menuClickHandler);
        close1.current.addEventListener('click', menuClickHandler);
        close2.current.addEventListener('click', menuClickHandler);
        close3.current.addEventListener('click', menuClickHandler);
        close4.current.addEventListener('click', menuClickHandler);
    }, []);
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
                        <img ref={hamburegr} src={hamburger} alt='hamburger manu icon' className={style.headerContainer__navSection__icon__img} />
                    </div>
                </nav>
                <nav className={style.headerContainer__navSectionBig}>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}
                    >
                        <motion.div
                            className={style.headerContainer__navSectionBig__items}
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
                            className={style.headerContainer__navSectionBig__items}
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
                            className={style.headerContainer__navSectionBig__items}
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
                            className={style.headerContainer__navSectionBig__items}
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Contact
                        </motion.div>
                    </Link>
                </nav>
            </header>


            <nav ref={menu} className={style.headerContainer__menu}>
                <div className={style.headerContainer__menu__x}>
                    <img ref={close} src={x} alt='close icon' className={style.headerContainer__menu__x__icon} />
                </div>
                <section className={style.headerContainer__menu__nav}>
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}
                    >
                        <motion.div
                            ref={close1}
                            className={style.headerContainer__menu__nav__item}
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
                            ref={close2}
                            className={style.headerContainer__menu__nav__item}
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
                            ref={close3}
                            className={style.headerContainer__menu__nav__item}
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
                            ref={close4}
                            className={style.headerContainer__menu__nav__item}
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Contact
                        </motion.div>
                    </Link>
                </section>
            </nav>
        </>
    );
};

export default Header;