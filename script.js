function alertNav() {
    alert('Loading Weather Report');
}

function cookieMessage() {
    document.querySelector('.cookie').remove();
}

function c2f(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        console.log(i);
        var tempNums = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempNums.innerText);
        if(element.value == "C") {
            tempNums.innerText = f2c(tempVal);
        } else {
            tempNums.innerText = c2f(tempVal);
        }
    }
}