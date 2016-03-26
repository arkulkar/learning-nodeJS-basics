/**
 * Created by arkulkar on 3/20/2016.
 */
var sum = 0;
for (var i = 2; i < process.argv.length; i++){
    sum = sum + Number(process.argv[i]);
}
console.log(sum);