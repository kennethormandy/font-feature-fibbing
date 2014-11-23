/*! font-feature-affecting v0.1.0 | MIT License | github.com/kennethormandy/font-feature-affecting */

module.exports = function() {

  if(typeof document !== 'undefined' && 'FontFeatureSettings' in document.body.style !== true || 'MozFontFeatureSettings' in document.body.style !== true) {
    var ua = navigator.userAgent;
    if('WebkitFontFeatureSettings' in document.body.style !== true || (ua.match(/Safari/g) && ua.match(/Chrom/g) === null)) {
      if(parseInt(ua.split('Version/')[1].split('.')[0], 10) <= 8) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  } else {
    return true;
  }

  return false;

}
