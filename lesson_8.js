// my solution

const http = require('http');
const url = process.argv[2];

let allData = "";

http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(chunk) {
    allData += chunk;
  });
});

process.on('exit', function() {
  console.log(allData.length);
  console.log(allData);
});
