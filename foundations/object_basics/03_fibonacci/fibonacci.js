const fibonacci = function(num) {
    if (num < 1 || !Number.isInteger(num)) {
        return "OOPS";
    }

    let prev = 0;
    let current = 1;

    for (let i = 2; i <= num; i++) {
        let next = prev + current;
        prev = current;
        current = next;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
