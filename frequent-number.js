function frequentNumber(input) {
  const frequencyCounter = {};
  let maxFrequency = 0;
  let mostFrequentElement = input[0];

  for (let i = 0; i < input.length; i++) {
    const element = input[i];
    frequencyCounter[element] = (frequencyCounter[element] || 0) + 1;

    if (frequencyCounter[element] > maxFrequency) {
      maxFrequency = frequencyCounter[element];
      mostFrequentElement = element;
    }
  }

  return mostFrequentElement;
}

const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5, 8, 5, 2, 5];
const result = frequentNumber(numbers);
console.log(result);
