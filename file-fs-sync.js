/**
 * Created by arkulkar on 3/20/2016.
 */
var fs = require('fs');
var path = process.argv[2];
var buf = fs.readFileSync(path);
var content = buf.toString();
var arr = content.split('\n');
console.log(arr.length-1);

