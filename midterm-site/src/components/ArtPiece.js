const ArtPiece = (props) => {
  const { title = 'Untitled', artist = 'Unknown artist', imageUrl } = props
  if (!imageUrl) return null
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{artist}</p>
      </div>
    </div>
  )
}
export default ArtPiece