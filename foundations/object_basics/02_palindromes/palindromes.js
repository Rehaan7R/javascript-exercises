const palindromes = function (str) {
    const newStr = str.toLowerCase()
    .split("")
    .filter((char => {
        return (char >= "0" && char <= "9") ||
               (char >= "a" && char <= "z") ||
               (char >= "A" && char <= "Z");
    }))
    .join("");

    const reversed = newStr.split("").reverse().join("");

    return newStr === reversed;
};

// Do not edit below this line
module.exports = palindromes;
