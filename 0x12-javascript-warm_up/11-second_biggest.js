#!/usr/bin/node
// searches the second biggest integer in the list of arguments
if (!process.argv[2] || !process.argv[3]) { console.log(0); } else {
// store args in a list
  let list = [];
  for (let i = 0; process.argv[i]; i++) {
    list.push(process.argv[i]);
  }
  // sort list from least to greatest
  list.sort();
  // find 2nd to last element in list
  let idx = list.length - 2;
  console.log(list[idx]);
}
