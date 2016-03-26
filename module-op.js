/**
 * Created by arkulkar on 3/20/2016.
 */
var fs = require('fs');
module.exports = readDir;
function readDir(path,extension) {
    fs.readdir(path, function(err, list){
        for (var i = 0; i < list.length; i++) {
            var ext = list[i].toString().split('.')[1];
            if (ext === extension) {
                console.log(list[i]);
            }
        }
    });
}
