import React from "react";
import { useRouter } from 'next/router'

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import projs from '../services/api.fake.json'

const PREFIX_URL = '/projetos_destaques/'
const codeHouses = projs.casas
let images = []

export default class App extends React.Component {

  constructor() {
    super();
    this.state = { 
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
    };

    // Create array images
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
  }

  _onImageClick() {
    useRouter().push('/page')
    // alert('Hi')
  }

  render() {
    return (
      <section className='app'>
        <ImageGallery
          items={images} 
          onClick={this._onImageClick}
        />
      </section>
    );
  }
}
