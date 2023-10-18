import React from "react";
import Layout from "../components/layout";
import { useEffect } from "react";

import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/animate/animate.min.css";
import "../css/bootstrap.min.css";
import "../css//bootstrap-icons/bootstrap-icons.css";
import "../css/glightbox/css/glightbox.min.css";
import "../css/style.css";
import "../css/custom.css";

import TopHeader from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";

const TeamPage = () => {
  useEffect(async () => {
    await import("../js/main");
  }, []);

  return (
    <Layout pageTitle="Notre &aEcute;quipe">
      <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div class="spinner"></div>
      </div>

      <TopHeader />
      <div class="container-fluid position-relative p-0">
        <Menu />

        <div
          class="container-fluid bg-primary py-5 bg-header"
          style="margin-bottom: 90px;"
        >
          <div class="row py-1">
            <div class="col-12 text-center" style="margin-top: 8%;">
              <h4 class="display-4 text-white animated zoomIn">
                Notre &Eacute;quipe
              </h4>
              <a href="" class="h5 text-white" style="font-size: 25px;">
                Des professionnels prêts à vous accompagner
              </a>
            </div>
          </div>
        </div>

      </div>
    </Layout>
  );
};

export default TeamPage;
