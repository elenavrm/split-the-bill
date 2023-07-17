const button = document.querySelector('#btn');
button.addEventListener('click', calculateAmount);

const buttonTip = document.querySelector('#addTip');
buttonTip.addEventListener('click', showTip);

function showTip(e) {
    e.preventDefault();
    tip.style.display = 'block';
    tipAmount.style.display = 'block';
    tipText.style.display = 'block';
}

function calculateAmount(e) {
    e.preventDefault();
    const bill = Number (document.querySelector('#bill').value);
    const people = Number (document.querySelector("#people").value);
    const tip = Number (document.querySelector('#tip').value);
    const tipAmount = Number (document.querySelector('#tipAmount').value);

    if ( bill === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Please enter your information!',
            iconColor: '#EE4B2B',
            background: '#ffff',
            confirmButtonColor: '#1e0854',
            confirmButtonText: 'OK 👌'
        })
        return false;
    }

let amountPerPerson = bill / people;
let tipPerPerson = (bill * tip + tipAmount) / people;
let totalSum = amountPerPerson + tipPerPerson;

amountPerPerson = amountPerPerson.toFixed(2);
tipPerPerson = tipPerPerson.toFixed(2);
totalSum = totalSum.toFixed(2);

document.querySelector('#dividedBill').textContent = amountPerPerson;
document.querySelector('#dividedTip').textContent = tipPerPerson;
document.querySelector('#billAndTip').textContent = totalSum;
}