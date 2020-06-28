//var input = document.getElementsByName("input");

function tippageCalc(rating) {
    return 0.05*(rating-1);
}

var tip = 'ini';

function calc() {

    let bill = document.getElementById("bill").value;
    let rating = document.getElementById("rating").value;
    let count = document.getElementById("count").value;

    let tippage = tippageCalc(rating);

    tip = (tippage*bill)/count;

    alert("The tip is : "+tip);

}

document.getElementById("calculate").addEventListener('click', calc);

