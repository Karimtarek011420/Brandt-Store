import email from "../../assets/images/email.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section py-5">
      <div className="container">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="text-danger fw-bold">Have Some Questions?</h1>
            <p className="text-muted">
              We’d love to hear from you! Send us a message, and we’ll get back
              to you as soon as possible.
            </p>
            <hr className="w-50 mx-auto" />
          </div>
        </div>
        {/* Content Section */}
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 mb-4 mb-lg-0 d-flex justify-content-center">
            <img
              src={email}
              alt="Contact Us"
              className="shadow-lg rounded img-fluid"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          {/* Form Section */}
          <div className="col-lg-7">
            <form>
              {/* Name Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control shadow-sm"
                  id="name"
                  placeholder="John Smith"
                />
              </div>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control shadow-sm"
                  id="email"
                  placeholder="name@example.com"
                />
              </div>
              {/* Message Textarea */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control shadow-sm"
                  id="message"
                  rows="5"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-danger form-control shadow-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
