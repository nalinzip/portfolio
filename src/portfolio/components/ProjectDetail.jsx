import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/content';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project) {
    return (
      <div className="project-detail-container">
        <div className="project-detail-content">
          <Link to="/" className="back-btn">← Back to home</Link>
          <h1>Project not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        <Link to="/#projects" className="back-btn">← Back to projects</Link>
        
        <header className="project-detail-header">
          <div className="project-detail-meta">
            <span className="project-detail-year">{project.year}</span>
            {project.role && <span className="project-detail-role">{project.role}</span>}
          </div>
          <h1 className="project-detail-title">{project.title}</h1>
          <p className="project-detail-desc">{project.description}</p>
          
          <div className="project-detail-tech">
            {project.tech.map(tech => (
              <span key={tech} className="tech-pill">{tech}</span>
            ))}
          </div>
        </header>

        {/* Link Buttons */}
        {project.links && project.links.length > 0 && (
          <div className="project-links">
            {project.links.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="project-gallery">
            <h2 className="project-gallery-label">Gallery</h2>
            <div className="project-gallery-grid">
              {project.images.map((image, index) => (
                <div 
                  key={index} 
                  className="project-gallery-item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.url} 
                    alt={image.caption || `Project image ${index + 1}`}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                  {image.caption && (
                    <span className="project-gallery-caption">{image.caption}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="project-sections">
          <section className="project-section">
            <h2>Overview</h2>
            <p>{project.details.overview}</p>
          </section>

          <section className="project-section">
            <h2>Key Features</h2>
            <ul className="feature-list">
              {project.details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <div className="project-section-grid">
            <section className="project-section">
              <h2>Challenges</h2>
              <p>{project.details.challenges}</p>
            </section>

            <section className="project-section">
              <h2>What I Learned</h2>
              <p>{project.details.learnings}</p>
            </section>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button 
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.caption || 'Project image'}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          {selectedImage.caption && (
            <p className="lightbox-caption">{selectedImage.caption}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;