const Hero = ({ name, title, bio }) => {
  return (
    <section className="hero">
      <div className="animate-up">
        <p className="hero-label">Portfolio / 2026</p>
      </div>
      
      <h1 className="hero-title animate-up delay-1">
        {name}
      </h1>
      
      <div className="hero-line animate-line delay-2" />
      
      <p className="hero-bio animate-up delay-3">
        {bio}
      </p>
      
      <div className="hero-tag animate-up delay-4">
        <span>{title}</span>
      </div>
    </section>
  );
};

export default Hero;