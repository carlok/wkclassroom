const Unique = require('uniq');

module.exports = {
  run: function (i) {
    console.log('.run from library = ' + (parseInt(i) * parseInt(i)));

    const data = [1, 2, 2, 3, 4, 5, 5, 5, 6];

    console.log(Unique(data));
  }
};
