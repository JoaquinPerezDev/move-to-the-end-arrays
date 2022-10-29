// You're given an array of integers and an integer. Write a
// function that moves all instances of that integer in the array to the
// end of the array and returns the array.

// The function should perform this in place (i.e., it should
// mutate the input array) and doesn't need to maintain the order
// of the other integers.

// Sample input: array = [2, 1, 2, 2, 2, 3, 4, 2]
//             toMove = 2

// Sample output: [1, 3, 4, 2, 2, 2, 2, 2]

//Naive approach: We can loop through the array and compare each value
//to our target, then if it matches the value we can use a helper function
//to swap these two numbers in place. By the end of the loop, all copies
//of our target should be at the end of the array.

//time complexity: This solution is simple, we are just looping
//through the array once so the runtime is O(n) where n is the size of the
//input array.

//space complexity: Given the request to mutate the original array and
//not use any extra space, the runtime is O(1) constant space.

//O(n) time | O(1) space complexity
function moveElementToEnd(array, toMove) {
  if (!array) return;
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    if (array[right] !== toMove) {
      if (array[left] === toMove) swap(left, right, array);
      left++;
    } else {
      right--;
    }
  }
  return array;
}

function swap(i, j, array) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
