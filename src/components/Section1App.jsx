import React from "react";


const Section1App = () => {
  return (
    <>


      <section className="section1">
        <div className="section1-text">
          <h1 className="section1-title">Dark Sky</h1>
          <p className="section1-text-p">
            Dark Sky offers hyperlocal weather information. With
            down-to-the-minute forecasts, you’ll know exactly when the rain will
            start or stop — right where you’re standing. (It’s like magic.)
          </p>
          <div className="section-linkApple">
            <a href="https://itunes.apple.com/app/apple-store/id517329357?pt=244848&amp;ct=DSAppPage&amp;mt=8">
              <img
                alt="Apple App Store"
                height="50"
                src="https://darksky.net/images/app/appleAppStoreBadgeBig_Edited.png"
                width="160"
              />
            </a>
          </div>
        </div>
        <div className="section1-image">
          <div>
            <img alt="Forecast" src="https://darksky.net/images/app/app_display_main.png" />
          </div>
        </div>
      </section>

      <hr className="hrclass"/>
    </>
  );
};

export default Section1App;