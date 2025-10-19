function Header() {
  try {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
      <header className="bg-[var(--primary-color)] backdrop-blur-lg bg-opacity-95 shadow-2xl sticky top-0 z-50" data-name="header" data-file="components/Header.js">
        <nav className="max-w-7xl mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              
              <span className="text-2xl font-bold text-white">EduCrece</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-300 hover:text-white transition-colors font-medium">Inicio</a>
              <a href="#articulos" className="text-gray-300 hover:text-white transition-colors font-medium">Artículos</a>
              <a href="#categorias" className="text-gray-300 hover:text-white transition-colors font-medium">Categorías</a>
              <a href="#sobre-mi" className="text-gray-300 hover:text-white transition-colors font-medium">Sobre Mí</a>
              <button className="px-6 py-2 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] text-white rounded-full font-semibold hover:shadow-lg transition-all">
                Suscribirse
              </button>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className={`icon-${isMenuOpen ? 'x' : 'menu'} text-2xl text-white`}></div>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <a href="#inicio" className="block text-gray-300 hover:text-white">Inicio</a>
              <a href="#articulos" className="block text-gray-300 hover:text-white">Artículos</a>
              <a href="#categorias" className="block text-gray-300 hover:text-white">Categorías</a>
              <a href="#sobre-mi" className="block text-gray-300 hover:text-white">Sobre Mí</a>
            </div>
          )}
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}