import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '../../public/blocship-logo.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-[1212px] px-6 md:px-10 min-h-[100px] flex items-center w-full">
            <div className="relative flex h-16 justify-between w-full">
              <div className="flex flex-1 items-center md:justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block w-[120px] md:w-[144px] h-auto"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:mx-auto sm:flex sm:gap-[30px]">
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-normal"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-normal"
                  >
                    Solutions
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-normal"
                  >
                    Our Work
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center text-xs font-normal"
                  >
                    About
                  </a>
                </div>
              </div>
              <div className="hidden sm:flex items-center">
                <button className='rounded-full border border-secondary text-secondary bg-secondary/10 px-[24px] py-[13px] text-sm font-medium leading-none'>
                  Contact
                </button>
              </div>
              <div className="flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Solutions
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Our Work
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                About
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
