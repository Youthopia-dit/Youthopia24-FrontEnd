import React from 'react';
import './glimpse.css'; 
import H1 from '../../assets/Gallery/H1.jpg';
import H2 from '../../assets/Gallery/H2.jpg';
import H3 from '../../assets/Gallery/H3.jpg';
import H4 from '../../assets/Gallery/H4.jpg';
import H5 from '../../assets/Gallery/H5.jpg';
import H6 from '../../assets/Gallery/H6.jpg';
import H7 from '../../assets/Gallery/H7.jpg';
import H8 from '../../assets/Gallery/H8.jpg';
import H9 from '../../assets/Gallery/H9.jpg';
import H10 from '../../assets/Gallery/H10.jpg';


const imagesCarousel1 = [
  { id: 1, src: H1 },
  { id: 2, src: H2 },
  { id: 3, src: H3 },
];

const imagesCarousel2 = [
  { id: 4, src: H4 },
  { id: 5, src: H5 },
  { id: 6, src: H6 },
];

const imagesCarousel3 = [
  { id: 7, src: H7 },
  { id: 8, src: H8 },
  { id: 9, src: H9 },
  { id: 10, src: H10 },
];

function Carousel({ images, direction }) {
  return (
    <div className="carousel">
      <div className={`image-container ${direction}`}>
        {images.map(image => (
          <div className="image-card" key={image.id}>
            <img src={image.src} alt={`Event ${image.id}`} />
          </div>
        ))}
        {/* Duplicate the first few images for infinite effect */}
        {images.slice(0, 2).map(image => (
          <div className="image-card" key={image.id + 10}>
            <img src={image.src} alt={`Event ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Glimpse() {
  return (
    <div className="image-list">
      <Carousel images={imagesCarousel1} direction="left-to-right" />
      <Carousel images={imagesCarousel2} direction="right-to-left" />
      <Carousel images={imagesCarousel3} direction="left-to-right" />
    </div>
  );
}

export default Glimpse;
