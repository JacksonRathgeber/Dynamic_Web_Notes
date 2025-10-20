import React, { useState } from 'react'
//import SearchBar from './components/SearchBar'
import ArtGallery from './components/ArtGallery'
import searchImages from './api'
import Button from './components/Button'
import logo from "./assets/aic_logo.png"

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async () => {
    const result = await searchImages()
    setImages(result)
  }
  return (
    <div className="flex flex-col items-center min-h-screen bg-[--aic-white] p-10 gap-4">
      <div className="flex flex-row justify-between items-top w-full">
        <img src={logo} alt="Art Logo" className="h-24 mr-4" />
        <h1 className="text-xl px-2 text-[--aic-gray]">Visit Real Site</h1>
      </div>

      <Button red onClick={handleSubmit}>
        Show Random Art
      </Button>
      <ArtGallery artPieces={images} />
    </div>
  )
}

export default App;
