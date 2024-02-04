import style from "./BlogSection.module.scss";

export const BlogSection = () => {
  return (
    <section className={style.projectsContainer}>
      <div className={style.projectsContainer__contentSection}>
        <h3 className={style.projectsContainer__contentSection__h3}>
          Last Post On My Blog
        </h3>
        <h4 className={style.projectsContainer__contentSection__h4}>
          Each project is a unique piece of development 🧩
        </h4>
      </div>
    </section>
  );
};
