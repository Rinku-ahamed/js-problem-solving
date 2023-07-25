function calculateNumber(input) {
  let sumNumber = 0;

  for (let i = 0; i < input.length; i++) {
    const currentVal = input[i];
    if (currentVal > 0) {
      sumNumber += currentVal;
    }
  }
  return sumNumber;
}

const numbers = [2, 6, -4, 8, -3, 10];
const result = calculateNumber(numbers);
console.log(result);
