import ArtPiece from './ArtPiece'

const ArtGallery = (props) => {
  const { artPieces = [] } = props
  const renderedArtPieces = artPieces
    .filter((p) => p && p.imageUrl)
    .map((artPiece) => (
      <ArtPiece
        key={artPiece.id}
        title={artPiece.title}
        artist={artPiece.artist}
        imageUrl={artPiece.imageUrl}
      />
    ))
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">{renderedArtPieces}</div>
}
export default ArtGallery