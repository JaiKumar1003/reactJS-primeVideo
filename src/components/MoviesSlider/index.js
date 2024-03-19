// Write your code here

import Slider from 'react-slick'

import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {moviesList.map(eachMovie => (
          <MovieItem movieItem={eachMovie} key={eachMovie.id} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
