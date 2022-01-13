var serviceTime = new Date('04/20/2000');
var timeNowMs = Date.now();
var timeDiff = Math.floor((timeNowMs - serviceTime) / (1000 * 60 * 60 * 24));

// texniki baxis tapshiriqi

switch (true) {
    case timeDiff <= 365:
        console.log("1. Texniki baxis");
        break;

    case timeDiff >= 365 && timeDiff <= 730:
        console.log("2. Texniki baxis");
        break;

    case timeDiff >= 730 && timeDiff <= 1200:
        console.log("3. Texniki baxis");
        break;

    default:
        console.log("Masini sat...");
        break;
}

// Admin login tapsiriqi

var __loginAdmin = "Admin";
var __passAdmin = "1234";
var __resultLogin = prompt("Login");

// 1. addim - Eger login sehvdirse bagla!
if (__resultLogin !== __loginAdmin) {
    console.log("Error login");

    // 2. addim - Eger login duzdurse parolu yaz!
} else if (__resultLogin === __loginAdmin) {
    var __resultPass = prompt("Pass");

    // 3. addim - Eger parol sehvdirse bagla!
    if (__passAdmin !== __resultPass) {
        console.log("Error pass");

        // 4. addim - eks halda giris et!
    } else {
        console.log("Successfuly!");
    }

}