// simple function

function ageCalc(brithyear) {
    return new Date().getFullYear() - brithyear;


}



// gue biraz qeliz function
function teqaudAge(item1, item2) {
    var ad = item1;
    var yas = ageCalc(item2);
    var muddet = 65 - yas;

    switch (true) {
        case yas < 65 && yas >= 18:
            return `${item1}, teqaude ${muddet} il qaldi!`;

        case yas < 1:
            return `${item1}, sen hele dunyaya gel sonra hesablayariq :)`;

        case yas <= 18:
            return `${item1}, hele teqaud haqqinda fikirlesmeyin tezdir ^_^`;


        case yas > 65:
            return `${item1}, teqaud yasindan ${-muddet + (muddet * -2)} il kecib! `;


        case yas == 65:
            return `${item1}, teqaude 1 ilden az qaldi...`;

        default:
            return "neise bir sehv var.. belkede olmusen?!";

    }
}

// let __hikmatrajabli = teqaudAge("Hikmat", 1999);
// console.log(__hikmatrajabli)


function calc(a, b) {
    return a + b;

}



function __sumAll() {
    var cem = 0;
    for (var i = 0; i < arguments.length; i++) {
        cem = cem + arguments[i];
    }
    return cem;
}

console.log(__sumAll(10, 14, 20));