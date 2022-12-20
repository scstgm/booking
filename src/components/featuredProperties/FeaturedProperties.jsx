import "./featuredProperties.css";

export default function FeaturedProperties() {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Aparthotel Stare Miasto</span>
        <span className="fpCity">Krakow</span>
        <span className="fpPrice">Starting from €79</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/60339891.jpg?k=62f4b2f0f738190dfe5bc5acf1b1f121ed2fd2b097c1091aa05691eea2065ff3&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Villa Wellness</span>
        <span className="fpCity">Budapest</span>
        <span className="fpPrice">Starting from €111</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Wonderful</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://www.thetravelmagazine.net/wp-content/uploads/Four-Seasons-Hotel-Ritz-Exterior.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Four Seasons Hotel</span>
        <span className="fpCity">Lisbon</span>
        <span className="fpPrice">Starting from €103</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hilton Garden Inn</span>
        <span className="fpCity">Berlin</span>
        <span className="fpPrice">Starting from €115</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
}
