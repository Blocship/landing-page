import { Disclosure } from '@headlessui/react'
import { XMarkIcon, Bars2Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Logo from '../../public/blocship-logo.svg'

function disableBodyScroll() {
  document.body.style.overflowY = 'hidden'
}

function enableBodyScroll() {
  document.body.style.overflowY = 'scroll'
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
      {({ open, close }) => (
        <>
          <div className="-mx-5 px-5 md:px-0 md:mx-auto w-screen md:w-full bg-white md:bg-transparent shadow-sm md:shadow-none max-w-[1212px] h-[72px] md:h-[100px] flex items-center">
            <div className="relative flex h-16 justify-between w-full">
              <div className="flex flex-1 items-center md:items-stretch" >
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="block w-[120px] md:w-[144px] h-auto"
                    src={Logo}
                    alt="Blockship"
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
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon onClick={() => enableBodyScroll()} className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <Bars2Icon onClick={() => disableBodyScroll()} className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-white shadow-sm px-5 -mx-5 md:hidden">
            <div className="pb-6">
              {
                NAVIGATION.map(({id, title, link}) => {
                  return (
                    <Disclosure.Button
                      key={id}
                      as="a"
                      href={link}
                      className="block py-6 text-base font-medium "
                    >
                      {title}
                    </Disclosure.Button>
                  );
                })
              }
              <button className='rounded-full w-full border border-secondary text-secondary bg-secondary/10 px-[24px] py-[13px] text-md font-medium leading-none'>
                Contact
              </button>
            </div>
          </Disclosure.Panel>
          <div onClick={() => close()} className={`${open ? 'block' : 'hidden'} left-0 absolute h-full backdrop-blur-sm w-full z-10`}></div>
        </>
      )}
    </Disclosure>
  )
}
