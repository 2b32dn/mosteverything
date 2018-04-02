For each of the following HTTP requests, ascertain whether or not they are properly formatted. If they aren't, specify the error.

a) 
```
GET HTTP/1.1 /
Host: www.nowhere123.com
Accept: image/gif, image/jpeg, */*
Accept-Language: en-us
Accept-Encoding: gzip, deflate
User-Agent: Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)

```
b)
```
/index.html HTTP/1.0 GET

```

c)
```
GET /test.html HTTP/1.0
Connection: Keep-Alive

```

d)
```
GET http://www.amazon.com/index.html
Host: www.amazon.com
Connection: Close

```