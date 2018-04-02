var HTMLBody = `<html>
    <body>
    <div id='somediv'></div>
    <script src='/somescript.js'></script>

    </body>
    </html>
    `;


function process(httpRequest) {
    var lines = httpRequest.split('\n');
    var statusLine = lines.shift();
    var pathElements = statusLine.split(' ')
    var path = pathElements[1];
    if (path === '/') {
        var response = makeResponse('text/html', HTMLBody);
        return response;
    }
    if (path === '/somescript.js') {
        var contents = 'document.getElementById("somediv").innerText="success!";'
        var response = makeResponse('application/javascript', contents);
        return response;
    }
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
            if (!httpResponse) httpResponse = "";
            sock.write(httpResponse);
        });
    }).listen(3000)
}

createServer(process);
