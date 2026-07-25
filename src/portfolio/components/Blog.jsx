const Blog = ({ blogs }) => {
  return (
    <section id="blog" className="section blog-section">
      <div className="section-header">
        <span className="section-number">Blog</span>
        <h2 className="section-title">Writing Archive</h2>
      </div>

      <div className="blog-list">
        {blogs.map((blog) => (
          <a
            key={blog.platform}
            className="blog-card"
            href={blog.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <span className="blog-platform">{blog.platform}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-desc">{blog.description}</p>
            </div>
            <span className="blog-arrow">Visit →</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
