import { Link } from 'react-router-dom';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="section-number">01</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <div className="projects-list">
        {projects.map((project, index) => (
          <Link 
            key={project.id}
            to={`/project/${project.id}`}
            className="project-card"
          >
            <div className="project-header">
              <div>
                <span className="project-index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <span className="project-year">{project.year}</span>
            </div>
            
            <p className="project-desc">{project.description}</p>
            
            <div className="project-tech">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-line" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
