console.log("Hello World")

//ASSIGNMENT SOLUTION 

// TASK 1 is the installation of Node.js , TypeScript and VS code on our computer that is complete!

//TASK 2
let personName: string = "Eric";
console.log(`Hello ${personName},would you like to learn some python today?`);

//TASK 3
let personName: string = "Aqsa Shaikh";

in lowercase
console.log("lowercase:", personName.toLowerCase());

in uppercase
console.log("uppercase:", personName.toUpperCase());
title case 
console.log("titlecase:", personName.replace(/\b\w/g,c=> c.toUpperCase()));

//TASK 4
let quote: string ="A person who never made a mistake never tried anything new.";
let author: string= "Albert Einstein";
console.log(`${author} once said, "${quote}"`);

//TASK 5
let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said,"${quote}"`;
console.log(message);

//TASK 6
let personName: string ="\t\n Aqsa Shaikh \n\t";
console.log("Original:",personName);
console.log("stripped:",personName.trim());

//TASK 7 & 8
console.log(5 + 3);
console.log(10 - 2);
console.log(4*2);
console.log(16/2);

//TASK 9
 let favouriteNumber: number = 4;
 console.log(`My Favourite number is ${favouriteNumber}.`);

//TASK 10 (This task is all about comments we have to show how to comment in typescript)
// Author: [Aqsa Shaikh]
// date: [Friday , Feburary 16 , 2024]

// from Task 9:printing my favourite number.
// let favouriteNumber: number = 4;
// revealing my favourite number in a message formate.
// console.log (`My favourite number is ${favouriteNumber}.`);

//TASK 11
let names : string [] = ["Aqsa", "Miraal", "Dua", "Noor"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

//TASK 12
let names : string [] = ["Aqsa", "Miraal", "Dua", "Noor"];
let message : string ="Do you like to play football"
console.log(names[0] + " " + message )
console.log(names[1] + " " + message )
console.log(names[2] + " " + message )
console.log(names[3] + " " + message )

//TASK 13
let transpotation : string [] = ["Honda Motocyle", "Audi", "Toyota"];
transpotation.map((items) => console.log(`I would like to own a ${items}`));

//TASK 14
let guestArr : string [] = ["Aqsa", "Miraal", "Dua"];
guestArr.map((items) => (console.log(`Dear ${items}, You are invited to the dinner`)));

//TASK 15
let guestArr : string[] = ["Aqsa","Miraal","Noor","Hassan"];
let canNotAttend : string = "Aqsa"
console.log(canNotAttend +" " +"can not attend the dinner.")
let newGuest : string = "Alishba"
guestArr [guestArr.indexOf(canNotAttend )] = newGuest;
console.log(guestArr)
guestArr.map((items) => 
console.log(`Dear ${items}, You are invited to the dinner.`)
)

//TASK 16
let guestArr1 : string[] = ["Alishba","Miraal","Noor","Hassan"];
let canNotAttend1 : string = "Noor"
let newGuest1 : string = "wajahat"
guestArr1[guestArr1.indexOf(canNotAttend1)] = newGuest1;
console.log(guestArr1)
guestArr1.map((items) => 
console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people`)
);
//part 2 Beginning
let guestBeg : string = "Muizz"
guestArr1.unshift(guestBeg);
console.log(guestArr1);
//part 3 Middle
let middleGuest : string = "fatima"
let middleIndex = guestArr1.length/3
guestArr1.splice(middleIndex,0,middleGuest)
console.log(guestArr1)
//part 4 Appendid
guestArr1.push("Fatima")
console.log(guestArr1)
//part 5
 guestArr1.map((items) =>
 console.log(` Dear ${items}, you are invited in the more people category on dinner`));

 //TASK 17
 //Intial list of guest 
  let guests: string[] = ["Bilal", "Hassan", "Aqsa", "Miraal", "Dua"];
 //Informing that only two people can be invited
 console.log("Due to limited space, only two people can be invited for dinner.");
 //Removing guests until only two names remain
 while (guests.length > 2){
    const removeGuest = guests.pop(); 
    console.log(`Sorry, ${removeGuest}, you're no longer invited to dinner.`);
 }
//printing invitations to the remaining two guests
let guests:string[] = ["Miraal","Aqsa"];
guests.forEach((guest) => {
   console.log(`Dear ${guest}, you're still invited to dinner.`);
});
//Removing the last two names from the list
guests.pop();
guests.pop();
//printing the final list to confirm it's empty
console.log("Final guest list:", guests);

//TASK  18
//store the location in an array 
let placesToVisit: string[] = ["Tokyo", "Pakistan", "America", "China", "Japan"];
//print the array in its original order
console.log("Original order:", placesToVisit);
//print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());
//Show that the array is still its original order
console.log("Original order after sorting:", placesToVisit);
//print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical order:", [...placesToVisit].sort().reverse());
//Show that the array is still its original order
console.log("Original order after reverse sorting:", placesToVisit);
//Reverse the order of the list 
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
//Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("back to the original order:", placesToVisit);
//Sort the array in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);
//Sort the array in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);

//TASK 19
let invitations : string [] = ["Bilal", "Hassan"]
let count_invitations : number =  invitations.length
console.log(`${count_invitations} people wil come to the dinner`);

//TASK  20
let country: string [] = ["Pakistan","India","NewYork","Japan","China"];
console.log("List of country");
console.log(country);

//TASK 21
let person: {name: string, fname: string , age: number} = {name:"Aqsa", fname: "female", age: 18};
console.log(person)

//TASK 22
const days : string [] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
console.log(days[6]);

//TASK 23
 let car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car=='subaru');

console.log("is car != 'honda city'? predict true");
console.log(car != 'honda city');

console.log("is car == 'Subaru'? predict false")
console.log(car == 'Subaru')

console.log("is car == 'SUBARU'? predict false")
 console.log(car == 'SUBARU')

 console.log("is car.length ==6? predict true")
 console.log(car.length ==6)

console.log("is car.length !=10? predict true")
console.log(car.length !=10)

console.log("is 10 > 45 ? predict false")
console.log(10 > 45)

console.log("is 3 <= 2 ? predict false")
console.log(3 <= 2)

console.log("is 72 >= 83 ? predict false")
 console.log(72 >= 83)

console.log("is car == 'subaru && car.length == 6? predict true ")
console.log(car == 'subaru' && car.length == 6)

//TASK 24
 let name_1 :string = "Aqsa"
 let name_2 :string = "Aqsa shaikh"
 let name_3 :string = "Aqsa majeed"
 if (name_1 == name_3){
    console.log("names are equal");
} else {
    console.log("names are not equal")
}

if (name_1 != name_2){
    console.log("names are equal")
}
 if (name_1 != name_3){
    console.log("names are equal")
}
//NUMERICAL TEST
 let age_1 : number =18
 let age_2 : number =22

if (age_1 == 18){
    console.log("eligible for vote")
}
if (age_1 != 22){
    console.log("eligible for vote in older category")
}
if (age_1 <= age_2){ //Less
    console.log("younger")
}
if (age_2 >= age_1){ //Greater
    console.log("older")
 }
// TEST USING AND & OR OPERATORS
if (age_1 == 18 && age_2 == 22){
    console.log("person is eligible for vote")
}

if (age_1 == 18 || age_2 !=22){
    console.log("person is not eligible for vote")
}
//TEST WHETHER ITEMS IN ARRAY
 let country : string  [] = ["Pakistan","Brazil","Japan","Canada"]
 if (country.includes("Pakistan")) {
    console.log("Pakistan is in country list")
}    
//TEST WHETHER ITEMS NOT IN AN ARRAY
   if (!country.includes("China")){
  console.log("China is not include in an array")
}

// TASK 25
let alien_color = "green"
if (alien_color == "green")
console.log("you earn 5 points")
 let alien_color : string = "red"
 if (alien_color == "green")
console.log("no output")

// TASK 26
let alien_color = "green"
if (alien_color == "green"){
console.log("player just earned 5 points for shooting the alien")
} else {
   console.log("player just earnd 10 points")
}
let alien_color = "red"
if (alien_color == "green"){
console.log("player just earned 5 points for shooting the alien")
} else {
   console.log("player just earnd 10 points")
}

// TASK 27
let alien_color: string = "green"
if (alien_color == "green") {
   console.log("player just earned 5 points")
} else if (alien_color == "yellow") {
   console.log("10 points")
} else {
   console.log("15 points")
}
let alien_color: string = "yellow"
if (alien_color == "green") {
   console.log("player just earned 5 points")
} else if (alien_color == "yellow") {
   console.log("10 points")
} else {
   console.log("15 points")
}
let alien_color: string = "red"
if (alien_color == "green") {
   console.log("player just earned 5 points")
} else if (alien_color == "yellow") {
   console.log("10 points")
} else {
   console.log("15 points")
}

// TASK 28............2,4,13,20,65,Elder
let age : number = 1
if (age < 2) {
   console.log ("you are a baby")
} else if (age < 4){
   console.log("you are a toddler")
} else if (age < 13){
   console.log("you are a kid")
} else if (age < 20){
   console.log("you are a teenager")
} else if (age < 65){
   console.log("you are a adult")
} else {
   console.log("you are an elder")
}
let age : number = 3
if (age < 2) {
   console.log ("you are a baby")
} else if (age < 4){
   console.log("you are a toddler")
} else if (age < 13){
   console.log("you are a kid")
} else if (age < 20){
   console.log("you are a teenager")
} else if (age < 65){
   console.log("you are a adult")
} else {
   console.log("you are an elder")
}
let age : number = 10
if (age < 2) {
   console.log ("you are a baby")
} else if (age < 4){
   console.log("you are a toddler")
} else if (age < 13){
   console.log("you are a kid")
} else if (age < 20){
   console.log("you are a teenager")
} else if (age < 65){
   console.log("you are a adult")
} else {
   console.log("you are an elder")
}
let age : number = 18
if (age < 2) {
   console.log ("you are a baby")
} else if (age < 4){
   console.log("you are a toddler")
} else if (age < 13){
   console.log("you are a kid")
} else if (age < 20){
   console.log("you are a teenager")
} else if (age < 65){
   console.log("you are a adult")
} else {
   console.log("you are an elder")
}
let age : number = 57
if (age < 2) {
   console.log ("you are a baby")
} else if (age < 4){
   console.log("you are a toddler")
} else if (age < 13){
   console.log("you are a kid")
} else if (age < 20){
   console.log("you are a teenager")
} else if (age < 65){
   console.log("you are a adult")
} else {
   console.log("you are an elder")
}
let age : number = 100
if (age < 2) {
   console.log ("you are a baby")
} else if (age < 4){
   console.log("you are a toddler")
} else if (age < 13){
   console.log("you are a kid")
} else if (age < 20){
   console.log("you are a teenager")
} else if (age < 65){
   console.log("you are a adult")
} else {
   console.log("you are an elder")
}

// TASK 29
let favourite_fruits : string [] = ["strawberry","blueberry","mango"]
if (favourite_fruits.includes("strawberry")) {
   console.log("you really like bananas")
}
if (favourite_fruits.includes("peech")) {
   console.log("you really like bananas")
}
if (favourite_fruits.includes("blueberry")) {
   console.log("you really like bananas")
}
if (favourite_fruits.includes("watermelon")) {
   console.log("you really like bananas")
}
if (favourite_fruits.includes("mango")) {
   console.log("you really like bananas")
}

// TASK 30
let users : string [] = ["admin","eric","dua","miraal","aqsa","noor"]
for (let user of users) {
   if(user === "admin"){
      console.log("Hello admin, would you like to see a status report?")
   }
    else {
      console.log (`Hello ${user}, thank you for logging in again`)
   }
}

// TASK 31
let users : string [] = [] 
if (users.length === 0) {
    console.log("We need to find some users!")
}

//TASK 32
let current_user : string [] = ["aqsa","miraal","Noor","Hassan","Bilal","Dua"]
let new_users : string [] = ["aqsa","miraal","Alishba","Maria","Saima","Mirha"]

let current_user_lower : string [] = current_user.map(user => user.toLowerCase())
for (let new_user of new_users){
    if(current_user_lower.includes(new_user.toLowerCase())){
      console.log(`Sorry ${new_user} , that username is taken`)
    }
    else{
         console.log(`${new_user},Username is available`)
    }
}

// TASK 33
let numbers : number [] = [1,2,3,4,5,6,7,8,9]
for(let number of numbers) {
    if (number ===1) {
        console.log(`${number}st`) //1st
    }
    else if (number ===2) {
        console.log(`${number}nd`) //2nd
    }
    else if (number ===3) {
        console.log(`${number}rd`) //3nd
    }
    else{
        console.log(`${number}th`) //4th , 5th , 6th , 7th , 8th , 9th 
    }
}

// TASK 34
let favourite_pizza : string [] = ["Margherita","California","Sicilian"]
for (let pizza of favourite_pizza) {
    console.log(pizza)
    }
    console.log ("\n")
    for (let pizza of favourite_pizza) {
        console.log(` I really like ${pizza} pizza!`)
    }

console.log("\nI really love pizza")

//TASK 35
let animals : string [] = ["Cat","Tiger","Cow"]
for (let animal of animals) {
    console.log(animal)
}
    console.log ("\n")

for (let animal of animals) {
    console.log(`A ${animal} has a tail`)
}
    console.log("\n All of these animals have a tail")
console.log("\n All of these are great pets!but i love cats more")

//TASK 36
 function makeShirt(size: string, text: string): void {
    console.log(`you order a ${size} shirt that says ${text}`)
 }

makeShirt(`large`,'" i love typescript"')
makeShirt(`medium`,'" i need a big shirt"')

//TASK 37
function makeShirt(size: string = 'large', text: string = 'I love typescrip'): void {
    console.log(`you have order a ${size}, shirt that says ${text}`)

}
makeShirt();
makeShirt('medium')

//part 2 any size different message
makeShirt('small', 'I need a big shirt to wear')

//TASK 38
function describe_city(city: string, country: string = 'Pakistan'): void{
console.log(`${city} is in ${country}`)
}
describe_city('Karachi') // Defult Sentence
describe_city('France','Europe')
describe_city('Lahore')

//TASK 39
function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`
}
  let c1= cityCountry('Lahore','Pakistan'); 
  let c2= cityCountry('Tokyo','Japan');
  let c3= cityCountry('Jeddah','Saudia Arabia');
 console.log(c1);
 console.log(c2);
  console.log(c3);

// TASK 40
function makeAlbum(artist: string, title: string): {artist: string, title: string} {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return  dictionaries;
}
 let album = makeAlbum("Saira" , "Chapter Of Life");
console.log(album)

 album = makeAlbum("Danish" , "Magical Palace");
console.log(album)

 album = makeAlbum("Mirha" , "Rooh-e-Zindagi");
console.log(album)

//TASK 41
function show_magicians(magicians: string[]): void {
    for(const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));

    }
 }
const magician: string[] = ["Aqsa","Noor","Dua"]
 show_magicians(magician);

// TASK 42
 function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {           // i stand for index string
    magicians[i] = magicians[i] + ' the great'
 }
 }    
    const magician2: string[] = ["Aqsa","Noor","Dua"];
make_great(magician2);
show_magicians(magician2);

// TASK 43
function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i =0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + ' the great');
    }
    return greatMagicians;
}
const magicians3: string[] = ["Aqsa","Noor","Dua"];


const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);

// TASK 44
function sandwich(...items: string[]): void {
    console.log("Sandwich order:")
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("Enjoy Your Sandwich Aqsa Shaikh")
sandwich('Capsium','Tomato','Chicken');
sandwich('Garlic Sauce','Cheese','Mustard');
sandwich('Cucumber','Cabbage','Crunchy Chicken');

// TASK 45
type car = {
    manufacturer: string
    model: string
    [key: string]: any;
}
function createCar( manufacturer: string, model: string, optional: Record<string, any>): car {
    return{
        manufacturer,
        model,
        ...optional
    }
}  
const mycar: car = createCar("Honda", "Civic", {color: "black" , year: "2020"})
console.log(mycar);


// ALL ASSIGMENTS HAS BEEN COMPLETED!