const React = require("react");

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  setHeadComponents([
    <link rel="shortcut icon" type="image/jpg" href="./images/logo.png"></link>,
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>,
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>,
    <script src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>,
    <script src="https://cdn.jsdelivr.net/npm/jquery.easing@1.4.1/jquery.easing.min.js"></script>,
    <script src="https://cdn.jsdelivr.net/npm/waypoints@4.0.1/lib/jquery.waypoints.min.js"></script>,
    <script src="https://cdn.jsdelivr.net/npm/jquery.counterup@2.1.0/jquery.counterup.min.js"></script>,
    <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>,
    <script src="https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/js/glightbox.min.js"></script>,
    <script src="./src/js/main.js"></script>,
  ]);
};
