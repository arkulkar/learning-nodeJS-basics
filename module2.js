/**
 * Created by arkulkar on 3/21/2016.
 */

module.exports = function(prefix, postfix){

    function printMyName(){
        console.log(prefix + 'myName' + postfix);
    }

    function printYourName() {
        console.log(prefix + 'yourNmae' + postfix);
    }

    return {
        printMyName : printMyName,
        printYourName : printYourName
    }
};