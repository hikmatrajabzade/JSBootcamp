// getElementById ()

// Html sehifeden id ile cagirma
let val = document.getElementById('header');

// Html sehifeden id ile cagirma ve metni deyisme
document.getElementById('header').innerText = 'Salam';

// Html sehifeden id ile cagirma ve metni deyisme | html tegleri istifade etmek olur
document.getElementById('header').innerHTML = '<i> Salam </i>';

// cagirilan id in css ile oynamaq
val.style.color = "red";
val.style.fontSize = '50px';

// console.log(val)

// querySelector()

// tapdigi ilk elementi secer
// console.log(document.querySelector('li'));

document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(2)').style.color = 'red';
document.querySelector('li:first-child').style.color = 'yellow';

//texti deyistirir [innialText]
document.querySelector('li:first-child').textContent = 'yellow';

//klaslarin hamsinin adin deyisdirer
document.querySelector('li').className = "as";

//yeni klass artirir
document.querySelector('li').classList.add("sa");



// cox element secme getElementsByClassName - for

let ran = document.getElementsByTagName('li');
console.log(ran);

for (let i = 0; i < ran.length; i++) {
    console.log(ran[i].style.color = "black");
}

// cox element secme querySelectorAll - Foreach, for


let ran = document.querySelectorAll('li');
ran.forEach(function(item1) {
    console.log(item1);
})