// 1)შექმენი ცვლადი სადაც შეინახავ ქულას 0-100 (შედეგების მიხედვით გამოიტანე შესაბამისი ქულა A,B,C,F) 
//     • 90-100: - A

//     • 70-89: - B

//     • 50-69: - C

//     • 0-49: - F
const score = 14
if(score > 90 && score < 100){
    console.log("A")
}else if(score > 70 && score < 89){
    console.log("B")
}else if(score > 50 && score <69){
    console.log(C)
}else{
    console.log(F)
}

// 2)მომხმარებელს შემოატანინეთ მისი სახელი და შეინახეთ ცვლადში იმ შემთხვევაში თუ ცარიელი არ იქნება, თუ ცარიელია შეინახეთ Guest და ეს ცვლადი გამოიტანეთ კონსოლში (Truthy და Falsy მინიჭებით)
let name = promt("enter your name: ");
let secondname = name || "Guest";
console.log(secondname)

// 3)შექმენი ცვლადი სადაც შეინახავ ასაკს 
// Ternary ოპერატორით შეამოწმე თუ ასაკი მეტია 18 გამოიტანე Acsess Granted სხვა შემთხვევაში გამოიტანე Acsess Denied
const age = 13
age > 18 ? console.log("Acsess Granted") : console.log("Acsess Denied")