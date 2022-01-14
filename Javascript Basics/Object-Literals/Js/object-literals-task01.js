// Car servis task
var carsInfo = [{
        __id: "bmw116d_1234",
        __model: "116d",
        __reng: "white",
        __il: 2005,
        __servis_arxivi: [{
                __id: "bmw116d_1234_1",
                __tarix: "30.01.2016",
                __km: "13000",
                __xerc: "900",
                __servis_detal: [{
                        __id: "1",
                        __ish: "yag deyisdirmek",
                        __mebleg: "300"
                    },
                    {
                        __id: "2",
                        __ish: "filtr deyisdirmek",
                        __mebleg: "300"
                    }
                ]
            },

            {
                __id: "bmw116d_1234_2",
                __tarix: "30.01.2018",
                __km: "42000",
                __xerc: "2000",
                __servis_detal: [{
                        __id: "1",
                        __ish: "yag deyisdirmek",
                        __mebleg: "500"
                    },

                    {
                        __id: "2",
                        __ish: "motor deyisdirmek",
                        __mebleg: "1500"
                    }
                ]

            }
        ],

        // used method
        __yearcars: function() {
            return new Date().getFullYear() - this.__il;
        }

    },

    {
        __id: "bmw116d_1234",
        __model: "116ds",
        __reng: "white",
        __servis_arxivi: [{
                __id: "bmw116d_1234_1",
                __tarix: "30.01.2016",
                __km: "13000",
                __xerc: "900",
                __servis_detal: [{
                        __id: "1",
                        __ish: "yag deyisdirmek",
                        __mebleg: "300"
                    },
                    {
                        __id: "2",
                        __ish: "filtr deyisdirmek",
                        __mebleg: "300"
                    }
                ]
            },

            {
                __id: "bmw116d_1234_2",
                __tarix: "30.01.2018",
                __km: "42000",
                __xerc: "2000",
                __servis_detal: [{
                        __id: "1",
                        __ish: "yag deyisdirmek",
                        __mebleg: "500"
                    },

                    {
                        __id: "2",
                        __ish: "motor deyisdirmek",
                        __mebleg: "1500"
                    }
                ]

            }
        ]
    },

    {
        __id: "bmw116d_1234",
        __model: "116d",
        __reng: "white",
        __servis_arxivi: [{
                __id: "bmw116d_1234_1",
                __tarix: "30.01.2016",
                __km: "13000",
                __xerc: "900",
                __servis_detal: [{
                        __id: "1",
                        __ish: "yag deyisdirmek",
                        __mebleg: "300"
                    },
                    {
                        __id: "2",
                        __ish: "filtr deyisdirmek",
                        __mebleg: "300"
                    }
                ]
            },

            {
                __id: "bmw116d_1234_2",
                __tarix: "30.01.2018",
                __km: "42000",
                __xerc: "2000",
                __servis_detal: [{
                        __id: "1",
                        __ish: "yag deyisdirmek",
                        __mebleg: "500"
                    },

                    {
                        __id: "2",
                        __ish: "motor deyisdirmek",
                        __mebleg: "1500"
                    }
                ]

            }
        ]
    }
]

// used for
for (let i = 0; i < carsInfo.length; i++) {

    console.log(carsInfo[i]);

}

// used method
console.log(`${carsInfo[0].__yearcars()} yasi var`);