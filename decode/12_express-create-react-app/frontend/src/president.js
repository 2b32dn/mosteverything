var sha1 = require('sha1')
var f = x => sha1('hash ' + x.length)
var str = ""
for(var i = 0; i < 10; i++) {
    str = str + 'a';
    console.log('string ' + str + ' ' + f(str))
}
var passwd = 'pineapple'
console.log('super secret hash ' + f(passwd))