var net = require('net');
function makeRequest(addr, req, f) {
    var client = new net.Socket();
    var finalData = "";
    client.connect(80, addr, function () {
        return client.write(req);
    });
    client.on("data", function (data) {
        finalData += data.toString();
    });
    client.on('close', function () {
        f(finalData);
    });
}

//The following string *MUST* end with 2 newlines
function generateHTTPRequest(host, path) {
    return `GET ${path} HTTP/1.1
host: ${host}
Connection: close

`;
}

// IGNORE EVERYTHING BEFORE THIS LINE

function process(httpResponse) {
    console.log(httpResponse)
    if (httpResponse.indexOf('manipulated') != -1) {
        console.log("the word is on the page");
    } else {
        console.log("the word is not the page");
    }
}
var httpRequest = generateHTTPRequest('www.dolekemp96.org', '/');

makeRequest("www.dolekemp96.org", httpRequest, process)