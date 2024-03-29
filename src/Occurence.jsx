
import React from 'react'

const Occurence = () => {
    ///most occuring element method 1 ////
 function mostOccurringElement(array) {
    var max = array[0],
      counter = {},
      i = array.length,
      element;

    while (i--) {
      element = array[i];
      if (!counter[element]) counter[element] = 0;
      counter[element]++;
      if (counter[max] < counter[element]) max = element;
    }
    return max;
  }

  const array = [1, 2, 1, 1, 1, 2, 2, 2, 1];

  // console.log("mostOccurringElement", mostOccurringElement(array));
  ///most occuring element method 2///
  const arr = [2, 1, 6, 2, 2, 1, 5, 2];
  let count = 0;
  let result;
  function fun(arr) {
    var obj = {};

    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]]) {
        obj[arr[i]] = obj[arr[i]] + 1;
      } else {
        obj[arr[i]] = 1;
      }
    }
    for (let [key, val] of Object.entries(obj)) {
      if (val > count) {
        count = val;
        result = key;
      }
    }
    return result;
  }
  
  ///most occuring element method 3///
  function mode(arr) {
    return arr
      .sort(
        (a, b) =>
          arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
      )
      .pop();
  }
  // console.log("mode", mode([2, 1, 6, 2, 2, 1, 5, 2]));
  return (
    <div>Occurence</div>
  )
}

// Initial array
const array1 =["apple","apple","banana","banana","pineapple","pineapple","waterapple"]

////without duplicates
const removeduplicate = [...new Set(array1)];

const countduplicates = removeduplicate.map(val=>[
    val, array1.filter(value=> value === val).length])

// console.log("countduplicates",countduplicates)

// output [ [ 'apple', 2 ],
//   [ 'banana', 2 ],
//   [ 'pineapple', 2 ],
//   [ 'waterapple', 1 ] ]

// /**********************// refer folderupload file/****************// 

export default Occurence

