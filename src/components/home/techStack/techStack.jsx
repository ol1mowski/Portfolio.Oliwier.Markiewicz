import style from './techStack.module.scss';
import htmlcss from '../../../assets/icons/htmlcss.svg';
import jsts from '../../../assets/icons/jsts.svg';
import reactsass from '../../../assets/icons/reactsass.svg';
import python from '../../../assets/icons/python.svg';

const TechStack = () => {
    return (
        <>
            <section className={style.techStackContainer}>
                <div className={style.techStackContainer__title}>
                    <p className={style.techStackContainer__title__p}>
                        Tech Stack
                    </p>
                </div>
                <div className={style.techStackContainer__skillsWrapper}>
                    <img src={htmlcss} alt='html css icons' className={style.techStackContainer__skillsWrapper__skill} />
                    <img src={jsts} alt='js ts icons' className={style.techStackContainer__skillsWrapper__skill} />
                    <img src={reactsass} alt='react sass icons' className={style.techStackContainer__skillsWrapper__skill} />
                    <img src={python} alt='python icons' className={style.techStackContainer__skillsWrapper__skill__python} />
                </div>
            </section>
        </>
    );
};

export default TechStack;