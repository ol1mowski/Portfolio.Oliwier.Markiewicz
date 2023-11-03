import style from './header.module.scss';

const Header = () => {
    return (
        <>
            <header className={style.headerContainer}>
                <section className={style.headerContainer__nameSection}>
                    <h3 className={style.headerContainer__nameSection__content}>
                        Oliwier.dev
                    </h3>
                </section>
            </header>
        </>
    );
};

export default Header;