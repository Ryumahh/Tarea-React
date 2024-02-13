import './Home.css'
import { useEffect, useState } from "react";
import { getMoviesBy } from '../../services/films';
import { Carousel } from 'flowbite-react';
import { Link } from "react-router-dom";

function Home() {

  const [films, setFilms] = useState([]);

  useEffect(() => {
    getMoviesBy('a')
      .then(data => {
        return data.json();
      })
      .then(post => {
        const { description = [] } = post;
        setFilms(description.slice(0, 8))

      }).catch(error => {
        console.log("Ocurrio un error al hacer fetch")
        console.log(error)
      })
  }, []);


  return (
    <>
      <section
        className="w-full h-full mb-6 py-12 md:py-24 lg:py-32 xl:py-48"
        style={{
          backgroundImage: "url('https://archello.s3.eu-central-1.amazonaws.com/images/2013/01/24/23-Multikino-Zote-Tarasy-by-Olo-Studioj.1506664133.2104.pg')",
          backgroundSize: "cover",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl text-white-500 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Bienvenido a Film<span className='text-yellow-500'>Hub</span>
              </h1>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-yellow-600/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                to="/films"
              >
                Encuentra tu película favorita
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section>
      <h1 className='text-gray-200 font-extrabold text-4xl mb-7'>Películas Populares</h1>
        <div className="h-96 h- mb-2 mt-6 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={2000} className='mb-3 mt-3'>
            {films?.map((film, key) =>
              <img key={key} title={film['#AKA']} alt={film['#AKA']} src={film['#IMG_POSTER']}
                className='w-full h-full object-contain cursor-pointer' />

            )}
          </Carousel>
        </div>
      </section>

    </>
  )
}

export default Home
