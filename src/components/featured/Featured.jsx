import "./featured.css";

export default function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/16/cc/43.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bucharest</h1>
          <p>758 properties</p>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2021/10/Warsaw-skyline-2-934x657-1.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Warsaw</h1>
          <p>920 properties</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media.istockphoto.com/photos/aerial-view-of-riga-center-from-st-peters-church-latvia-picture-id525655093?k=20&m=525655093&s=612x612&w=0&h=P6CF1GEs2N1l40isL9cisoXvA37BvCl8ORHr1SYz5Lk="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Riga</h1>
          <p>217 properties</p>
        </div>
      </div>
    </div>
  );
}
