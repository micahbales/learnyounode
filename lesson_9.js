// my solution

const http = require('http');
const bl = require('bl');
const args = process.argv;

let responses = [];

for (let i=2; i < 5; i++) {
  http.get(args[i], function(res) {
    res.pipe(bl(function(err, data) {
      if (err) return console.error(err);
      responses[i] = data;
    }));
  });
}

process.on('exit', function() {
  responses.forEach(function(data) {
    data = data.toString();
    console.log(data);
  });
});
