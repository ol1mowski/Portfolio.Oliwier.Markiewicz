import style from './project.module.scss';

const Project = ({ reverse, img, title, describe, technologies, page, github, date }) => {

    
    return (
        <>
            {reverse ? <div id={style.reverse} className={style.projectWrapper}>
                <div className={style.projectWrapper__imgSection}>
                    <img src={img} alt='website' className={style.projectWrapper__imgSection__img} />
                </div>
                <div className={style.projectWrapper__descriSection}>
                    <div className={style.projectWrapper__titleSection}>
                        <div className={style.projectWrapper__titleSection__wrapper}>
                            <h3 className={style.projectWrapper__titleSection__wrapper__h3}>
                                {title}
                            </h3>
                            <p className={style.projectWrapper__titleSection__wrapper__p}>
                                ({date})
                            </p>
                        </div>
                    </div>
                    <div className={style.projectWrapper__contentSection}>
                        <p className={style.projectWrapper__contentSection__pBig}>
                            {describe}
                        </p>
                    </div>
                    <div className={style.projectWrapper__toolsSection}>
                        {technologies ? (
                            <>
                                <div className={style.projectWrapper__toolsSection__tool}>
                                    {technologies[0]}
                                </div>
                                <div className={style.projectWrapper__toolsSection__tool}>
                                    {technologies[1]}
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div className={style.projectWrapper__iconSection}>
                        <a href={github} target='_blank' rel='noreferrer' className={style.projectWrapper__iconSection__a}>
                            <div className={style.projectWrapper__iconSection__icon}>
                                <span className={style.projectWrapper__iconSection__icon__span}>
                                    Code
                                </span>
                                <svg id={style.icon_img} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </div>
                        </a>
                        <a href={page} target='_blank' rel='noreferrer' className={style.projectWrapper__iconSection__a}>
                            <div className={style.projectWrapper__iconSection__icon}>
                                <span className={style.projectWrapper__iconSection__icon__span}>
                                    Live Demo
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div> : <div className={style.projectWrapper}>
                <div className={style.projectWrapper__imgSection}>
                    <img src={img} alt='website' className={style.projectWrapper__imgSection__img} />
                </div>
                <div className={style.projectWrapper__descriSection}>
                    <div className={style.projectWrapper__titleSection}>
                        <div className={style.projectWrapper__titleSection__wrapper}>
                            <h3 className={style.projectWrapper__titleSection__wrapper__h3}>
                                {title}
                            </h3>
                            <p className={style.projectWrapper__titleSection__wrapper__p}>
                                {date}
                            </p>
                        </div>
                    </div>
                    <div className={style.projectWrapper__contentSection}>
                        <p className={style.projectWrapper__contentSection__pBig}>
                            {describe}
                        </p>
                    </div>
                    <div className={style.projectWrapper__toolsSection}>
                        {technologies ? (
                            <>
                                <div className={style.projectWrapper__toolsSection__tool}>
                                    {technologies[0]}
                                </div>
                                <div className={style.projectWrapper__toolsSection__tool}>
                                    {technologies[1]}
                                </div>
                            </>
                        ) : null}
                    </div>
                    <div className={style.projectWrapper__iconSection}>
                        <a href={github} target='_blank' rel='noreferrer' className={style.projectWrapper__iconSection__a}>
                            <div className={style.projectWrapper__iconSection__icon}>
                                <span className={style.projectWrapper__iconSection__icon__span}>
                                    Code
                                </span>
                                <svg id={style.icon_img} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github"><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            </div>
                        </a>
                        <a href={page} target='_blank' rel='noreferrer' className={style.projectWrapper__iconSection__a}>
                            <div className={style.projectWrapper__iconSection__icon}>
                                <span className={style.projectWrapper__iconSection__icon__span}>
                                    Live Demo
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-external-link"><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>}

        </>
    );
};

export default Project;