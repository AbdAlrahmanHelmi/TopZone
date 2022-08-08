// Question 1

const sumArray = (nums, target) => {
  const result = [];
  const table = {};

  nums.forEach((val, i) => {
    const s = target - val;

    table[s] !== undefined ? result.push(i, table[s]) : (table[val] = i);
  });
  return result.sort((a, b) => a - b);
};

const finalResult = sumArray([2, 7, 5, 10, 15], 15);
console.log(finalResult);

// Question 2

const reverseNumber = (number) => {
  let revNumber = 0;

  while (number > 0) {
    revNumber = revNumber * 10 + (number % 10);
    number = Math.floor(number / 10);
  }
  return revNumber;
};

console.log(reverseNumber(546));
