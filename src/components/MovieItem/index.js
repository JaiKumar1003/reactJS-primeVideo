// Write your code here

import './index.css'

const MovieItem = props => {
  const {movieItem} = props
  console.log(movieItem)
  const {thumbnailUrl, videoUrl} = movieItem
  return (
    <div>
      <img src={thumbnailUrl} alt="thumbnail" />
    </div>
  )
}

export default MovieItem
