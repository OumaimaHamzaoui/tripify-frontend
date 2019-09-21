import React from "react";

const Slider = () => {
  return (
    <section className="carousel-home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://picsum.photos/400/200"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/400/200"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/400/200"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://picsum.photos/400/200"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
        <ol className="carousel-indicators indicImg">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          >
            <img
              className="d-block w-100"
              src="https://picsum.photos/700/500"
              alt="First slide"
            />
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1">
            <img
              className="d-block w-100"
              src="https://picsum.photos/700/500"
              alt="First slide"
            />
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2">
            <img
              className="d-block w-100"
              src="https://picsum.photos/700/500"
              alt="First slide"
            />
          </li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3">
            <img
              className="d-block w-100"
              src="https://picsum.photos/700/500"
              alt="First slide"
            />
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Slider;
