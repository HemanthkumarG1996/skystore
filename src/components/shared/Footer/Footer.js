import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container relative-container bottom-section-space">
        <nav className="top-divider text-center">
          <ul className="footer-navigation-menu top-group-space bottom-group-space b3-no-top-space b3-no-bottom-space b3-text-left">
            <li className="footer-navigation-menu__item">
              <Link to="/">About us</Link>
            </li>
            <li className="footer-navigation-menu__item">
              <Link to="/">Contact Us</Link>
            </li>
            <li className="footer-navigation-menu__item">
              <Link to="/">Terms and Conditions</Link>
            </li>
            <li className="footer-navigation-menu__item">
              <Link to="/">Privacy and Cookies</Link>
            </li>
            <li className="footer-navigation-menu__item">
              <Link to="/">Privacy Options</Link>
            </li>
            <li className="footer-navigation-menu__item">
              <Link to="/">Help</Link>
            </li>
            <li className="footer-navigation-menu__item">
              <Link to="/">Redeem Voucher</Link>
            </li>
          </ul>
        </nav>
        {/* Footer alternate divider */}
        <div className="footer-alternate-divider top-divider text-center">
          <span className="footer-alternate-sites__header">
            {" "}
            United Kingdom and Republic of Ireland&nbsp;|{" "}
          </span>
          <div className="footer-alternate-sites__item">
            <Link to="/">Deutschland und Österreich</Link>
          </div>
        </div>
        {/* Copyright */}
        <div className="top-divider">
          <div className="copyright-text text-center bottom-group-space  top-group-space">
            &copy; Sky UK All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
