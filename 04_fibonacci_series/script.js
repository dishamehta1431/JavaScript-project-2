function check() {
    let num = Number(document.getElementById("num").value);

    let a = 0;
    let b = 1;
    let result = "";

    for (let i = 1; i <= num; i++) {
        result = result + a + " ";

        let next = a + b;
        a = b;
        b = next;
    }

    document.getElementById("result").innerHTML = result;
}