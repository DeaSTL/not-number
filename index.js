Number.isNan = require('is-nan');

module.exports = function (num) {
  return Number.isNan(parseInt(num, 10));
}
