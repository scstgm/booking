import "./hotel.css";

import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Hotel() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const pics = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/323448538.jpg?k=3a3c218fcd567c09de31310f2d1a4089ecc9db5b13447a94d3c1aa0bbc8c51a6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/323491090.jpg?k=1a67bbc994ae5de620d49b0cb817ebbe5b4e136b4e861e95a0f26a44b26ffb04&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/323448462.jpg?k=58d17ed04e9d1bcb729330070ca497690eceed2d66f834f44c7d45f811d3be44&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/323448469.jpg?k=b75601a04b5057c0e25a4c73fe0d56ec1978863c68a6970fb0c0fbd2b80cad0f&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/323448499.jpg?k=a55d7ecbe1ddf3046b63e35e63cb5a87198a05a1f14ff048ffec9a94924897c1&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/325866684.jpg?k=c92872e7cdc39cb1ff8c40a6ab55cb603ccd8c5043d15e39cc34cea7eb091395&o=&hp=1",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={pics[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Center Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Piața Trandafirilor, Târgu Mureș, Romania</span>
          </div>
          <span className="hotelDistance">Great location</span>
          <span className="hotelPriceHighlight">
            Book a stay over Є100 at this property and get a free airport taxi.
          </span>
          <div className="hotelImages">
            {pics.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of the city</h1>
              <div className="hotelDesc">
                <p>
                  Located in Târgu-Mureş, 3.5 km from Sîntana de Mureş,
                  Ultracentral-Luxury Piata Victoriei Apartment provides
                  accommodations with amenities such as free WiFi and a
                  flat-screen TV. Guests staying at this apartment can use the
                  balcony.
                </p>
                <br></br>
                <p>
                  The apartment has 1 bedroom, a fully equipped kitchen with a
                  dishwasher and a fridge, and 1 bathroom with a shower and a
                  hairdryer. Towels and bed linen are provided.
                </p>
                <br></br>
                <p>
                  This is our guests' favorite part of Târgu-Mureş, according to
                  independent reviews.
                </p>
              </div>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Property Highlights</h1>
              <span>
                Located in the top-rated area in Târgu-Mureş, this property has
                an excellent location score of 8.7!
              </span>
              <p>Parking Available On Site</p>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </>
  );
}
