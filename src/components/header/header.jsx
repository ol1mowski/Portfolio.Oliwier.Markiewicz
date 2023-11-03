import style from './header.module.scss';
import x from '../../assets/icons/hamburger_x.svg';
import hamburger from '../../assets/icons/hamburger.svg';
import { useEffect, useRef } from 'react';

const Header = () => {

    const hamburegr = useRef(null);
    const menu = useRef(null);
    const close = useRef(null);

    useEffect(() => {

        const hamburgerClickHandler = () => {
            menu.current.style.transform = 'translateX(0)';
            menu.current.style.transition = 'transform 0.7s';

            menu.current.style.display = 'block';
        }
        const menuClickHandler = () => {
            menu.current.style.display = 'none';
        }

        hamburegr.current.addEventListener('click', hamburgerClickHandler);
        close.current.addEventListener('click', menuClickHandler);
    }, [hamburegr])

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
                    <a href='#home'>
                        <div className={style.headerContainer__navSectionBig__items}>Home</div>
                    </a>
                    <a href='#about'>
                        <div className={style.headerContainer__navSectionBig__items}>About</div>
                    </a>
                    <a href='#projects'>
                        <div className={style.headerContainer__navSectionBig__items}>Projects</div>
                    </a>
                    <a href='#contact'>
                        <div className={style.headerContainer__navSectionBig__items}>Contact</div>
                    </a>
                </nav>
            </header>


            <nav ref={menu} className={style.headerContainer__menu}>
                <div className={style.headerContainer__menu__x}>
                    <img ref={close} src={x} alt='close icon' className={style.headerContainer__menu__x__icon} />
                </div>
                <section className={style.headerContainer__menu__nav}>
                    <a href='#home'>
                        <div className={style.headerContainer__menu__nav__item}>
                            Home
                        </div>
                    </a>
                    <a href='#about'>
                        <div className={style.headerContainer__menu__nav__item}>
                            About
                        </div>
                    </a>
                    <a href='#projects'>
                        <div className={style.headerContainer__menu__nav__item}>
                            Projects
                        </div>
                    </a>
                    <a href='#contact'>
                        <div className={style.headerContainer__menu__nav__item}>
                            Contact
                        </div>
                    </a>
                </section>
            </nav>
        </>
    );
};

export default Header;