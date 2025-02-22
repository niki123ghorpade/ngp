import styles from './ProjectsStyles.module.css';
import freshBurger from '../../assets/yatrig.png';
import hipsster from '../../assets/shoes.png';
import fitLift from '../../assets/vedio.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
      
        <ProjectCard
          src={freshBurger}
          link="https://github.com/niki123ghorpade/Yatri_tourism"
             h3="Yatri"
          p="Tours and travel"
        />
        <ProjectCard
          src={hipsster}
          link="https://replit.com/@NikitaGhorpade/Shoes#index.html"
            h3="Shoes "
          p="Ecommerce Interface"
        />
        <ProjectCard
          src={fitLift}
          link="https://replit.com/@NikitaGhorpade/Video#1.png"
          h3="Video"
          p="Video website"
        />
      </div>
    </section>
  );
}

export default Projects;
