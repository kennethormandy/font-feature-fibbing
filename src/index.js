var ua = require('vigour-ua')

module.exports = function () {

  if (typeof document === 'undefined') {
    return false
  } else {
    // If font-feature-settings or -webkit-font-feature-settings are present
    if (document.body.style['fontFeatureSettings'] === '' || document.body.style['webkitFontFeatureSettings'] === '') {
      var agent = ua(navigator.userAgent)
      if (agent.browser === 'safari' && agent.version <= 9.3) {
        return false
      } else {
        // Otherwise, font-feature-settings is supported in some capacity
        return true
      }
    } else if (document.body.style['mozFontFeatureSettings'] === '' || document.body.style['MozFontFeatureSettings'] === '' || typeof document.body.style['msFontFeatureSettings'] === '') {
      // If font-feature-settings isn’t supported, we’re still good if -moz- or -ms- are here
      return true
    }
    return false
  }
}
