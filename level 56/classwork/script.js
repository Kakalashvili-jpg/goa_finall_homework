
function getCurrentYear() {
    return 2026;
}

function getAge(birthYear) {
    let age = getCurrentYear() - birthYear;
    return "შენ ხარ " + age + " წლის!";
}

console.log(getAge(2010));


function multiply(num1, num2) {
    return num1 * num2;
}

function getRectangleArea(length, width) {
    return multiply(length, width);
}

console.log(getRectangleArea(5, 4));