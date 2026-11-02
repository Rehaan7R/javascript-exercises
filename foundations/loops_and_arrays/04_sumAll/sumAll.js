const sumAll = function(from, to) {
    if (from < 0 || to < 0) {
        return 'ERROR';
    }

    if (!Number.isInteger(from) || !Number.isInteger(to)) {
        return 'ERROR';
    }

    let temp;

    if (from > to) {
        temp = from;
        from = to;
        to = temp;
    }
    
    let sum = 0;

    for (let i = from; i <= to; i++) {
        sum += i;
    }

    return sum;    
};

// Do not edit below this line
module.exports = sumAll;
