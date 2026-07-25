import nalinImg from '../asset/nalin.png';

const Hero = ({ name, title, bio }) => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
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

          {title && (
            <div className="hero-tag animate-up delay-4">
              <span>{title}</span>
            </div>
          )}
        </div>

        <div className="hero-image animate-up delay-2">
          <img src={nalinImg} alt={name} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
