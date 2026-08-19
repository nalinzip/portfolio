import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const FILTERS = [
  { label: 'all', value: 'all' },
  { label: 'language-related', value: 'language-related' },
  { label: 'computer science-related', value: 'computer-science' }
];

const CATEGORY_LABELS = {
  'language-related': 'language-related',
  'computer-science': 'computer science-related'
};

const Experience = ({ experiences }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredExperiences = useMemo(() => {
    const visibleExperiences =
      activeFilter === 'all'
        ? experiences
        : experiences.filter((experience) => experience.category === activeFilter);

    return [...visibleExperiences].sort((a, b) => a.sortOrder - b.sortOrder);
  }, [activeFilter, experiences]);

  return (
    <section id="experience" className="experience-section">
      <div className="experience-inner">
        <div className="experience-heading">
          <span className="experience-kicker">Experience</span>
          <h2 className="experience-title">Experience</h2>

          <div className="experience-filters" aria-label="Experience filters">
            {FILTERS.map((filter) => (
              <button
                key={filter.value}
                type="button"
                className={`experience-filter ${activeFilter === filter.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="experience-list">
          {filteredExperiences.map((experience) => {
            const content = (
              <>
                <div>
                  <span className="experience-category">{CATEGORY_LABELS[experience.category]}</span>
                  <h3 className="experience-item-title">{experience.title}</h3>
                  <p className="experience-org">{experience.organization}</p>
                  <p className="experience-summary">{experience.summary}</p>
                </div>
                <span className="experience-period">{experience.period}</span>
              </>
            );

            return experience.to ? (
              <Link
                className="experience-row experience-link"
                to={experience.to}
                key={`${experience.title}-${experience.period}`}
              >
                {content}
              </Link>
            ) : (
              <article className="experience-row" key={`${experience.title}-${experience.period}`}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
