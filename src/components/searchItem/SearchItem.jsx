import "./searchItem.css";
import { useNavigate } from "react-router-dom";

export default function SearchItem() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/hotels/:id");
  };

  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/323448538.jpg?k=3a3c218fcd567c09de31310f2d1a4089ecc9db5b13447a94d3c1aa0bbc8c51a6&o=&hp=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Center Apartments</h1>
        <span className="siDistance">100m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Apartment with Air conditioning</span>
        <span className="siFeatures">
          • 60m² • 1 bathroom • 1 living room • 1 bedroom
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Great</span>
          <button>8.7</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">€123</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton" onClick={handleClick}>
            See availability
          </button>
        </div>
      </div>
    </div>
  );
}
