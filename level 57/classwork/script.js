const names = ["Alice", "Benjamin", "Charlotte", "Daniel", "Emma", "Felix", "Grace", "Henry", "Isabella", "Jack", "Katherine", "Liam", "Mia", "Nathan", "Olivia", "Patrick", "Quinn", "Ryan", "Sophia", "Thomas", "Uma", "Victoria", "William", "Xavier", "Yasmine", "Zachary", "Amelia", "Caleb", "Eleanor", "Julian"];

const users = ["Alice", "Benjamin", "Charlotte", "Daniel", "Emma", "Felix", "Grace", "Henry", "Isabella", "Jack", "Katherine", "Liam", "Mia", "Nathan"]
let rnIndex = Math.floor(Math.random() * names.length);

let rnName = names[rnIndex];

if (
    rnName != "Alice" &&
    rnName != "Benjamin" &&
    rnName != "Charlotte" &&
    rnName != "Daniel" &&
    rnName!= "Emma" &&
    rnName!= "Felix" &&
    rnName != "Grace" &&
    rnName != "Henry" &&
    rnName != "Isabella" &&
    rnName != "Jack" &&
    rnName != "Katherine" &&
    rnName!= "Liam" &&
    rnName != "Mia" &&
    rnName != "Nathan"
) {

    users.push(rnName);
} else {

    console.log("ეს სახელი უკვე  დარეგისტრირებულია");
}
console.log(users);


