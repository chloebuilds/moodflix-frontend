import React from 'react'
import axios from 'axios'

function MoviesIndex() {
  const [movies, setMovies] = React.useState([])

  React.useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get('/api/movies')
        setMovies(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMovieData()
  }, [])

  // console.log(setMovies)
  // console.log(movies.data)

  return (
    <>
      <div className="movies-container">
        {movies.map(movie => (
          <div className="individual-movies-container" key={movie._id}>
            {/* display each movie */}

            <figure >
              <img src={movie.poster} alt={movie.name} />
            </figure>
            
            <h2>{movie.title}, {movie.year}</h2>
            <div className="overflow-text">
              {movie.plot}
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default MoviesIndex
