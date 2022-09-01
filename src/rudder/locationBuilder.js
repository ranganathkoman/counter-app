export const location =  {};

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    } else {
      return "Geolocation is not supported by this browser.";
    }
}

getLocation();

function getPosition(position) {
    location.latitude = position.coords.latitude;
    location.longitude = position.coords.longitude;
}

