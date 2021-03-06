'use strict';

function normalize(digitArray) {
  while (digitArray[0] === 0) {
    digitArray.shift();
  }
  return digitArray;
}

function divmod(digitArray, base, divisor) {
  var remainder = 0;
  var quotient = [];
  for (var j = 0; j < digitArray.length; j++) {
    var temp = remainder * base + parseInt(digitArray[j], 10);
    quotient.push(Math.floor(temp / divisor));
    remainder = temp % divisor;
  }
  return {quotient: normalize(quotient), remainder: remainder};
}

function convertBase(digitArray, fromBase, toBase) {
  var result = [];
  var dividend = digitArray;
  while (dividend.length > 0) {
    var qr = divmod(dividend, fromBase, toBase);
    result.unshift(qr.remainder);
    dividend = qr.quotient;
  }
  return normalize(result);
}

module.exports = convertBase;
