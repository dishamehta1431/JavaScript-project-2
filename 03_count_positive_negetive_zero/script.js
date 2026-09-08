function check() {
    let num = Number(document.getElementById("numbers").value);

    if (num > 0) {
        document.getElementById("result").innerHTML = "Positive Number";
    }
    else if (num < 0) {
        document.getElementById("result").innerHTML = "Negative Number";
    }
    else {
        document.getElementById("result").innerHTML = "Zero";
    }
}