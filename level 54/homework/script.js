// 3)შექმენი ფუნქცია რომელიც იღებს 3 რიცხვს და აბრუნებს მათ საშუალო არითმეტიკულს
function average(a, b, c) {
    return (a + b + c) / 3;
}

console.log(average(10, 20, 30));

// 4)შექმენი ფუნქცია რომელიც იღებს სიტყვას და ამოწმებს მისი სიგრძე 5-ზე მეტია თუ არა
function lenght2(verbs) {
    return length(verbs) > 5
}
// 5)შექმენი ფუნქცია რომელიც იღებს რიცხვს და აბრუნებს მის კვადრატს
function kube(number1) {
    return number1 * number1
}

// 6)შექმენი ფუნქცია რომელიც იღებს სტუდენტის ქულას და აბრუნებს შეფასებას:
// 90-100 → A
// 70-89 → B
// 50-69 → C
// 0-49 → F
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 70 && score <= 89) {
        return "B";
    } else if (score >= 50 && score <= 69) {
        return "C";
    } else if (score >= 0 && score <= 49) {
        return "F";
    } else {
        return "არასწორი ქულა";
    }
}
