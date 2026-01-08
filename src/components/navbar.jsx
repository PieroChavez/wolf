'use client'

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from './../assets/logo/logowolf.jpeg'

const navigation = {
  categories: [
    {
      id: 'mercados',
      name: 'Mercados',
      featured: [
        {
          name: 'Forex',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=400&fit=crop',
          imageAlt: 'Trading en divisas - Forex',
        },
        {
          name: 'Criptomonedas',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1621761191319-c6fb62b26efb?w=400&h=400&fit=crop',
          imageAlt: 'Trading en criptomonedas',
        },
      ],
      sections: [
        {
          id: 'divisas',
          name: 'Divisas',
          items: [
            { name: 'EUR/USD', href: '#' },
            { name: 'GBP/USD', href: '#' },
            { name: 'USD/JPY', href: '#' },
            { name: 'AUD/USD', href: '#' },
            { name: 'Todos los pares', href: '#' },
          ],
        },
        {
          id: 'cripto',
          name: 'Criptomonedas',
          items: [
            { name: 'Bitcoin', href: '#' },
            { name: 'Ethereum', href: '#' },
            { name: 'Litecoin', href: '#' },
            { name: 'Ripple', href: '#' },
            { name: 'Ver más', href: '#' },
          ],
        },
        {
          id: 'indices',
          name: 'Índices',
          items: [
            { name: 'S&P 500', href: '#' },
            { name: 'NASDAQ', href: '#' },
            { name: 'DAX', href: '#' },
            { name: 'FTSE 100', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'herramientas',
      name: 'Herramientas',
      featured: [
        {
          name: 'Análisis Técnico',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=400&fit=crop',
          imageAlt: 'Herramientas de análisis técnico',
        },
        {
          name: 'Señales de Trading',
          href: '#',
          imageSrc: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=400&h=400&fit=crop',
          imageAlt: 'Señales de trading en tiempo real',
        },
      ],
      sections: [
        {
          id: 'analisis',
          name: 'Análisis',
          items: [
            { name: 'Gráficos Avanzados', href: '#' },
            { name: 'Indicadores Técnicos', href: '#' },
            { name: 'Patrones de Velas', href: '#' },
            { name: 'Niveles de Soporte', href: '#' },
            { name: 'Explorar más', href: '#' },
          ],
        },
        {
          id: 'automatizacion',
          name: 'Automatización',
          items: [
            { name: 'Bots de Trading', href: '#' },
            { name: 'Estrategias Automáticas', href: '#' },
            { name: 'Backtesting', href: '#' },
            { name: 'Órdenes Condicionales', href: '#' },
          ],
        },
        {
          id: 'educacion',
          name: 'Educación',
          items: [
            { name: 'Tutoriales', href: '#' },
            { name: 'Webinarios', href: '#' },
            { name: 'Guías de Trading', href: '#' },
            { name: 'Glosario', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Sobre nosotros', href: '#' },
    { name: 'Contacto', href: '#' },
  ],
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-b-2 data-selected:text-gray-900"
                      style={{ '--color-selected': 'rgb(237, 183, 15)' }}
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Explorar
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Iniciar sesión
                </a>
              </div>
              <div className="flow-root">
                <a href="#" className="-m-2 block p-2 font-medium text-gray-900">
                  Crear cuenta
                </a>
              </div>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-white px-4 text-sm font-medium text-gray-900 sm:px-6 lg:px-8" style={{backgroundColor: 'rgb(237, 183, 15)'}}>
          Comienza a operar hoy - Acceso a múltiples mercados financieros
        </p>

        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Abrir menú</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Wolf Trading</span>
                  <img
                    alt="Wolf Trading Logo"
                    src={logo}
                    className="h-8 w-auto"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="group relative flex items-center justify-center text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:text-gray-900" style={{color: 'rgb(237, 183, 15)'}}>
                          {category.name}
                          <span
                            aria-hidden="true"
                            className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-open:bg-yellow-500"
                            style={{backgroundColor: 'rgb(237, 183, 15)'}}
                          />
                        </PopoverButton>
                      </div>
                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <a href={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Explorar
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <a href={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}
                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Iniciar sesión
                  </a>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Crear cuenta
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Buscar</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cartera */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">Activos en cartera</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
