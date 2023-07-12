import React from 'react'
import Logo from '../../public/blocship-logo.svg'
import BlocshipIcon from '../../public/blocship-icon.svg'
import Image from 'next/image'

const NAVIGATION = {
  links: [
    { name: 'Home', href: '#' },
    { name: 'Solutions', href: '#' },
    { name: 'Our Work', href: '#' },
    { name: 'About', href: '#' },
  ],
  business: [
    { name: 'Contact Us', href: '#' },
  ],
  social: [
    {
      name: 'Twitter',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Slack',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 60 60" {...props}>
          <path d="M22,12 a6,6 0 1 1 6,-6 v6z M22,16 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12" fill="currentColor"/>
          <path d="M48,22 a6,6 0 1 1 6,6 h-6z M32,6 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z" fill="currentColor"/>
          <path d="M38,48 a6,6 0 1 1 -6,6 v-6z M54,32 a6,6 0 0 1 0,12 h-16 a6,6 0 1 1 0,-12" fill="currentColor"/>
          <path d="M12,38 a6,6 0 1 1 -6,-6 h6z M16,38 a6,6 0 1 1 12,0v16a6,6 0 0 1 -12,0z" fill="currentColor"/>
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#F8FAFF]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-6 md:px-10 max-w-[1212px] mx-auto pb-8 pt-[72px] md:pt-[100px] lg:pt-[150px]">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <div className="space-y-8 flex flex-col justify-between md:h-5/6">
            <Image
              className="block w-[150px] md:w-[115px] lg:w-[170px] h-auto"
              src={Logo}
              alt="Blockship"
            />
            <p className="text-base leading-6 text-[#1F1F1F]/50 md:hidden">
              Transform your ideas into reality with our cutting-edge web and mobile solutions. Partner with us and experience seamless digital transformation like never before.
            </p>
            <div className="hidden md:flex space-x-6">
              {NAVIGATION.social.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 md:col-span-2 md:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-[100px]">
              <div>
                <h3 className="text-lg md:text-sm lg:text-base font-semibold leading-6 text-gray-900">Blocship Links</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {NAVIGATION.links.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base md:text-xs lg:text-sm leading-6 text-[#8A8F98] hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-14 md:mt-0">
                <h3 className="text-lg md:text-sm lg:text-base font-semibold leading-6 text-gray-900">Business</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {NAVIGATION.business.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base md:text-xs lg:text-sm leading-6 text-[#8A8F98] hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 md:mt-[52px] lg:mt-[70px] flex flex-col gap-8 items-center md:flex-row justify-between text-xs leading-none text-[#8B8B8B]">
          <div className='flex items-center gap-1'>
            <Image
              className="inline"
              src={BlocshipIcon}
              alt="Blockship"
            />
            <p>
              &copy; Copyright 2023 Blocship.io All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6 md:hidden">
            {NAVIGATION.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p>
           <strong>UX</strong> Design & Crafted with ❤️ by <a href="#" className='underline'>Uxership</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

