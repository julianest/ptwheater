import React, {useState} from "react";

const ContentHelp = () => {

  const [show, setShow] = useState(true);
  
  return (
    <>
      <header className="headerHelp">
        <h1>Dark Sky</h1>
        <h2>Help Center</h2>
        <div className="tabs">
          <div
            className={show?"iphone" : "iphone active-tab" } 
            style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px -4px 6px inset" }}
            onClick={()=>setShow(!show)}
          >
            iPhone
          </div>
          <div className={show ? "website active-tab" : "website" } onClick={()=>setShow(!show)}>Website</div>
        </div>
      </header>

      <div className="questions-container">
        <div className="answers">
          <div className="iphone-answers" style={{ display: "block" }}>
            <h2>General</h2>

            <div className="question 0">
              <a href="#0">What do the timeline colors represent?</a>
              <div className="answer" id="0" style={{ display: "none" }}>
                The light gray color represents a clear sky (i.e. sunny) and the
                darker gray colors represent varying levels of cloudiness
                (partly cloudy, mostly cloudy, and overcast). The blue colors
                represent rain, and the blue-purple colors represent snow -- the
                lighter variations of these colors mean the precipitation is
                forecasted to be light.
              </div>
            </div>

            <div className="question 1">
              <a href="#1">What does X error message mean?</a>
              <div className="answer" id="1" style={{ display: "none" }}>
                <ul>
                  <li>
                    “Error retrieving forecast”, “Forecast unavailable”, or
                    “Sorry, unable to get forecast”: The app was unable to fetch
                    a forecast. This is usually due to connectivity issues.
                  </li>
                  <li>
                    “Next hour forecast temporarily unavailable (radar station
                    is down)”: This message means that the data from a
                    government run radar station is down in your area. We don't
                    have control over these stations, but this is generally
                    fixed within a few days.
                  </li>
                  <li>
                    “Detailed next hour forecast is unavailable due to lack of
                    radar coverage” or “Detailed next hour forecast is
                    unavailable”: We do not have enough radar data to create a
                    reliable next hour forecast for this location.
                  </li>
                  <li>
                    “Current Location Unavailable”, “Location unavailable”, or
                    “Sorry, unable to find your location”: The app could not
                    find your location. Please check that location is enabled
                    and Dark Sky has the location permission enabled.
                  </li>
                </ul>
              </div>
            </div>

            <div className="question 2">
              <a href="#2">To what direction do the wind arrows point?</a>
              <div className="answer" id="2" style={{ display: "none" }}>
                The arrows indicate the direction the wind is blowing. So if the
                arrows are pointing north (towards the top of the app), that
                means the wind is blowing from south to north.
              </div>
            </div>

            <div className="question 3">
              <a href="#3">What do the percentages mean?</a>
              <div className="answer" id="3" style={{ display: "none" }}>
                The percentage shown below the day label is the probability of
                precipitation occurring at any time within the day. For example,
                if the percentage is 90%, this means we are reporting that there
                is a 90% chance it will rain at some point on that day. The
                percentages shown if you click "Precip %" button are the
                probability of precipitation occurring at any time within that
                hour. For example, if the app showed "12AM 15%", this means we
                are reporting that there is a 15% chance it will rain at some
                point between 12am-1am. The percentage shown in the weather
                condition description is the maximum hourly precipitation
                probability of that time block on the timeline. Using a time
                block of 8am-12pm and "Rain (14%)" as an example, this means one
                hour between 8am-12pm has a 14% chance of rain and all other
                hours have less than or equal to 14% chance of rain.
              </div>
            </div>

            <div className="question 4">
              <a href="#4">
                Why is the daily precipitation percentage so high when the
                hourly precipitation value is so low?
              </a>
              <div className="answer" id="4" style={{ display: "none" }}>
                This is one confusing part of probability. While there may be
                just a small chance of precipitation during any individual hour,
                there are many chances for precipitation throughout the entire
                day. Because there are more chances for precipitation, the
                probability for the whole day will be higher than for any single
                hour. The more hours you wait, the more likely it will rain
                during at least one of them.
              </div>
            </div>

            <div className="question 5">
              <a href="#5">
                How do I view pressure, dew point, visibility, cloud cover, etc?
              </a>
              <div className="answer" id="5" style={{ display: "none" }}>
                You can tap the current temperature at the top of the app to
                show more current conditions.
              </div>
            </div>

            <div className="question 6">
              <a href="#6">Do you have a “feels like” feature?</a>
              <div className="answer" id="6" style={{ display: "none" }}>
                We display “feels like” temperature wherever appropriate and
                screen real estate allows. There is no longer a way to display
                “feels like” temperature instead of actual temperature.
              </div>
            </div>

            <div className="question 7">
              <a href="#7">In what countries are you available?</a>
              <div className="answer" id="7" style={{ display: "none" }}>
                Dark Sky is available in the United States (including Hawaii,
                Alaska, and Puerto Rico), the United Kingdom, and Ireland.
              </div>
            </div>

            <div className="question 8">
              <a href="#8">From where do you get your data?</a>
              <div className="answer" id="8" style={{ display: "none" }}>
                You can see our weather data sources here:{" "}
                <a href="https://darksky.net/dev/docs/sources">
                  https://darksky.net/dev/docs/sources
                </a>
              </div>
            </div>

            <div className="question 9">
              <a href="#9">
                In the new update, what happened to humidity, wind speed, uv
                index, and dew point information?
              </a>
              <div className="answer" id="9" style={{ display: "none" }}>
                We still have all of this information in the app. You can find
                it by scrolling to the bottom of each day, and swiping left on
                the orange labels.
              </div>
            </div>

            <div className="question 10">
              <a href="#10">
                In the new update, what happened to the next hour graph?
              </a>
              <div className="answer" id="10" style={{ display: "none" }}>
                This functionality hasn't changed. We only display the next hour
                graph if there is rain predicted within the next hour.
              </div>
            </div>
          </div>

          <div className="iphone-answers" style={{ display: "none" }}>
            <h2>Payments</h2>

            <div className="question 11">
              <a href="#11">Does Dark Sky support family sharing?</a>
              <div className="answer" id="11" style={{ display: "none" }}>
                Family sharing is enabled for Dark Sky, so if your family member
                tries to download Dark Sky you should have no problem. If you do
                have issues, please contact Apple here:
                <br />
                <a href="https://www.apple.com/support/ios/">
                  https://www.apple.com/support/ios/
                </a>
              </div>
            </div>

            <div className="question 12">
              <a href="#12">
                Do I have to pay again to install Dark Sky on another iOS
                device?
              </a>
              <div className="answer" id="12" style={{ display: "none" }}>
                Your purchase of Dark Sky will work across multiple iOS devices.
                Please make sure you are signed in with the same App Store ID
                that you originally purchased with on all of your devices so
                that we can recognize your account.
              </div>
            </div>

            <h2>Apple Watch</h2>
            <div className="question 13">
              <a href="#13">Why isn't the Apple Watch updating properly?</a>
              <div className="answer" id="13" style={{ display: "none" }}>
                <ol>
                  <li>Update Dark Sky on your iPhone to the latest version.</li>
                  <li>
                    Open Dark Sky on your Apple Watch and wait for the correct
                    location and forecast to load.
                  </li>
                  <li>
                    Turn off the Dark Sky complication(s), then turn back on
                  </li>
                </ol>
              </div>
            </div>

            <div className="question 14">
              <a href="#14">
                How do I change from Fahrenheit to Celsius on the Apple Watch?
              </a>
              <div className="answer" id="14" style={{ display: "none" }}>
                Go to Dark Sky settings on your phone, and switch the units.
                This may take several minutes to update the watch.
              </div>
            </div>

            <h2>Map</h2>

            <div className="question 15">
              <a href="#15">Why can’t I scroll further into the future?</a>
              <div className="answer" id="15" style={{ display: "none" }}>
                The zoomed out view is the forecast model view (on the scale of
                days) and the zoomed in view is the radar view (on the scale of
                hours). You can toggle between the two views by pinching to
                zoom. You can drag your finger along the timeline to play the
                future forecast.
              </div>
            </div>

            <div className="question 16">
              <a href="#16">
                Why is the map view zoomed out when I load it? Can I change
                this?
              </a>
              <div className="answer" id="16" style={{ display: "none" }}>
                The map zoom varies depending on nearby weather conditions. If
                there is no precipitation in your area, the zoom will be further
                out (otherwise the map would be completely blank). When there is
                precipitation in your area, the map will zoom in to provide an
                appropriate level of detail. We don’t offer a way to customize
                this functionality.
              </div>
            </div>
          </div>

          <div
            className="android-general android-answers"
            style={{ display: "none" }}
          >
            <p className="note__legacy">
              The Android and Wear OS apps are no longer available for download
              and will be shutdown on July 1, 2020. Existing users should update
              to the latest versions to continue using the apps until that time.
            </p>
            <h2>General</h2>
            <div className="question 17">
              <a href="#17">What do the timeline colors represent?</a>
              <div className="answer" id="17" style={{ display: "none" }}>
                The light gray color represents a clear sky (i.e. sunny) and the
                darker gray colors represent varying levels of cloudiness
                (partly cloudy, mostly cloudy, and overcast). The blue colors
                represent rain, and the blue-purple colors represent snow -- the
                lighter variations of these colors mean the precipitation is
                forecasted to be light.
              </div>
            </div>

            <div className="question 18">
              <a href="#18">What does X error message mean?</a>
              <div className="answer" id="18" style={{ display: "none" }}>
                <ul>
                  <li>
                    “Error retrieving forecast”, “Forecast unavailable”, or
                    “Sorry, unable to get forecast”: The app was unable to fetch
                    a forecast. This is usually due to connectivity issues.
                  </li>
                  <li>
                    “Next hour forecast temporarily unavailable (radar station
                    is down)”: This message means that the data from a
                    government run radar station is down in your area. We don't
                    have control over these stations, but this is generally
                    fixed within a few days.
                  </li>
                  <li>
                    “Detailed next hour forecast is unavailable due to lack of
                    radar coverage” or “Detailed next hour forecast is
                    unavailable”: We do not have enough radar data to create a
                    reliable next hour forecast for this location.
                  </li>
                  <li>
                    “Current Location Unavailable”, “Location unavailable”, or
                    “Sorry, unable to find your location”: The app could not
                    find your location. Please check that location is enabled
                    and Dark Sky has the location permission enabled.
                  </li>
                </ul>
              </div>
            </div>

            <div className="question 19">
              <a href="#19">What direction are the wind arrows?</a>
              <div className="answer" id="19" style={{ display: "none" }}>
                The arrows indicate the direction the wind is blowing. So if the
                arrows are pointing north (towards the top of the app), that
                means the wind is blowing from south to north.
              </div>
            </div>

            <div className="question 20">
              <a href="#20">What do the percentages mean?</a>
              <div className="answer" id="20" style={{ display: "none" }}>
                The percentage shown below the day label is the probability of
                precipitation occurring at any time within the day. For example,
                if the percentage is 90%, this means we are reporting that there
                is a 90% chance it will rain at some point on that day. The
                percentages shown if you click "Precip %" button are the
                probability of precipitation occurring at any time within that
                hour. For example, if the app showed "12AM 15%", this means we
                are reporting that there is a 15% chance it will rain at some
                point between 12am-1am. The percentage shown in the weather
                condition description is the maximum hourly precipitation
                probability of that time block on the timeline. Using a time
                block of 8am-12pm and "Rain (14%)" as an example, this means one
                hour between 8am-12pm has a 14% chance of rain and all other
                hours have less than or equal to 14% chance of rain.
              </div>
            </div>

            <div className="question 21">
              <a href="#21">
                Why is the daily precip percentage so high when the hourly
                precip values are so low?
              </a>
              <div className="answer" id="21" style={{ display: "none" }}>
                This is one confusing part of probability. While there may be
                just a small chance of precipitation during any individual hour,
                there are many chances for precipitation throughout the entire
                day. Because there are more chances for precipitation, the
                probability for the whole day will be higher than for any single
                hour. The more hours you wait, the more likely it will rain
                during at least one of them.
              </div>
            </div>

            <div className="question 22">
              <a href="#22">Why isn’t the address my house?</a>
              <div className="answer" id="22" style={{ display: "none" }}>
                We use geocoder services to determine addresses. Generally
                speaking this should be close to accurate, but not always
                perfect. It should not affect your forecasts, however, since we
                use your coordinates and not street address to generate the
                forecast.
              </div>
            </div>

            <div className="question 23">
              <a href="#23">Why aren’t you available in X?</a>
              <div className="answer" id="23" style={{ display: "none" }}>
                Dark Sky is only available in the US, UK and Ireland right now,
                as we need radar data in each region to provide the next hour
                forecasts that power the core features of our mobile apps.
              </div>
            </div>

            <div className="question 24">
              <a href="#24">In what countries are you available?</a>
              <div className="answer" id="24" style={{ display: "none" }}>
                Dark Sky is available in the United States (including Hawaii,
                Alaska, and Puerto Rico), the United Kingdom, and Ireland.
              </div>
            </div>

            <div className="question 25">
              <a href="#25">
                How do I view the current pressure, visibility, cloud cover,
                etc?
              </a>
              <div className="answer" id="25" style={{ display: "none" }}>
                You can tap the current temperature at the top of the app to
                show more current conditions.
              </div>
            </div>

            <div className="question 26">
              <a href="#26">
                How do I view each hour in the timeline instead of every other
                hour?
              </a>
              <div className="answer" id="26" style={{ display: "none" }}>
                You can long press on each timeline to switch between showing
                every hour and every other hour.
              </div>
            </div>

            <div className="question 27">
              <a href="#27">
                Why aren’t there arrows on the radar map on the globe?
              </a>
              <div className="answer" id="27" style={{ display: "none" }}>
                We are working on adding the arrows to the globe. Stay tuned!
              </div>
            </div>
            <div className="question 28">
              <a href="#28">
                Why does Google Play say the app is not compatible with my
                device?
              </a>
              <div className="answer" id="28" style={{ display: "none" }}>
                Dark Sky is only available in the US, UK, and Ireland, as we
                need radar data in each region to provide next hour forecasts.
                If your Google Play Store is based in a country other than the
                US and UK then it will show a message that Dark Sky is not
                compatible with your device.
              </div>
            </div>
          </div>
          <div
            className="android-subscriptions android-answers"
            style={{ display: "none" }}
          >
            <h2>Subcriptions</h2>
            <div className="question 29">
              <a href="#29">What is the price of the subscription?</a>
              <div className="answer" id="29" style={{ display: "none" }}>
                <ul>
                  <li style={{ listStyleType: "disc" }}>
                    US: $2.99 (plus applicable taxes) per year
                  </li>
                  <li style={{ listStyleType: "disc" }}>UK: £2.99 per year</li>
                  <li style={{ listStyleType: "disc" }}>IE: €3.09 per year</li>
                </ul>
              </div>
            </div>
            <div className="question 30">
              <a href="#30">Am I subscribed?</a>
              <div className="answer" id="30" style={{ display: "none" }}>
                <p>
                  You can view a list of all your subscriptions in the Google
                  Play Store app under “Subscriptions”.
                </p>
              </div>
            </div>
            <div className="question 31">
              <a href="#31">Does the subscription renew automatically?</a>
              <div className="answer" id="31" style={{ display: "none" }}>
                <p>
                  Yes, the subscription will renew automatically each year
                  unless it is cancelled.
                </p>
              </div>
            </div>
            <div className="question 32">
              <a href="#32">
                Does uninstalling the app cancel my subscription?
              </a>
              <div className="answer" id="32" style={{ display: "none" }}>
                <p>
                  No, uninstalling the app will not cancel your subscription. If
                  you uninstall the app without additionally cancelling your
                  subscription, your account will be charged when the
                  subscription renews.
                </p>
              </div>
            </div>
            <div className="question 33">
              <a href="#33">How do I cancel my subscription?</a>
              <div className="answer" id="33" style={{ display: "none" }}>
                <p>
                  You can cancel your subscription by tapping the “Manage
                  Subscription” button in Settings in the app, or under
                  “Subscriptions” in the Google Play Store app. For more help,
                  please see this article:{" "}
                  <a href="https://support.google.com/googleplay/answer/7018481">
                    https://support.google.com/googleplay/answer/7018481
                  </a>
                </p>
              </div>
            </div>
            <div className="question 34">
              <a href="#34">How do I renew my subscription?</a>
              <div className="answer" id="34" style={{ display: "none" }}>
                <p>
                  Your subscription will renew automatically unless you cancel.
                  If you have cancelled your subscription, you can re-subscribe
                  in the app when your current subscription period ends.
                </p>
              </div>
            </div>
            <div className="question 35">
              <a href="#35">How do I setup my subscription on my new device?</a>
              <div className="answer" id="35" style={{ display: "none" }}>
                <p>
                  The subscription is tied to your Google Play account. Please
                  make sure you are signed in with the Google account associated
                  with your subscription when installing the app from Google
                  Play so that the app can recognize your purchase.
                </p>
              </div>
            </div>
            <div className="question 36">
              <a href="#36">Can I use my subscription on multiple devices?</a>
              <div className="answer" id="36" style={{ display: "none" }}>
                <p>
                  Yes, your purchase of Dark Sky Premium will work across
                  multiple devices. Please make sure you are signed in with the
                  same Google account on all of your devices so that the app can
                  recognize your subscription.
                </p>
              </div>
            </div>
            <div className="question 37">
              <a href="#37">
                Can I transfer my subscription from one account to another?
              </a>
              <div className="answer" id="37" style={{ display: "none" }}>
                <p>
                  Google Play does not support transferring in-app purchases
                  from one account to another.
                </p>
              </div>
            </div>
            <div className="question 38">
              <a href="#38">How do I edit my payment method?</a>
              <div className="answer" id="38" style={{ display: "none" }}>
                <p>
                  Please see this article for more help editing your Google Play
                  payment method:{" "}
                  <a href="https://support.google.com/googleplay/answer/4646404">
                    https://support.google.com/googleplay/answer/4646404
                  </a>
                </p>
              </div>
            </div>
            <div className="question 39">
              <a href="#39">
                The app is asking me to subscribe again, how do I restore my
                subscription?
              </a>
              <div className="answer" id="39" style={{ display: "none" }}>
                <ol>
                  <li>
                    Clear the cache of Dark Sky and Google Play Store apps
                    (Settings &gt; Apps &gt; Dark Sky/Google Play Store &gt;
                    Storage &gt; Clear cache)
                  </li>
                  <li>Uninstall Dark Sky from your device</li>
                  <li>
                    Login to play.google.com on a desktop browser with the
                    account associated with your subscription
                  </li>
                  <li>Install Dark Sky to your device using the website</li>
                </ol>
                <p>
                  ** Some devices required a device restart after either step 2
                  or step 4 in order for the fix to take effect.
                </p>
              </div>
            </div>
            <div className="question 40">
              <a href="#40">
                I followed the steps above to restore my subscription, but the
                app continues to periodically ask me subscribe.
              </a>
              <div className="answer" id="40" style={{ display: "none" }}>
                <p>
                  There is an issue on Google Play with multiple accounts and
                  in-app purchases which can cause an app to become associated
                  with the wrong account. For most users removing Dark Sky from
                  the app library of their other accounts resolved this issue:
                </p>
                <ol>
                  <li>Uninstall Dark Sky app from your device</li>
                  <li>Open Google Play Store app on your device</li>
                  <li>
                    Switch to account that is not associated with your Dark Sky
                    subscription
                  </li>
                  <li>Open "My apps &amp; games"</li>
                  <li>Go to "Library" tab</li>
                  <li>
                    Find Dark Sky app in the list, tap the "x" icon, and confirm
                    the removal
                  </li>
                </ol>
                <p>** Repeat steps 3-6 as needed</p>
              </div>
            </div>
            <div className="question 41">
              <a href="#41">Does the subscription work with family library?</a>
              <div className="answer" id="41" style={{ display: "none" }}>
                <p>
                  Google Play does not allow users to share in-app purchases
                  within the family library. Please see this article for more
                  information:{" "}
                  <a href="https://support.google.com/googleplay/answer/7007852">
                    https://support.google.com/googleplay/answer/7007852
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="location-answers android-answers"
            style={{ display: "none" }}
          >
            <h2>Location</h2>

            <div className="question 42">
              <a href="#42">How do I search for a new location?</a>
              <div className="answer" id="42" style={{ display: "none" }}>
                If you tap the search icon or the location bar at the top of the
                app, you will be able to search for a new location. We save your
                past search locations so you can find them again easily.
              </div>
            </div>

            <div className="question 43">
              <a href="#43">How do I delete a location?</a>
              <div className="answer" id="43" style={{ display: "none" }}>
                Swipe to the left on top of the city name. Swipe again to remove
                the “undo” button.
              </div>
            </div>

            <div className="question 44">
              <a href="#44">
                Why isn’t my address updating to my current location?
              </a>
              <div className="answer" id="44" style={{ display: "none" }}>
                Please make sure you have Location permissions turned on for
                Dark Sky. Navigate to your phone’s Android Settings &gt; Apps
                &gt; Dark Sky and turn on Location permissions. If you are using
                Android 6, you can visit Permissions directly, to make sure
                Location is turned on for Dark Sky.
              </div>
            </div>

            <div
              className="question android-answers 45"
              style={{ display: "none" }}
            >
              <a href="#45">
                Dark Sky uses my location in the background when notifications
                are turned on. Won’t this drain my battery?
              </a>
              <div className="answer" id="45" style={{ display: "none" }}>
                No, this should not drain your battery. Dark Sky uses Android’s
                built-in location services, which are designed to minimize
                battery usage while operating in the background.
              </div>
            </div>
          </div>

          <div
            className="notification-answers android-answers"
            style={{ display: "none" }}
          >
            <h2>Notifications</h2>
            <div className="question 46">
              <a href="#46">Why am I not receiving my notifications?</a>
              <div className="answer" id="46" style={{ display: "none" }}>
                Make sure you’ve given permission for Dark Sky to use your
                location and that you haven’t removed permission for Dark Sky to
                send notifications. Navigate to your phone’s Android Settings
                &gt; Apps &gt; Dark Sky and turn on both Location and
                Notification permissions. On Android 6 you can visit Permissions
                directly to make sure Location is turned on and Notifications
                are enabled. On Android versions 4 &amp; 5, make sure the “Show
                Notifications” box is checked.
              </div>
            </div>
          </div>

          <div
            className="notification-answers iphone-answers"
            style={{ display: "none" }}
          >
            <h2>Notifications</h2>
            <div className="question 47">
              <a href="#47">Why am I not receiving my notifications?</a>
              <div className="answer" id="47" style={{ display: "none" }}>
                Please make sure you have Location Services and Notifications
                turned on for Dark Sky. Location Services: you can check by
                going to the iPhone Settings &gt; App &gt; Privacy &gt; Location
                Services, and then scroll to Dark Sky. It should be set to
                Always. Notifications: go to iPhone Settings &gt; App &gt;
                Notifications, and then scroll down to Dark Sky. It should be
                set to On. If this doesn’t solve your problem, please uninstall
                and re-download the app (this is free ‐ you will not be charged
                as long as you sign in with the same App Store ID that you
                originally purchased with).
              </div>
            </div>
          </div>

          <div
            className="location-answers iphone-answers"
            style={{ display: "none" }}
          >
            <h2>Location</h2>
            <div className="question 48">
              <a href="#48">How do I search for a new location?</a>
              <div className="answer" id="48" style={{ display: "none" }}>
                If you tap the magnifying glass at the top left of your main
                screen, you will be able to search for a new location. We save
                your past search locations in the “Recent Searches” section so
                you can find them again easily.
              </div>
            </div>

            <div className="question 49">
              <a href="#49">How do I permanently save a location?</a>
              <div className="answer" id="49" style={{ display: "none" }}>
                Tap the icon to the right of each city and drag it to the Saved
                Locations section. You can reorder cities in your Saved
                Locations by dragging the same icon.
              </div>
            </div>

            <div className="question 50">
              <a href="#50">How do I delete a location?</a>
              <div className="answer" id="50" style={{ display: "none" }}>
                Tap the red icon on the left of each city and tap the “Delete”
                button that will appear on the right.
              </div>
            </div>

            <div className="question 51">
              <a href="#51">Why isn’t the location showing my home address?</a>
              <div className="answer" id="51" style={{ display: "none" }}>
                We use third party geocoder services to determine your address.
                Generally speaking, this should be close to accurate, but not
                always perfect. It will not affect your forecasts, however,
                since we use your coordinates, not street address, to generate a
                forecast.
              </div>
            </div>

            <div className="question 52">
              <a href="#52">
                Why am I getting notifications for the wrong location?
              </a>
              <div className="answer" id="52" style={{ display: "none" }}>
                Dark Sky may be using an old or cached location. Please try
                uninstalling and reinstalling the app (there’s no extra charge
                for this if you are signed in with the same App Store ID that
                you originally purchased with).
              </div>
            </div>

            <div className="question 53">
              <a href="#53">
                Dark Sky uses my location in the background when notifications
                are turned on. Won’t this drain my battery?
              </a>
              <div className="answer" id="53" style={{ display: "none" }}>
                No, this will not drain your battery. Dark Sky does not use GPS,
                which can be a big battery hog, to get your location in the
                background. Rather, your phone will periodically find your
                location via wifi and cell tower triangulation, which doesn’t
                have an adverse effect on battery.
              </div>
            </div>
          </div>

          <div className="website-answers">
            <h2>Website</h2>

            <div className="question 54">
              <a href="#54">What do the timeline colors represent?</a>
              <div className="answer" id="54" style={{ display: "none" }}>
                The light gray color represents a clear sky (i.e. sunny) and the
                darker gray colors represent varying levels of cloudiness
                (partly cloudy, mostly cloudy, and overcast). The blue colors
                represent rain, and the blue-purple colors represent snow -- the
                lighter variations of these colors mean the precipitation is
                forecasted to be light.
              </div>
            </div>

            <div className="question 55">
              <a href="#55">To what direction do the wind arrows point?</a>
              <div className="answer" id="55" style={{ display: "none" }}>
                The arrows indicate the direction the wind is blowing. So if the
                arrows are pointing north (towards the top of the app), that
                means the wind is blowing from south to north.
              </div>
            </div>

            <div className="question 56">
              <a href="#56">What do the percentages mean?</a>
              <div className="answer" id="56" style={{ display: "none" }}>
                The percentage shown below the day label is the probability of
                precipitation occurring at any time within the day. For example,
                if the percentage is 90%, this means we are reporting that there
                is a 90% chance it will rain at some point on that day.
                <br />
                <br />
                The percentages shown if you click "Precip %" button are the
                probability of precipitation occurring at any time within that
                hour. For example, if the app showed "12AM 15%", this means we
                are reporting that there is a 15% chance it will rain at some
                point between 12am-1am.
                <br />
                <br />
                The percentage shown in the weather condition description is the
                maximum hourly precipitation probability of that time block on
                the timeline. Using a time block of 8am-12pm and "Rain (14%)" as
                an example, this means one hour between 8am-12pm has a 14%
                chance of rain and all other hours have less than or equal to
                14% chance of rain.
              </div>
            </div>

            <div className="question 57">
              <a href="#57">
                Why is the daily precip percentage so high when the hourly
                precip values are so low?
              </a>
              <div className="answer" id="57" style={{ display: "none" }}>
                This is one confusing part of probability. While there may be
                just a small chance of precipitation during any individual hour,
                there are many chances for precipitation throughout the entire
                day. Because there are more chances for precipitation, the
                probability for the whole day will be higher than for any single
                hour. The more hours you wait, the more likely it will rain
                during at least one of them.
              </div>
            </div>

            <div className="question 58">
              <a href="#58">Why isn’t the address my house?</a>
              <div className="answer" id="58" style={{ display: "none" }}>
                We use geocoder services to determine addresses. Generally
                speaking this should be close to accurate, but not always
                perfect. It should not affect your forecasts, however, since we
                use your coordinates and not street address to generate the
                forecast.
              </div>
            </div>

            <div className="question 59">
              <a href="#59">
                Why aren’t there arrows on the radar map on the globe?
              </a>
              <div className="answer" id="59" style={{ display: "none" }}>
                We are working on adding the arrows to the globe. Stay tuned!
              </div>
            </div>
            <div className="question 60">
              <a href="#60">
                Does the Time Machine show historic weather or the historic
                predictions?
              </a>
              <div className="answer" id="60" style={{ display: "none" }}>
                The Time Machine reports the historic weather observations using
                nearby weather station observations.
              </div>
            </div>
            <div className="question 61">
              <a href="#61">
                In the Time Machine, how do you make predictions for the weather
                so far out?
              </a>
              <div className="answer" id="61" style={{ display: "none" }}>
                We look at the historical weather from the past and create an
                estimate based on the averages calculated.
              </div>
            </div>
            <div className="question 62">
              <a href="#62">Can I choose my own preferred units or language?</a>
              <div className="answer" id="62" style={{ display: "none" }}>
                You absolutely can. In the top right corner of the site, you can
                select your preferred units and language from the drop-downs.
              </div>
            </div>
            <h3>Maps</h3>
            <div className="question 63">
              <a href="#63">
                What do the precipitation percentages and humidity percentages
                indicate?
              </a>
              <div className="answer" id="63" style={{ display: "none" }}>
                The probability of precipitation is simply a statistical
                probability of 0.01 inch or more of precipitation at a given
                area in the given forecast area in the time period specified.
                For example, if a forecast for a given location says that there
                is a 40% chance of rain this afternoon, then there is a 40%
                chance of rain at any point in that location for noon to 6 p.m.
                local time.
                <br />
                The humidity percentage represents the relative humidity on a
                100% scale, and tells you how saturated the air is with
                moisture. The higher the value, the more humid (and potentially
                “sticky”) it will feel.
              </div>
            </div>
            <div className="question 64">
              <a href="#64">What do the wind arrows indicate?</a>
              <div className="answer" id="64" style={{ display: "none" }}>
                The wind arrows point in the direction in which the wind is
                blowing. An arrow pointing south represents a northerly wind
                originating from the north and moving south.
              </div>
            </div>
            <div className="question 65">
              <a href="#65">What do the colors mean on the wind maps?</a>
              <div className="answer" id="65" style={{ display: "none" }}>
                The color range is from blue to red. The blue indicates a lower
                value while the red indicates a much higher value. A white hue
                indicates a value somewhere in the middle.
              </div>
            </div>
            <div className="question 66">
              <a href="#66">
                What’s the difference between wind gust and wind speed?
              </a>
              <div className="answer" id="66" style={{ display: "none" }}>
                All gusts are a type of wind. A gust is a sudden increase of the
                wind’s speed that lasts no more than 20 seconds. This usually
                occurs when wind speeds reach a peak of at least 16 knots. A
                wind gust usually comes in 2-minute intervals.
              </div>
            </div>
          </div>

          <div className="icons-and-units-answers">
            <h2>Icons and Units</h2>

            <div className="question 67">
              <a href="#67">What do the icons mean?</a>
              <div className="answer" id="67" style={{ display: "none" }}>
                <img alt="icons" src="/images/faq-icons.png" />
              </div>
            </div>

            <div className="question 68">
              <a href="#68">How do I change from Fahrenheit to Celsius?</a>
              <div className="answer" id="68" style={{ display: "none" }}>
                You can change the units by tapping “Settings” in the app.
              </div>
            </div>
          </div>

          <div className="help">
            <div className="question 69">
              <a href="#69">Need More Help?</a>
              <div className="answer" id="69" style={{ display: "none" }}>
                <div>
                  <a className="new-help-link" href="mailto:ios@darksky.net">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContentHelp;
