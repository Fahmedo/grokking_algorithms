'use strict';

function binary_search(list, item) {
  let low = 0; //lowest number
  let high = list.length - 1; //highest number which is the last number

  // while low is less or = to high
  while (low <= high) {
    // get the middle number by dividing array to 2
    const mid = Math.floor((low + high) / 2);
    // move the guess number by postion of mid
    const guess = list[mid];

    if (guess === item) {
      // if guess = item return
      return mid;
    } else if (guess > item) {
      //   else if guess > item decrease high and increase low
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  //   if item not part of array return null
  return null;
}
const my_list = [1, 3, 5, 7, 9];

console.log(binary_search(my_list, 3));
console.log(binary_search(my_list, -1));
