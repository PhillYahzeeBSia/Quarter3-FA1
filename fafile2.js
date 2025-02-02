const firstName = prompt("First Name: ");
const lastName = prompt("Last Name: ");
var birthYear = prompt("Birth Year: ");
var age = parseInt(2025) - parseInt(birthYear);

const x = "\n Hello " + firstName + " " + lastName + "! How does it feels to be " + age + " years old?";
document.getElementById("message").innerHTML = x;