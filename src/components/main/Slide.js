import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export default class Slide extends React.Component{
    render() {

        const images = [
          {
            original: '/images/fotos-o/01.jpg',
            thumbnail: '/images/tamb/thamb1.jpg'
          },
          {
            original: '/images/fotos-o/02.jpg',
            thumbnail: '/images/tamb/thamb2.jpg'
          },
          {
            original: '/images/fotos-o/03.jpg',
            thumbnail: '/images/tamb/thamb3.jpg'
          }
        ]
    
        return (
          <ImageGallery items={images} />
        );
      }
}