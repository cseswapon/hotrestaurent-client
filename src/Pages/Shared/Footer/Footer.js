import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Image/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="py-5 footer-bg">
      <div className="container">
        <div className="d-flex">
          <div className="col-md-6">
            <img src={logo} alt="avtor" style={{ width: 250 }} />
          </div>
          <div className="col-md-3 text-end">
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                About Online Food
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Read Our Block
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Sing Up to Delivery
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Add YOur Restaurant
              </Link>
            </p>
          </div>
          <div className="col-md-3 text-end">
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Get Help Us
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Read FAQS
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                View All Cities
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Restaurant Near Me
              </Link>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <div>
            <p className="text-muted">Copyright &copy; 2022 Online food</p>
          </div>
          <div className="d-flex">
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Terms of Use
              </Link>
            </p>
            <p>
              <Link className="text-decoration-none text-light mb-1" to="/">
                Pricing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
