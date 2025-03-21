'use client';

import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about',
    submenu: [
      { name: 'Facilities', href: '/about/facilities' }
    ]
   },
  {
    name: 'Academics',
    href: '/academics',
    submenu: [
      { name: 'Faculty', href: '/academics/faculty' },
      { name: 'Timetable', href: '/academics/timetable' },
    ]
  },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  const pathname = usePathname()

  return (
    <Disclosure as="nav" className="bg-white shadow-lg sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <Image
                    src="/images/logo.png"
                    alt="School Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-bold text-lg text-gray-900">St.Paul's School</span>
                </Link>
              </div>
              
              <div className="hidden sm:ml-8 sm:flex sm:items-center sm:space-x-6">
                {navigation.map((item) => (
                  item.submenu ? (
                    <Menu as="div" className="relative group" key={item.name}>
                      <Link
                        href={item.href}
                        className={classNames(
                          pathname.startsWith(item.href)
                            ? 'text-primary-600'
                            : 'text-gray-700 hover:text-primary-600',
                          'inline-flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200'
                        )}
                      >
                        {item.name}
                        <ChevronDownIcon 
                          className={classNames(
                            'ml-1 h-4 w-4 transition-transform duration-200',
                            'group-hover:rotate-180'
                          )}
                        />
                      </Link>
                      <Transition
                        as={Fragment}
                        show={true}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <div className="absolute right-0 z-10 mt-0 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none invisible group-hover:visible">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={classNames(
                                pathname === subItem.href ? 'bg-gray-50 text-primary-600' : 'text-gray-700',
                                'block px-4 py-2 text-sm hover:bg-gray-50 transition-colors duration-200'
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </Transition>
                    </Menu>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600',
                        'px-3 py-2 text-sm font-medium transition-colors duration-200'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>

              <div className="flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-primary-600 transition-colors duration-200">
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
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Fragment key={item.name}>
                  <Disclosure.Button
                    as={Link}
                    href={item.href}
                    className={classNames(
                      pathname === item.href
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600',
                      'block px-4 py-2 text-base font-medium transition-colors duration-200'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                  {item.submenu && (
                    <div className="bg-gray-50">
                      {item.submenu.map((subItem) => (
                        <Disclosure.Button
                          key={subItem.name}
                          as={Link}
                          href={subItem.href}
                          className={classNames(
                            pathname === subItem.href
                              ? 'bg-primary-50 text-primary-600'
                              : 'text-gray-600 hover:bg-gray-100 hover:text-primary-600',
                            'block px-8 py-2 text-sm transition-colors duration-200'
                          )}
                        >
                          {subItem.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 