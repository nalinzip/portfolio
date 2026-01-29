const Skills = ({ skills }) => {
  return (
    <section className="skills-section">
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h4>{category}</h4>
            <p>{items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
