// Object Literals

let person = {
    firstName: "Hikmat",
    lastName: "Rajabli",
    Age: 22,
    Hobbies: ['boxing', 'books', 'coding', 'powerlifting'],
    Adress: {
        country: "Ukraine",
        city: "Kharkiv",
    },

    // Method

    getBrithYear: function() {
        return new Date().getFullYear() - this.Age;
    }
}


// let infoUser = person.getBrithYear();
// console.log(infoUser);


// Object in Array

let people = [{
        firstName: "Hikmat",
        lastName: "Rajaabli",
        Age: 22,
        Hobbies: ['boxing', 'books', 'coding', 'powerlifting'],
        Adress: { country: "Ukraine", city: "Kharkiv" }

    },
    {
        firstName: "Ahmet",
        lastName: "Rajab",
        Age: 29,
        Hobbies: ['books', 'music', 'cats'],
        Adress: { country: "China", city: "Beijing" },

    }
]

// width for

for (i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// let infoPeople = console.log(people[0].Age);