// 1) კომენტარებით ახსენით რა განხვავებაა while loop და do while შორის
// while loop shi tu pirvelive gashvebaze iqneba shecdoma arafers gamoitans magram do whiles dros tu pirvelive piroba shecdoma iwneba gamoitans mainc ertxel shedges


// 2)დავალება: * შექმენი ცვლადი correctPassword = "secret123".

// შექმენი მეორე ცვლადი userInput, რომელიც თავიდან ცარიელია.

// while ციკლის გამოყენებით, მანამ სთხოვე მომხმარებელს პაროლი (prompt()-ის მეშვეობით), სანამ არ შეიყვანს სწორ პაროლს ("secret123").

// როგორც კი სწორად შეიყვანს, ეკრანზე (console.log) გამოიტანე შეტყობინება: "წარმატებით შეხვედით სისტემაში!".
let correctPassword = "secret123"
let userInput = ""
while(userInput != correctPassword){
    userInput = prompt("შეიყვანე ახლიდან პაროლი")
}
console.log("წარმატებით შეხვედით სისტემაში!")

// 3)დავალება: * შექმენი ცვლადი diceRoll.

// do...while ციკლის გამოყენებით:

// ციკლის შიგნით დააგენერირე შემთხვევითი რიცხვი 1-დან 6-მდე (გამოიყენე Math.floor(Math.random() * 6) + 1).

// გამოიტანე შედეგი კონსოლში (მაგ: "გამოვიდა: 4").

// ციკლი გააგრძელე მანამ, სანამ diceRoll არ გახდება 6.

// (შენიშვნა: do...while იდეალურია აქ, რადგან კამათელი მინიმუმ ერთხელ მაინც უნდა გაგორდეს!)
let diceRoll
do{
    diceRoll = Math.floor(Math.random() * 6) + 1
    console.log("გამოვიდა" + " " + diceRoll)
}while(diceRoll != 6)