const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

const telephoneWords = function (str) {
  const target = [];
  let i;
  let j;
  const digitArr = str.split('');
    if (str) {
      for (i = 0; i < digitArr.length; i++) {
      target.push(phoneDigitsToLetters[str[i]]);
      }
    }

  function combinations(arr) {
    const newArr = arr.slice(0);
    if (newArr.length === 0) {
      return [];
    }
    
    let res = [];
    const top = newArr.shift();
    const ret = combinations(newArr);
    if (ret.length === 0) {
      res = top;
    } else {
      for (i = 0; i < top.length; i++) {
        for (j = 0; j < ret.length; j++) {
          res.push(top[i] + ret[j]);
        }
      }
    }
    return res;
  }
  return combinations(target);
};

console.log(telephoneWords('2745'));
telephoneWords('2745');

//  SOLUTION  //

 const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

function telephoneWords(str) {
  const words = [];
  function innerRecurse(currentWord, index) {
    }
    const currentLetters = phoneDigitsToLetters[str[index]];
    for (let i = 0; i < currentLetters.length; i++) {
      innerRecurse(currentWord + currentLetters[i], index + 1);
    }
  }
  innerRecurse('', 0);
  return words;
}

console.log(telephoneWords('234'));