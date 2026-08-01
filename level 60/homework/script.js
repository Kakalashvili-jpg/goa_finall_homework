// 2) ახსენით რატომ არის scope ები საჭირო
// Scope საჭიროა იმისთვის, რომ ვიცოდეთ სად შეიძლება ცვლადის გამოყენება და სად არა.
// 3) მოიყვანეთ 2 მაგალითი global scope-ზე ასევე ახსენით როგორ მუშაობს
//global scope მქონე ცვლადი შეგვიძლია გამოვიძახოთ ნებისმერ ადგილას
const name2 = prompt("enter your name: ")
if(true){
    console.log("hello" + name2)
}
console.log(name2)
// 4) მოიყვანეთ 2 მაგალითი block scope-ზე ასევე ახსენით როგორ მუშაობს 
// block scope ანუ როდესაც კოდის ბლოკში გვაქვს ცვლადი შექმნილი
// თუ ამ ცვლადის გამოყენება შემიძლია ბლოკის გარეთ ამ ცვლადს აქვს block scope
// block მუშაობს შემდეგი keword-ებით შექმნილ ცლადებზე : var
if(ture){
    let age2 = 13
    console.log("you are a" + age2 + "years old")
}
if(false){
    let animal = prompt("enter your favorite animal")
    console.log("your favorite animal is" + animal)
}
// 5) მოიყვანეთ 2 მაგალითი function scope-ზე ასევე ახსენით როგორ მუშაობს 
// // როდესაც ჩვენ ფუნქციაში შექვმნით ცვლადს ჩვენ არ შეგვიძლია
// ეს ცვლადი გამოვიყენოთ ფუნქციიეს გარეთ

const greet12 = () => {

    const discoball1 = "aleqsandre"
    let discoball2 = "luka"
    var discoball3 = "giorgi"
    
}

console.log(discoball1)
console.log(discoball2)
console.log(discoball3)

