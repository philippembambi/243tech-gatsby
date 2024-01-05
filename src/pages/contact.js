import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import TopHeader from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Spot from "../components/splot";

const Offer = () => {
  return (
    <Layout pageTitle="Offres" path={"/offer"}>
      <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div class="spinner"></div>
      </div>

      <TopHeader />
      <div class="container-fluid position-relative p-0">
        <Menu path={"contactPage"} />

        <div
          class="container-fluid bg-primary py-5 bg-header3"
          style={{ marginBottom: "90px" }}
        >
          <div class="row py-1">
            <div class="col-12 text-center">
              <h4 class="display-4 text-white animated zoomIn">
                Contactez-nous
              </h4>
              <a href="" class="h5 text-white" style={{ fontSize: "25px" }}>
                Vous pouvez nous joindre via nos contacts indiqués
              </a>
            </div>
          </div>
        </div>
      </div>

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
                      <option defaultValue>Selectionner le service</option>
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
                      onClick="sendEmail()"
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

      <Spot />
      <Footer />
    </Layout>
  );
};

export default Offer;
