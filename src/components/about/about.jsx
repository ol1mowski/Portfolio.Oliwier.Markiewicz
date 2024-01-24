import style from './About.module.scss';
import about from '../../assets/images/about.webp';

const About = () => {
    return (
        <>
            <div id="about" />
            <section className={style.aboutContainer}>
                <div className={style.aboutContainer__imageSection}>
                    <img src={about} alt='work place' className={style.aboutContainer__imageSection__img} />
                </div>
                <div className={style.aboutContainer__contentSection}>
                    <h3 className={style.aboutContainer__contentSection__h3}>
                        ABOUT ME
                    </h3>
                    <h4 className={style.aboutContainer__contentSection__h4}>
                        A dedicated Front-end Developer <br /> based in Sieradz, Poland 📍
                    </h4>
                    <p className={style.aboutContainer__contentSection__p}>
                        As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                    </p>
                </div>
            </section>
        </>
    );
};

export default About;