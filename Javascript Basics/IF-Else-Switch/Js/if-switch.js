var nameFirst = "Hikmat";
var nameSecond = "Ahmet";
var nameLast = "Rajabli";

// IF -ELSE //

// adi shert
if (nameFirst === "Hikmat") {
    console.log(`${nameFirst} - correct!`);
} else {
    console.log("not correct!")
}

// || - ve ya, && - ve! 
if ((nameFirst === "Hikmat") && (nameLast === "Rajabli")) {
    console.log(`${nameFirst} and ${nameLast} correct!`);
} else {
    console.log("not correct!");
}


// addimli shert 
if (nameFirst === "Hikmat") {
    console.log(`${nameFirst} correct!`);
} else if (nameSecond === "Ahmet") {
    console.log(`${nameSecond} correct!`);
} else {
    console.log("not correct!");
}

// SWITCH // 

// adi shert 
switch (nameLast) {
    case "Rajabli":
        console.log(`${nameLast} correct!`);
        break;

    default:
        console.log("not correct!");
}



// addimli shert
switch (true) {
    case nameFirst === "Hiskmat":
        console.log(`${nameFirst} - correct!`);
        break;

    case nameSecond === "Ahmet":
        console.log(`${nameSecond} - correct!`);
        break;

    default:
        console.log("not correct!");
}


// addimli shert 2

var today = new Date().getDay();

switch (today) {
    case 0:
        today = "Вс";
        console.log(`Сегодня: ${today} `);
        break;

    case 1:
        today = "Пн";
        console.log(`Сегодня: ${today} `);
        break;

    case 2:
        today = "Вт";
        console.log(`Сегодня: ${today} `);
        break;

    case 3:
        today = "Ср";
        console.log(`Сегодня: ${today} `);
        break;

    case 4:
        today = "Чт";
        console.log(`Сегодня: ${today} `);
        break;

    case 5:
        today = "Пн";
        console.log(`Сегодня: ${today} `);
        break;

    default:
        today = "Cб"
        console.log(`Сегодня: ${today} `);
}