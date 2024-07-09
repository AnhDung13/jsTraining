//1. Write a function with 2 input parameters (each parameter is an array). This function returns an array of the same elements in two arrays

function checkSameElements(arr1, arr2) {
  let sameElements = [];
  arr1.forEach((element) => {
    if (arr2.includes(element)) {
      sameElements.push(element);
    }
  });
  return sameElements;
}
//2.Find 2 elements with the greatest sum in an array

// cách 1

function findTwoGreatestEl1(arr) {
  let elements = [];
  let greatestNum = arr[0];
  let seGreatestNum = arr[0];
  arr.forEach((element) => {
    if (element > greatestNum) {
      greatestNum = element;
    }
    if (element < greatestNum && element > seGreatestNum) {
      seGreatestNum = element;
    }
  });
  elements.push(greatestNum, seGreatestNum);
  return elements;
}

//cách 2
function findTwoGreatestEl2(arr) {
  let element = arr.sort((a, b) => {
    if (a > b) {
      return -1;
    }
  });
  return (element = element.slice(0, 2));
}

//3. Find pairs of elements whose sum is equal to a given number
function findPairs(sum, arr) {
  let pairs = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        pairs.push([arr[i], arr[j]]);
        arr.splice(i, i);
        arr.splice(j, j);
      }
    }
  }
}

//4. Get a new array from the given array so that the elements appear only once (implement 2 ways: using Set, not using Set)

//with set
const duplicateArr = [1, 2, 3, 1, 2, 3, 4, 5, 6, 4];
let set = [...new Set(duplicateArr)];

//without set
function removeDuplicate(arr) {
  return arr.reduce((prev, curr) => {
    if (!prev.includes(curr)) {
      prev.push(curr);
    }
    return prev;
  }, []);
}

//5. Get a new array of duplicate elements in 2 arrays, each element appears exactly once in the new array
function duplicateElInArrs(arr1, arr2) {
  let result = [...new Set(checkSameElements(arr1, arr2))];
  return result;
}

//6. Given an array arr1. Write a function that returns a new array of elements that appear more than once in arr1. The elements in new array can only appear once in this array.
const exSixArr = [1, 2, 3, 4, 2, 3, 5, 3, 1, 1, 5, 2, 3];
function findDuplicate(arr) {
  let duplicateEls = [];
  arr.reduce((prev, curr) => {
    if (!prev.includes(curr)) {
      prev.push(curr);
    } else {
      duplicateEls.push(curr);
    }
    return prev;
  }, []);
  duplicateEls = [...new Set(duplicateEls)];
  return duplicateEls;
}

/*
7. I have an array: ['face', 'zalo', 'face', 'gmail', 'zalo', 'zalo']
Write a function with 1 input parameter, an return a new object like this:
{'face': 2, 'zalo': 3, 'gmail':1} // 2,3,1 are the number of occurrences of 'face', 'zalo', 'gmail' in the array
*/
