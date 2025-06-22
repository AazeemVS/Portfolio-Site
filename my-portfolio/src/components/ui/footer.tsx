const Footer = () => (
  <footer className="text-gray-300 py-6 mt-12">
    {/* Divider – shorter, centered */}
    <div className="w-3/5 border-t-2 border-gray-700 mx-auto mb-6" />

    {/* Footer content */}
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-white text-sm font-semibold text-center">
        © 2025 Aazeem Vaidya Shaikh | Full-stack web & game-design developer.
      </h2>
      <div className="text-center mt-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-400 hover:text-white transition"
        >
          ↑ Back to top
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
