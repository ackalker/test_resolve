//var resolve = require.resolve;
var resolve = require('resolve').sync;

var req = './mydir';

//setInterval( function(req) {
  var res = resolve(req);
  console.log("resolve('"+req+"') -> '"+res+"'");
//}, 1000, req);
