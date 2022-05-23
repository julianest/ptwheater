import React from "react";

const ContentBlog = () => {
  return (
    <>
      <div className="post text" itemScope="" itemType="/blog">
        <div
          className="banner"
          style={{
            backgroundImage:
              "url(https://blog.darksky.net/wp-content/uploads/2013/04/NEWclouds.jpg)",
          }}
        >
          <div className="shadow">
            <h1 className="post_title">
              <a href="/blog" itemProp="name headline">
                Dark Sky Has a New Home
              </a>
            </h1>
          </div>
        </div>

        <main className="mainBlog">
          <div className="post_body1" itemProp="articleBody">
            <p style={{ fontStyle: "italic", fontSize: "14px", color: "#333" }}>
              By{" "}
              <span
                itemProp="author"
                itemScope=""
                itemType="http://schema.org/Person"
              >
                <span itemProp="name">Adam Grossman</span>
              </span>{" "}
              on{" "}
              <time
                dateTime="2021-06-07T13:00:00-04:00"
                itemProp="datePublished"
              >
                June 7, 2021
              </time>
              .
            </p>

            <p style={{ marginBottom: "50px" }}>
              <strong>Update: </strong>Support for the Dark Sky API service for
              existing customers will continue until the end of 2022. The iOS
              app and Dark Sky website will also be available until the end of
              2022.
            </p>

            <p style={{ fontStyle: "italic", fontSize: "14px", color: "#333" }}>
              By{" "}
              <span
                itemProp="author"
                itemScope=""
                itemType="http://schema.org/Person"
              >
                <span itemProp="name">Adam Grossman</span>
              </span>{" "}
              on{" "}
              <time
                dateTime="2020-03-31T13:00:00-04:00"
                itemProp="datePublished"
              >
                August 1, 2020
              </time>
              .
            </p>

            <p style={{ marginBottom: "50px" }}>
              <strong>Update: </strong>The Android and Wear OS apps shut down on
              August 1, 2020. Subscribers who were active at that time will be
              receiving a full refund. Weather forecasts and maps on the Dark
              Sky website remain active.
            </p>

            <p style={{ fontStyle: "italic", fontSize: "14px", color: "#333" }}>
              By{" "}
              <span
                itemProp="author"
                itemScope=""
                itemType="http://schema.org/Person"
              >
                <span itemProp="name">Adam Grossman</span>
              </span>{" "}
              on{" "}
              <time
                dateTime="2020-03-31T13:00:00-04:00"
                itemProp="datePublished"
              >
                July 1, 2020
              </time>
              .
            </p>

            <p style={{ marginBottom: "50px" }}>
              <strong>Update: </strong>Service to existing users and subscribers
              of the Android app will now continue until August 1, 2020, at
              which point the app will be shut down. Subscribers who are active
              at that time will receive a full refund. Weather forecasts, maps,
              and embeds available on the Dark Sky website will also shut down
              on August 1, 2020.
            </p>

            <p style={{ fontStyle: "italic", fontSize: "14px", color: "#333" }}>
              By{" "}
              <span
                itemProp="author"
                itemScope=""
                itemType="http://schema.org/Person"
              >
                <span itemProp="name">Adam Grossman</span>
              </span>{" "}
              on{" "}
              <time
                dateTime="2020-03-31T13:00:00-04:00"
                itemProp="datePublished"
              >
                March 31, 2020
              </time>
              .
            </p>

            <p>
              Today we have some important and exciting news to share: Dark Sky
              has joined Apple.
            </p>

            <p>
              Our goal has always been to provide the world with the best
              weather information possible, to help as many people as we can
              stay dry and safe, and to do so in a way that respects your
              privacy.
            </p>

            <p>
              There is no better place to accomplish these goals than at Apple.
              We’re thrilled to have the opportunity to reach far more people,
              with far more impact, than we ever could alone.
            </p>

            <h3>What happens to our existing products?</h3>
            <p>
              <em>iOS App</em>
            </p>
            <p>
              There will be no changes to Dark Sky for iOS at this time. It will
              continue to be available for{" "}
              <a href="https://apps.apple.com/app/apple-store/id517329357">
                purchase in the App Store.
              </a>
            </p>
            <p>
              <em>Android and Wear OS App</em>
            </p>
            <p>
              The app will no longer be available for download. Service to
              existing users and subscribers will continue until July 1, 2020,
              at which point the app will be shut down. Subscribers who are
              still active at that time will receive a refund.
            </p>
            <p>
              <em>Website</em>
            </p>
            <p>
              Weather forecasts, maps, and embeds will continue until July 1,
              2020. The website will remain active beyond that time in support
              of API and iOS App customers.
            </p>
            <p>
              <em>API</em>
            </p>
            <p>
              Our API service for existing customers is not changing today, but
              we will no longer accept new signups. The API will continue to
              function through the end of 2021.
            </p>

            <p>
              As part of this transition, use of Dark Sky by Apple is subject to
              the Apple Privacy Policy, which can be found at apple.com/privacy.
            </p>

            <h3>Thank you!</h3>
            <p>
              To our customers, family and friends, we are grateful for your
              support over the past eight years. We look forward to continuing
              to build great products, so stay tuned…
            </p>
            <p>The Dark Sky Team</p>
          </div>

          <div className="sidebar">
            <div id="post_links">
              <div className="post_link_container">
                <a href="/blog">
                  <div
                    className="post_link"
                    style={{
                      backgroundImage:
                        "url(https://blog.darksky.net/wp-content/uploads/2013/04/NEWclouds.jpg)",
                    }}
                  ></div>
                </a>
                <p className="post_link_date">Mar 31, 2020</p>
                <p className="post_link_title">Dark Sky Has a New Home</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default ContentBlog;
