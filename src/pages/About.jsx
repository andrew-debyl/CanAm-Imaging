import React from "react";
import "../styles/About.css";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  ArrowPathRoundedSquareIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

function About() {
  return (
    <div className="about">
      <h1 className="about--title">
        Expertise built on 30 years of Experience
      </h1>
      <div className="about__container">
        <div className="about__desc">
          <div className="about__icon--wrapper">
            <ChatBubbleLeftRightIcon className="about__icon"></ChatBubbleLeftRightIcon>
          </div>
          <p className="about__para">
            At the heart of CanAm Imaging is a commitment to provide
            unparalleled customer service – a goal that we achieve by providing
            services that go above and beyond the provision of equipment. From
            flexible financing and guarantees to after-sales support, we take a
            hands-on approach to customer service.
          </p>
        </div>
        <div className="about__desc">
          <p className="about__para">
            We have a 40,000 square foot reconditioning and distribution
            facility in Rochester (New York), a distribution facility in Irvine
            (California), and offices in Richmond Hill (Ontario), and Greensboro
            (North Carolina). CanAm Imaging is more than well equipped to serve
            our extensive list of satisfied clients in North America and our
            Canon, Kodak, Konica Minolta, Ricoh and Xerox Export customers
            worldwide.
          </p>
          <div className="about__icon--wrapper">
            <BuildingOffice2Icon className="about__icon"></BuildingOffice2Icon>
          </div>
        </div>
        <div className="about__desc">
          <div className="about__icon--wrapper">
            <UserGroupIcon className="about__icon"></UserGroupIcon>
          </div>
          <p className="about__para">
            Combining engineering excellence, a staff of industry professionals
            and a well-trained reconditioning team with the 65 years of print
            and copy expertise that our principals bring to the table, we are
            proud to offer high- and mid-volume print and copy businesses the
            highest quality pre-owned equipment, Xerox parts Servicing the ISO
            and self service marketplace in the United States and Canada, copy
            and print supplies with unparalleled service.
          </p>
        </div>
        <div className="about__desc">
          <p className="about__para">
            From reselling your current equipment to providing a single unit or
            managing an entire fleet installation, we are solutions-driven,
            always looking for ways to help you operate more efficiently while
            earning greater profits.
          </p>
          <div className="about__icon--wrapper">
            <ArrowPathRoundedSquareIcon className="about__icon"></ArrowPathRoundedSquareIcon>
          </div>
        </div>
        <div className="about__desc">
          <div className="about__icon--wrapper">
            <ClipboardDocumentCheckIcon className="about__icon"></ClipboardDocumentCheckIcon>
          </div>
          <p className="about__para">
            Selected reconditioned Xerox equipment is covered by the Xerox Full
            Service Maintenance Agreement. To find out how this benefits you for
            ongoing maintenance of your equipment. We invite you to take
            advantage of the strong network of manufacturers and independent
            service organizations that our principals have built over the years,
            as well as our own, highly qualified technical support team that
            welcomes the opportunity to assist you by telephone or online.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
