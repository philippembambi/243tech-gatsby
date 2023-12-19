import React from 'react';
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/animate/animate.min.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-icons/bootstrap-icons.css";
import "../css/glightbox/css/glightbox.min.css";
import "../css/style.css";
import "../css/custom.css";

const Layout = ({ pageTitle, children }) => {
  
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout