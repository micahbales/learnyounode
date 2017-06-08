var myModule = require('./lesson_6_module');

var dir = process.argv[2];
var ext = '.' + process.argv[3];

myModule(dir, ext, function(err, value) {
  if (err) return console.error(err);

  value.forEach(function(file) {
    console.log(file);
  });
});
