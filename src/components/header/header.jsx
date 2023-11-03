import style from './header.module.scss';

import hamburger from '../../assets/icons/hamburger.svg';
import { useEffect, useRef } from 'react';

const Header = () => {

    const hamburegr = useRef(null);

    useEffect(() => {

        const hamburgerClickHandler = () => {
            console.log('click!');
        }

        hamburegr.current.addEventListener('click', hamburgerClickHandler);
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
            </header>
        </>
    );
};

export default Header;