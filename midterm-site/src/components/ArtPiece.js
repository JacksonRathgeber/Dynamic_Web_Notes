const ArtPiece = (props) => {
  const { title = 'Untitled', artist = 'Unknown artist', imageUrl } = props
  if (!imageUrl) return null

  // Click handler to send data back up if onClick provided
  const handleClick = () => {
      const popupData = {
        title,
        artist,
        imageUrl
    }
    return props.onClick ? props.onClick(popupData) : null;
  }

  return (
    <div className="overflow-hidden object-fill h-max-3/4">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full cursor-pointer" onClick={handleClick} />
    </div>
  )
}
export default ArtPiece