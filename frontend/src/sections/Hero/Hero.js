import "./Hero.css"

const Hero = () => {
  return (
    <>
      <div className="hero-main">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">

            <div className="carousel-item">
              <img src="/assets/hero1.png" alt="..."></img>
            </div>

            <div className="carousel-item">
              <img src="/assets/hero2.jpg" alt="..."></img>
            </div>

            <div className="carousel-item active">
              <img src="/assets/hero3.jpg" alt="..."></img>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="body-main">
        
      </div>
    </>
  )
}

export default Hero