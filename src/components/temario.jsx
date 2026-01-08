import { CheckCircleIcon, AcademicCapIcon } from '@heroicons/react/24/solid'

export default function Temario() {
  const temas = [
    {
      numero: 'BIENVENIDA',
      titulo: 'Presentación del Profesor',
      descripcion: 'Introducción al curso y metodología de enseñanza',
      icon: '👋'
    },
    {
      numero: '1',
      titulo: 'Principios de Equilibrio',
      descripcion: 'Fundamentos básicos del análisis de equilibrio en mercados',
      icon: '⚖️'
    },
    {
      numero: '2',
      titulo: 'Subfractales y Fractales',
      descripcion: 'Entendiendo la estructura fractal de los mercados financieros',
      icon: '🔄'
    },
    {
      numero: '3',
      titulo: 'ORDERFLOW',
      descripcion: 'Análisis del flujo de órdenes en tiempo real',
      icon: '📊'
    },
    {
      numero: '4',
      titulo: 'Zonas Sensibles de Acción del Precio',
      descripcion: 'Identificación de niveles críticos en el mercado',
      icon: '🎯'
    },
    {
      numero: '5',
      titulo: 'Order Block',
      descripcion: 'Técnica avanzada de identificación de bloques de órdenes',
      icon: '📦'
    },
    {
      numero: '6',
      titulo: 'Bloque Tradicional',
      descripcion: 'Análisis de bloques de precio tradicionales',
      icon: '📐'
    },
    {
      numero: '7',
      titulo: 'Breaker - Breaker Order',
      descripcion: 'Estrategias de rotura de niveles clave',
      icon: '💥'
    },
    {
      numero: '8',
      titulo: 'Vacíos de Liquidez',
      descripcion: 'Identificar y operar con gaps de liquidez',
      icon: '🌊'
    },
    {
      numero: '9',
      titulo: 'IMB - INFC',
      descripcion: 'Análisis de desequilibrios y cambios internos de precio',
      icon: '⚡'
    },
    {
      numero: '10',
      titulo: 'Precios Establecidos',
      descripcion: 'Niveles de precio que actúan como soporte/resistencia',
      icon: '📍'
    },
    {
      numero: '11',
      titulo: 'Interacción de Precio',
      descripcion: 'Cómo el precio interactúa con zonas sensibles',
      icon: '🔀'
    },
    {
      numero: '12',
      titulo: 'Acción del Precio - Módulo Básico',
      descripcion: 'Conceptos fundamentales de price action',
      icon: '📈'
    },
    {
      numero: '13',
      titulo: 'Acción del Precio - Módulo 2',
      descripcion: 'Patrones intermedios de price action',
      icon: '📊'
    },
    {
      numero: '14',
      titulo: 'Acción del Precio - Módulo 3',
      descripcion: 'Price action avanzado y confirmaciones',
      icon: '🎓'
    },
    {
      numero: '15',
      titulo: 'Limit Price + Acción del Precio - Módulo Actualizado',
      descripcion: 'Técnicas actualizadas de límite de precio y acción',
      icon: '🚀'
    },
    {
      numero: '16',
      titulo: 'Lectura de Liquidez - Básico - Intermedio',
      descripcion: 'Domina la lectura de liquidez en diferentes niveles',
      icon: '💧'
    },
    {
      numero: '17',
      titulo: 'Intervalos',
      descripcion: 'Análisis y trading de rangos y intervalos',
      icon: '📏'
    },
    {
      numero: '18',
      titulo: 'Captura del Precio',
      descripcion: 'Estrategias finales de captura de movimientos de precio',
      icon: '🎣'
    }
  ]

  const beneficios = [
    {
      titulo: '160+ Horas de Contenido',
      descripcion: 'Formación completa y detallada en trading profesional',
      icon: '⏱️'
    },
    {
      titulo: 'Estrategias Probadas',
      descripcion: 'Metodologías testadas en mercados reales',
      icon: '✅'
    },
    {
      titulo: 'Análisis de Liquidez',
      descripcion: 'Aprende a leer y analizar el flujo de liquidez',
      icon: '📊'
    },
    {
      titulo: 'Price Action Avanzado',
      descripcion: 'Domina la acción del precio sin indicadores',
      icon: '📈'
    },
    {
      titulo: 'Zonas Sensibles',
      descripcion: 'Identifica niveles críticos en cualquier mercado',
      icon: '🎯'
    },
    {
      titulo: 'Acceso de Por Vida',
      descripcion: 'Acceso permanente a todo el contenido del curso',
      icon: '🔐'
    },
    {
      titulo: 'Soporte Continuo',
      descripcion: 'Ayuda y mentoría durante todo tu aprendizaje',
      icon: '🤝'
    },
    {
      titulo: 'Certificación',
      descripcion: 'Obtén tu certificado de Master Trader',
      icon: '🏆'
    }
  ]

  return (
    <div className="bg-white py-16 sm:py-24">
      {/* Sección: Qué aprenderás */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            ¿Qué aprenderás en este curso?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un programa completo diseñado para transformarte en un trader profesional. Desde los conceptos fundamentales hasta las estrategias más avanzadas del mercado.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beneficios.map((beneficio, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{beneficio.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {beneficio.titulo}
              </h3>
              <p className="text-gray-600 text-sm">
                {beneficio.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Sección: Temario completo */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span
                className="px-4 py-2 rounded-full text-sm font-semibold text-gray-900"
                style={{ backgroundColor: 'rgb(237, 183, 15)' }}
              >
                TEMARIO COMPLETO
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              18 Temas Clave del Curso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada módulo está diseñado para construir tu conocimiento paso a paso, desde lo básico hasta estrategias profesionales.
            </p>
          </div>

          {/* Lista de temas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {temas.map((tema, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border-l-4 hover:shadow-lg transition duration-300"
                style={{ borderLeftColor: 'rgb(237, 183, 15)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl flex-shrink-0">
                    {tema.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-sm font-bold px-2 py-1 rounded"
                        style={{ backgroundColor: 'rgb(237, 183, 15)', color: '#1f2937' }}
                      >
                        TEMA {tema.numero}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {tema.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {tema.descripcion}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="mt-16 text-center">
            <button
              className="px-8 py-4 rounded-lg font-bold text-lg text-gray-900 transition duration-300 hover:shadow-lg hover:scale-105"
              style={{ backgroundColor: 'rgb(237, 183, 15)' }}
            >
              Acceder al Curso Completo Ahora
            </button>
            <p className="mt-4 text-gray-600">
              + 160 horas de formación | Acceso de por vida | Certificación incluida
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}