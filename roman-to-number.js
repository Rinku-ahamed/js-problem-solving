function convertRomanToNumber(romanNum) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < romanNum.length; i++) {
    const currentNum = romanNumbers[romanNum[i]];
    const nextNum = romanNumbers[romanNum[i + 1]] || 0;
    if (currentNum < nextNum) {
      result -= currentNum;
    } else {
      result += currentNum;
    }
  }
  return result;
}
const romanNum = "XIL";
const result = convertRomanToNumber(romanNum);
console.log(result);
