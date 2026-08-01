// false

// 2) კომენტარებით ახსენით რა არის მასივი და რისთვის ვიყენებთ
// masivi shegvidzlia gamoviyenot ramdenime informaciis ertad shesanaxad

// 3) შექმენით მასივი სადაც შეინახავთ სახელებს შემდეგ გამოიდანე სიის 3 ინდექსი
let name1 = ["giorgi","daviti","mari","taso"]
console.log(name1[2])

// 4) შექმენით მასივი სადაც შეინახავთ 5 ელემენტს შემდეგ გამოიყენეთ ფუნქცია რომელიც გამოიტანს სიის სიგრძეს
let name2 = ["giorgi","daviti","mari","taso","luka"]
console.log(name2.length)

// 5) შექმენით მასივი და ბოლოში ჩაამათე ელემენტი და საბოლოოდ დააკონსოლოგე მასივი
let name3 = ["giorgi","daviti","mari","taso","luka"]
console.log(name3.push("idkname"))

// 6) კომენტარებით ახსენით რა განსხვავებაა pop და shift მეთოდებს შორის მოიყვანეთ მათზე თითო მაგალითი
// .pop masividan shlis bolo elements xolo .shift masividan shlis pirvel element
let name4 = ["giorgi","daviti","mari","taso","luka"]
console.log(name4.pop())
console.log(name4.shift())

// 7) შექმენი სია სადაც იქნება 4 ელემენტი და ამოჭერით პირველი 2
let name5 = ["giorgi","daviti","mari","taso"]
let name6 = name5.slice(0, 2);


// 8) შექმენით ორი სია შემდეგ გააერთიანეთ იგი და გამოიტანეთ საბოლოო შედეგი
let name7 = ["giorgi","daviti","mari","taso","luka"]
let name8 = ["giorgi","daviti","mari","taso"]
let name9 = name7.concat(name8)



// 9) რას გამოიტანს ეს კოდი და რატომ

// const classroom = [
//   ["Alice", "Bob", "Charlie"],   
//   ["David", "Eva", "Frank"],     
//   ["Grace", "Henry", "Ivy"]      
// ]
// console.log(classroom[1][1])
// es code gamoitans evas