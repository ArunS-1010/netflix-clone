import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../helpers/axios'
import requests from '../../helpers/requests'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )

      return request
    }

    fetchData()
  }, [])

  console.log(movie)

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="banner_overlay">
        <div className="banner_contents">
          <h1 className="banner_title">
            {movie?.title || movie.name || movie?.original_name}
          </h1>

          <div className="banner_buttons">
            <button className="banner_button"> Play </button>
            <button className="banner_button"> My List</button>
          </div>
          <h1 className="banner_description">
            {truncate(movie?.overview, 200)}
          </h1>
        </div>
      </div>

      <div className="banner_bottom_fade" />
    </header>
  )
}

export default Banner
