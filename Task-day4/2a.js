let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 13, 17, 12];

let oddNumbers = numbers.filter(number => number % 2 !== 0);

oddNumbers.forEach(number => console.log(number));