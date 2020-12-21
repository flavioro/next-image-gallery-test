import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import projs from '../services/api.fake.json'

const PREFIX_URL = '/projetos_destaques/'
const codeHouses = projs.casas

function App() {
  const router = useRouter()
  const [images, SetImages ] = useState([])

  useEffect(() => {
    let imagesArray = []
    for (const key in codeHouses) {
      if (codeHouses.hasOwnProperty(key)) {
        const original = PREFIX_URL + codeHouses[key]
        const item = {
          original: original,
          thumbnail: original,
        }
        imagesArray.push(item) // Add array images
      }
    }
    SetImages(imagesArray)
  }, [])  
  
  const _onImageClick = () => {
    router.push('/page')
  }

  return (
    <section className='app'>
      <ImageGallery
        showFullscreenButton= {true}
        showGalleryFullscreenButton= {true}
        showPlayButton= {true}
        showGalleryPlayButton= {true}
        items={images} 
        onClick={_onImageClick}
      />
    </section>
  );
}

export default App;