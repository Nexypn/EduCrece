function Hero() {
  try {
    return (
      <section id="inicio" className="relative bg-gradient-to-br from-[var(--primary-color)] via-[var(--background-dark)] to-black text-white py-32 px-4 overflow-hidden" data-name="hero" data-file="components/Hero.js">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[var(--secondary-color)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white bg-opacity-10 rounded-full mb-6 backdrop-blur-sm">
                <span className="text-sm font-semibold">Educación Profunda y Transformadora</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Expande Tu <span className="gradient-text">Consciencia</span> y Potencial
              </h1>
              <p className="text-xl mb-10 text-gray-300 leading-relaxed">
                Explora ideas profundas que desafían el pensamiento convencional. Accede a conocimiento interdisciplinario que integra neurociencia, filosofía, psicología y tecnología.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="btn-secondary">
                  Explorar Artículos
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300">
                  Sobre Este Proyecto
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" 
                  alt="Desarrollo personal y crecimiento" 
                  className="rounded-3xl shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-3xl opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}