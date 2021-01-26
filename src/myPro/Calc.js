
function Add(a, b) {
    let sum = a + b;
    return sum;
}

function Mult(a, b) {
    let mult = a * b;
    return mult;
}

function sub(a, b) {
    let sub = a - b;
    return sub;
}

function div(a, b) {
    let div = a / b;
    div = div.toFixed(2);
    return div
}
export { Add, Mult, sub, div };