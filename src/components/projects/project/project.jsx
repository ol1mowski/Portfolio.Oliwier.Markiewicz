import style from './Project.module.scss';
import ProjectComponent from './ProjectComponent/ProjectComponent';

const Project = ({ reverse, img, title, describe, technologies, page, github, date }) => {

    
    return (
        <>
            {reverse ? <ProjectComponent id={style.reverse} img={img} title={title} describe={describe} technologies={technologies} page={page} github={github} date={date} /> : <ProjectComponent id={null} img={img} title={title} describe={describe} technologies={technologies} page={page} github={github} date={date} />}

        </>
    );
};

export default Project;