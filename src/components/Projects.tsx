import styles from './Projects.module.css';
import { type Project } from '../data/projects';

const SortableProjects = ({ isDigital, projects }: { isDigital?: boolean, projects: Project[]}) => {
  return (
    <main className={styles.projects}>
      <h2 className={styles.title}>{isDigital ? 'Mainly Digital' : 'Mainly Physical'}</h2>
      {projects.map((project) => (
        <article key={project.name} className={styles.project}>
          <p>{project.for}</p>
          <p>{project.name}</p>
          <p>{project.niceDate ?? project.year}</p>
        </article>
      ))}
    </main>
  );
};

export default SortableProjects;
