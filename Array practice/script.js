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
function countOccur(arr) {
  let result = arr.reduce((prev, curr) => {
    if (!prev[curr]) {
      prev[curr] = 1;
    } else {
      prev[curr] += 1;
    }
    return prev;
  }, {});
  return result;
}

/*
8. I have an array like this: 
const arr1 = [{ make: 'audi', model: 'r8', year: '2012' }, { make: 'audi', model: 'rs5', year: '2013' }, 
{ make: 'ford', model: 'mustang', year: '2012' }, { make: 'ford', model: 'fusion', year: '2015' }, { make: 'kia', model: 'optima', year: '2012' }]
	Please write a function has 2 input parameters, 1st param is an array like above array, 2nd param is the name of any property in each object of the array.
*/
const cars = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];

/*
9. I have 1 object like this: 
		const order = {
			'cart': [
				{ id: 1, name: "ao dai", amount: 5, price: 100000 },
				{ id: 2, name: "ao coc", amount: 2, price: 200000 },
				{ id: 3, name: "quan dai", amount: 3, price: 150000 },
				{ id: 4, name: "quan coc", amount: 4, price: 130000 },
			],
			'customer': 'Name',
			'address': '12 Giai Phong Street'
		};
	Please use only reduce method, and only one time, and return 2 variables: totalOfMoney = 1870000, totalOfAmount = 14;
*/

const order = {
  cart: [
    { id: 1, name: "ao dai", amount: 5, price: 100000 },
    { id: 2, name: "ao coc", amount: 2, price: 200000 },
    { id: 3, name: "quan dai", amount: 3, price: 150000 },
    { id: 4, name: "quan coc", amount: 4, price: 130000 },
  ],
  customer: "Name",
  address: "12 Giai Phong Street",
};

const bill = order.cart.reduce(
  (prev, { amount, price }) => {
    prev.totalofMoney += price * amount;
    prev.totalofAmount += amount;
    return prev;
  },
  { totalofMoney: 0, totalofAmount: 0 }
);

const { totalofMoney, totalofAmount } = bill;

// 10. Write 3 methods myMap, myFilter, myReduce (suggestion: use Array.prototype, "this" keyword, and for loop).3 these methods have similar in use and usage as map, filter, reduce of array in JS

Array.prototype.myMap = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    let value = this[i];
    let result = callback(value, i, this);
    newArr[newArr.length] = result;
  }
  return newArr;
};

Array.prototype.myFilter = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
};

Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    return;
  }
  let prev = initialValue === undefined ? this[0] : initialValue;
  for (let i = initialValue === undefined ? 1 : 0; i < this.length; i++) {
    prev = callback(prev, this[i], i, this);
  }
  return prev;
};

/*
11. Get a new array, which includes unique elements. Those elements are elements from arrays in each value of object deps below
	const deps = {
				'data01':[1,2,3,[12,323]],
				'data02':[5,8,12],
				'data03':[5,14,79],
				'data04':[3,64,105],
			}
	=> [1, 2, 3, 12, 323, 5, 8, 14, 79, 64, 105]
*/
const deps = {
  data01: [1, 2, 3, [12, 323]],
  data02: [5, 8, 12],
  data03: [5, 14, 79],
  data04: [3, 64, 105],
};

const uniqueEl = [...new Set(Object.values(deps).flat(Infinity))];
console.log(uniqueEl);
