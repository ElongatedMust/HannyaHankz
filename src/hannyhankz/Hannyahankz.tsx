  import React from "react";
  import "./Hannyahankz.scss";
  import Navbar from "../Navbar/Navbar.tsx";
  import whiteFlower from "../images/whiteFlower.png";
  import gaicha from "../images/gaicha.png";
  import snapSeed from "../images/Snapseed.jpg";
  import AutoCarousel from "../component/Carousel/Carousel.tsx";
  import { Element } from "react-scroll";
  const Hannyahankz = () => {
    return (
      <div className="container">
        <div className="header">
          <Navbar />
          <AutoCarousel
            items={[
              <img src={gaicha} alt="gaicha" className="imgLander" />,
              <img src={snapSeed} alt="snapSeed" className="imgLander" />,
              <img src={whiteFlower} alt="whiteFlower" className="imgLander" />,
            ]}
            interval={10000}
          />
        </div>

        <Element name="aboutMe">
          <div className="aboutMe">
            <div className="txtAndImg">
              <p className="aboutMeHeader">About me :</p>
              <p className="aboutMeText">
                Just me, a simple sewing machine, the beginning of a journey. Over
                a decade ago, while digging through my grandmother's sewing
                supplies as she taught me how to quilt, I was inspired to make
                something that would complement my every day carry. The vintage
                fabrics, cut into squares to prepare for quilting were the
                inspiration for our exclusive, small-batch Hannyahankz
                collections. Each hank is meticulously crafted by hand with
                microfibre on one side, and patterned fabric on the other,
                resulting in a timeless, durable, and unique piece to use and
                cherish for years to come. All hanks are cut by me, sewn by me,
                and shipped by me. With the help of my late grandmother and years
                of practice, Hannyahankz are something you can be proud to pair
                with your every day carry.
              </p>
            </div>
            <img src={gaicha} alt="" className="gaichaImg" />
          </div>
        </Element>  
        <div className="gallerySection">
          <div className="galleryHeader">
            <p>Gallery</p>
            
          </div>
        </div>
      </div>
    );
  };

  export default Hannyahankz;
