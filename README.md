# About this repo
This repo contains some sketches created during my learning of p5js.

The majority of the code comes from the codecademy course, that I highly recommend !


# JS Memo

**Template string**
*ES6 Feature*. the new way to concatenate values with string in JS
```javascript
let animal="Quetzal";
console.log(`My favorite animal is ${animal}`)
```

**Short circuit evaluation** 
Simplify truhty/falsy evaluation to assign a value to a variable. example:
```javascript
let defaultName = username || "Stranger";
```

**Ternary evaluation**
Short hand syntax if...else statements.
```javascript
isNightTime ? 'Turn on the lights!' : 'Turn off the lights!';
```

**Default Parameters**
*ES6 Feature* .Default parameters allow parameters to have a predetermined value i*n case there is no argument passed into the function or if the argument is `undefined` when called.*

```javascript
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}
```

**Function expressions**
In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

Since the release of ES6, it is common practice to use const as the keyword to declare the variable.

> Unlike function declarations, function expressions are not hoisted so they cannot be called before they are defined.

```javascript
const calculateArea = function(width, height) {
  const area = width * height;
  return area;
}
```

**Arrow Functions**
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” `() =>` notation.

```javascript
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

The most condensed form of the function is known as *concise body.*
```javascript
// With zero paramaters
const functionName = () => {};

// One parameter
const functionName = paramOne => {};

// two or more parameters
const functionName = (paramOne, paramTwo) => {};
```

A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as *implicit return*.

```javascript
// Single line block
const sumNumbers = number => number + number ;

// multi-line block
const sumNumbers = number => {
  const sum = number + number;
  return sum;
}
```
**Iterators**

- `.map()` works in a similar manner to .`forEach()`, *the major difference is that .map() returns a new array*.
- `.findIndex()` on an array will return the index of the first element that evaluates to true in the callback function.
- `.reduce()` method returns a single value after iterating through the elements of an array, thereby reducing the array. Take a look at the example below:

```javascript
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}) 
console.log(summedNums) // 17

```
The `.reduce()` method can also take an optional second parameter to set an initial value for accumulator.

See more on [MDN Array documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)
