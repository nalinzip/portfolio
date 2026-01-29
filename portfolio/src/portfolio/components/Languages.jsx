const Languages = ({ languageTests }) => {
  return (
    <section id="languages" className="section">
      <div className="section-header">
        <span className="section-number">02</span>
        <h2 className="section-title">Language Proficiency</h2>
      </div>

      <div className="lang-list">
        {languageTests.map((test) => (
          <div key={test.name} className="lang-card">
            <div>
              <h3 className="lang-name">{test.name}</h3>
              <p className="lang-details">{test.details}</p>
            </div>
            <div>
              <span className="lang-score">{test.score}</span>
              {test.date && <p className="lang-date">{test.date}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
