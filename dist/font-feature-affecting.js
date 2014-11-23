!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.fontFeatureAffecting=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});