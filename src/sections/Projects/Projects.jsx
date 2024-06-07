import styles from './ProjectsStyles.module.css';
import Husttech from '../../assets/Husttech.png';
import ConsoleChat from '../../assets/ConsoleChat.png';
import Elearing from '../../assets/elearing.jpg';
import Dalathastfarm from '../../assets/Dalathastfarm.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Husttech}
          link="https://github.com/handmadee/-Web--S2Travel-VietNam"
          h3="Hust Tech"
          p="Technology product"
        />
        <ProjectCard
          src={Elearing}
          link="https://github.com/handmadee/SeverLearing"
          h3="Tsmart"
          p="Learning application for kids"
        />
        <ProjectCard
          src={ConsoleChat}
          link="https://github.com/handmadee/ConsoleChat"
          h3="Console chat"
          p="AI void chatbot"
        />
        <ProjectCard
          src={Dalathastfarm}
          link="https://github.com/handmadee38/Dalathastfarm"
          h3="Dalat Hasfarm"
          p="E-commerce website"
        />
      </div>
    </section>
  );
}

export default Projects;
