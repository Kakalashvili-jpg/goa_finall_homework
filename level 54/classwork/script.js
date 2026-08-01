// 1) ფუნქცია რომელიც იღებს სახელს და აბრუნებს მისალმებას Hello Name!
function greet(name){
    return "Hello " + name + "!"
}
console.log(greet("Daviti"))

// 2) ფუნქცია რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს
function sum(a,b){
    return a + b
}
console.log(sum(15,67))

// 3) ფუნქცია რომელიც ამოწმებს რიცხვი ლუწია თუ კენტი
function num(number){
    if (number % 2 == 0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(num(15))

// 4) Default Parameter
// default parameter არის საწყისი მნიშვნელობა
// არის „საწყისი მნიშვნელობა“.
// ავტომატურად გამოიყენებს ამ მნიშვნელობას
function greetUser(name = "Daviti"){
    return "Hello " + name
}
console.log(greetUser()) 
console.log(greetUser("giorgi")) 