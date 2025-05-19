// Find the smallet in an array
//  the function here loop through array find its smallest value in an array.

const findSmallest = (arr) => {
  // destruct the array, extract and  save the firsr element in smallestEl
  //   let smallestEl = arr[0];
  let [smallestEl] = arr;
  //   starting from index postion 0
  let smallestIndex = 0;
  //   for count i starting at 1 if i is less than the length of the array itrate and icrement i by 1 (i+1)
  for (let i = 1; i < arr.length; i++) {
    // store array in potion of the current count (i) in variable name el
    const el = arr[i];
    // is  el is greater or equal to smallestEl continue the iteration process
    if (el >= smallestEl) continue;
    // replace value of smallest with the current value of el
    smallestEl = el;
    // replace index with current count (i)
    smallestIndex = i;
  }
  //   return index of the smallest value smallestIndex
  return smallestIndex;
};

// Selction sort

const selectionSort = (arr) => {
  // save the size of the length of the array in size
  const size = arr.length;

  //   create a new array ans store in result then let the values in the array be 0's [0,0,0,0,0]
  const result = new Array(size).fill(0);

  //   for counter start at 0 if counter is less than the size of array increment by 1
  for (let i = 0; i < size; i++) {
    // save smallext index postion returned by the findSmallest function
    const smallestIndex = findSmallest(arr);

    // get the first index in the array and store the value  in to smallestEl
    const [smallestEl] = arr.splice(smallestIndex, 1);
    // save smallestEl value in postion of counter (startinmg from 0...) until counter is equal length of array.
    result[i] = smallestEl;
  }
  //   print result
  return result;
};

const sourceArray = [5, 3, 6, 2, 10];
const findSmallestInArray = findSmallest(sourceArray);
const sortedArray = selectionSort(sourceArray);

console.log('Source array - ', sourceArray);
console.log('Smallest in  array - ', findSmallestInArray);
console.log('New sorted array - ', sortedArray);
