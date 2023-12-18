import React from "react";
import banner3 from "../images/banner-3.jpg";
import splot from "../multimedia/splot.mp4";

const Spot = () => {
  return (
    <section id="call-to-action" class="container call-to-action">
      <div
        class="container text-center splot-container wow zoomIn"
        data-aos="zoom-out"
        data-wow-delay="0.1s"
        style={{ height: "400px" }}
      >
        <div
          class="splot-box container"
          style={{
            backgroundImage: `url(${banner3})`,
            filter: "brightness(50%)",
          }}
        ></div>
        <div
          class="splot-box splot-overlay"
          style={{ filter: "brightness(100%)" }}
        >
          <a href={splot} class="glightbox play-btn"></a>
          <h4 style={{ color: "white" }}>
            Tout savoir sur nous en 40 secondes
          </h4>
          <a class="cta-btn glightbox" href={splot}>
            Ouvrir le spot
          </a>
        </div>
      </div>
    </section>
  );
};

export default Spot;