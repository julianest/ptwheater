import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAsync } from "../redux/actions/actionRegister";
const FooterP = () => {
  const dispatch = useDispatch();
  return (
    <>

      <div className="footerP">
        <div className="footer-section-container">
        <a href="#log" className="optionsNavbar loginHiddenFooter"  onClick={() => dispatch(logoutAsync())}>Logout</a>
          <div className="footer-section">
            <p className="footer-section-p">
              <img alt="Dark Sky Logo" src="https://darksky.net/images/darkskylogo.png" style={{width: "50px"}} /> Dark Sky
            </p>
          </div>
          <div className="footer-section">
            <ul style={{listStyle: "none"}}>
              <li>
                <a href="/app" style={{textDecoration: "none"}}>iOS app</a >
              </li>
              <li>
                <a href="/tos" style={{textDecoration: "none"}}>Terms of Service</a>
              </li>
              <li>
                <a href="/attribution" style={{textDecoration: "none"}}>Attribution</a>
              </li>
              <li>
                <a href="/blog" style={{textDecoration: "none"}}>Blog</a>
              </li>
              <li>
                <a href="/help" style={{textDecoration: "none"}}>Help</a>
              </li>
              <li>
                <a href="mailto:info@ptwheater.com" style={{textDecoration: "none"}}>Contact</a>
              </li>
              <li>
                <a href="https://www.apple.com/privacy/" style={{textDecoration: "none"}}>Privacy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <span className="copyright">
            PropioRights © 2022 <a target="_blank" rel="noreferrer" href="https://github.com/julianest?tab=repositories" >JulianH Inc.</a> All
            lefts reserved.&nbsp;
          </span>
        </div>
      </div>
    </>
  );
};

export default FooterP;
