/**
 * PRUEBA #1: Fibonacci
 * @param {*} number 
 * @returns string
 */
export const fibonacci = (number) => {
    if (number < 1 || number > 46) return;

    let fibonacciSequence = [0, 1];

    for (let index = 2; index < number; index++) {
        fibonacciSequence.push(
            fibonacciSequence[fibonacciSequence.length - 1] +
            fibonacciSequence[fibonacciSequence.length - 2]
        )
    }

    return fibonacciSequence.join(' ');
}

/**
 * PRUEBA #2: Numero Perfecto
 * @param {*} number 
 * @returns string
 */
export const isNumberPerfect = (number) => {
    if (number < 1 || number > 100) return;

    let dividersNumber = 0;

    for (let index = 1; index <= number / 2; index++) {
        if (number % index === 0) dividersNumber += index;
    }

    return dividersNumber === number ? `${number} es perfecto` : `${number} no es perfecto`;
}

console.log(fibonacci(5));
console.log(isNumberPerfect(5));
console.log(isNumberPerfect(6));