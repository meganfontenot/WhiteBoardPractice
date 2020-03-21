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
