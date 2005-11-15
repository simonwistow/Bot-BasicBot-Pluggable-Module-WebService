function ask_mind( string, target ) {

  // Cross-platform attempt to get XMLHTTPRequest object
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = new XMLHttpRequest();
    }
  }

//  var params = [];
//  params["q"] = string;

  // build a query string from the method name and params
  var url = "./mind.cgi?q="+string
//  for (p in params) {
//    url += "&"+encodeURIComponent(p)+"="+encodeURIComponent(params[p]);
//  }

  // when the state changes, this closure gets called.
  // TODO - are we not leaking huge gobs of memory here?
  // TODO - consider callbacks for other states? Probably not, we expect
  // most calls to be very fast.
  xmlhttp.onreadystatechange = function() {

    if (xmlhttp.readyState == 4) { // state is 'complete' - we've got it.

      // I hope this will never happen.
//      if (xmlhttp.status != 200) {
//        alert("error response: "+xmlhttp.status);
//        return;
//      }

      document.getElementById(target).innerHTML += xmlhttp.responseText + "\n";

    }
  };

  // actually send the request
  xmlhttp.open("GET", url, true);
  xmlhttp.send(null);

  // useful for onclick handlers, etc.
  return false;
}
