function Hero() {
  return (
    <section id="home" className="min-h-screen text-white flex items-center justify-center relative overflow-hidden">

      {/* Content */}

      <div className="text-center z-10 px-6">

        <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8">
          <span className="bg-gradient-to-r from-green-400 via-purple-400 to-fuchsia-500 text-transparent bg-clip-text">
            BUILDING
          </span>

          <br />

          <span className="text-white">
            DIGITAL
          </span>

          <br />

          <span className="text-green-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">
            EXPERIENCES
          </span>
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Desarrollo aplicaciones modernas, interfaces futuristas
          y experiencias digitales enfocadas en rendimiento,
          diseño y tecnología.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">

          <button className="px-8 py-4 rounded-2xl bg-green-500 hover:bg-green-400 transition font-bold text-lg shadow-[0_0_25px_rgba(34,197,94,0.5)]">
            Ver Proyectos
          </button>

          <button className="px-8 py-4 rounded-2xl border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition font-bold text-lg">
            Contactarme
          </button>

        </div>

      </div>
    </section>
  )
}

export default Hero
