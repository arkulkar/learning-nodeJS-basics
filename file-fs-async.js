/**
 * Created by arkulkar on 3/20/2016.
 */
var fs = require('fs');
var path = process.argv[2];
fs.readFile(path, function read(err, buf){
     var content  = buf.toString();
     var arr = content.split('\n');
     console.log(arr.length-1);
});
