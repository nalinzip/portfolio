const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {currentYear}</span>
        <span>Built with React</span>
      </div>
    </footer>
  );
};

export default Footer;
