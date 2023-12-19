import React from "react";

const TeamMember = (props) => {
  return (
    <div
      class="col-xl-3 col-md-6 d-flex"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div class="member">
        {  props.children }

        <h4 style={{ color: "#55555" }}>{props.name}</h4>
        <span>{props.jobTitle}</span>
        <div class="social">
          <a href={props.facebookLink}>
            <i class="bi bi-facebook"></i>
          </a>
          <a href={props.instagramLink}>
            <i class="bi bi-instagram"></i>
          </a>
          <a href={props.linkedInLink}>
            <i class="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
