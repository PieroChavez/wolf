import portadaImg from '../assets/portada/ptdauno.jpg'

export default function Portada() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo con overlay */}
      <div className="absolute inset-0">
        <img
          src={portadaImg}
          alt="Curso Trading Master"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="max-w-2xl text-center">
          {/* Badge Lo más vendido */}
          

          {/* Título Principal */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            EL CURSO DE TRADING MÁS COMPLETO QUE EXISTE
          </h1>

          {/* Descripción */}
          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Curso de trading <span style={{ color: 'rgb(237, 183, 15)' }} className="font-semibold">Master Trader</span> con más de <span className="font-bold">160 horas</span> de formación. No verás un curso así de potente
          </p>

          {/* Info del curso */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10 text-gray-200">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'rgb(237, 183, 15)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Creado por Wolf Trading</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'rgb(237, 183, 15)' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2a1 1 0 001 1h1v2H3a1 1 0 00-1 1v2a2 2 0 002 2h1v1a1 1 0 001 1h2a1 1 0 001-1v-1h2v1a1 1 0 001 1h2a1 1 0 001-1v-1h1a2 2 0 002-2v-2a1 1 0 00-1-1h-1v-2h1a1 1 0 001-1V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm2 5a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
              <span>Última actualización: 9/2025</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" style={{ color: 'rgb(237, 183, 15)' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
                <path fillRule="evenodd" d="M1 4a1 1 0 011-1h16a1 1 0 011 1v14a1 1 0 01-1 1H2a1 1 0 01-1-1V4zm5 4a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              <span>100% en Español</span>
            </div>
          </div>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="px-8 py-4 rounded-lg font-bold text-lg text-gray-900 transition duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: 'rgb(237, 183, 15)' }}
            >
              Acceder al Curso Ahora
            </button>
            <button className="px-8 py-4 rounded-lg font-bold text-lg text-white border-2 border-white transition duration-300 hover:bg-white hover:text-gray-900">
              Ver más información
            </button>
          </div>

          {/* Características rápidas */}
          <div className="mt-12 pt-8 border-t border-gray-500/50">
            <p className="text-gray-300 text-sm mb-4">Lo que incluye este curso:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-100">
                ✓ 160+ horas de contenido
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-100">
                ✓ Estrategias probadas
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-100">
                ✓ Soporte 24/7
              </span>
              <span className="px-3 py-1 rounded-full text-sm bg-white/10 text-gray-100">
                ✓ Acceso de por vida
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}