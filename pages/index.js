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
  const [showVideo, SetShowVideo ] = useState({})

  useEffect(() => {
    let imagesArray = []

    const item = {
      thumbnail: `${PREFIX_URL}casa-new-101.jpg`,
      original: `${PREFIX_URL}casa-new-101.jpg`,
      embedUrl:
        'https://www.youtube.com/embed/CccLzeRwSEI?autoplay=1&showinfo=0',
      renderItem: _renderVideo.bind(this)
    }
    imagesArray.push(item)    

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
  
  function _renderVideo(item) {
    return (
      <div>
        {
          showVideo[item.embedUrl] ?
            <div className='video-wrapper'>
                <a
                  className='close-video'
                  onClick={this._toggleShowVideo.bind(this, item.embedUrl)}
                >
                </a>
                <iframe
                  width='560'
                  height='315'
                  src={item.embedUrl}
                  frameBorder='0'
                  allowFullScreen
                >
                </iframe>
            </div>
          :
            <a onClick={_toggleShowVideo.bind(this, item.embedUrl)}>
              <div className='play-button'></div>
              <img className='image-gallery-image' src={item.original} />
              {
                item.description &&
                  <span
                    className='image-gallery-description'
                    style={{right: '0', left: 'initial'}}
                  >
                    {item.description}
                  </span>
              }
            </a>
        }
      </div>
    );
  }

  
  function _toggleShowVideo(url) {
    SetShowVideo[url] = !Boolean(showVideo[url]);
    // this.setState({
    //   showVideo: showVideo
    // });

    // if (showVideo[url]) {
    //   if (this.state.showPlayButton) {
    //     this.setState({showGalleryPlayButton: false});
    //   }

    //   if (this.state.showFullscreenButton) {
    //     this.setState({showGalleryFullscreenButton: false});
    //   }
    // }
  }

  return (
    <section className='app'>
      <ImageGallery
        showFullscreenButton= {true}
        showGalleryFullscreenButton= {true}
        showPlayButton= {true}
        showGalleryPlayButton= {true}
        items={images} 
      />
    </section>
  );
}

export default App;