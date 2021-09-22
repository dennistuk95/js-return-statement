// Check if number is big

/*
const checkNumber = function (number) {
    const control = number;
    if (control > 99) {
        return "true";
    }
    else {
        return "false";
    }
};

const result1 = checkNumber(99);
const result2 = checkNumber(101);

console.log(result1);
console.log(result2);


// Bouncer at a club

const BrendaTheBouncer = function (max, current, age) {
    const currentPeople = current;
    const maxPeople = max;
    const personAge = age;
    if (personAge > 17 && currentPeople < maxPeople) {
        return "come in";
    }
    else if (personAge > 17 && currentPeople >= maxPeople) {
        return "it's too busy now, come back later";
    }
    else if (personAge < 18) {
        return "this is a club for adults";
    }
};

const check1 = BrendaTheBouncer(100, 95, 19);
const check2 = BrendaTheBouncer(200, 200, 22);
const check3 = BrendaTheBouncer(300, 299, 16);

console.log(check1);
console.log(check2);
console.log(check3);

*/

// Calculating the average


const calculateAverage = function ([number1, number2, number3, number4, number5]) {
    const average = (number1 + number2 + number3 + number4 + number5) / (5);
    return Math.round(average);
}

const calculate1 = calculateAverage([100, 95, 19, 17, 9]);
const calculate2 = calculateAverage([200, 200, 22, 23, 99]);
const calculate3 = calculateAverage([300, 299, 16, 1, 199]);

console.log(calculate1);
console.log(calculate2);
console.log(calculate3);
