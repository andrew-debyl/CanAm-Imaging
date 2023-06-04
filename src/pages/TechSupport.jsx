import React from "react";
import "../styles/TechSupport.css";

function TechSupport() {
  return (
    <div className="tech-support">
      <h1 className="tech-support--title">
        Technical Support: CanAm Imaging – at your service
      </h1>
      <hr className="tech-support--hr" />
      <p className="tech-support--para">
        To help you get the most out of your CanAm Imaging purchase, we have a
        dedicated team of highly qualified technicians available to assist you
        with any problems that may arise with set up or maintenance of your
        equipment.
      </p>
      <p className="tech-support--para">
        For troubleshooting tips, installation help and more, contact a CanAm
        Imaging technical advisor at:
      </p>
      <p className="tech-support--contact">
        <b>Phone:</b> <span className="red">+1 866-758-0007</span>
      </p>
      <p className="tech-support--contact">
        <b>Email:</b>
        <span className="blue">
          <a href="mailto:tech@canamimaging.com" className="email"> tech@canamimaging.com</a>
        </span>
      </p>
    </div>
  );
}

export default TechSupport;
