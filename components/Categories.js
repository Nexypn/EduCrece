function Categories() {
  try {
    const categories = [
      { name: "Neurociencia", icon: "brain", gradient: "from-purple-500 to-pink-500", count: "24 artículos" },
      { name: "Filosofía", icon: "book-open", gradient: "from-blue-500 to-cyan-500", count: "18 artículos" },
      { name: "Psicología", icon: "heart", gradient: "from-red-500 to-orange-500", count: "31 artículos" },
      { name: "Tecnología", icon: "cpu", gradient: "from-green-500 to-teal-500", count: "22 artículos" },
      { name: "Mindfulness", icon: "sparkles", gradient: "from-indigo-500 to-purple-500", count: "16 artículos" },
      { name: "Liderazgo", icon: "users", gradient: "from-yellow-500 to-orange-500", count: "19 artículos" },
      { name: "Creatividad", icon: "lightbulb", gradient: "from-pink-500 to-rose-500", count: "27 artículos" },
      { name: "Ciencia", icon: "microscope", gradient: "from-cyan-500 to-blue-500", count: "14 artículos" }
    ];

    return (
      <section id="categorias" className="py-20 px-4 bg-[var(--background-dark)]" data-name="categories" data-file="components/Categories.js">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Áreas de Conocimiento</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explora contenido interdisciplinario que conecta diferentes campos del saber
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div 
                key={index}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-10 transition-all duration-300 cursor-pointer border border-white border-opacity-10 hover:border-opacity-30"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${cat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  <div className={`icon-${cat.icon} text-2xl text-white`}></div>
                </div>
                <h3 className="font-bold text-white text-lg mb-2 text-center">{cat.name}</h3>
                <p className="text-sm text-gray-400 text-center">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Categories component error:', error);
    return null;
  }
}