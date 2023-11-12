import Project from './project/project';
import style from './projects.module.scss';
import { projects } from '../../data/projects';

const Projects = () => {


    const PROJECTS = projects;

    return (
        <>
            <section id='projects' className={style.projectsContainer}>
                <div className={style.projectsContainer__contentSection}>
                    <h3 className={style.projectsContainer__contentSection__h3}>
                        PORTFOLIO
                    </h3>
                    <h4 className={style.projectsContainer__contentSection__h4}>
                        Each project is a unique piece of development 🧩
                    </h4>
                </div>
                <div className={style.projectsContainer__projectsWrapper}>
                    {PROJECTS.map((val) => (
                        <Project
                            key={val.id}
                            img={val.img}
                            title={val.title}
                            date={val.date}
                            describe={val.describe}
                            technologies={val.technologies}
                            github={val.githubLink}
                            page={val.pageLink}
                            reverse={val.reverse}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;