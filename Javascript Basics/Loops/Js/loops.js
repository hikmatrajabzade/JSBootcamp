// For Loop
for (var i = 1; i < 10; i++) {


    if (i == 5) {
        console.log(`my favorite number: ${i}`);
        continue;
    }

    console.log(i);
}


// While Loop

var i = 0;
while (i < 10) {

    i++;

    switch (true) {
        case i == 5:
            console.log(`my favorite number: ${i}`);
            continue;
    }

    console.log(i);

}



// do-While Loop

var i = 0;
do {

    i++;

    switch (true) {
        case i == 5:
            console.log(`my favorite number: ${i}`);
            continue;
    }

    console.log(i);
} while (i < 10);

// biraz praktika
var Sum = 1;
for (var i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        Sum += i;
    }

}

console.log(Sum);

// ic ice Loop
for (let x = 0; x <= 10; x++) {
    for (let y = 0; y <= 10; y++) {
        console.log(`x = ${x}; y = ${y}`);
    }
}