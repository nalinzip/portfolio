const Awards = ({ awards }) => {
  return (
    <section id="awards" className="awards-section">
      <div className="awards-inner">
        <div className="awards-heading">
          <span className="awards-kicker">Awards</span>
          <h2 className="awards-title">Awards & Recognition</h2>
        </div>

        <div className="awards-list">
          {awards.map((award) => (
            <article className="award-row" key={`${award.title}-${award.date}`}>
              <div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-org">{award.organization}</p>
              </div>
              <span className="award-date">{award.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
