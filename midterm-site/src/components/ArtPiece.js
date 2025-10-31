import { useEffect, useState } from 'react'

const ArtPiece = (props) => {
  const { title = 'Untitled', artist = 'Unknown artist', imageUrl } = props

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // trigger the fade/slide-in on mount (slight delay so transition is visible)
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

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
    <div className={`overflow-hidden object-fill h-max-3/4 rounded-md transform-gpu transition-opacity transition-transform duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      <img src={imageUrl} alt={title} className="object-cover w-full h-full cursor-pointer" onClick={handleClick} />
    </div>
  )
}
export default ArtPiece