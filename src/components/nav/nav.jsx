
export function NavigationMenu() {
  return (
    <div className="italianno bg-white">
      <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center lg:justify-center">
          <ul className="flex items-center hidden space-x-24 lg:flex">
            <li><a href="home.html" className="font-medium tracking-widest text-6xl text-black transition-colors 
            duration-200 hover:font-bold">Inicio</a>
            </li>
            <li><a href="portfolio.html" className="font-medium tracking-wide text-6xl text-black transition-colors duration-200 
              hover:text-teal-accent-400 hover:font-bold">Portfolio</a>
            </li>
          </ul>
          <a href="home.html" className="object-center inline-flex items-center mx-auto">
            <img src="./assets/images/LOGO.png" className="w-40 mx-auto" />
          </a>
          <ul className="flex items-center hidden space-x-24 lg:flex">
            <li><a href="cita.html" className="font-medium tracking-wide text-6xl text-black transition-colors duration-200 
              hover:text-teal-accent-400 hover:font-bold">Pide cita</a></li>
            <li><a href="tienda.html" className="font-medium tracking-wide text-6xl text-black transition-colors duration-200 
              hover:text-teal-accent-400 hover:font-bold">Tienda</a>
            </li>
          </ul>
          <div className="lg:hidden">
            <button id="open-menu" aria-label="Open Menu" title="Open Menu"
              className="open p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline">
              <svg className="hamburguesa w-6 text-black lg:hidden" viewBox="0 0 24 24">
                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z">
                </path>
                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z">
                </path>
              </svg>
            </button>

            <div id="menu" className="absolute top-0 left-0 w-full hidden z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <button id="close-menu" aria-label="Close Menu" title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <svg className="w-5 text-black" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="flex flex-col items-center justify-center space-y-6">
                    <li><a href="home.html"
                      className="font-medium text-4xl tracking-wide text-black transition-colors duration-200 ease-in hover:font-bold">Inicio</a>
                    </li>
                    <li><a href="portfolio.html"
                      className="font-medium text-4xl tracking-wide text-black transition-colors duration-200 ease-in hover:font-bold">Portfolio</a>
                    </li>
                    <li><a href="cita.html"
                      className="font-medium text-4xl tracking-wide text-black transition-colors duration-200 ease-in hover:font-bold">Pide
                      Cita</a>
                    </li>
                    <li><a href="tienda.html"
                      className="font-medium text-4xl tracking-wide text-black transition-colors duration-200 ease-in hover:font-bold">Tienda</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


