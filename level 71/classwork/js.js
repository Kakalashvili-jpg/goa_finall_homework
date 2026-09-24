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
