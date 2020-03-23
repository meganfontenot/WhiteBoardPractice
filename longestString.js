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
