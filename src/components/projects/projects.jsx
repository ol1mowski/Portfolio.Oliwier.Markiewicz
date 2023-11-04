import Project from './project/project';
import style from './projects.module.scss';
import courses from '../../assets/images/projects/courses.png';

const Projects = () => {

    const PROJECTS = [
        {
            id: 1,
            img: courses,
            title: 'Courses shop',
            date: 'November 2023',
            describe: 'A Courses shop website is an online platform that allows users to buy courses for personal or business use.',
            technologies: ['React','SCSS'],
            githubLink: 'https://github.com/ol1mowski/it-shop.de',
            pageLink: 'https://ol1mowski.github.io/it-shop.de/',
        }
    ]

    return (
        <>
            <section className={style.projectsContainer}>
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
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;