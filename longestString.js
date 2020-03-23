function longestString(arr) {
  let longString = '';
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longString.length) {
      longString = arr[i];
    }
  }
  return longString;
}

longestString(['hello', 'goodbye', 'abc']);
