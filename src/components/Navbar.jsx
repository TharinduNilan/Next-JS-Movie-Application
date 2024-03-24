import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {
  return (
    <div className='flex dark:bg-gray-900 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
        <NavbarItems title='Trending' param='fetchTrending'/>
        <NavbarItems title='Top Rated' param='fetchTopRated'/>
    </div>
  )
}
