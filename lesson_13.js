// my version

const http = require('http');
const url = require('url');
const port = Number(process.argv[2]);

const server = http.createServer((req, res) => {

  let urlObject = url.parse(req.url, true);

  if (urlObject.path.includes('/api/parsetime')) {

    let time = new Date(urlObject.query.iso);

    // respond with parsetime
    res.write(JSON.stringify(
      {
         "hour": time.getHours(),
         "minute": time.getMinutes(),
         "second": time.getSeconds()
      }
    ));

  } else if (urlObject.path.includes('/api/unixtime')) {
    // respond with unixtime
    res.write(JSON.stringify(
      {"unixtime": Date.parse(urlObject.query.iso)}
    ));
  }

  res.end();
});

server.listen(port);
