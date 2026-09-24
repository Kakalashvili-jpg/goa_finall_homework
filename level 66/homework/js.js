// // // 1) კომენტარებით ახსენით თუ რატომ გვაქვს გარანტია რომ do while loop- ი ერთხელ მაინც გაეშვება და რატომ არაა იგივე While loop ზე
// // do whiles shemtxvevsahi sanam pirobas davwert manamde vidzaxebt  xolo while loopis dros jer pirobas vwert da shemdeg vidzaxebt

// // // 2) გამოიტანე რიცხვები 0 დან 67-ამდე (do while)
// let i = 0
// do{
//     console.log(i)
//     i ++
// }while(i < 67)

// // // 3) მომხმარებელს მოთხოვე შემოიყვანოს თავისი საყვარელი ციფრი შემდეგ გამოიტანეთ რიცხვები 1 დან მაგ რიცხვამდე
// const favoritenumber = prompt("enter your favorite number: ")
// let = 1
// do{
//     console.log(i)
//     i++
// }while(i < favoritenumber)
// // // 4) ჩავთვალოთ ბანკის პაროლი არის group67 მომხარებელმა უნდა გამოიცნოს ეს პაროლი მაგრამ მას აქვს 10 მცდელობა (attempts = 10) ყოველ არასწორს მცდელობაზე attempts ცვლადს დააკლდება 1 ხოლო საბოლოოდ თუ გამოიცნობს პაროლს გამოიტანე "Sucsessfuly logged in" და თუ ვერ გამოიცნობს გამოიტანე "No more Attempts Left"
// const password = prompt("enter password: ")
// let passwordcamp = "group67"
// let i = 10
// while (password != passwordcamp && i > 1) {
//     i--;
//     alert("Wrong password! Attempts left: " + i);
//     password = prompt("Enter password again :");
// }

// if (password == passwordcamp) {
//     alert("Successfully logged in");
// } else {
//     alert("No more Attempts Left");
// }



// // 6) ახსენით თუ რა არის for of loop რითი განხვავდება იგი ჩვეულებრივი for loop ისგან
// // for loopshi viyenebt indexsebs rata mivwvdet elementebs xolo for of shi indexebi ar gvinfda radgan is ukve wvdomas gvadzlevs titoeul elmentze

// // 7) შექმენი ერთი მასივი სადაც შეინახავ 67 ჯგუფის მენტორის,ასისტენტის,მოსწავლეების სახელებს შემდეგ გადაუარე ამ მასივს for of ის დახმარებით და შეამოწმეთ თუ სიტყვა შეიცავს ასო "ი" ს შეინახე ეგეთი სახელები ახალ მასივსში და საბოლოოდ გამოიტანეთ განახლებული მასივი
// let group67 = ["vano", "shio", "daviti", "saba", "sandro", "juba", "nika", "nikusha", "nika", "saba", "ilia"];
// let finalArray = [];

// for (let i in group67) {
//     for (let x of group67[i]) {
//         if (x === "i") {
//             finalArray.push(group67[i]);
//             break;
//         }
//     }
// }
// console.log(finalArray);

// // 8) ახსენით თუ რა არის for in loop რითი განხვავდება იგი ჩვეულებრივი for loop ისგან
// //  for in is daxmarebit chven shegvidzlia gadavuarot masivis mnishnelobebis index-ebs

// // 9) მოიყვანე 2 მაგალითი for in loop ის სინტაქსის და კომენტარებით დეტალურად ახსენით თუ როგორ მუშაობს იგი
// let fruit = ["apple","banana","orange"]
// // შეიქმენა იინდექსები 0,1,2
// for(let i in fruit){
//     console.log(i) // გამოიტანს მხოლოდ ინდექსებს
//     console.log(fruit[i]) // გამოიტანს ინდექსებზე მდგომ ელემენტს
// }


// // ------------------------------------------------------------------------------------------------------------
// let group = ["vano", "shio", "daviti", "saba", "sandro", "juba", "nika", "nikusha", "nika", "saba", "ilia"];
// for(let i in group){
//     console.log(i) // გამოიტანს მხოლოდ ინდექსებს
//     console.log(group[i]) // გამოიტანს ინდექსებზე მდგომ ელემენტს
// }

