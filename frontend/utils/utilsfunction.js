
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
  }

function timestampconvert(date) {
    let milliseconds = 1000*date
    let dateObject = new Date(milliseconds)
    return dateObject.toLocaleString()
  }
  
module.exports = {
    numberWithSpaces,
    timestampconvert
  };