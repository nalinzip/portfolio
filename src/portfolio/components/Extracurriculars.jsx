import { Link } from 'react-router-dom';

const Extracurriculars = ({ extracurriculars }) => {
  return (
    <section id="activities" className="section">
      <div className="section-header">
        <span className="section-number">03</span>
        <h2 className="section-title">Extracurricular Activities</h2>
      </div>

      <div className="activities-list">
        {extracurriculars.map((activity) => (
          <Link 
            key={activity.id} 
            to={`/activity/${activity.id}`}
            className="activity-card"
          >
            <div className="activity-header">
              <div>
                <h3 className="activity-title">{activity.title}</h3>
                <span className="activity-role">{activity.role}</span>
              </div>
              <span className="activity-period">{activity.period}</span>
            </div>
            
            <p className="activity-desc">{activity.description}</p>
            
            <ul className="activity-highlights">
              {activity.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>

            <div className="activity-card-footer">
              <span className="view-more">View details →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Extracurriculars;
