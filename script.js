function decimalToBinary(decimal) {
  // Handle special case when the input is 0
  if (decimal === 0) {
    return '0';
  }

  let binary = '';
  
  while (decimal > 0) {
    // Get the remainder when dividing by 2
    const remainder = decimal % 2;

    // Prepend the remainder to the binary string
    binary = remainder + binary;

    // Update the decimal by dividing it by 2
    decimal = Math.floor(decimal / 2);
  }

console.log(binary);