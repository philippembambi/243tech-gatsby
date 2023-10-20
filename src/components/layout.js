import * as React from 'react'
import { useSiteMetadata } from "../hooks/use-site-metadata";
import logo from "../images/logo.png";
import glightboxMin from 'glightbox';
import { useEffect } from 'react';

import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/animate/animate.min.css";
import "../css/bootstrap.min.css";
import "../css//bootstrap-icons/bootstrap-icons.css";
import "../css/glightbox/css/glightbox.min.css";
import "../css/style.css";
import "../css/custom.css";

const Layout = ({
  title,
  description,
  pathname,
  path,
  pageTitle,
  children,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
  };

   useEffect(async () => {
     await import("../js/main");

     const glightbox = glightboxMin({
       selector: ".glightbox",
     });
   }, []);

  return (
    <React.Fragment>
      <title>243 Technologies</title>
      <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      <meta name="keywords" content="243 Technologies" />
      <meta name="description" content={seo.description} />
      <meta
        name="linkedIn:url"
        content="https://www.linkedin.com/company/243technologies/"
      />
      <meta
        name="facebook:url"
        content="https://web.facebook.com/profile.php?id=100083306892317"
      />
      <meta
        name="instagram:url"
        content="https://www.instagram.com/243_technologies/"
      />
      <link href={logo} rel="icon" />
      <link rel="shortcut icon" type="image/jpg" href={logo} />

      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout