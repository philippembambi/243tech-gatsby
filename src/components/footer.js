import React from "react";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <React.Fragment>
      <div
        class="container-fluid bg-dark text-light mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-4 col-md-6 footer-about">
              <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-dark p-4">
                <a href="" class="navbar-brand">
                  <h1 class="m-0 text-white">
                    <img src={logo} style={{ height: "120px" }} alt="" />
                  </h1>
                </a>
                <p class="mt-3 mb-4 defaultFont">
                  243technologies est le partenaire de ses clients. Il vous
                  accompagne dans toutes les étapes de la réalisation de vos
                  besoins en numérique
                </p>
                <div class="input-group">
                  <input
                    type="text"
                    id="news-letter-email"
                    class="form-control border-white p-3"
                    placeholder="Votre adresse Email"
                  />
                  <button
                    onclick="sendNewsLetter()"
                    class="btn btn-primary defaultFont"
                  >
                    <span
                      class="spinner-border d-none"
                      id="news-letter-spinner"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Souscrire
                  </button>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-6">
              <div class="row gx-5">
                <div class="col-lg-4 col-md-12 pt-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Contactez-nous</h3>
                  </div>
                  <div class="d-flex mb-2">
                    <i class="bi bi-geo-alt me-2"></i>
                    <p class="mb-0">6 tabora, Kinshasa gombe, RDC</p>
                  </div>
                  <div class="d-flex mb-2">
                    <i class="bi bi-envelope-open me-2"></i>
                    <p class="mb-0">hello@243technologies.com</p>
                  </div>
                  <div class="d-flex mb-2">
                    <i class="bi bi-telephone me-2"></i>
                    <p class="mb-0">+243 810 836 943</p>
                  </div>
                  <div class="d-flex mt-4">
                    <a
                      class="btn btn-primary btn-square me-2"
                      target="_blank"
                      href="https://web.facebook.com/profile.php?id=100083306892317"
                    >
                      <i class="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-square me-2"
                      target="_blank"
                      href="https://www.linkedin.com/company/243technologies/"
                    >
                      <i class="fab fa-linkedin-in fw-normal"></i>
                    </a>
                    <a
                      class="btn btn-primary btn-square"
                      target="_blank"
                      href="https://www.instagram.com/243_technologies/"
                    >
                      <i class="fab fa-instagram fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Nos services</h3>
                  </div>
                  <div class="link-animated d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="#">
                      <i class="bi bi-arrow-right me-2"></i>Consultance
                    </a>
                    <a class="text-light mb-2" href="#">
                      <i class="bi bi-arrow-right me-2"></i>Traitement des
                      données
                    </a>
                    <a class="text-light mb-2" href="#nos_services">
                      <i class="bi bi-arrow-right me-2"></i>Assurance Qualité
                    </a>
                    <a class="text-light mb-2" href="#nos_valeurs">
                      <i class="bi bi-arrow-right me-2"></i>Développement
                      d'applications
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Nos Offres</h3>
                  </div>
                  <div class="link-animated d-flex flex-column justify-content-start">
                    <a href="" class="text-light mb-2">
                      <i class="bi bi-arrow-right me-2"></i>
                      Data Processing
                    </a>
                    <a href="" class="text-light mb-2 defaultFont">
                      <i class="bi bi-arrow-right me-2"></i>
                      Infrastructures Cloud
                    </a>
                    <a href="" class="text-light mb-2 defaultFont">
                      <i class="bi bi-arrow-right me-2"></i>
                      Développement d'application
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid text-white" style={{ background: "#061429" }}>
        <div class="container text-center">
          <div class="row justify-content-end">
            <div class="col-lg-8 col-md-6">
              <div
                class="d-flex align-items-center justify-content-center"
                style={{ height: "75px" }}
              >
                <p class="mb-0">
                  &copy;{" "}
                  <a class="text-white border-bottom" href="#">
                    243 Technologies
                  </a>
                  . @ Copyright.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;