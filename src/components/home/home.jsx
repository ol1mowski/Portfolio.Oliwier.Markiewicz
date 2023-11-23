import style from './home.module.scss';
import img from '../../assets/images/portret.webp';
import TechStack from './techStack/techStack';

const Home = () => {
    return (
        <>
            <section id='home' className={style.homeContainer}>
                <section className={style.homeContainer__infoSection}>
                    <img src={img} alt='oliwier img' className={style.homeContainer__infoSection__img} />
                    <article className={style.homeContainer__infoSection__content}>
                        <h1 className={style.homeContainer__infoSection__content__h1}>
                            Front-End React <br />Developer
                        </h1>
                        <p className={style.homeContainer__infoSection__content__p}>
                            Hi, I'm Oliwier Markiewicz. A passionate Front-end React Developer based in Sieradz, Poland. 📍
                        </p>
                        <section className={style.homeContainer__infoSection__content__icons}>
                            <a className={style.homeContainer__infoSection__content__icons__a} href='https://www.linkedin.com/in/oliwier-markiewicz-47857228a/' target='_blank' rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-linkedin"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
                            </a>
                            <a className={style.homeContainer__infoSection__content__icons__a} href='https://github.com/ol1mowski' rel="noreferrer" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </a>
                        </section>
                    </article>
                </section>
                <TechStack />
            </section>
        </>
    );
};

export default Home;