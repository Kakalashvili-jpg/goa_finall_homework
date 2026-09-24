// // -1.შექმენით .forEach() მეთოდის კლონი, ისე რომ .forEach() არ გამოიყენოთ.

// // 0.შექმენით .map() მეთოდის კლონი, ისე რომ .map() არ გამოიყენოთ.

// // 1.მოცემულია მასივი:
// // const fruits = ["Apple", "Banana", "Orange", "Kiwi"];
// // forEach-ით დაბეჭდე თითოეული ხილი.
const fruits = ["Apple", "Banana", "Orange", "Kiwi"]
fruits.forEach((element) => {
    console.log(element)
})

// // 2.მოცემულია მასივი:
// // const numbers = [2, 4, 6, 8, 10];
// // forEach-ით დაბეჭდე თითოეული რიცხვი ×2.
const numbers = [2, 4, 6, 8, 10]
numbers.forEach((elemenT) =>{
    console.log(elemenT * 2)
})

// // 3.მოცემულია მასივი:
// // const names = ["gio", "vano", "nika", "ana"];
// // forEach-ით დაბეჭდე ყველა სახელი დიდი ასოებით.
const names = ["gio", "vano", "nika", "ana"];
names.forEach((names) => {
    console.log(names.toUpperCase)
})

// // 4.მოცემულია მასივი:
// // const prices = [15, 30, 20, 45];
// // forEach-ით გამოთვალე ყველა ელემენტის ჯამი.
const prices = [15, 30, 20, 45]
const sum1 = 0
prices.forEach((sum)=> {
    sum1 += sum
})

// // 5.მოცემულია მასივი:
// // const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// // forEach-ით დაბეჭდე მხოლოდ ლუწი რიცხვები.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const even = 0
nums.forEach((numbers) => {
    if(numbers % 2 === 0){
        even += numbers
    }
})

// // 6.მოცემულია მასივი:
// // const colors = ["Red", "Blue", "Green"];
// // forEach-ით დაბეჭდე ინდექსი და ელემენტი.
const colors = ["Red", "Blue", "Green"];
colors.forEach((value,index)=>{
    console.log(value , index)
})


// // 7.მოცემულია მასივი:
// // const words = ["JavaScript", "HTML", "CSS", "React"];
// // forEach-ით დაბეჭდე თითოეული სიტყვა და მისი სიგრძე.
const words = ["JavaScript", "HTML", "CSS", "React"]
words.forEach((value)=> {
    console.log(value, value.length)
})

// // 8.მოცემულია მასივი:
// // const ages = [12, 18, 25, 16, 30, 21];
// // forEach-ით დაბეჭდე მხოლოდ 18 ან მეტი ასაკი.
const ages = [12, 18, 25, 16, 30, 21];
ages.forEach((value)=>{
    if(value >= 18){
        console.log(value)
    }
})

// // 9.მოცემულია მასივი:
// // const numbers = [1, 2, 3, 4, 5];
// // forEach-ით შექმენი ახალი მასივი, სადაც ყველა რიცხვი კვადრატშია.
const numbers2 = [1, 2, 3, 4, 5];
const numbers3 = []
numbers2.forEach((number) => {
    numbers3.push(number * number);
});

// // 10.მოცემულია მასივი:
// // const users = [
// //   { name: "Gio", age: 20 },
// //   { name: "Ana", age: 17 },
// //   { name: "Nika", age: 25 }
// // ];
// // forEach-ით დაბეჭდე თითოეული მომხმარებლის სახელი და ასაკი.
const users = [
   { name: "Gio", age: 20 },
   { name: "Ana", age: 17 },
   { name: "Nika", age: 25 }
];
users.forEach((user)=>{
    console.log(user.name, user.age)
})
// 11.მოცემულია მასივი:
// const nums = [2, 4, 6, 8];
// map-ით შექმენი ახალი მასივი რიცხვების კვადრატებით.
const nums2 = [2, 4, 6, 8];
const newArray = nums2.map((num) => {
    return num * num;
});
// 12.მოცემულია მასივი:
// const names = ["gio", "ana", "luka"];
// map-ით შექმენი ახალი მასივი დიდი ასოებით.
const names2 = ["gio", "ana", "luka"];
const newnames2 = names2.map((names)=>{
    console.log(names.toUpperCase)
})

// 13.მოცემულია მასივი:
// const products = ["Phone", "Laptop", "Mouse"];
// map-ით შექმენი ახალი მასივი, სადაც თითოეულ ელემენტს წინ ეწერება "Product: ".
const products = ["Phone", "Laptop", "Mouse"];
const products2 = products.map((pr)=>{
    console.log("Product: " + pr)
})

// 14.მოცემულია მასივი:
// const words = ["apple", "banana", "kiwi", "orange"];
// map-ით შექმენი ახალი მასივი სიტყვების სიგრძეებით.
const words2 = ["apple", "banana", "kiwi", "orange"]
const wordlength = words2.map((word)=>{
    console.log(word.length)
})

// 15. მოცემულია მასივი:
// const users = [
//   { name: "Gio", age: 20 },
//   { name: "Ana", age: 17 },
//   { name: "Nika", age: 25 }
// ];
// map-ით შექმენი ახალი მასივი მხოლოდ სახელებით.
const users2 = [
   { name: "Gio", age: 20 },
   { name: "Ana", age: 17 },
   { name: "Nika", age: 25 }
];
const user3 = users2.map((users) => {
    console.log(users.name)
})
// 16.მოცემულია მასივი:
// const prices = [100, 250, 80, 60];
// map-ით შექმენი ახალი მასივი 20%-იანი ფასდაკლებით.
const prices2 = [100, 250, 80, 60];
const pr3 = prices2.map((prices)=>{
    console.log(prices * 0.8)
})


// 17.მოცემულია მასივი:
// const students = [
//   { name: "Luka", score: 90 },
//   { name: "Mariam", score: 70 },
//   { name: "Saba", score: 55 }
// ];
// map-ით შექმენი ახალი მასივი, სადაც თითოეულ ობიექტს ემატება passed კუთვნილება (true ან false მნიშვნელობით).