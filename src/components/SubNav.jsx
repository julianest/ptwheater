import React from "react";
import { Container } from "react-bootstrap";

const SubNav = () => {
  return (
    <>
      <div className="tmp" style={{ width: "100%", backgroundColor: "#eee" }}>
        <Container className="contSubNav tmp">
          <div className="contSubNavGeneral">
            <form id="searchForm" className="FormSearch1 tmp">
              <a href="#home" className="currentLocationButton">
                <img
                  width="16"
                  height="16"
                  src="https://darksky.net/images/current-location.png"
                  alt="Current Location Button"
                  className="ButtonSubNav"
                />
              </a>

              <input type="text" className="input1"></input>

              <a href="#home" className="searchButton">
                <img
                  width="16"
                  height="16"
                  src="https://darksky.net/images/search.png"
                  alt="Search Button"
                  className="ButtonSubNav"
                />
              </a>

              <div
                id="savedLocations"
                style={{ display: "none", opacity: "1" }}
              >
                <div
                  className="autocomplete__container"
                  style={{
                    margin: "20px",
                    marginBottom: "5px",
                    display: "none",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="autocomplete__results__container"
                    id="autocomplete__results__container"
                  ></div>
                </div>
                <div className="inner">
                  <div className="location-container">
                    <a href="#home">1 City Hall, New York, NY</a>
                    <a href="#home" className="delete-location">
                      X
                    </a>
                  </div>
                </div>
              </div>
            </form>

            <div className="options">
              <select className="buttonSelect" tabIndex="-1">
                <option value="us" className="buttonSelectItems">
                  ˚F,&nbsp;mph
                </option>
                <option value="si" className="buttonSelectItems">
                  ˚C,&nbsp;m/s
                </option>
                <option value="ca" className="buttonSelectItems">
                  ˚C,&nbsp;km/h
                </option>
                <option value="uk2" className="buttonSelectItems">
                  ˚C,&nbsp;mph
                </option>
              </select>

              <select className="buttonSelect" tabIndex="-1">
                <option value="en" className="buttonSelectItems">
                  English
                </option>
                <option value="de" className="buttonSelectItems">
                  Deutsch
                </option>
                <option value="es" className="buttonSelectItems">
                  Español
                </option>
                <option value="fr" className="buttonSelectItems">
                  Français
                </option>
                <option value="it" className="buttonSelectItems">
                  Italiano
                </option>
                <option value="nl" className="buttonSelectItems">
                  Nederlands
                </option>
                <option value="tr" className="buttonSelectItems">
                  Türk
                </option>
                <option value="ar" className="buttonSelectItems">
                  عربي
                </option>
                <option value="zh" className="buttonSelectItems">
                  中文
                </option>
                <option value="zh-tw" className="buttonSelectItems">
                  繁體中文
                </option>
                <option value="ja" className="buttonSelectItems">
                  日本語
                </option>
                <option value="x-pig-latin" className="buttonSelectItems">
                  Pig Latin
                </option>
              </select>

              {/* <b className="button">▾</b> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default SubNav;
