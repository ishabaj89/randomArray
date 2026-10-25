function generateRandomArray(length) {
    const numbers = [];

    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        numbers.push(randomNumber);
    }

    return numbers;
}

console.log(generateRandomArray(5));
