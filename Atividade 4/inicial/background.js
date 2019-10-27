var googleSearch = "https://www.google.com/search?q="
var searchTerms = "o efeito do consumo de café"

function pad(value) {
  value = (value > 9) ? value : "0" + value;
  return String(value);
}

function timeStamp() {
  var currentTime = new Date();
  var datestr = currentTime.getFullYear() + "" + pad(currentTime.getMonth() + 1 ) + ""+ pad(currentTime.getDate());
  var timestr = pad(currentTime.getHours()) + "" + pad(currentTime.getMinutes()) + "" + pad(currentTime.getSeconds()) + "" + pad(currentTime.getMilliseconds());
  return datestr + timestr;
}

chrome.runtime.onMessage.addListener(
	// complete the code
);
