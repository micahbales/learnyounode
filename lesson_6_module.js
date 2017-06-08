var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback) {
  let result = [];

  fs.readdir(dir, function (err, list) {
    if (err) return console.error(err);

    for (i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === ext) {
        result.push(list[i]);
      }
    }
    return callback(null, result);
  });
}
