function Newsletter() {
  try {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`¡Gracias por suscribirte con ${email}!`);
      setEmail('');
    };

    return (
      <section className="py-24 px-4 bg-gradient-to-br from-[var(--primary-color)] via-[var(--background-dark)] to-black text-white relative overflow-hidden" data-name="newsletter" data-file="components/Newsletter.js">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--secondary-color)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--accent-color)] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--accent-color)] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <div className="icon-mail text-3xl text-white"></div>
          </div>
          <h2 className="text-5xl font-bold mb-6">Únete a la Revolución del Conocimiento</h2>
          <p className="text-xl mb-10 text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Recibe contenido exclusivo, investigaciones profundas y perspectivas transformadoras directamente en tu correo cada semana.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              required
              className="flex-1 px-8 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-[var(--secondary-color)] focus:ring-opacity-50 shadow-xl"
            />
            <button type="submit" className="px-10 py-4 bg-gradient-to-r from-[var(--secondary-color)] to-[var(--accent-color)] text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300">
              Suscribirse
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-6">🔒 Tu privacidad es importante. Sin spam, puedes cancelar en cualquier momento.</p>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Newsletter component error:', error);
    return null;
  }
}
