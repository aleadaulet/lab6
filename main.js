
/*problem 3*/

function circlearea(number) {
    result = "Problem 3. Area of a circle with a radius of "+r+" = "+3.14*number*number;
    return result;
}

let r = 4;
let s = circlearea(r);
console.log(s); 

/*problem 6*/

function sum_of_squares(number1,number2) {
    result = number1*number1+number2*number2;
    return result;
}
let x = 2;
let y = 3;
let sumofsquares = sum_of_squares(x,y);
console.log("Problem 6. Sum of squares of "+x+" and "+y+" = "+sumofsquares);

/*problem 10*/

let a = 5
let b = 4
    if (a>b) {
    console.log("Problem 10. "+a+" and "+b+" are not equal. "+a+" is greater than "+b)
    }
    else if (a==b) {
    console.log("Problem 10. "+a+" and "+b+" are equal")
    }
    else {
    console.log("Problem 10. "+a+" and "+b+" are not equal. "+b+" is greater than "+a)
}
