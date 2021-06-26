// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imagesThumbnailItem, onChangeDisplay} = props
  const {
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imagesThumbnailItem

  const onClickThumbnail = () => {
    onChangeDisplay(imageUrl, imageAltText)
  }

  return (
    <li className="thumbnailImg">
      <button
        type="button"
        onClick={onClickThumbnail}
        className="thumbnailButton"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
