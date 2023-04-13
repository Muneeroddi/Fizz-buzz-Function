function fizzBuzz(phoneNumber) {
  let sum = 0;
  for (let i = 0; i < phoneNumber.length; i++) {
    sum += Number(phoneNumber[i]);
  }

  for (let i = 1; i <= sum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 4 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

// Example usage:
fizzBuzz("9000000099");
