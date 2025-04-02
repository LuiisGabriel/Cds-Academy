import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/LOGO.png'
import { APP_ROUTES } from '../utils/constants';
import { useUser } from '../lib/customHooks';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultProfilePhoto from '../assets/profile.png';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function VisitNavbar() {
  const navigation = [
    { name: 'Sobre', href: APP_ROUTES.ABOUT },
    { name: 'Sobre', href: APP_ROUTES.ABOUT },
    { name: 'Sobre', href: APP_ROUTES.ABOUT },
    
  ];
  const navigate = useNavigate();

  return (
    <Disclosure as="nav">
      <div className=" px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16  items-center justify-between ">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center w-full">
            <div className="flex shrink-0 items-center">
              <a>
                <img
                  alt="CDS Sistemas"
                  src={Logo}
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <div className="hidden sm:ml-6 sm:block px-50">
              <div className="flex items-center space-x-4 ">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className= 'text-white hover:scale-105 hover:text-white rounded-md px-3 py-2 text-md font-medium'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 ">
              <div id="firstName" className='flex text-white mr-3 items-center'>
                asdasdas
              </div>
          </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
