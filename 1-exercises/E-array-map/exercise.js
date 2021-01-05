// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)


function timesHundred (num) {
    return number * 100;
}

// function expression
let timesHundred = numbers.map(function (num){
    return num * 100;
})

// arrow function
let timesHundred = numbers.map(num => {
        return num * 100
});

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var timesHundred = numbers.map(times);

console.log(timesHundred);
