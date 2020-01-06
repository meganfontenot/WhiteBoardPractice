function longestString(arr) {
  // iterate over arr
  // if (arr[i].length > longestString.length) replace
  // return longestString
  let longString = '';
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longString.length) {
      longString = arr[i];
    }
  }
  return longString;
}

longestString(['hello', 'goodbye', 'abc']);

//  SOLUTION

function longestString(arr) {
  let compareLength = 0;
  let longestString;
  for (let i = 0; i < arr.length; i++) {
    const stringLength = arr[i].length;
    if (stringLength > compareLength) {
      compareLength = stringLength;
      longestString = arr[i];
    }
  }
  return longestString;
}
