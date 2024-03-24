import React from 'react'
import Movie from '@/components/Movie.json'

export default function Card() {
  return (
    <div className='text-black max-w-screen-2xl-xl bg-red-200 h-screen sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 max-w-6xl mx-auto py-4'>
        {Movie.map((movie, index) => (
         <div key={index} className='m-4 max-w-xl  bg-red-900'>
           <h2>{movie.name}</h2>
         </div>
       ))}
    </div>
  )
}
