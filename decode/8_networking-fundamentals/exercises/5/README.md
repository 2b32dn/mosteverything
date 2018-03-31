make a request to dolekemp96.com and figure out the length of the html page

# Reference

```javascript
var net = require('net');
function makeRequest(addr, req, f) {
    var client = new net.Socket();
    client.connect(80, addr, function () {
        return client.write(req);
    });
    client.on("data", function (data) {
        f(data.toString());
    });
}

//The following string *MUST* end with 2 newlines
var http_request =
    `GET /index.html HTTP/1.1
host: www.dolekemp96.com

`;

makeRequest("www.dolekemp96.org", http_request, x => console.log(x))
```

##Solution
https://youtu.be/o1GNOL2NZDU
