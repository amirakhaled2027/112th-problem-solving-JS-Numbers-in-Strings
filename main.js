//Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

function numInStr(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
      let str = arr[i];
      let hasNumber = false;

      for (let j = 0; j < str.length; j++) {
        if(!isNaN(parseInt(str[j]))) {
            hasNumber = true
            break;
        }
      }
      if(hasNumber) {
        result.push(str);
    }
    }
    return result;
}

console.log(numInStr(["1a", "a", "2b", "b"]));
console.log(numInStr(["abc", "abc10"]));
console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
console.log(numInStr(["this is a test", "test1"]));
