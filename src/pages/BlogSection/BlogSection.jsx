import style from "./BlogSection.module.scss";
import { useQuery } from '@tanstack/react-query';
import { fetchPost } from '../../util/http';

export const BlogSection = () => {

    const { data } = useQuery({
        queryKey: ['post'],
        queryFn: fetchPost,
    });

    const { title, description, category, link, image } = data[0] || [];


  return (
    <section className={style.projectsContainer}>
      <div className={style.projectsContainer__contentSection}>
        <h3 className={style.projectsContainer__contentSection__h3}>
          Last Post On My Blog
        </h3>
        <h4 className={style.projectsContainer__contentSection__h4}>
          Here You can see the latest post on my IT blog 🧑‍💻📚
        </h4>
      </div>
      <div className={style.projectsContainer__projectsWrapper}>
        <div className={style.sliderContainer}>
          <div className={style.sliderContainer__image}>
            <img className={style.sliderContainer__image__img} src={image} alt="Post's image" />
          </div>
          <div className={style.sliderContainer__content}>
            <p className={style.sliderContainer__content__category}>
              { category }
            </p>
            <h2 className={style.sliderContainer__content__title}>
              { title }
            </h2>
            <h3 className={style.sliderContainer__content__text}>
              { description }
            </h3>
            <a href={link} target="_blank">
              <p className={style.sliderContainer__content__read}>Read more</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
