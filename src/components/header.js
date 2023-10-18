import React from "react";

const TopHeader = () => {
  return (
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
      <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div
            class="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <small class="me-3 text-light">
              <i class="fa fa-map-marker-alt me-2"></i>6 tabora, Kinshasa gombe,
              RDC
            </small>
            <small class="me-3 text-light">
              <i class="fa fa-phone-alt me-2"></i>+243 810 836 943
            </small>
            <small class="text-light">
              <i class="fa fa-envelope-open me-2"></i>
              hello@243technologies.com
            </small>
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
          <div
            class="d-inline-flex align-items-center"
            style={{ height: "45px" }}
          >
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://web.facebook.com/profile.php?id=100083306892317"
            >
              <i class="fab fa-facebook-f fw-normal"></i>
            </a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.linkedin.com/company/243technologies/"
            >
              <i class="fab fa-linkedin-in fw-normal"></i>
            </a>
            <a
              class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
              href="https://www.instagram.com/243_technologies/"
            >
              <i class="fab fa-instagram fw-normal"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
