// make a http server in node and send res to client ?
const fs = require('fs');
const http = require('http');

const options = {
    hostname: '127.0.0.1',
    port: 9500,
    method: 'GET',
    path: '/_search',
    headers: {
        'Content-Type': 'application/json'
    }
};

http.createServer((req, res) => {
    req.pipe(fs.createWriteStream('reqBody.json'));

    let request = http.request(options, (newRes) => {
        newRes.pipe(res);
    });
    fs.createReadStream('reqBody.json').pipe(request);

    res.setHeader('Content-Type', 'application/json');

}).listen(3000, '127.0.0.1');


