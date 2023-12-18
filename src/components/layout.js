import { Link } from 'gatsby'
import { useEffect } from 'react';

const Layout = ({ pageTitle, children }) => {
    useEffect(async () => {
        await import("../lib/owlcarousel/assets/owl.carousel.min.css");
        await import("../lib/animate/animate.min.css");
        await import("../css/bootstrap.min.css");
        await import("../css//bootstrap-icons/bootstrap-icons.css");
        await import("../css/glightbox/css/glightbox.min.css");
        await import("../css/style.css");
        await import("../css/custom.css");        
      }, []);
  
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout