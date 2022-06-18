import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import {
  Link
} from "react-router-dom";

function NavAlt() {
  const [isOpen, setIsOpen] = useState(false);
    function displayImage(){
      const imgArr = ["https://media.discordapp.net/attachments/980150909487173652/985953879147569152/1.png?width=660&height=660","https://media.discordapp.net/attachments/980150909487173652/985953879374041088/2.png?width=660&height=660","https://media.discordapp.net/attachments/980150909487173652/985953879621533706/3.png?width=660&height=660","https://media.discordapp.net/attachments/980150909487173652/985953879965462628/4.png?width=660&height=660","https://cdn.discordapp.com/attachments/980150909487173652/985953880288411748/5.png","https://cdn.discordapp.com/attachments/980150909487173652/985953880556830720/6.png","https://media.discordapp.net/attachments/980150909487173652/985953880795914372/7.png?width=660&height=660","https://media.discordapp.net/attachments/980150909487173652/985953881005649950/8.png?width=660&height=660"]
        var num = Math.floor(Math.random() * (imgArr.length));
        return imgArr[num];
    }
  
  const LinkTag = window.location.pathname == "/mainPage" ? "Link" : "ScrollLink"

  return (
    <div>
      <nav className="bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
              <Link to="/">
                <img
                  className="h-8 w-8 rounded-lg"
                  src={displayImage()}
                  alt="Workflow"
                />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/mainPage">
                    <a
                      href="#"
                      className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Buy
                    </a>
                    </Link>

                    <Link to="/mainPage">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Roadmap
                  </a>
                  </Link>

                  <Link to="/mainPage">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Team
                  </a>
                </Link>

                  <Link to="/gallery">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Gallery
                  </a>
                  </Link>

                  <Link to="/provenance">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Provenance
                  </a>
                  </Link>
                  <Link to="/FAQ">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FAQ
                  </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/mainPage">
                <a
                  href="#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Buy
                </a>
                </Link>
              <Link to="/mainPage">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Roadmap
                </a>
                </Link>

                <Link to="/mainPage">
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
                </Link>
                
                <Link to="/gallery">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Gallery
                  </a>
                </Link>

                <Link to="/provenance">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Provenance
                  </a>
                </Link>
                <Link to="/FAQ">
                  <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    FAQ
                  </a>
                  </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavAlt;