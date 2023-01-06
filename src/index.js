const toReadable = function (number) {
  const dict = new Map([
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
  const k = 10 ** 3;
  const m = 10 ** 6;
  const b = 10 ** 9;
  const t = 10 ** 12;
  const func = number => {
    if (number <= 20) return `${dict.get(number)}`;

    if (number < 100) {
      if (number % 10 === 0) return `${dict.get(number)}`;

      return `${dict.get(Math.floor(number / 10) * 10)} ${dict.get(number % 10)}`;
    }

    if (number < k) {
      if (number % 100 === 0) return `${dict.get(number / 100)} hundred`;

      return `${dict.get(Math.floor(number / 100))} hundred ${func(number % 100)}`;
    }

    if (number < m) {

      if (number % k === 0) return `${func(number / k)} thousand`;

      return `${func(Math.floor(number / k))} thousand ${func(number % k)}`;
    }

    if (number < b) {
      if (number % m === 0) return `${func(number / m)} million`;

      return `${func(Math.floor(number / m))} million ${func(number % m)}`;
    }

    if (number < t) {
      if (number % b === 0) return `${func(number / b)} billion`;

      return `${func(Math.floor(number / b))} billion ${func(number % b)}`;
    }

    if (number < t * 1000) {
      if (number % t === 0) return `${func(number / t)} trillion`;

      return `${func(Math.floor(number / t))} trillion ${func(number % t)}`;
    }

    return `${number} is too difficult for me`;
  };

/*  console.log(func(number));*/
  return func(number);
}

module.exports = toReadable;
