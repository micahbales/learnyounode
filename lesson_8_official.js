/*
learnyounode's official solution
requiring BufferList as a dependency
*/

const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function(res) {
  res.pipe(bl(function(err, data) {
    if (err) return console.error(error);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
