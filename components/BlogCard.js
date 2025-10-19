function BlogCard({ post }) {
  try {
    return (
      <article className="card border border-gray-100" data-name="blog-card" data-file="components/BlogCard.js">
        <div className="relative overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] text-white text-sm font-semibold rounded-full shadow-lg">
              {post.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-4 text-sm text-[var(--text-secondary)]">
            <div className="flex items-center space-x-2">
              <div className="icon-calendar text-base"></div>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="icon-clock text-base"></div>
              <span>{post.readTime}</span>
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-[var(--text-primary)] leading-tight">
            {post.title}
          </h3>
          <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
            {post.excerpt}
          </p>
          <button className="flex items-center text-[var(--secondary-color)] font-semibold hover:gap-3 gap-2 transition-all duration-300">
            Leer Artículo Completo
            <div className="icon-arrow-right text-base"></div>
          </button>
        </div>
      </article>
    );
  } catch (error) {
    console.error('BlogCard component error:', error);
    return null;
  }
}