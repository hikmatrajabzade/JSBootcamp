var models = [{
        name: 'Bmw 418d',
        image: 'img/bmw.jpg',
        link: 'https://www.google.com/search?q=bmw+418d&sxsrf=AOaemvJZXklDBa_CplkOmMvlOBQ16ItpJQ:1642760594515&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK7r6N0ML1AhVE4aQKHbFODC0Q_AUoAXoECAEQAw#imgrc=hfIJIbGV4X7dOM'
    },

    {
        name: 'Mazda CX-3',
        image: 'img/mazda.jpg',
        link: 'https://www.google.com/search?q=bmw+418d&sxsrf=AOaemvJZXklDBa_CplkOmMvlOBQ16ItpJQ:1642760594515&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK7r6N0ML1AhVE4aQKHbFODC0Q_AUoAXoECAEQAw#imgrc=hfIJIbGV4X7dOM'
    },

    {
        name: 'Volvo S60',
        image: 'img/volvo.jpg',
        link: 'https://www.google.com/search?q=bmw+418d&sxsrf=AOaemvJZXklDBa_CplkOmMvlOBQ16ItpJQ:1642760594515&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK7r6N0ML1AhVE4aQKHbFODC0Q_AUoAXoECAEQAw#imgrc=hfIJIbGV4X7dOM'
    },


    {
        name: 'Skoda Superb',
        image: 'img/skoda.jpg',
        link: 'https://www.google.com/search?q=bmw+418d&sxsrf=AOaemvJZXklDBa_CplkOmMvlOBQ16ItpJQ:1642760594515&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjK7r6N0ML1AhVE4aQKHbFODC0Q_AUoAXoECAEQAw#imgrc=hfIJIbGV4X7dOM'
    }
];
var index = 0;
var indexCount = models.length;
var settings = {
    random: false,
    duration: 2000
}
init();
var preven;

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseenter', function() {
        clearInterval(interval);
    })
})


document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        init();
    })
})

function init() {
    interval = setInterval(function() {

        if (settings.random) {

            do {
                index = Math.floor(Math.random() * indexCount);
            } while (index == preven);

            preven = index;
            showSlider(index);


        } else {
            if (index == indexCount) {
                index = 0;
            }
            showSlider(index);
            console.log(index)
            index++;
        }


    }, settings.duration);
}


function showSlider(i) {

    index = i;
    document.querySelector('.card-img-top').setAttribute('src', models[index].image);
    document.querySelector('.card-link').textContent = models[index].name

}



document.querySelector('.fa-arrow-circle-left').addEventListener('click', function() {
    index--;

    if (index < 0) {
        index = indexCount - 1;
    }
    console.log(index);
    showSlider(index);
})


document.querySelector('.fa-arrow-circle-right').addEventListener('click', function() {
    index++;

    if (index >= indexCount) {
        index = 0;
    }
    console.log(index);
    showSlider(index);
})