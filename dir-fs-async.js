/**
 * Created by arkulkar on 3/20/2016.
 */
var fs = require('fs');
var path = process.argv[2];
var extension = process.argv[3];
fs.readdir(path, readDir);

function readDir(err,list) {
    for (var i = 0; i < list.length; i++) {
        var ext = list[i].toString().split('.')[1];
        //console.log(ext);
        if (ext === extension) {
            console.log(list[i]);
        }
    }
}
