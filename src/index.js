const toReadable = function (number) {
  const numbersDict = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelve'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety']
  ]);

  const exponentDict = [
    {'description': 'hundred', 'exponent': 2, 'limitExp': 3},
    {'description': 'thousand', 'exponent': 3, 'limitExp': 6},
    {'description': 'million', 'exponent': 6, 'limitExp': 9},
    {'description': 'billion', 'exponent': 9, 'limitExp': 12},
    {'description': 'trillion', 'exponent': 12, 'limitExp': 15},
  ];

  const intToEn = number => {
    if (number <= 20) return `${numbersDict.get(number)}`;

    if (number < 100) {
      if (number % 10 === 0) return `${numbersDict.get(number)}`;

      return `${numbersDict.get(Math.floor(number / 10) * 10)} ${numbersDict.get(number % 10)}`;
    }

    for (let exp of exponentDict) {
      if (number < 10 ** exp.limitExp) {
        if (number % 10 ** exp.exponent === 0) {
          return `${intToEn(number / (10 ** exp.exponent))} ${exp.description}`;
        }

        return `${intToEn(Math.floor(number / (10 ** exp.exponent)))} ${exp.description} ${intToEn(number % (10 ** exp.exponent))}`;
      }
    }

    return `${number} is too difficult for me`;
  };

  return intToEn(number);
}

module.exports = toReadable;
