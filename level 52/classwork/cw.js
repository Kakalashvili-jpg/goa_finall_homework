// შექმენი ცვლადი grade სადაც ჩაწერ მოსწავლის ნიშანს ასოების სახით: A, B, C, D, F switch-მა უნდა შეამოწმოს ნიშანი და დაბეჭდოს შესაბამისი შეტყობინება:

// A — "საუკეთესო შედეგია!"

// B — "კარგია, მაგრამ მეტი შეგიძლია."

// C — "დამაკმაყოფილებელია."

// F — "სამწუხაროდ, ვერ ჩააბარე."

// default: "არასწორი ნიშანი."

let grad = "A"
switch(grad){
    case "A":
        console.log("საუკეთესო შედეგია!")
        break;
    case "B":
        console.log("კარგია, მაგრამ მეტი შეგიძლია.")
        break;
    case "C":
        console.log("დამაკმაყოფილებელია.")
        break;
    case "F":
        console.log("სამწუხაროდ, ვერ ჩააბარე.")
        break;
    default:
        console.log("არასწორი ნიშანი.")
}

// /////////////

// 2 Hard Task) შექმენი ცვლადი day სადაც მომხმარებელს შემოატანინებ რიცხვს 1-დან 7-ჩათვლით  თუ რიცხვი იქნება 7 ზე მაღალი ან 1 ზე დაბალი alert-ის დახმარებით გამოიტანე არასწორი რიცხვი თავიდან სცადე. switch-ის გამოყენებით კონსოლში გამოიტანე კვირის შესაბამისი დღე (მაგ: 1 - ორშაბათი, 7 - კვირა) 
let day = prompt("Sheitane ricxvi 1 dan 7 is chatvlit")
if(day > 7 & day < 1 ){
    alert("არასწორი რიცხვი თავიდან სცადე.")
}

switch(day){
    case 1:
        console.log("ორშაბათი")
        break;
    case 2:
        console.log("სამშაბათი")
        break;
    case 3:
        console.log("ოთხშაბათი")
        break;
    case 4:
        console.log("ხუთშაბათი")
        break;
    case 5:
        console.log("პარასკევი")
        break;
    case 6:
        console.log("შაბათი")
        break;
    case 7:
        console.log("კვირა")
        break;
}
// 3)შექმენით ცვლადი სადაც მომხმარებელი შემოიტანს მის გვარს, თუ გვარი ბოლოვდება i ასოთი, მაშინ კონსოლში მიესალმეთ, სხვა შემთხვევაში კონსოლში დაემშვიდობეთ (Ternary Operator)
let name4 = prompt("enter your name")
if(name4.endsWith("i")){
    console.log("Hello")
}else{
    console.log("byee")
}

// 4)მოხმარებელს შემოატანინეთ მისი გვარი, შემდეგ გამოიტანეთ ამ გვარის ბოლოდან მესამე ასო (გამოიყენეთ .length)
let sur = prompt("შეიყვანე შენი გვარი:");

console.log(sur[sur.length - 3]);