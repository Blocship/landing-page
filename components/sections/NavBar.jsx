import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '../../public/blocship-logo.svg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  
  const NAVIGATION = [
    {
      id: 0,
      title: `Home`,
      link: '#'
    },
    {
      id: 1,
      title: `Solutions`,
      link: '#'
    },
    {
      id: 2,
      title: `Our Work`,
      link: '#'
    },
    {
      id: 3,
      title: `About`,
      link: '#'
    }
  ];
  
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="-mx-5 px-5 md:px-0 md:mx-auto w-screen md:w-full max-w-[1212px] h-[72px] md:h-[100px] flex items-center">
            <div className="relative flex h-16 justify-between w-full">
              <div className="flex flex-1 items-center md:items-stretch" >
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block w-[120px] md:w-[144px] h-auto"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden md:mx-auto md:flex md:gap-[30px]">
                  {
                    NAVIGATION.map(({id, title, link}) => {
                      return <a href={link} key={id} className="inline-flex items-center text-xs font-normal" >{title}</a>;
                    })
                  }
                </div>
              </div>
              <div className="hidden md:flex items-center">
                <button className='rounded-full border border-secondary text-secondary bg-secondary/10 px-[24px] py-[13px] text-md font-medium leading-none'>
                  Contact
                </button>
              </div>
              <div className="flex items-center md:hidden">
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

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {
                NAVIGATION.map(({id, title, link}) => {
                  return (
                    <Disclosure.Button
                      key={id}
                      as="a"
                      href={link}
                      className="block py-2 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                    >
                      {title}
                    </Disclosure.Button>
                  );
                })
              }
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
