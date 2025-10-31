import React, { useState } from 'react'
//import SearchBar from './components/SearchBar'
import ArtGallery from './components/ArtGallery'
import searchImages from './api'
import Button from './components/Button'
import Popup from './components/InfoPopup'
import logo from "./assets/aic_logo.png"

function App() {
  const [images, setImages] = useState([])
  const [popupActive, setPopupActive] = useState(false);
  const [selectedArt, setSelectedArt] = useState(null);

  const reshuffle = async () => {
    const result = await searchImages()
    setImages(result)
  }

  const openPopup = (artPiece) => {
    setSelectedArt(artPiece);
    setPopupActive(true);
  }

  const closePopup = () => {
    setPopupActive(false);
    setSelectedArt(null);
  }

  return (
    // Main container
    <div className="flex flex-col items-center min-h-screen bg-[--aic-white] p-10 gap-4">
      {/* Header */}
      <div className="flex flex-row justify-between items-top w-full">
        <img src={logo} alt="Art Logo" className="h-24 mr-4" />
        <h1 className="text-xl px-2 text-[--aic-gray]">Jackson Rathgeber</h1>
      </div>

      {/* Button for reshuffling art */}
      <Button red onClick={reshuffle}>
        Press for Random Art
      </Button>

      <hr className="w-full h-px my-8 opacity-20 bg-[--aic-gray] border-0 dark:[--aic-gray]"></hr>

      {/* Art Gallery Display */}
      <ArtGallery artPieces={images} onItemClick={openPopup} />

      {/* Popup for selected art piece */}
      {popupActive && selectedArt && (
        <Popup title={selectedArt.title} onClose={closePopup}>
          <div className="flex flex-row justify-between h-full w-full">
            <div className='flex flex-col flex-start gap-y-5 p-5 w-1/2'>
              <h1 className="text-[--aic-black] text-4xl">{selectedArt.title}</h1>
              <p className="text-[--aic-gray] text-lg">{selectedArt.artist}</p>
            </div>
            <img src={selectedArt.imageUrl} alt={selectedArt.title} className="max-w-3/4 max-h-full overflow-hidden" />
          </div>
        </Popup>
      )}
    </div>
  )
}

export default App;
