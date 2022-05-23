import React from "react";

const Seccion2App = () => {
  return (
    <>
      <section className="section2">
        <div className="schematic__images">
          <div className="schematic__container">
            <div className="phone">
              <img
                alt="iPhone Screenshot 1"
                src="https://darksky.net/images/app/new_app_display_2.png"
              />
            </div>
            <h2 className="h2Detail">Detailed Forecasts</h2>
            <p className="phone-p">
              Drill down and explore all the details of your forecast, to get
              exactly the information you care about.
            </p>
          </div>
          <div className="schematic__container">
            <div className="phone">
              <img
                alt="iPhone Screenshot 2"
                src="https://darksky.net/images/app/new_app_display_3.png"
              />
            </div>
            <h2 className="h2Detail">Advanced Maps</h2>
            <p className="phone-p">
              Beautiful local and global maps show you where storms are, and
              where they're going.
            </p>
          </div>
          <div className="schematic__container">
            <div className="phone">
              <img
                alt="iPhone Screenshot 3"
                src="https://darksky.net/images/app/new_app_display_4.png"
              />
            </div>
            <h2 className="h2Detail">Notifications &amp; Alerts</h2>
            <p className="phone-p">
              Custom notifications and alerts help you stay informed without
              having to check the app.
            </p>
          </div>
        </div>
      </section>

      <section className="section2-buttonEnd" >
        <a href="https://itunes.apple.com/app/apple-store/id517329357?pt=244848&amp;ct=DSAppPage&amp;mt=8">
          <img
            alt="Apple App Store"
            height="50"
            src="https://darksky.net/images/app/appleAppStoreBadgeBig_Edited.png"
            width="160"
          />
        </a>
      </section>
    </>
  );
};
export default Seccion2App;
