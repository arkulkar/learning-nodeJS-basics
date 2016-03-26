/**
 * Created by arkulkar on 3/21/2016.
 */

module.exports = {
    printAbc : printAbc,
    printDef : printDef,
    printInternalCall : internalCall
};


function printAbc()
{
    console.log('abc');
}

function printDef()
{
    console.log('def');
}

function internalCall()
{
    printXyz();
}

function printXyz()
{
    console.log('XYZ');
}