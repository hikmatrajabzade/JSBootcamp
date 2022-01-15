// "Bmw, Mercedes, Opel, Mazda" elemenlterine sahib massiv yarat
var cars = ["Bmw", "Mercedes", "Opel", "Mazda"]; // 1.
var cars = new Array("Bmw", "Mercedes", "Opel", "Mazda"); // 2.
console.log(cars);

// Massivin nece elementi var?
console.log(cars.length);

// Massivin ilk ve son elementi?
console.log(cars[0]);
console.log(cars[cars.length - 1]);

// Massive Renault artir
cars[cars.length] = "Renault";
console.log(cars);

// Massivin basina Toyota artir - UNSHIFT
cars.unshift("Toyota");
console.log(cars);

// Massivin basindaki elementi sil - SHIFT
cars.shift()
console.log(cars);

// Massivin sonunda Vaz artir - PUSH
cars.push("Vaz");
console.log(cars);

// Massivin sonundaki elementi sil - POP
cars.pop()
console.log(cars);

// Massivi tersine cevir - REVERSE
cars.reverse()
console.log(cars);

// Massivi elifba sirasina gore goster - SORT
cars.sort()
console.log(cars);

// "Mercedes" massivin elementidirmi?
console.log(cars.includes("Mercedes")); // INCLUDES (TRUE OR FALSE)
console.log(cars.indexOf("Mercedes")); // INDEXOF (nomre)

// var str = "Chevrolet,Dacia"; ifadesini massive cevirin
var str = "Chevrolet,Dacia";
var cars2 = str.split(",");
console.log(cars2);

// Massivleri birlesdir
cars = cars.concat(cars2);
console.log(cars);

// Son iki elementi sil
cars.splice(cars.length - 2, cars.length - 1);
console.log(cars);

// 3 massivden ibaret olan massiv yarat 

var studentA = ["Hikmet", "XNUVD", 1999];
var studentB = ["Turkan", "BDU", 2000];
var studentC = ["Naila", "BDU", 2000];

var students = [studentA, studentB, studentC];
console.log(students[1][0]);