function reverseString(inputString) {
  let reverseStr = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverseStr += inputString[i];
  }
  return reverseStr;
}
const text = "hello world";
const result = reverseString(text);
console.log(result);
