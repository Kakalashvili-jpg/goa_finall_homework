// // =========================
// // map()
// // =========================

// // 1.
// const numbers = [5, 10, 15, 20, 25];
// // შექმენი ახალი მასივი, სადაც ყველა რიცხვი გაყოფილია 5-ზე.
const numbers = [5, 10, 15, 20, 25];
const num2 = numbers.map((element) => {
    console.log(element / 5)
})
// // 2.
// const names = ["vano", "gio", "nika", "ana"];
// // შექმენი ახალი მასივი, სადაც ყველა სახელი იწყება დიდი ასოთი.
const names = ["vano", "gio", "nika", "ana"];
const name2 = names.map((element2) =>{
    console.log(element2.toUpperCase)
})

// // 3.
// const prices = [120, 75, 200, 45];
// // შექმენი ახალი მასივი, სადაც ყველა ფასს ემატება 18%.
const prices = [120, 75, 200, 45];
const price2 = prices.map((price)=>{
    console.log(price * 1.18)
})
// // 4.
// const users = [
//   { name: "Vano", age: 19 },
//   { name: "Ana", age: 17 },
//   { name: "Gio", age: 22 }
// ];
// // შექმენი ახალი მასივი მხოლოდ ასაკებით.
const users = [
   { name: "Vano", age: 19 },
   { name: "Ana", age: 17 },
   { name: "Gio", age: 22 }
];
const user = users.map((age2)=>{
    console.log(age2.age)
})
// // 5.
// const words = ["apple", "banana", "kiwi", "watermelon"];
// // შექმენი ახალი მასივი სიტყვების სიგრძეებით.
const words = ["apple", "banana", "kiwi", "watermelon"];
const word = words.map((word)=>{
    console.log(word.length)
})
// // =========================
// // forEach()
// // =========================

// // 6.
// const products = [
//   { name: "Milk", price: 5 },
//   { name: "Bread", price: 3 },
//   { name: "Eggs", price: 8 }
// ];
// // დაბეჭდე: "Milk costs 5 GEL" და ა.შ.
const products = [
   { name: "Milk", price: 5 },
   { name: "Bread", price: 3 },
   { name: "Eggs", price: 8 }
];
products2 = products.forEach((curVal)=>{
  console.log(`${product.name} costs ${product.price} GEL`);

})
// // 7.
// const numbers2 = [2, 5, 8, 11, 14];
// // იპოვე ყველა რიცხვის ჯამი forEach()-ით.
const numbers22 = [2, 5, 8, 11, 14];
let sum = 0
numbers22.forEach((curVal) =>{
    sum += curVal
})
// // 8.
// const words2 = ["javascript", "html", "css", "react"];
// // დაბეჭდე მხოლოდ ის სიტყვები, რომელთა სიგრძე 5-ზე მეტია.
const words22 = ["javascript", "html", "css", "react"];
let finall = []
words22.forEach((curVal) =>{
    if(curVal.length > 5){
        finall += curVal
    }
})
// // 9.
// const people = ["Vano", "Gio", "Ana", "Luka"];
// // დაბეჭდე თითოეული ელემენტი თავისი ინდექსით.
const people = ["Vano", "Gio", "Ana", "Luka"];
people.forEach((curVal,index) => {
    console.log(curVal, index)
})

// // =========================
// // for / for...of / while
// // =========================

// // 10.
// const nums2 = [3, 8, 2, 9, 1, 15];
// // იპოვე ყველაზე დიდი რიცხვი for ციკლით.
const nums2 = [3, 8, 2, 9, 1, 15];
let finallnum = 0;
for (let i = 0; i < nums2.length; i++) {
    if (nums2[i] > finallnum) {
        finallnum = nums2[i];
    }
}
// // 11.
// const nums3 = [4, 5, 6, 7];
// // გამოთვალე ყველა რიცხვის ნამრავლი for...of-ით.
const nums3 = [4, 5, 6, 7];
let res = 1
for(let i  of nums3){
    res = rex * i
}

// // 12.
// let i = 1;
// // while ციკლით დაბეჭდე 1-დან 20-მდე მხოლოდ ლუწი რიცხვები.
let i = 1;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// // 13.
// const text = "JavaScript";
// // for...of-ით დათვალე რამდენი ხმოვანია ამ სიტყვაში.
const text = "JavaScript";
let sum2 = 0;

for (let i of text) {
    if (i === "a") {
        sum2 += 1;
    }else if(i === "e"){
        sum2 += 1;
    }else if(i === "i"){
        sum2 += 1;
    }else if(i === "o"){
        sum2 += 1;
    }else if(i === "u"){
        sum2 += 1;
    }
}
