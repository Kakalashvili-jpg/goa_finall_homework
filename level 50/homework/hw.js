// 1) მომხმარებელს შემოაყვანინე რიცხვი და შეინახე ცვლადში შემდეგ შეამოწმე თუ ეგ რიცხვი არის დადებითი კონსოლში გამოიტანე "Positive" თუ არის უარყოფითი "Negative" და თუ არის 0 ის ტოლი "Zero"

// const number5 = promt("enter your number")
// if(number5 > 0){
//     console.log("Positive")
// }else if(number5 < 0){
//     console.log("Negative")
// }else{
//     console.log("Zero")
// }
// 2) კომენტარებით მიუწერეთ გვერდზე თუ რა იქნება თითოეულის შედეგი:
//  if ("hello") {
//   console.log("A");
// }  gamoitans A s

// if (0) {
//    console.log("B");
// }

// if ([]) {
//   console.log("C");
// } gamoitans c

// if ("") {
//   console.log("D");
// } gamoitans "
// "
// 3) რა იქნება შედეგი :
// console.log(false || "Hello"); gamoitans hellos
// console.log(0 && "World");gamoitans 0
// console.log(null || 5 || "Text"); gamoitans 5 s
// console.log("" && 100); arafers gamoitans

// 4) დაწერე პროგრამა, რომელიც ამოწმებს:

// მომხმარებელს აქვს საკმარისი თანხა (hasMoney)
// პროდუქტი არის ხელმისაწვდომი (inStock)

// 👉 თუ ორივე მართალია → "Purchase successful"
// 👉 სხვა შემთხვევაში → "Cannot purchase"

// 5)დაწერე კოდი, რომელიც ამოწმებს:

// მომხმარებლის ასაკი არის 18-ზე მეტი
// ან აქვს სტუდენტის სტატუსი (isStudent)

// 👉 თუ რომელიმე პირობა შესრულდა → "Discount applied"
// 👉 სხვა შემთხვევაში → "No discount"

const age3 = prompt("age3: ")
if(age3 > 18 || age3 == "isStudent"){
    console.log("Discount applied")
}else{
    console.log("No discount")
}