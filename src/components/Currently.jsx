import React from "react";

const Currently = () => {
  return (
    <>
      <div className="center">
        <div className="title tmp">
          <div className="tmp">
            <img
              width="84"
              height="84"
              src="https://darksky.net/images/weather-icons/partly-cloudy-day.png"
              alt="partly-cloudy-day Icon"
            />
          </div>
          <div className="contTextTitle tmp">
            <div className="titleMain tmp">
              <h1>{`59° Mostly Cloudy.`}</h1>
            </div>
            <div className="detailMain tmp">
              <span>{`Feels Like: `}</span>
              <span>{`Low: `}</span>
              <span>{`High: `}</span>
            </div>
          </div>
        </div>
        <div>
        <span className="textTitleDescrip tmp">
          Possible light rain tomorrow afternoon and&nbsp;evening.
        </span>
        </div>
      </div>
    </>
  );
};

export default Currently;
