import * as React from "react";
import { useEffect } from "react";

import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/animate/animate.min.css";
import "../css/bootstrap.min.css";
import "../css//bootstrap-icons/bootstrap-icons.css";
import "../css/glightbox/css/glightbox.min.css";
import "../css/style.css";
import "../css/custom.css";

import banner3 from "../images/banner-3.jpg";
import banner2 from "../images/banner-two.jpg";
import features from "../images/features.jpeg";
import splot from "../multimedia/splot.mp4";
import Layout from "../components/layout";
import TopHeader from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";

const IndexPage = () => {
    useEffect(async () => {
      await import("../js/main")
    }, []);

  return (
    <Layout pageTitle="Page d'acceuil" path={"/"}>
      <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div class="spinner"></div>
      </div>

      <TopHeader />
      <div class="container-fluid position-relative p-0">
        <Menu path={"/"} />

        <div
          id="header-carousel"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100 carousselimage" src={banner3} alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h3 class="text-white text-uppercase mb-3 animated slideInDown">
                    La technologie à portée de main
                  </h3>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <img class="w-100 carousselimage" src={banner2} alt="Image" />
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3" style={{ maxWidth: "900px" }}>
                  <h4 class="text-white text-uppercase mb-3 animated slideInDown">
                    Des solutions adaptées à vos besoins numériques
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container-fluid facts py-5 pt-lg-0">
        <div class="container py-5 pt-lg-0">
          <div class="row gx-0">
            <div class="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div
                class="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: "150px" }}
              >
                <div
                  class="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i
                    class="bi bi-person-check-fill text-secondary"
                    style={{ fontSize: "27px" }}
                  ></i>
                </div>
                <div class="ps-4">
                  <h5 class="text-white mb-0">Clients Satisfaits</h5>
                  <h3 class="text-white mb-0" data-toggle="counter-up">
                    15
                  </h3>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div
                class="bg-light shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: "150px" }}
              >
                <div
                  class="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i
                    class="bi bi-palette2 text-secondary"
                    style={{ fontSize: "27px" }}
                  ></i>
                </div>
                <div class="ps-4">
                  <h5 class="text-primary mb-0">Projets Effectués</h5>
                  <h3 class="mb-0" data-toggle="counter-up">
                    203
                  </h3>
                </div>
              </div>
            </div>

            <div class="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div
                class="bg-primary shadow d-flex align-items-center justify-content-center p-4"
                style={{ height: "150px" }}
              >
                <div
                  class="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i
                    class="bi bi-mortarboard-fill text-secondary"
                    style={{ fontSize: "27px" }}
                  ></i>
                </div>
                <div class="ps-4">
                  <h5 class="text-white mb-0">Master Class organisées</h5>
                  <h3 class="text-white mb-0" data-toggle="counter-up">
                    5
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5" id="about_us">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-5">
                <h4 class="fw-bold text-primary text-uppercase">
                  &Agrave; propos de nous
                </h4>
                <h5 class="mb-0" style={{ color: "rgb(107, 103, 103)" }}>
                  Offrir l'excellence dans le traitement de données à l'échelle
                  mondiale
                </h5>
              </div>
              <p class="mb-4" style={{ fontSize: "18px" }}>
                Notre domaine d'activé est le traitement de l'information à
                l'échelle mondiale tout en déployant des infrastructures cloud
                managées et auto-managées pour nos clients partout dans le monde
              </p>
              <div class="row g-0 mb-3">
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 class="mb-3">
                    <i class="bi bi-alarm-fill text-secondary me-3"></i>Rapidité
                  </h5>
                  <h5 class="mb-3">
                    <i class="fa fa-check text-secondary me-3"></i>Intégrité{" "}
                  </h5>
                </div>
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 class="mb-3 defaultFont">
                    <i class="fa fa-check text-secondary me-3"></i>Serviabilité
                  </h5>
                  <h5 class="mb-3 defaultFont">
                    <i class="bi bi-lightbulb-fill text-secondary me-3"></i>
                    Créativité
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-lg-5" style={{ minHeight: "500px" }}>
              <div class="position-relative h-100">
                <img
                  class="position-absolute w-100 h-100 rounded wow zoomIn"
                  data-wow-delay="0.9s"
                  src={features}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="our_services" style={{ marginBottom: "10px" }}></div>
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h4 class="fw-bold text-primary text-uppercase">Nos Services</h4>
            <h4
              class="mb-0"
              style={{ color: "#555555", fontWeight: "600", fontSize: "22px" }}
            >
              {" "}
              Des solutions informatiques personnalisées pour votre entreprise{" "}
            </h4>
          </div>
          <div class="row g-5">
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div class="service-icon">
                  <i
                    class="bi bi-headset text-secondary"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <h5 class="mb-3" style={{ color: "#555555" }}>
                  Consultance
                </h5>
                <p class="m-0">
                  Nous mettons à votre disposition nos experts pour une
                  assistance de meilleure qualité
                </p>
                <a class="btn btn-lg btn-primary rounded" href="">
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div class="service-icon">
                  <i
                    class="bi bi-bar-chart-line-fill text-secondary"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <h5 class="mb-3" style={{ color: "#555555" }}>
                  Traitement de données
                </h5>
                <p class="m-0">
                  Grâce au Big Data, nous donnons de la valeur aux données en
                  les traitant intélligement
                </p>
                <a class="btn btn-lg btn-primary rounded" href="">
                  <i class="bi bi-arrow-right text-secondary"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div class="service-icon">
                  <i
                    class="bi bi-shield-fill-check text-secondary"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <h5 class="mb-3" style={{ color: "#555555" }}>
                  Assurance Qualité
                </h5>
                <p class="m-0 defaultFont">
                  Nous disposons d'une équipe d'experts en assurance qualité de
                  tous les produits
                </p>
                <a class="btn btn-lg btn-primary rounded" href="">
                  <i class="bi bi-arrow-right text-secondary"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div class="service-icon">
                  <i
                    class="bi bi-windows text-secondary"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <h5 class="mb-3" style={{ color: "#555555" }}>
                  Développement d'applications
                </h5>
                <p class="m- defaultFont">
                  Avez-vous besoin d'une solution logicielle ou d'un service
                  internet à mettre en place ?
                </p>
                <a class="btn btn-lg btn-primary rounded" href="">
                  <i class="bi bi-arrow-right text-secondary"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                <div class="service-icon">
                  <i
                    class="bi bi-ui-checks-grid text-secondary"
                    style={{ fontSize: "25px" }}
                  ></i>
                </div>
                <h5 class="mb-3" style={{ color: "#555555" }}>
                  Automatisation des processus de Développement
                </h5>
                <p class="m-0">
                  Le développement étant évolué, il est nécessaire que le
                  processus d'intégration au déploiement soit automatisé.{" "}
                </p>
                <a class="btn btn-lg btn-primary rounded" href="">
                  <i class="bi bi-arrow-right text-secondary"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h4 class="text-white mb-3">Nous Contacter</h4>
                <h3 class="text-white mb-0">+243 810 836 943</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="our_offers"
        class="section-title text-center position-relative pb-3 mb-5 mx-auto"
      >
        <h4 class="fw-bold text-primary text-uppercase">
          Nos offres spéciales
        </h4>
        <h5 class="mb-0" style={{ color: "#555555" }}>
          {" "}
          Découvrez des offres idéalement conçues pour vos besoins{" "}
        </h5>
      </div>

      <section
        id="pricing"
        style={{ marginTop: "-5rem" }}
        class="pricing wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div class="container py-5" data-aos="fade-up">
          <div class="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">
            <div class="col-lg-4">
              <div class="pricing-item">
                <h3>Développement d'Applications</h3>
                <div class="icon">
                  <i class="bi bi-box"></i>
                </div>
                <ul>
                  <li>
                    <i class="bi bi-check"></i> UI/UX Design
                  </li>
                  <li>
                    <i class="bi bi-check"></i> API
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Cross Platform
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Autres
                  </li>
                </ul>
                <div class="text-center">
                  <a href="#" class="">
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="pricing-item featured">
                <h3>Infrastructures Cloud</h3>
                <div class="icon">
                  <i class="bi bi-cloud-check-fill"></i>
                </div>

                <ul>
                  <li>
                    <i class="bi bi-check"></i> AWS (Auto-managed & managed
                    Services)
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Cloud Economics
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Cloud Performantes
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Sécurité
                  </li>
                </ul>
                <div class="text-center">
                  <a href="#" class="">
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="pricing-item">
                <h3>Data Processing</h3>
                <div class="icon">
                  <i class="bi bi-bar-chart-fill"></i>
                </div>
                <ul>
                  <li>
                    <i class="bi bi-check"></i> Data Transformation
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Data Visualisation
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Data Pipeline
                  </li>
                  <li>
                    <i class="bi bi-check"></i> Wharehouse As Service
                  </li>
                </ul>
                <div class="text-center">
                  <a href="#" class="">
                    &nbsp;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="our_contacts" style={{ marginBottom: "13px" }}></div>
      <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-5">
                <h4 class="mb-0">Nous Contacter</h4>
              </div>
              <div class="row gx-3">
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 class="mb-4" style={{ color: "#555555" }}>
                    <i class="fa fa-clock text-primary me-3"></i>24 heures sur
                    24
                  </h5>
                </div>
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 class="mb-4" style={{ color: "#555555" }}>
                    <i class="fa fa-phone-alt text-primary me-3"></i>7 jours sur
                    7
                  </h5>
                </div>
              </div>
              <p class="mb-4">
                Nous mettons à votre disposition une équipe d'assitance prête à
                vous répondre.
              </p>
              <div
                class="d-flex align-items-center mt-2 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <a href="https://api.whatsapp.com/send?phone=+243810836943&text=Laissez-nous%20un%20message">
                  <div
                    class="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i class="fa fa-phone-alt text-white"></i>
                  </div>
                </a>
                &nbsp;&nbsp;&nbsp;
                <h5 style={{ color: "#555555" }}>
                  Discutez avec nous à l'immédiat
                </h5>
              </div>
            </div>
            <div class="col-lg-5 wow zoomIn">
              <div
                class="bg-primary rounded h-100 d-flex align-items-center p-5"
                data-wow-delay="0.9s"
              >
                <div class="row g-3">
                  <div class="col-12">
                    <input
                      type="email"
                      id="email"
                      class="form-control bg-light border-0"
                      placeholder="E-mail"
                      style={{ height: "55px" }}
                      required
                    />
                  </div>
                  <div class="col-12">
                    <select
                      class="form-select bg-light border-0"
                      id="service"
                      style={{ height: "55px" }}
                    >
                      <option selected>Selectionner le service</option>
                      <option value="1">Développement d'application</option>
                      <option value="2">infrastructures cloud</option>
                      <option value="3">Data Processing</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <textarea
                      class="form-control bg-light border-0"
                      id="message"
                      rows="3"
                      placeholder="Message"
                    ></textarea>
                  </div>

                  <div class="col-12">
                    <button
                      class="btn btn-secondary w-100 py-3 defaultFont"
                      type="submit"
                      onclick="sendEmail()"
                    >
                      <span
                        class="spinner-border d-none"
                        id="formSpinner"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Envoyer
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="alert alert-success mt-2 d-none"
                id="formSuccess"
                role="alert"
              >
                Votre message a été envoyé avec succès, merci de nous écrire !
              </div>
              <div
                class="alert alert-danger mt-2 d-none"
                id="formError"
                role="alert"
              >
                Une erreur est survenue lors de l'envoi du message !
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        id="modalBtn"
        class="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                NewsLetter
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Merci d'avoir souscrit à notre news letter. Nous vous enverons
              quotidiennement les actualités.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="call-to-action" class="container call-to-action">
        <div
          class="container text-center splot-container"
          data-aos="zoom-out"
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
              Ouvrir la vidéo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>243 technologies</title>;
