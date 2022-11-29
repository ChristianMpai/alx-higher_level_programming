#!/usr/bin/node
// prints first argument passed
if (!parseInt(process.argv[2])) {
  console.log('Not a number');
} else {
  let num = parseInt(process.argv[2]);
  console.log('My number: ' + num);
}
