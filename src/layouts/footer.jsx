import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo/logowolf.jpeg'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo y Descripción */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <img alt="Wolf Trading" src={logo} className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-6 text-gray-400">
              La plataforma de trading más avanzada para maximizar tus ganancias en los mercados financieros.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-7.593 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Mercados */}
          <div>
            <h3 className="text-base font-semibold text-white mb-6">Mercados</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Forex
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Criptomonedas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Índices
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Materias Primas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Acciones
                </a>
              </li>
            </ul>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="text-base font-semibold text-white mb-6">Herramientas</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Análisis Técnico
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Gráficos Avanzados
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Señales Trading
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Bots Automáticos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Backtesting
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-base font-semibold text-white mb-6">Contacto</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 mr-2" style={{ color: 'rgb(237, 183, 15)' }} />
                <a href="mailto:info@wolf.com" className="text-gray-400 hover:text-white transition">
                  info@wolf.com
                </a>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2" style={{ color: 'rgb(237, 183, 15)' }} />
                <a href="tel:+34912345678" className="text-gray-400 hover:text-white transition">
                  +34 91 234 56 78
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Contacta con nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Links Legales */}
            <div className="md:col-span-2">
              <ul className="flex flex-wrap gap-4 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Aviso Legal
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Política de Riesgos
                  </a>
                </li>
              </ul>
            </div>

            {/* Copyright */}
            <div className="md:text-right text-sm text-gray-400">
              <p>
                © {currentYear} Wolf Trading. <br />
                <span style={{ color: 'rgb(237, 183, 15)' }}>Todos los derechos reservados.</span>
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 px-6 py-8 rounded-lg" style={{ backgroundColor: 'rgb(237, 183, 15)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-900 mb-4 md:mb-0">
              <h3 className="text-lg font-semibold">¿Listo para comenzar tu viaje en el trading?</h3>
              <p className="text-sm text-gray-800 mt-1">Accede a herramientas profesionales y comienza a operar hoy</p>
            </div>
            <a
              href="#"
              className="px-6 py-2 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition"
            >
              Crear Cuenta Gratis
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}