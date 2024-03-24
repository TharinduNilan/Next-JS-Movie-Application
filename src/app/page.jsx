import Movie from '@/components/Movie.json'
import Card from '@/components/Card'

export default function Home() {
  
  return (
    // <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-3 max-w-6xl mx-auto py-4'>
    //   {Movie.map((movie, index) => (
    //     <div key={index}>
    //       <h2>{movie.name}</h2>
    //     </div>
    //   ))}
    // </div>
    <div>
      <Card />
    </div>
  );
}
