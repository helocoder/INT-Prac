const zlib = require('zlib');
const gzip = zlib.createGzip();
const fs = require('fs');

const inp = fs.createReadStream('dummy.txt');
const opt = fs.createWriteStream('dummy.txt.gz');

inp.pipe(gzip).pipe(opt);