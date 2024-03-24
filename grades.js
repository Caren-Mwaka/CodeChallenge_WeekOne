//Challenge 1: Student Grade Generator (Toy Problem)

//The input should be between 0 and 100, therefore, the function marksWithinlimit defines the upperLimit and lowerLimit of the marks 
//function scope; variables within the scope marksWithinLimit can be accessed anywhere within this function even from within the block scope
function marksWithinLimit(marks) { 

    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
        return studentGrades(marks);
    } else {
        return "Invalid Number!";
    }
    //If the condition is true, it calls the studentGrades function with marks as an argument and returns its result.
    //If the condition is false, that is, marks is not a valid number or not within the limits it returns the string "Invalid Number!".


function studentGrades(marks) { //block scope; Variables declared within a block of code like within the studentGrades function are only accessible within that block.
    if (marks > 79) {
            return "A";
        } else if (marks >= 60) {
            return "B";
        } else if (marks >= 50) {
            return "C";
        } else if (marks >= 40) {
            return "D";
        } else {
            return "E";
        }
    // This function calculates the grade based on the marks inputted by the user   
}}

console.log(marksWithinLimit(1900));
console.log(marksWithinLimit("b"));

//An alternative code that I wrote

/*function studentGrades(marks) {
if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid Number";
}

if (marks > 79) {
    return "A";
} else if (marks >= 60) {
    return "B";
} else if (marks >= 50) {
    return "C";
} else if (marks >= 40) {
    return "D";
} else {
    return "E";
}
}

console.log(studentGrades('b'));*/