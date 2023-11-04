import style from './project.module.scss';

const Project = props => {

    return (
        <div className={style.projectWrapper}>
            <div className={style.projectWrapper__imgSection}>
                <img src={props.img} alt='website' className={style.projectWrapper__imgSection__img} />
            </div>
            <div className={style.projectWrapper__titleSection}>
                <div className={style.projectWrapper__titleSection__wrapper}>
                    <h3 className={style.projectWrapper__titleSection__wrapper__h3}>
                        {props.title}
                    </h3>
                    <p className={style.projectWrapper__titleSection__wrapper__p}>
                        ({props.date})
                    </p>
                </div>
            </div>
            <div className={style.projectWrapper__contentSection}>
                <p className={style.projectWrapper__contentSection__pBig}>
                    {props.describe}
                </p>
            </div>
            <div className={style.projectWrapper__toolsSection}>
                <div className={style.projectWrapper__toolsSection__tool}>
                    {props.technologies[0]}
                </div>
                <div className={style.projectWrapper__toolsSection__tool}>
                    {props.technologies[1]}
                </div>
            </div>
            <div className={style.projectWrapper__iconSection}>
                <div className={style.projectWrapper__iconSection__icon}>
                    <span className={style.projectWrapper__iconSection__icon__span}>
                        Code
                    </span>
                    <svg className={style.projectWrapper__iconSection__icon__img} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </div>
            </div>
        </div>
    );
};

export default Project;