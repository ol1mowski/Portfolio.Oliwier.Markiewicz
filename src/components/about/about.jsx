import style from './about.module.scss';
import about from '../../assets/images/about.webp';
// import dev_icon from '../../assets/icons/about_icon.svg';
// import icon from '../../assets/icons/dev.png';

const About = () => {
    return (
        <>
            <section id='about' className={style.aboutContainer}>
                <div className={style.aboutContainer__imageSection}>
                    <img src={about} alt='work place' className={style.aboutContainer__imageSection__img} />
                    {/* <img src={dev_icon} alt='web dev icon' className={style.aboutContainer__imageSection__imgDev} />
                    <img src={icon} alt='dev icon' className={style.aboutContainer__imageSection__iconDev} /> */}
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