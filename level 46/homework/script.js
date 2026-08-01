// 1)მომხმარებელს შეაყვანინე სახელი. გადააკეთე იგი დიდ ასოებად და console.log-ში გამოიტანე: "WELCOME " + სახელი
let name = prompt("Name")
console.log("WELCOME" + name.toUpperCase())

// 2)მომხმარებელს შეაყვანინე სიტყვა. გამოიტანე console.log-ში: "ამ სიტყვის სიგრძეა: " + სიტყვის სიგრძე
let name2 = prompt("Name")
console.log("ამ სიტყვის სიგრძეა: " + name2.length())
// 3)მომხმარებელს შეაყვანინე სახელი და გვარი. ორივე გადაიყვანე დიდ ასოებში და console.log-ში გამოიტანე სრული სახელი.
let name3 = prompt("Name")
let surname = prompt("surname")
console.log(name3 + surname)

// 4)მომხმარებელს შეაყვანინე სახელი. console.log-ში გამოიტანე: "შენი სახელი დიდი ასოებით არის: " + სახელი დიდ ასოებში "შენი სახელი პატარა ასოებით არის: " + სახელი პატარა ასოებში
let name5 = prompt("Name")
console.log("შენი სახელი დიდი ასოებით არის: " , name5.toUpperCase())
console.log("შენი სახელი პატარა ასოებით არის: ",name5.toLowerCase())