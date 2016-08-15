var fs = require('fs');

var data = process.argv[2];
fs.readFile(data, function (err, contents) {
  var lines = contents.toString().split("\n").length - 1;
  console.log(lines);
});
