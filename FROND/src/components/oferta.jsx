import { CheckIcon } from '@heroicons/react/20/solid'

const gold = 'rgb(237, 183, 15)'

const tiers = [
  {
    name: 'Básico',
    id: 'tier-basico',
    href: '#',
    price: '$400',
    description: 'Plan ideal para comenzar con estrategias esenciales y soporte básico.',
    features: [
      'Acceso a 160+ horas de contenido',
      'Material descargable',
      'Soporte por correo',
      'Acceso a la comunidad',
    ],
    featured: false,
  },
  {
    name: 'Principal',
    id: 'tier-principal',
    href: '#',
    price: '$550',
    description: 'Plan principal más popular: incluye herramientas avanzadas y mentoring.',
    features: [
      'Todo lo del plan básico',
      'Sesiones grupales mensuales',
      'Acceso a señales y estrategias exclusivas',
      'Backtesting guiado',
      'Certificación al finalizar',
    ],
    featured: true,
  },
  {
    name: 'Exclusivo',
    id: 'tier-exclusivo',
    href: '#',
    price: '$800',
    description: 'Experiencia premium con atención personalizada y recursos avanzados.',
    features: [
      'Todo lo del plan principal',
      'Mentoría 1:1',
      'Planes de trading personalizados',
      'Acceso prioritario a webinars',
      'Soporte VIP 24/7',
    ],
    featured: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Ofertas() {
  return (
    <section className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-sm font-semibold" style={{ color: gold }}>
          Planes de formación
        </p>
        <h2 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900">
          Elige el plan que se adapta a tu nivel
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Planes diseñados para traders que quieren aprender desde cero hasta operar profesionalmente.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 lg:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={classNames(
              'rounded-2xl p-8 ring-1 ring-gray-200 flex flex-col justify-between',
              tier.featured ? 'bg-gray-900 text-white shadow-2xl' : 'bg-white text-gray-900'
            )}
            aria-labelledby={tier.id}
          >
            <div>
              <h3 id={tier.id} className={classNames('text-lg font-semibold')}>
                {tier.name}
              </h3>
              <p className={classNames('mt-4 text-3xl font-bold')}>
                <span className={tier.featured ? 'text-white' : 'text-gray-900'}>{tier.price}</span>
              </p>
              <p className={classNames('mt-4 text-sm', tier.featured ? 'text-gray-300' : 'text-gray-600')}>
                {tier.description}
              </p>

              <ul role="list" className={classNames('mt-8 space-y-3 text-sm', tier.featured ? 'text-gray-300' : 'text-gray-600')}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-6 flex-none" style={{ color: gold }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={tier.href}
                className={classNames(
                  'block w-full rounded-md px-4 py-2 text-center font-semibold transition',
                  tier.featured
                    ? 'bg-white text-gray-900 hover:opacity-90'
                    : `bg-[${gold}] text-gray-900 hover:opacity-90`
                )}
                style={tier.featured ? { backgroundColor: 'white', color: '#111827' } : { backgroundColor: gold, color: '#111827' }}
              >
                {tier.featured ? 'Plan Principal — Comenzar' : 'Comenzar ahora'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-4xl text-center">
        <p className="text-sm text-gray-600">
          ¿No estás seguro? Contáctanos para una asesoría y te ayudamos a elegir el plan ideal para tu nivel.
        </p>
      </div>
    </section>
  )
}
