function addition() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let result = Number(a) + Number(b);
    if (result < 0) {
        document.getElementById("output").style.color = "#ED174C";
    } else {
        document.getElementById("output").style.color = "#C4CED4";
    }
    document.getElementById("output").innerHTML = String(result);
}

function subtract() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let result = Number(a) - Number(b);
    if (result < 0) {
        document.getElementById("output").style.color = "#ED174C";
    } else {
        document.getElementById("output").style.color = "#C4CED4";
    }
    document.getElementById("output").innerHTML = String(result);
}

function multiply() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let result = Number(a) * Number(b);
    if (result < 0) {
        document.getElementById("output").style.color = "#ED174C";
    } else {
        document.getElementById("output").style.color = "#C4CED4";
    }
    document.getElementById("output").innerHTML = String(result);
}

function divide() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let result = Number(a) / Number(b);
    if (result < 0) {
        document.getElementById("output").style.color = "#ED174C";
    } else {
        document.getElementById("output").style.color = "#C4CED4";
    }
    document.getElementById("output").innerHTML = String(result);
}

function power() {
    let a = document.getElementById("first-number").value;
    let b = document.getElementById("second-number").value;
    let result = Number(1);
    for (let i = 0; i < Number(b); i++) {
        result *= a;
    }
    if (result < 0) {
        document.getElementById("output").style.color = "#ED174C";
    } else {
        document.getElementById("output").style.color = "#C4CED4";
    }
    document.getElementById("output").innerHTML = String(result);
}

function reset() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
}