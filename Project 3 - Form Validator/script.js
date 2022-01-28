const inputs = document.querySelectorAll('.form-control');
const password = document.getElementById('password')
const repassword = document.getElementById('repassword')


inputs.forEach(function(inputs) { // inputs loop
    eventListeners(inputs) // input values added to eventListeners function
})

function eventListeners(inputs) { // eventListeners function created
    inputs.addEventListener('focus', function() { // added event listener focus
        checkForm(inputs) // input values added to checkForm function
    })

    inputs.addEventListener('blur', function() { // added event listener focus
        checkForm(inputs) // input values added to checkForm function
    })


}


function checkForm(inputs) { // checkForm function created

    if (!inputs.value) {
        formIsInValid(inputs, 'doldurmaq lazimdir!')

    } else if (password.value !== repassword.value) {
        formIsInValid(password, 'parollar eyni deyil!')
        formIsInValid(repassword, 'parollar eyni deyil!')

    } else if (inputs.value.length <= 5) {
        formIsInValid(inputs, `${inputs.id} en az 6 simvoldan ibaret olmalidir!`)

    } else {
        formIsValid(inputs)
    }

}


function formIsInValid(inputs, message) { // formIsInValid function created
    inputs.classList = 'form-control is-invalid';
    const div = inputs.nextElementSibling;
    div.classList = 'invalid-feedback';
    div.innerText = message;
}

function formIsValid(inputs) { // formIsValid function created
    inputs.classList = 'form-control is-valid';
}