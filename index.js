document.getElementById('kitkat-buy-btn').addEventListener('click', function () {
    const quantity = getInputValue('kitkat-quantity');
    const kitkatCost = quantity * 200;

    setInnerTest('chocolate', kitkatCost)
    total()
})
document.getElementById('rose-buy-btn').addEventListener('click', function () {
    const quantity = document.getElementById('rose-quantity').value;
    const roseCost = quantity * 100;

    setInnerTest('rose', roseCost)
    total()

})
document.getElementById('diary-buy-btn').addEventListener('click', function () {
    const quantity = document.getElementById('diary-quantity').value;
    const diaryCost = quantity * 100;

    setInnerTest('diary', diaryCost)
    total()
})

function setInnerTest(id, value) {
    document.getElementById(id).innerText = value;

}
function getInputValue(id) {
    const value = document.getElementById(id).value;
    return parseInt(value);

}


function total(params) {
    const chocolate = document.getElementById('chocolate').innerText;
    const rose = document.getElementById('rose').innerText;
    const diary = document.getElementById('diary').innerText;
    const totalSum = parseInt(chocolate) + parseInt(rose) + parseInt(diary);

    setInnerTest('total', totalSum)
}

document.getElementById('promoApplyBtn').addEventListener('click', function () {
    const promoCode = getInputValue('promo-code');
    if (promoCode === 101) {
        const total = document.getElementById('total').innerText;
        const sum = total - parseInt(total) * .1;
        setInnerTest('all-total', sum);
    } else {
        alert('Wrong PromoCode,Enter Valid One')
    }

})