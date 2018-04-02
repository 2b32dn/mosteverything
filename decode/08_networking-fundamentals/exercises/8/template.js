function process(httpRequest) {
    return makeResponse('text/html', "<h1>hello</h1>");
}

// IGNORE EVERYTHING AFTER THIS LINE!!!!!

var net = require('net');
function makeResponse(contentType, x) {
    return `
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache/2.2.14 (Win32)
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
Content-Length: ${x.length}
Content-Type: ${contentType}
Connection: Closed

${x}`
}
function createServer(f) {
    net.createServer(function (sock) {
        sock.on('data', function (data) {
            var httpResponse = f(data.toString());
            if(!httpResponse) httpResponse = "";
            sock.write(httpResponse);
        });
    }).listen(3000)
}


createServer(process);
