/**
 * Scribe Ad script containing an Ad element. This is loaded in device_fingerprint.js to detect the presence of an adblocker.
 *
 * @author    Rajat Ashok <rashok@wayfair.com>
 * @copyright 2018 Wayfair, LLC - All rights reserved
 */
(function __HORCRUX__(){ (function() {
  var adElement = window.document.createElement('div');
  adElement.id = 'ad-container';
  adElement.innerHTML = '&nbsp;';
  adElement.className =
    'adbanner adsbox pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links';
  window.document.body.appendChild(adElement);
})(); })();
