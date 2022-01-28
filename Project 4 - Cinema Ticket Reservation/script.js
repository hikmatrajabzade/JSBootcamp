let container = document.querySelector('.container');
let count = document.getElementById('count');
let amount = document.getElementById('amount');
let select = document.getElementById('movie');
let seats = document.querySelectorAll('.seat:not(.reserved)');


getFromLocalStorage();
calculateTotal();

container.addEventListener('click', function(e) {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        calculateTotal();
    }
})

select.addEventListener('change', function() {
    calculateTotal();

})

function calculateTotal() {
    let selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr = [];
    const seatsArr = [];

    selectedSeats.forEach(function(seat) {
        selectedSeatsArr.push(seat);
    })

    seats.forEach(function(seat) {
        seatsArr.push(seat);
    })


    let selectedSeatIndexs = selectedSeatsArr.map(function(seat) {
        return seatsArr.indexOf(seat);
    })

    saveToLocalStorage(selectedSeatIndexs);

    let selectedSeatCount = selectedSeats.length
    count.innerHTML = selectedSeatCount;
    amount.innerHTML = select.value * selectedSeatCount;
}


function saveToLocalStorage(indexs) {
    localStorage.setItem('selectedSeats', JSON.stringify(indexs));
    localStorage.setItem('selectedMovie', select.selectedIndex);
}

function getFromLocalStorage() {
    let selectedMovie = localStorage.getItem('selectedMovie')
    if (selectedMovie !== null) {
        select.selectedIndex = selectedMovie;

    }


    let selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    if (selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if (selectedSeats.indexOf(index) >= 0) {
                seat.classList.add('selected');
            }
        })
    }




}