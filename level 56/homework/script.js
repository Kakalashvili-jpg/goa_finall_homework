// 1) შექმენი ორი ფუნქცია capitalize დამხმარე და formatUserName მთავარი
// მოთხოვნები:

// დამხმარე ფუნქციამ უნდა მიიღოს სახელი (მაგ: "ნიკა"), პირველი ასო გახადოს დიდი, დანარჩენი პატარა და დააბრუნოს მიღებული შედეგი.

// მთავარმა ფუნქციამ უნდა მიიღოს მომხმარებლის მიერ შემოყვანილი ტექსტი, მოაცილოს ზედმეტი დაშორებები (.trim()), გადააწოდოს დამხმარეს და დააბრუნოს გასუფთავებული სახელი.


function capitalize(name) {
    let firstLetter = name[0].toUpperCase();

    return firstLetter;
}

function formatUserName(userName) {
    userName = userName.trim();

    return capitalize(userName);
}


// 2) შექმენი ორი ფუნქცია checkLength დამხმარე და validatePassword მთავარი
// მოთხოვნები:

// დამხმარე ფუნქციამ უნდა მიიღოს ტექსტი, შეამოწმოს არის თუ არა ის მინიმუმ 8 სიმბოლო და დააბრუნოს true ან false.

// მთავარმა ფუნქციამ უნდა მიიღოს პაროლი, გადააწოდოს დამხმარეს და თუ სიმბოლოების რაოდენობა სწორია, დააბრუნოს ტექსტი: "პაროლი უსაფრთხოა!".
function checkLength(text) {
    return text.length >= 8;
}

// მთავარი ფუნქცია
function validatePassword(password) {
    if (checkLength(password)) {
        return "პაროლი უსაფრთხოა!";
    }
}

// 3) შექმენი ორი ფუნქცია calculateAverage დამხმარე და checkStudentStatus მთავარი
// მოთხოვნები:

// დამხმარე ფუნქციამ უნდა მიიღოს ნიშნების მასივი, გამოითვალოს მათი საშუალო არითმეტიკული და დააბრუნოს შედეგი.

// მთავარმა ფუნქციამ უნდა მიიღოს სტუდენტის ნიშნები, გადააწოდოს დამხმარეს და თუ საშუალო ქულა არის 60 ან მეტი, დააბრუნოს ტექსტი: "სტუდენტმა საგანი ჩააბარა!".
function calculateAverage(grades) {
    let sum = 0;

    sum += grades[0];
    sum += grades[1];
    sum += grades[2];

    return sum / grades.length;
}

// მთავარი ფუნქცია
function checkStudentStatus(grades) {
    let average = calculateAverage(grades);

    if (average >= 60) {
        return "სტუდენტმა საგანი ჩააბარა!";
    }
}

// 4) შექმენი ორი ფუნქცია toCelsius დამხმარე და getWeatherReport მთავარიმოთხოვნები:დამხმარე ფუნქციამ უნდა მიიღოს ტემპერატურა ფარენჰაიტში, გადაიყვანოს ცელსიუსში (ფორმულით: $(F - 32) * 5/9$) და დააბრუნოს შედეგი.მთავარმა ფუნქციამ უნდა მიიღოს ქალაქის სახელი და ტემპერატურა ფარენჰაიტში, გადააწოდოს დამხმარეს და დააბრუნოს ტექსტი: "ქალაქში არის celsius გრადუსი!"7) შექმენი ორი ფუნქცია isEven დამხმარე და checkNumber მთავარიმოთხოვნები:დამხმარე ფუნქციამ უნდა მიიღოს რიცხვი, შეამოწმოს არის თუ არა ის ლუწი და დააბრუნოს true ან false.მთავარმა ფუნქციამ უნდა მიიღოს რიცხვი, გადააწოდოს დამხმარეს და თუ რიცხვი ლუწია, დააბრუნოს ტექსტი: "რიცხვი ლუწია!".
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// მთავარი ფუნქცია
function getWeatherReport(city, fahrenheit) {
    let celsius = toCelsius(fahrenheit);

    return city + "-ში არის " + celsius + " გრადუსი!";
}