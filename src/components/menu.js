import React from "react";
import { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

const Menu = ({ path }) => {
    const [defaultMenuIndex, setDefaultMenuIndex] = useState("indexPage");
    // const hash = window && window.location.hash;
    useEffect(() => {
      setDefaultMenuIndex(path);
        // switch (path) {
        //   case "/":
        //     if (hash.indexOf("our_services") !== -1) {
        //       setDefaultMenuIndex("servicePage");
        //     } else if (hash.indexOf("our_offers") !== -1) {
        //       setDefaultMenuIndex("offerPage");
        //     } else if (hash.indexOf("our_contacts") !== -1) {
        //       setDefaultMenuIndex("contactPage");
        //     } else {
        //       setDefaultMenuIndex("indexPage");
        //     }
        //     break;

        //   case "/team":
        //     setDefaultMenuIndex("teamPage");
        //     break;

        //   default:
        //     break;
        // }
    }, []);

    const getItemClass = (link) => {
        return (defaultMenuIndex === link
                ? "nav-item nav-link active"
                : "nav-item nav-link")
    }

  return (
    <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
      <a href="/" class="navbar-brand p-0">
        <StaticImage
          src="../images/logo.png"
          class="logo"
          objectFit="contain"
          width={160}
          alt="Logo 243technologies"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        name="collapse"
      >
        <span class="fa fa-bars"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto py-0">
          <a
            href="/"
            class={getItemClass("indexPage")}
            onClick={(e) => setDefaultMenuIndex("indexPage")}
          >
            Accueil
          </a>

          <a
            href={"/service"}
            class={getItemClass("servicePage")}
            onClick={(e) => setDefaultMenuIndex("servicePage")}
          >
            Services
          </a>
          <a
            href={"/offer"}
            class={getItemClass("offerPage")}
            onClick={(e) => setDefaultMenuIndex("offerPage")}
          >
            Offres
          </a>
          <a
            href="/team"
            class={getItemClass("teamPage")}
            onClick={(e) => setDefaultMenuIndex("teamPage")}
          >
            Notre équipe
          </a>
          <a
            href={"/contact"}
            class={getItemClass("contactPage")}
            onClick={(e) => setDefaultMenuIndex("contactPage")}
          >
            Contactez-nous
          </a>
        </div>
        <a
          style={{ color: "white" }}
          href="https://api.whatsapp.com/send?phone=+243810836943&text=Laissez-nous%20un%20message"
          class="btn btn-primary py-2 px-4 ms-3"
        >
          <i
            class="bi bi-whatsapp text-secondary"
            style={{ fontSize: "22px" }}
          ></i>
          &nbsp;&nbsp; Appelez d'urgence ?
        </a>
      </div>
    </nav>
  );
};

export default Menu;