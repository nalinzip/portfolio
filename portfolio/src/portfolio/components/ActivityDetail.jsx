import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { extracurriculars } from '../data/content';

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = extracurriculars.find(a => a.id === id);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!activity) {
    return (
      <div className="act-detail">
        <div className="act-detail__inner">
          <Link to="/" className="act-back">← Back to home</Link>
          <h1>Activity not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="act-detail">
      <div className="act-detail__inner">
        <Link to="/#activities" className="act-back">
          ← Back to activities
        </Link>

        <header className="act-header">
          <div className="act-header__meta">
            <span className="act-header__role">{activity.role}</span>
            <span className="act-header__period">{activity.period}</span>
          </div>
          <h1 className="act-header__title">{activity.title}</h1>
          <p className="act-header__desc">{activity.description}</p>
          
          <div className="act-header__tags">
            {activity.highlights.map((highlight, index) => (
              <span key={index} className="act-tag">{highlight}</span>
            ))}
          </div>
        </header>

        {activity.images && activity.images.length > 0 && (
          <div className="act-gallery">
            <h2 className="act-gallery__label">Gallery</h2>
            <div className="act-gallery__grid">
              {activity.images.map((image, index) => (
                <div 
                  key={index} 
                  className="act-gallery__item"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    onError={(e) => e.target.style.display = 'none'}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="act-section">
          <h2 className="act-section__label">Overview</h2>
          <p className="act-section__text">{activity.details.overview}</p>
        </div>

        <div className="act-grid">
          <div className="act-section">
            <h2 className="act-section__label">Responsibilities</h2>
            <ul className="act-list">
              {activity.details.responsibilities.map((item, index) => (
                <li key={index}>
                  <span className="act-list__icon">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="act-section">
            <h2 className="act-section__label">Achievements</h2>
            <ul className="act-list">
              {activity.details.achievements.map((item, index) => (
                <li key={index}>
                  <span className="act-list__icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="act-impact">
          <span className="act-impact__label">Impact</span>
          <p className="act-impact__text">{activity.details.impact}</p>
        </div>
      </div>

      {selectedImage && (
        <div className="act-lightbox" onClick={() => setSelectedImage(null)}>
          <button 
            className="act-lightbox__close"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
          <img 
            src={selectedImage.url} 
            alt={selectedImage.caption}
            className="act-lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default ActivityDetail;
