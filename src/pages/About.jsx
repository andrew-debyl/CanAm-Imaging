import React from "react";
import "../styles/About.css";
import {
  UserGroupIcon,
  BuildingOffice2Icon,
  ChatBubbleLeftRightIcon,
  ArrowPathRoundedSquareIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import blobImage from "../assets/blob-svg.png";
import WhoWeAre from "../components/WhoWeAre";
import xeroxLogo from '../assets/xerox-logo.png'
import canonLogo from '../assets/canon-logo.png'
import kodakLogo from '../assets/kodak-logo.png'
import ricohLogo from '../assets/ricoh-logo.png'
import konicaLogo from '../assets/konica-logo.png'

function About() {
  return (
    <div className="about">
      <div className="title__wrapper">
        <div className="title__wrapper--left">
          <h1 className="about--title">
            Expertise built on 30 years of Experience
          </h1>
          <p>
            CanAm Imaging welcomes the opportunity to assist you with the
            purchase and/or sale of your print and copy equipment, supplies and
            Xerox parts. CHANGE THIS?????? SOMETHING MORE/DIFFERENT HERE
          </p>
        </div>
        <div>
          <img src={blobImage} alt="" className="about--img" />
        </div>
      </div>
      <div className="about__partners">
        <h2>Our Product Partners</h2>
        <div className="about__partners--logos">
          <img src={xeroxLogo} alt="" className="about__partners--logo"/>
          <img src={canonLogo} alt="" className="about__partners--logo"/>
          <img src={kodakLogo} alt="" className="about__partners--logo"/>
          <img src={ricohLogo} alt="" className="about__partners--logo"/>
          <img src={konicaLogo} alt="" className="about__partners--logo"/>
        </div>
      </div>
      <div className="about-canam--wrapper">
        <h1 className="about--title">Who We Are</h1>
        <hr style={{ border: "1px solid #eee" }} />
        <div className="about__container">
          <WhoWeAre
            title={"Exceptional  Service"}
            para={
              "At the heart of CanAm Imaging is a commitment to provide unparalleled customer service – a goal that we achieve by providing services that go above and beyond the provision of equipment. From flexible financing and guarantees to after-sales support, we take a hands-on approach to customer service."
            }
            icon={
              <ChatBubbleLeftRightIcon className="about__icon"></ChatBubbleLeftRightIcon>
            }
          ></WhoWeAre>
          <WhoWeAre
            title={"Proficient"}
            para={
              "Combining engineering excellence, a staff of industry professionals and a well-trained reconditioning team with the 65 years of print and copy expertise that our principals bring to the table, we are proud to offer high- and mid-volume print and copy businesses the highest quality pre-owned equipment, Xerox parts Servicing the ISO and self service marketplace in the United States and Canada, copy and print supplies with unparalleled service."
            }
            icon={<UserGroupIcon className="about__icon"></UserGroupIcon>}
          ></WhoWeAre>
          <WhoWeAre
            title={"Resourceful"}
            para={
              "We have a 40,000 square foot reconditioning and distribution facility in Rochester (New York), a distribution facility in Irvine (California), and offices in Richmond Hill (Ontario), and Greensboro (North Carolina). CanAm Imaging is more than well equipped to serve our extensive list of satisfied clients in North America and our Canon, Kodak, Konica Minolta, Ricoh and Xerox Export customers worldwide."
            }
            icon={
              <BuildingOffice2Icon className="about__icon"></BuildingOffice2Icon>
            }
          ></WhoWeAre>
          <WhoWeAre
            title={"Experienced"}
            para={
              "From reselling your current equipment to providing a single unit or managing an entire fleet installation, we are solutions-driven, always looking for ways to help you operate more efficiently while earning greater profits."
            }
            icon={
              <ArrowPathRoundedSquareIcon className="about__icon"></ArrowPathRoundedSquareIcon>
            }
          ></WhoWeAre>
          <WhoWeAre
            title={"Strong Network"}
            para={
              "Selected reconditioned Xerox equipment is covered by the Xerox Full Service Maintenance Agreement. To find out how this benefits you for ongoing maintenance of your equipment. We invite you to take advantage of the strong network of manufacturers and independent service organizations that our principals have built over the years, as well as our own, highly qualified technical support team that welcomes the opportunity to assist you by telephone or online."
            }
            icon={
              <ClipboardDocumentCheckIcon className="about__icon"></ClipboardDocumentCheckIcon>
            }
          ></WhoWeAre>
        </div>
      </div>
    </div>
  );
}

export default About;
