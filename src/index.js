module.exports = function toReadable(number) {
    let simple = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    let compaund = [
        " ",
        " ",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let res = "";

    if (number === 0) {
        return "zero";
    }

    if (number >= 100) {
        res += simple[Math.trunc(number / 100)] + " hundred ";
    }

    if (number % 100 > 0) {
        if (number % 100 < 20) {
            res += simple[number % 100];
        } else {
            res += compaund[Math.trunc((number % 100) / 10)] + " ";
            if (number % 10 > 0) {
                res += simple[number % 10];
            }
        }
    }

    return res.trim();
};
