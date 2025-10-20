import React, { useState } from 'react'
//import SearchBar from './components/SearchBar'
import ArtGallery from './components/ArtGallery'
import searchImages from './api'

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    const result = await searchImages()
    setImages(result)
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-red-100 m-5 p-5 gap-4">
      <button className="px-3 py-2 bg-red-500 text-white rounded" onClick={handleSubmit}>
        Show Random Art
      </button>
      <ArtGallery artPieces={images} />
    </div>
  )
}

export default App;
