const decimalToBinary = (num) => {
  let binaryStr = num.toString(2);
  return binaryStr;
};

const num = parseInt(process.argv[2]);
const binaryStr = decimalToBinary(num);
console.log(binaryStr);