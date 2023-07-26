function secondSmallestNumber(arr) {
  let secondSmallNum = 0;
  let initNum = 10;
  for (let i = 0; i < arr.length; i++) {
    const currNum = arr[i];
    if (initNum > currNum) {
      secondSmallNum = initNum;
      initNum = currNum;
    }
  }
  return secondSmallNum;
}

const numbers = [3, 2, 8, 20, 4, 9, 10, 22];
const result = secondSmallestNumber(numbers);
console.log(result);
