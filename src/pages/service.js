import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import TopHeader from '../components/header';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Spot from '../components/splot';

const Service = () => {
    return (
      <Layout pageTitle="Notre &aEcute;quipe" path={"/team"}>
        <div
          id="spinner"
          class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div class="spinner"></div>
        </div>

        <TopHeader />
        <div class="container-fluid position-relative p-0">
          <Menu path={"servicePage"} />

          <div
            class="container-fluid bg-primary py-5 bg-header2"
            style={{ marginBottom: "90px" }}
          >
            <div class="row py-1">
              <div class="col-12 text-center">
                <h4 class="display-4 text-white animated zoomIn">
                  Nos services
                </h4>
                <a href="" class="h5 text-white" style={{ fontSize: "25px" }}>
                  Des solutions informatiques personnalisées pour vos besoins
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container py-5">
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
                  <a class="btn btn-lg btn-primary rounded" href="#">
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
                  <a class="btn btn-lg btn-primary rounded" href="#">
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
                    Nous disposons d'une équipe d'experts en assurance qualité
                    de tous les produits
                  </p>
                  <a class="btn btn-lg btn-primary rounded" href="#">
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
                  <p class="m-0">
                    Avez-vous besoin d'une solution logicielle ou d'un service
                    internet à mettre en place ?
                  </p>
                  <a class="btn btn-lg btn-primary rounded" href="#">
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
                  <a class="btn btn-lg btn-primary rounded" href="#">
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

        <Spot />
        <Footer />
      </Layout>
    );
}

export default Service;