





// 1)მოიყვანეთ 2 მაგალითი string literal - ზე
const firsname = "davit"
const age4 = 13
console.log(`Hello my name is: ${firsname} / I am ${age4} years old`)

// 2)ახსენით რა განსხვავებაა ++  და += -ს შორის მოიყვანეთ თითო მაგალითი
// ++ jer ganaxlebs cvlads da mere daemateba 1 xolo += tan daamatebs da tan ganaxlebs cvlads ertdroulad
let number5 = 15
console.log(number5++)
number5 += 15
console.log(number5)

// 3)რამდენი გზა გვაქ ცვლადის შექმნის და რა განსხვავებაა თითოეულს შორის
// 3 gza
// 1 let romlis drosac shegvilia cvladis ganaxleba
// 2 const romlis drosac ar shegvilia cvladis ganaxleba
// 3 var romlis drosac windou obieqtshi icvleba mnishvneloba

// 4)შექმენი ცვლადი სადაც შეინახავ ნებისმიერ მთელ რიცხვს თუ ეს რიცხვი არის 0 ზე მეტი კონსოლში გამოიტანე Positive თუ რიცხვი არის 0 ზე ნაკლები გამოიტანე Negative და თუ რიცხვი არის 0 გამოიტანე Zero
const age = 13
if(age > 0){
    console.log("Positive")
}else if(age < 0){
    console.log("Negative")
}else{
    console.log("Zero")
}

// // 5)შექმენი ცვლადი სადანც შეინახავ რიცხვს(0-100) თუ ეს რიცხვი იქნება 90 დან 100-ჩათვლით კონსოლში გამოიტანე "A" თუ რიცხვი არის 70 დან 89-ჩათვლით გამოიტანე "B" თუ რიცხვი არის 50 დან 69-ჩათვლით გამოიტანე "C" სხვა შემთხვევაში გამოიტანეთ "F"
const number = 14
if(number > 90 && number < 100){
    console.log("A")
}else if(number > 70 && number < 89){
    console.log("B")
}else if(number > 50 && number < 69){
    console.log("C")
}else{
    console.log(F)
}