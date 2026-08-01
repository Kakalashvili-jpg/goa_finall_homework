// 1)ყველა თითოეულ შედარების ოპერატორზე მოიყვანეთ თითო მაგალითი
console.log( 5 > 7)
console.log( 9 < 10)
console.log(111 >= 123)
console.log(123456 <= 2847284)
console.log(38493 == "394893")
console.log(3847837 === 928982)
console.log(348384 != 3490349)
console.log(30403 !== 920934)
// 2)კომენტარის სახით ახსენით რა არის typeof და რისთვის ვიყენებთ
// typeof  ით ვიგებთ მონაცემის ტიპს javascript shi

// 3)ლოგიკურ ოპერატორებზე მოიყვანეთ თითო მაგალითი 
console.log(true && true)
console.log(false || false)
console.log(!384938)

// 4)შექმენი ცვლადი სადაც შეინახავ ასაკს თუ ასაკი არის 0-12 გამოიტანე "Kid", 13-17 --> "Teen", 18-64 --> "Adult", 65+ --> "daberdi"
const age = 13
if(age > 0 && age < 12){
    console.log("Kid")
}else if(age > 13 && age < 17 ){
    console.log("Ten")
}else if(age > 18 && age < 64){
    console.log("Adult")
}else{
    console.log("daberdi")
}

// 5)შექმენი ცვლადი სადაც შეინახავ Random რიცხვს 1 დან 7- ის ჩათვლით შემდეგ თუ ეს რიცხვი იქნება 1 კონსოლში გამოიტანე "Monday" თუ იქნება 2 გამოიტან "Tuesday" და ასე შემდეგ
const number = Math.round(Math.random()* 8)
if(number == 1){
    console.log("Monday")
}else if( number == 2){
    console.log("Tuesday")
}else if(number == 3){
    console.log(wednesday)
}else if(number == 4){
    console.log(Thursday)
}else if(number == 5){
    console.log("Friday")
}else if(number == 6){
    console.log("Saturday")
}else if(number == 7){
    console.log(sunday)
}