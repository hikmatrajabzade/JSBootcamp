var sayi = Math.floor(Math.random() * 10) + 1;
var haq = 3,
    defe = 0;
console.log(sayi)

while (haq > 0) {
    haq--;
    defe++
    var texmin = prompt("texmin et");
    if (texmin == sayi) {
        console.log(`tebrikler ${defe}'defede bildin!`);
        console.log(`bal: ${60 - (defe -1) * 20}`)
        break;

    } else if (texmin > sayi && haq > 0) {
        console.log("biraz asagi dus birde yoxla");

    } else if (texmin < sayi && haq > 0) {
        console.log("biraz yuxari cix birde yoxla");

    } else {
        console.log("haqqin bitdi");
    }

}