import React from "react";
import Layout from "../components/layout";
import { useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

import TopHeader from "../components/header";
import Menu from "../components/menu";
import Footer from "../components/footer";
import Spot from "../components/spot";
import TeamMember from "../components/teamMember";

const TeamPage = () => {
  useEffect(async () => {
    await import("../js/main");
  }, []);

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
        <Menu path={"/team"} />

        <div
          class="container-fluid bg-primary py-5 bg-header"
          style={{ marginBottom: "90px" }}
        >
          <div class="row py-1">
            <div class="col-12 text-center">
              <h4 class="display-4 text-white animated zoomIn">
                Notre &Eacute;quipe
              </h4>
              <a href="" class="h5 text-white" style={{ fontSize: "25px" }}>
                Des professionnels prêts à vous accompagner
              </a>
            </div>
          </div>
        </div>
      </div>

      <section class="team">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h4 class="text-primary">
              L'&Eacute;quipe 243 technologies à votre service
            </h4>
          </div>

          <div class="row gy-4">
            <TeamMember
              name="Eldie MAPEPE"
              jobTitle="Founder & C.E.O"
              facebookLink="https://www.facebook.com/eldie.mapepe/"
              instagramLink="https://www.instagram.com/eldie_mapepe/"
              linkedInLink="https://www.linkedin.com/in/eldie-mapepe-a679321b8"
            >
              <StaticImage
                src={"../images/team_eldie.jpg"}
                alt="team_eldie.jpg"
                class="img-fluid"
              />
            </TeamMember>

            <TeamMember
              name="Christian KAYEMBE"
              jobTitle="Tech Lead"
              facebookLink="https://web.facebook.com/profile.php?id=100083306892317"
              instagramLink="https://www.instagram.com/243_technologies/"
              linkedInLink="https://www.linkedin.com/company/243technologies/"
            >
              <StaticImage
                src={"../images/team_chris.jpg"}
                alt="Christian KAYEMBE"
                class="img-fluid"
              />
            </TeamMember>

            <TeamMember
              name="Gaetan KWADIAMONA"
              jobTitle="Software Engineer"
              facebookLink="https://web.facebook.com/profile.php?id=100083306892317"
              instagramLink="https://www.instagram.com/243_technologies/"
              linkedInLink="https://www.linkedin.com/company/243technologies/"
            >
              <StaticImage
                src={"../images/team_gaetan.jpg"}
                alt="Gaetan KWADIAMONA"
                class="img-fluid"
              />
            </TeamMember>

            <TeamMember
              name="Josué MASUTA"
              jobTitle="QA Engineer"
              facebookLink="https://web.facebook.com/profile.php?id=100083306892317"
              instagramLink="https://www.instagram.com/243_technologies/"
              linkedInLink="https://www.linkedin.com/company/243technologies/"
            >
              <StaticImage
                src={"../images/team_josue.jpg"}
                alt="Josué MASUTA"
                class="img-fluid"
              />
            </TeamMember>

            <div class="section-header">
              <h3 class="text-primary">
                Des professionnels prêts à vous accompagner
              </h3>
            </div>

            <TeamMember
              name="Cornella KUDIA"
              jobTitle="Marketing Staff"
              facebookLink="https://web.facebook.com/profile.php?id=100083306892317"
              instagramLink="https://www.instagram.com/243_technologies/"
              linkedInLink="https://www.linkedin.com/company/243technologies/"
            >
              <StaticImage
                src={"../images/team_cornella.jpg"}
                alt="Cornella KUDIA"
                class="img-fluid"
              />
            </TeamMember>

            <TeamMember
              name="Eveline MBIMBI"
              jobTitle="Project Manager"
              facebookLink="https://web.facebook.com/profile.php?id=100083306892317"
              instagramLink="https://www.instagram.com/243_technologies/"
              linkedInLink="https://www.linkedin.com/company/243technologies/"
            >
              <StaticImage
                src={"../images/team_ev.png"}
                alt="Evline MBIMBI"
                class="img-fluid"
                style={{
                  width: "100%",
                }}
              />
            </TeamMember>

            <TeamMember
              name="Divine MULUMBI"
              jobTitle="Marketing Staff"
              facebookLink="https://web.facebook.com/profile.php?id=100083306892317"
              instagramLink="https://www.instagram.com/243_technologies/"
              linkedInLink="https://www.linkedin.com/company/243technologies/"
            >
              <StaticImage
                src={"../images/team_d.png"}
                alt="Divine MULUMBI"
                class="img-fluid"
              />
            </TeamMember>

            <TeamMember
              name="Philippe MBAMBI"
              jobTitle="Software Engineer"
              facebookLink="https://web.facebook.com/profile.php?id=100083306892317"
              instagramLink="https://www.instagram.com/243_technologies/"
              linkedInLink="https://www.linkedin.com/company/243technologies/"
            >
              <StaticImage
                src={"../images/team_phil.jpg"}
                alt="Philippe MBAMBI"
                class="img-fluid"
              />
            </TeamMember>
          </div>
        </div>
      </section>

      <Spot />
      <Footer />
    </Layout>
  );
};

export default TeamPage;
