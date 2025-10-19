function Footer() {
  try {
    return (
      <footer className="bg-gray-900 text-gray-300 py-12 px-4" data-name="footer" data-file="components/Footer.js">
        <div className="max-w-7xl mx-auto">
          {/* agregado: sección "Sobre Mí" objetivo del ancla */}
          <div id="sobre-mi" className="mb-8">
            <h3 className="text-white text-2xl font-semibold mb-2">Sobre Mí</h3>
            <p className="text-sm text-gray-400 max-w-2xl">
              Soy el autor de EduCrece: comparto investigaciones, reflexiones y recursos para el crecimiento personal y educativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                  <div className="icon-graduation-cap text-xl text-white"></div>
                </div>
                <span className="text-2xl font-bold text-white">EduCrece</span>
              </div>
              <p className="text-sm">Transformando vidas a través de la educación y el desarrollo personal.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#articulos" className="hover:text-white transition-colors">Artículos</a></li>
                <li><a href="#categorias" className="hover:text-white transition-colors">Categorías</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Guías</a></li>
                <li><a href="#" className="hover:text-white transition-colors">E-books</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cursos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-facebook text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-twitter text-lg"></div>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[var(--primary-color)] transition-colors">
                  <div className="icon-instagram text-lg"></div>
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 EduCrece. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}