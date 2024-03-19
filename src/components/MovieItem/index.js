// Write your code here

import Popup from 'reactjs-popup'

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  const {thumbnailUrl, videoUrl} = movieItem
  return (
    <div className="slider-container">
      <Popup
        model
        trigger={
          <button type="button" className="thumb-button">
            <img
              className="movie-thumb-img"
              src={thumbnailUrl}
              alt="thumbnail"
            />
          </button>
        }
      >
        {close => {
          return (
            <>
              <div>
                <p className="popup-description">Jai</p>
              </div>
              <button type="button" onClick={() => close()}>
                Button
              </button>
            </>
          )
        }}
      </Popup>
    </div>
  )
}

export default MovieItem
