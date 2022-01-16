// Function task 01

var hesabA = {
    ad: 'Hikmat Rajabli',
    hesabNo: '123456',
    balans: 3000,
    limit: 2000
}


var hesabB = {
    ad: 'Ahmet Rajabli',
    hesabNo: '123457',
    balans: 5000,
    limit: 4000
}

function kredit(hesab, mebleg) {

    let limitferqi = mebleg - hesab.balans;

    // console.log(`Salam, ${hesab.ad}`);

    if (mebleg < hesab.balans) {

        console.log(`${hesab.ad} ugurlu emeliyyat! kartinizi goturmeyi unutmayin!`);
        let cariBalans = hesab.balans - mebleg;
        console.log(`cari balansiniz: ${cariBalans}`);


    } else if (mebleg > hesab.balans && limitferqi <= hesab.limit) {

        if (confirm("balansinda yoxdu amma limitininiz var. Istifade etmek isteyirsiniz?")) {
            hesab.limit = hesab.limit - limitferqi;
            hesab.balans = hesab.balans - mebleg + limitferqi;

            // var confirm = prompt("balansinda yoxdu amma limitininiz var. Goturmek ucun 1 e, legv ucun 2 e basin");
            // if (confirm == 1) {

            //     hesab.limit = hesab.limit - limitferqi;
            //     hesab.balans = hesab.balans - mebleg + limitferqi;

            //     console.log(`Kredit ugurla goturuldu! Cari balansiniz: ${hesab.balans}, cari limitiniz: ${hesab.limit}`);

            // } 

            console.log(`Kredit ugurla goturuldu! Cari balansiniz: ${hesab.balans}, cari limitiniz: ${hesab.limit}`);
        } else {
            console.log("legv edildi")
        }






    } else if (mebleg > (hesab.balans + hesab.limit)) {
        console.log("Teessufki balansinizda ve limitinizde bu qeder pul yoxdur!")
    }

}






kredit(hesabB, 60);