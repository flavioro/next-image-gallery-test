import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import projs from '../services/api.fake.json'

const PREFIX_URL = '/projetos_destaques/'
const codeHouses = projs.casas

// const images = () => {
//   // Create array images
//   for (const key in codeHouses) {
//     if (codeHouses.hasOwnProperty(key)) {
//       const original = PREFIX_URL + codeHouses[key]
//       const item = {
//         original: original,
//         thumbnail: original,
//       }
//       images.push(item) // Add array images
//     }
//   }
//   return images
// }

function App() {
  const [images, SetImages ] = useState([])


  useEffect(() => {
    for (const key in codeHouses) {
      if (codeHouses.hasOwnProperty(key)) {
        const original = PREFIX_URL + codeHouses[key]
        const item = {
          original: original,
          thumbnail: original,
        }
        images.push(item) // Add array images
      }
    }
  }, [])  
  
  const _onImageClick = () => {
    useRouter().push('/page')
    // alert('Hi')
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