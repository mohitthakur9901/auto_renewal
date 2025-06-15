'use client'

import React, { useState } from 'react'
import { PATH_BASE } from '@/routes/index'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { useIsMobile } from '@/hooks/use-mobile'
import { AlignJustify, X } from 'lucide-react'

function AppBar() {
  const isMobile = useIsMobile()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { title: 'About', path: PATH_BASE.about },
    { title: 'Contact', path: PATH_BASE.contact },
    { title: 'Pricing', path: PATH_BASE.pricing },
  ]

  return (
    <header className='relative flex items-center justify-between px-6 py-4 border-b shadow-[-2px_1px_6px_0px_rgba(0,_0,_0,_0.1)]'>
      <Link href={PATH_BASE.root} className='text-lg font-bold'>
        Logo
      </Link>

      {isMobile ? (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <AlignJustify className="w-6 h-6" />}
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className='absolute top-full left-0 w-full bg-white shadow-md z-50 transition-all animate-in fade-in slide-in-from-top-1'>
              <ul className='flex flex-col items-center px-6 py-4 gap-3'>
                {routes.map((route) => (
                  <li key={route.title} className='w-full '>
                    <Link
                      href={route.path}
                      className=' w-full py-2 flex items-center justify-center text-gray-700 hover:text-black hover:bg-gray-100 rounded-md font-medium'
                      onClick={() => setIsOpen(false)}
                    >
                      {route.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <button className='w-full py-2  text-left text-gray-700 hover:text-black hover:bg-gray-100 rounded-md font-medium'>
                    Sign In
                  </button>
                </li>
              </ul>
            </div>
          )}
        </>
      ) : (
        <div className='flex items-center gap-6'>
          <ul className='flex items-center gap-6'>
            {routes.map((route) => (
              <li key={route.title}>
                <Link
                  href={route.path}
                  className='text-gray-600 hover:text-black font-medium transition'
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
          <button className='text-sm font-semibold border px-4 py-2 rounded hover:bg-gray-100'>
            Sign In
          </button>
        </div>
      )}
    </header>
  )
}

export default AppBar
