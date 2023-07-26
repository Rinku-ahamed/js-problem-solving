function randomPassword(num) {
  let randomNum = "";
  for (let i = 0; i < 10; i++) {
    const random = Math.floor(Math.random() * num.length);
    randomNum += num[random];
  }
  return randomNum;
}

const element = "ABCDEFGH!@#$%^&0123456789abcdefgh";
const result = randomPassword(element);
console.log(result);
