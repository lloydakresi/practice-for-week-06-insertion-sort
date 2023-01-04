// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here

   let copyArr = arr.slice(); //create a copy of the arr
   let sorted = []; // create an arr to house the sorted values
   while(copyArr.length > 0){ // while the arr is not empty

    console.log(sorted.join(","));
    let tmp = copyArr.pop(); // take a value at the end of the array

    for(let i = sorted.length; i >= 0; i--){

      if (i === 0) { // if we can't find any number greater than tmp
        sorted.unshift(tmp); // place it at index 0;
      }

      if (sorted[i - 1] <= tmp){ // if the current value is less than tmp
        sorted.splice(i, 0, tmp)  // place tmp at that idx and shift the other values to the right.
        break;
      }
    }
   }
   return sorted;
}





// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  let div = 0
  let insert;
   while(div < arr.length){ //

    //console.log(arr.join(","));
    let tmp = arr[div]; //

    for(let i = div; i >= 0; i--){
      insert = i;

      if (arr[i - 1] < tmp){ // if the current value is less than tmp(the first arr[i -1] will be undefined)
        insert = i;  //assign the index to insert and break out of the loop
        break;
      }else{
        arr[i] = arr[i - 1]
      }
    }
    arr.splice(insert,1, tmp);
    div++;
    console.log(arr.join(","))
   }
   return arr;

}

console.log(insertionSortInPlace([1,2,6,8,3,2]));


module.exports = [insertionSort, insertionSortInPlace];
