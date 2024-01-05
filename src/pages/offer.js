import React from "react";
import Layout from "../components/layout";
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
        <Menu path={"offerPage"} />

        <div
          class="container-fluid bg-primary py-5 bg-header3"
          style={{ marginBottom: "90px" }}
        >
          <div class="row py-1">
            <div class="col-12 text-center">
              <h4 class="display-4 text-white animated zoomIn">
                Nos offres spéciales
              </h4>
              <a href="" class="h5 text-white" style={{ fontSize: "25px" }}>
                Découvrez des offres idéalement conçues pour vous !
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="pricing" class="pricing wow fadeInUp" data-wow-delay="0.1s">
        <div class="container" data-aos="fade-up">
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

      <Spot />
      <Footer />
    </Layout>
  );
};

export default Offer;
