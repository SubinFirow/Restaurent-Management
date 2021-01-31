import React from "react";
import "./footer.css";
import { Container, Col, Row } from "reactstrap";
import fb from "../../../Assests/icons/footer/fb.png";
import insta from "../../../Assests/icons/footer/insta.png";
import wordpress from "../../../Assests/icons/footer/word.png";
import google from "../../../Assests/icons/footer/google.png";
import tweet from "../../../Assests/icons/footer/tweet.png";
import heart from "../../../Assests/icons/footer/heart.png";
const footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row>
          <Col>
            <div className="storage">
              <a href="/">About Us</a>
              <a href="/">Blog</a>
              <a href="/">Pages</a>
            </div>
          </Col>
          <Col>
            <div className="storage2">
              <a href="/">
                <img src={insta} alt="Icon" />
              </a>
              <a href="/">
                <img src={fb} alt="Icon" />
              </a>
              <a href="/">
                <img src={wordpress} alt="Icon" />
              </a>
              <a href="/">
                <img src={tweet} alt="Icon" />
              </a>
              <a href="/">
                <img src={google} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-text">
              Contact: Ph no :<br />
              Order: Ph no :, Ph no :, Ph no : <br />
              &copy; Pizza and Burger
              <br />
              <br />
              Made with{" "}
              <img
                src={heart}
                alt="Heart"
                style={{ height: "22px", padding: "0 3px", float: "none" }}
              />{" "}
              from{" "}
              <a
                style={{ display: "inline", float: "none" }}
                href="www.avionics.me"
                target="_blank"
              >
                Avionics Technologies
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default footer;
