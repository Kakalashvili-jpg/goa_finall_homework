// // 1) კომენტარებით დეტალურად ახსენით თუ რაში შეგვიძლია გამოვიყენოთ forEach და რა არის თვითონ forEach მეთოდი, რა გადაეცემა პარამეტრად და ასშ ძალიან დეტალურად უნდა ახსნათ!!!

// // 2) forEach ის დახმარებით გადაუარეთ რაიმე მასივს და გამოიტანეთ ყველა ელემენტი და ასევე მათი ინდექსი ერთ ხაზზე 

// // 3) forEach ით გადაურეთ numbers = [10 , -4, 6, -12, 5, -9, 23] და დაითვალეთ დადებითი რიცხვების ჯამი და უარყოფითი რიცხვების რაოდენობა და გამოიტანეთ კონსოლში

// // 4) forEach ით გადაურეთ registered_users = ["nika", "zvio", "tamila", "noe", "dimitri" ,"nino"]-მასივს და შეამოწმეთ თითო user-ი თუ მათი სახელი იწყება "n"-ით დაამატეთ იგი res = [] ცვლადში და საბოლოოდ გამოიტანეთ ეს მასვიცი


// // 1 
// //forEach არის მასივის მეთოდი რომელსაც პარამეტრად გადაეცემა callback function,  allback function  გადაეცემა სამი პარამეტრი curVal  index array

// // 2
// let fruits = ["ვაშლი", "ბანანი", "ატამი", "მსხალი" , "ალუბალი"];

// fruits.forEach((fruit, index) => {
//     console.log(fruit, index);
// });

// //  3






// // 4
// let registered_users = ["nika", "zvio", "tamila", "noe", "dimitri", "nino"];
// let res = [];
// registered_users.forEach((element, index, array) => {

//     if (element[0].toLowerCase() === "n") {
//         res.push(element);
//     }

// });
// console.log(res);











// 1)კომენტარის სახით ახსენით ყველა იტერაციის მეთოდი ან ტექნიკა რაც ისწავლეთ.
// foreach() ,map() , foro f, for in

// 2)კომენტარის სახით ახსენით ზუსტი .map()-ის დანიშნულება და როგორ გამოიყენება ის.
// .map() gamoiyeneba masivis nebismier elementze cvlilebis gasaketeblad da axali masivis shesaqmnelad

// 3)შექმენით .forEach() მეთოდის კლონი, ისე რომ .forEach() არ გამოიყენოთ.
function forEachclone(arr, func){
    for(let i = 0 ; i , arr.length; i++ ){
        func[i]
    }
}
const forEacharr = [23, 34, 45, 56, 67, 78, 89, 90, 10]
forEachclone(forEacharr, function(forEacharr){
    console.log(forEacharr)
})
// 4)შექმენით .map() მეთოდის კლონი, ისე რომ .map() არ გამოიყენოთ.
