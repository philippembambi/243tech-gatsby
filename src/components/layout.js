import React from 'react';
import { useEffect } from 'react';
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/animate/animate.min.css";
import "../css/bootstrap.min.css";
import "../css/bootstrap-icons/bootstrap-icons.css";
import "../css/style.css";
import "../css/custom.css";

const Layout = ({ pageTitle, children }) => {
    useEffect(async() => {
        await import("../js/main")
        await import("../css/glightbox/css/glightbox.min.css");
        await import(
          "https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/js/glightbox.min.js"
        );
    })
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout