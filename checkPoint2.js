/*String Manipulation Functions:*/
/*reverse*/
function reverseString(str) {
    var strArray = str.split('');
    var reversedArray = strArray.reverse();
    const reversedStr = reversedArray.join('');
    return reversedStr;
}
console.log(reverseString("toshiba"));
/*count caracter*/
function count(str) {
    return str.length;
}

console.log(count("hello"));
/*capitalize*/
function capitalize(sentence) {
    let result = '';
    for (var i = 0; i < sentence.length; i++) {
        if (i === 0 || sentence[i - 1] === ' ') {
            result += sentence[i].toUpperCase();
        } else {
            result += sentence[i].toLowerCase();
        }
    }

    return result;
}
console.log(capitalize("hello world"));

/*Array Functions:*/
/*max min*/
function Max(arr) {
    return Math.max(...arr);
}

console.log(Max([1, 3, 5, 7, 9]));
function Min(arr) {
    return Math.min(...arr);
}

console.log(Min([1, 3, 5, 7, 9]));
/*sum*/
function sum(liste) {
    var somme = 0;
    for (let i = 0; i < liste.length; i++) {
        parseInt(liste[i]);
        somme += liste[i];
    }
    return somme;
}
console.log(sum([1, 4, 7, 12]))
/*filtre*/
function filterArray(arr, condition) {
    return arr.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5], num => num % 2 !== 0));
/*Mathematical Functions:*/
/*factoriel*/
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
// Example usage
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1

/*prime*/
function Prime(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("is not prime");
            return;
        }
    }
    console.log("is prime");
}
console.log(Prime(4));
/*fab*/
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(10));

