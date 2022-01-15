let infoUsers = ['Hikmat', 'Rajabli', '22'];
let cars = [
    { ad: 'bmw', il: 2007, km: 200000 },
    { ad: 'mercedes', il: 2006, km: 156000 },
    { ad: 'hundai', il: 2008, km: 150000 }
]


// For
for (let i = 0; i < infoUsers.length; i++) {
    console.log(infoUsers[i]);
}

// For in

for (let i in infoUsers) {
    console.log(infoUsers[i]);

    for (let i in cars) {
        console.log(cars[i]);
    }

}

// Foreach
cars.forEach(function(item) {
    console.log(item)
})


// map: returns an array

let people = [
    { ad: 'Hikmat', soyad: 'Rajabli', yash: 22 },
    { ad: 'Ahmet', soyad: 'Rajabli', yash: 29 }
]

let vals = people.map(function(item) {
    return `${item.ad} ${item.soyad} ${item.yash}`;
});

console.log(vals);