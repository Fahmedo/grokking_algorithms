//  Using recursion

// create a findSmallest function that takes the arr, smallestEl at postion 0, smallestIndex which is 0 and count starting from
const findSmallest = function (
  arr,
  smallest = arr[0],
  smallestIndex = 0,
  i = 1
) {
  // if lenght of arr is less or equal to count print smallestIndex
  if (arr.length <= i) return smallestIndex;
  //   save current index postion with the value of i as current position
  const curr = arr[i];
  if (curr < smallest) {
    // if current is less than smallest
    // save value of current to smallest and i to smallestIndex
    smallest = curr;
    smallestIndex = i;
  }
  //   print smallest and increase count by 1
  return findSmallest(arr, smallest, smallestIndex, i + 1);
};

// create a SelectionSort function that takes arr and result as an empty array
const selectionSort = function (arr, result = []) {
  // if length of array is greater than 0 continue process
  if (arr.length > 0) {
    // save position of the current smallest element to smallestIndex
    const smallestIndex = findSmallest(arr);
    //  get element at the current smallestIndex and save to smallest
    const [smallest] = arr.splice(smallestIndex, 1);
    // push the current small element to result array.
    result.push(smallest);
    // repeate action
    return selectionSort(arr, result);
  }
  //   print result array
  return result;
};

const arr = [5, 3, 6, 2, 10];
console.log(selectionSort(arr));
