import React from "react";

function WhoWeAre({title, para, icon}) {
  return (
    <div className="about__desc">
      <div className="about__icon--wrapper">
        {icon}
      </div>
      <h3 className="about-canam--title">{title}</h3>
      <p className="about__para">
        {para}
      </p>
    </div>
  );
}

export default WhoWeAre;