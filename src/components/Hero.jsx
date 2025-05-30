const Hero = () => {
  return (
    <section id="hero" className="bg-gradient-to-r from-red-500 to-yellow-500 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Pasta Burger</h2>
          <p className="text-lg mb-6">Where Italian pasta meets American burger magic.</p>
          <button className="bg-white text-red-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            View Menu
          </button>
        </div>
        <div className="md:w-1/2">
          <img src="/images/burger-pasta.jpg" alt="Pasta Burger Fusion" className="rounded shadow-lg max-w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default Hero