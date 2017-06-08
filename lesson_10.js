const net = require('net');

function zeroFill(i) {
  return (i < 10 ? '0':'') + i
}

function currentTime() {
  let date = new Date();
  let YYYY = date.getFullYear();
  let MM = zeroFill(date.getMonth() + 1);
  let DD = zeroFill(date.getDate());
  let hh = date.getHours();
  let mm = date.getMinutes();

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}\n`
}


const server = net.createServer((socket) => {
  socket.write(currentTime());
  socket.end();
});

server.listen(process.argv[2]);
