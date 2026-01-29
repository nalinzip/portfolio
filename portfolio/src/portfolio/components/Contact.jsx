const Contact = ({ email, github, linkedin }) => {
  const links = [
    { label: 'Email', value: email, href: `mailto:${email}` },
    { label: 'GitHub', value: github, href: `https://${github}` },
    { label: 'LinkedIn', value: linkedin, href: `https://${linkedin}` }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <div className="section-header">
          <span className="section-number">04</span>
          <h2 className="section-title">Get in Touch</h2>
        </div>

        <div className="contact-grid">
          <div>
            <p className="contact-text">
              Open to opportunities in software engineering, 
              UX/UI design, and machine learning projects.
            </p>
          </div>
          
          <div className="contact-links">
            {links.map(item => (
              <a 
                key={item.label}
                href={item.href}
                className="contact-link"
                target={item.label !== 'Email' ? '_blank' : undefined}
                rel={item.label !== 'Email' ? 'noopener noreferrer' : undefined}
              >
                <span className="contact-link-label">{item.label}</span>
                <span className="contact-link-value">{item.value}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
