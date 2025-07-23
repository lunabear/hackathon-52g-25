'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from './Navigation'

export default function HeaderLayout() {
  const pathname = usePathname()
  const isMainPage = pathname === '/'
  
  return (
    <>
      <Link 
        href="/" 
        className={`fixed ${isMainPage ? 'top-10' : 'top-6'} left-4 sm:top-12 sm:left-8 z-40 hover:opacity-100 transition-opacity duration-200`}
      >
        <Image 
          src="/assets/symbols/52g-logo.png" 
          alt="52g" 
          width={200} 
          height={100} 
          className="h-10 sm:h-14 w-auto opacity-90" 
          priority
          quality={100}
          unoptimized
        />
      </Link>
      <Navigation isMainPage={isMainPage} />
    </>
  )
}
