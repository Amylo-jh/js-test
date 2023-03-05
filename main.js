const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.splice(1, 1, 999, 998, 997)

console.log(numbers)

fruits.splice(2, 0, 'ananas')
console.log(fruits)