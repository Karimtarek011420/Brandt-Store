import { NavLink } from "react-router-dom";
import about from "../../assets/images/dd.jpg";

const About = () => {
  return (
    <div className="about-section">
      <div className="container py-5 my-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="text-danger fw-bold mb-4">About Us</h1>
            <p className="text-muted lead mb-4">
              We are committed to delivering high-quality products and services
              to our customers. Our vision is to innovate and provide exceptional
              experiences to our clients. With a team of passionate professionals,
              we ensure your satisfaction and trust.
            </p>
            <NavLink
              to="/contact"
              className="btn btn-danger px-4 py-2 shadow-sm text-uppercase"
            >
              Contact Us
            </NavLink>
          </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <img
              className="about-image shadow rounded"
              src={about}
              alt="About Us"
              style={{ width: "100%", maxWidth: "500px", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
