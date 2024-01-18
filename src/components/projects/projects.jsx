import Project from './project/Project';
import style from './Projects.module.scss';

import { useQuery } from '@tanstack/react-query';
import { fetchProjects } from '../../util/http';

const Projects = () => {

    const { data } = useQuery({
        queryKey: ['projects'],
        queryFn: fetchProjects,
    })


    const PROJECTS = data || [];

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
                            img={val.image}
                            title={val.title}
                            date={val.date}
                            describe={val.description}
                            technologies={val.technologies}
                            github={val.githubLink}
                            page={val.liveLink}
                            reverse={val.reverse}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;