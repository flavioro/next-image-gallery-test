import React, { useEffect, useState } from "react";

import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

import projs from '../services/api.fake.json'

const PREFIX_URL = '/projetos_destaques/'
const codeHouses = projs.casas

function App() {
  const [images, SetImages ] = useState([])
  const [showVideo, SetShowVideo ] = useState(false)

  useEffect(() => {
    let imagesArray = []

    const item = {
      thumbnail: `${PREFIX_URL}casa-new-101.jpg`,
      original: `${PREFIX_URL}casa-new-101.jpg`,
      embedUrl:
        'https://www.youtube.com/embed/CccLzeRwSEI?autoplay=0&showinfo=0',
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

  // useEffect(() => {
  //   console.log('showVideo ', showVideo)
    
  //   if (showVideo) {
  //     // _renderVideo(images[0])
  //     console.log('images ', images[0])
  //   }
    
  // }, [showVideo])  
  
  function _renderVideo(item) {
    return (
      <div>
        {
          <a onClick={_toggleShowVideo.bind(this, item.embedUrl)}>
            {/* <div className='play-button'></div> */}
            {/* <img className='image-gallery-image' src={item.original} /> */}
            <iframe id="videoYoutube"
                width='560'
                height='315'
                src={item.embedUrl}
                frameBorder='0'
                allowFullScreen
              >
              </iframe>
          </a>
        }
      </div>
    );
  }
  
  function _toggleShowVideo(url) {
    console.log(showVideo)
    SetShowVideo(true);
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

  function _resetVideo() {
    const videoYoutube = document.getElementById('videoYoutube')
    const iframeSrc = videoYoutube.src
    videoYoutube.src = iframeSrc
    console.log('_resetVideo', showVideo)

    // this.setState({showVideo: {}});
    // this.setState({isVideo: false});

    // if (this.state.showPlayButton) {
    //   this.setState({showGalleryPlayButton: true});
    // }

    // if (this.state.showFullscreenButton) {
    //   this.setState({showGalleryFullscreenButton: true});
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
        onSlide={_onSlide.bind(this)} //change slide(image)
      />
    </section>
  );

  function _onSlide(index) {


    _resetVideo();
  }
}

export default App;