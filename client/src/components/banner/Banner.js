import React from 'react';
import img1 from './img1.jpg';
import img2 from './img2.png';
import img3 from './img3.jpg';

import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
  return (
    // ------------------------
    <div>
      <Carousel swipeable>
        <div>
          <img src={img1} />
          <p className="legend">Travel World's Best Places</p>
        </div>
        <div>
          <img src={img2} />
          <p className="legend">With Low Budget</p>
        </div>
        <div>
          <img src={img3} />
          <p className="legend">Full Safety And Security</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
