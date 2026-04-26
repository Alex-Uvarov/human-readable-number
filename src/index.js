module.exports = function toReadable(number) {
  const word = {
    0: `zero`,
    1: `one`,
    2: `two`,
    3: `three`,
    4: `four`,
    5: `five`,
    6: `six`,
    7: `seven`,
    8: `eight`,
    9: `nine`,
    11: `eleven`,
    12: `twelve`,
    13: `thirteen`,
    14: `fourteen`,
    15: `fifteen`,
    16: `sixteen`,
    17: `seventeen`,
    18: `eighteen`,
    19: `nineteen`,
  };
  const dozens = {
    10: `ten`,
    20: `twenty`,
    30: `thirty`,
    40: `forty`,
    50: `fifty`,
    60: `sixty`,
    70: `seventy`,
    80: `eighty`,
    90: `ninety`,
  };
  const num = number.toString();
  if (num.length === 1) {
    return word[number];
  }
  if (num.length === 2) {
    if (number % 10 === 0) {
      return dozens[number];
    }
    if (number < 20) {
      return word[number];
    }
    return `${dozens[number - num[1]]} ${word[num[1]]}`;
  }
  if (num.slice(1) === `00`) {
    return `${word[Math.floor(number / 100)]} hundred`;
  }
  if (num.slice(2) === `0`) {
    return `${word[Math.floor(number / 100)]} hundred ${dozens[num.slice(1)]}`;
  }
  if (Number(num.slice(1)) < 10) {
    return `${word[Math.floor(number / 100)]} hundred ${word[num[2]]}`;
  }
  if (num.slice(1) < 20) {
    return `${word[Math.floor(number / 100)]} hundred ${word[num.slice(1)]}`;
  }
  return `${word[Math.floor(number / 100)]} hundred ${
    dozens[num.slice(1) - num[2]]
  } ${word[num[2]]}`;
};
