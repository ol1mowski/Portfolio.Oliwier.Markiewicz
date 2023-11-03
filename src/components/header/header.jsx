import style from './header.module.scss';

import hamburger from '../../assets/icons/hamburger.svg';

const Header = () => {
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
                        <img src={hamburger} alt='hamburger manu icon' className={style.headerContainer__navSection__icon__img} />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;