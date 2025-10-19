class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Algo salió mal</h1>
            <p className="text-gray-600 mb-4">Lo sentimos, ocurrió un error inesperado.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Recargar Página
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  try {
    return (
      <div className="min-h-screen" data-name="app" data-file="app.js">
        <Header />
        <Hero />
        <Categories />
        <BlogSection />
        <Newsletter />
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "Neurociencia del Aprendizaje: Cómo Optimizar Tu Cerebro",
      excerpt: "Explora los mecanismos cerebrales detrás del aprendizaje efectivo y cómo aplicarlos en tu vida diaria.",
      category: "Neurociencia",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
      date: "18 Oct 2025",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "Filosofía Estoica Aplicada al Crecimiento Personal",
      excerpt: "Principios milenarios de sabiduría para enfrentar los desafíos modernos con serenidad y propósito.",
      category: "Filosofía",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&q=80",
      date: "16 Oct 2025",
      readTime: "10 min"
    },
    {
      id: 3,
      title: "Metacognición: El Arte de Aprender a Aprender",
      excerpt: "Desarrolla la capacidad de reflexionar sobre tu propio proceso de pensamiento y aprendizaje.",
      category: "Psicología",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      date: "14 Oct 2025",
      readTime: "12 min"
    },
    {
      id: 4,
      title: "Inteligencia Artificial y el Futuro de la Educación",
      excerpt: "Cómo la IA está transformando la forma en que aprendemos y nos desarrollamos profesionalmente.",
      category: "Tecnología",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      date: "12 Oct 2025",
      readTime: "7 min"
    },
    {
      id: 5,
      title: "Mindfulness y Concentración Profunda",
      excerpt: "Técnicas de atención plena para alcanzar estados de flow y maximizar tu productividad creativa.",
      category: "Mindfulness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
      date: "10 Oct 2025",
      readTime: "9 min"
    },
    {
      id: 6,
      title: "Liderazgo Transformacional y Autogestión",
      excerpt: "Desarrolla habilidades de liderazgo comenzando por liderar tu propia vida con propósito.",
      category: "Liderazgo",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      date: "8 Oct 2025",
      readTime: "11 min"
    }
  ];

  return (
    <section id="articulos" className="py-20 px-4 bg-gradient-to-b from-white to-[var(--background-alt)]" data-name="blog-section" data-file="app.js">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Explora el Conocimiento</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Artículos profundos que desafían tu pensamiento y expanden tu perspectiva
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);