/**
 * Created by arkulkar on 3/20/2016.
 */
var path = process.argv[2];
var extension = process.argv[3];
require('./module-op')(path, extension);
var op = require('./module');
op.printAbc();
op.printDef();
op.printInternalCall();

var mod = require('./module1');
mod.printHello();
mod.printMeow();

var mod1 = require('./module2')('arkulkar', 'pjpandey');
mod1.printMyName();
mod1.printYourName();