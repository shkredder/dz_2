//task 1
let userName = prompt("Enter Your first name").trim();

//task 2
let userSurname = prompt("Enter Your surname").trim();

//task 3
let userEmail = prompt("Enter Your email").toLowerCase().replaceAll(" ", "");

if (userEmail.includes("@") == false) {
    email = `not valid email <b>${userEmail}</b> (symbol @ not exist)`;
} else if (userEmail.startsWith("@")) {
    email = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
} else if (userEmail.endsWith("@")) {
    email = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
} else {
    email = userEmail;
}

//task 4
let userYearOfBirth = prompt("Enter Your yer of birth").replaceAll(" ", "");
let currYear = new Date().getFullYear();
let age = currYear - userYearOfBirth;

//result
console.log(`Full name: ${userName} ${userSurname}
Email: ${email}
Age: ${age}`);
