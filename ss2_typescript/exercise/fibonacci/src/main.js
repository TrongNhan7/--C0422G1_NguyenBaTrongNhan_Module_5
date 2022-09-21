// function fibonacci(n: number): number {
//     if (n == 1 || n == 2) {
//         return 1;
//     } else if (n > 2) {
//         return fibonacci(n - 2) + fibonacci(n - 1);
//     }
// }
//
// let sum: number = 0;
// let result:string = "";
// for (let i = 1; i < 10; i++) {
//     sum += fibonacci(i);
//     result += fibonacci(i) + ' ';
// }
// console.log(result);
// console.log(sum);
var number1 = 0;
var number2 = 1;
var temp = 0;
var sum = 0;
for (var i = 1; i <= 10; i++) {
    if (i == 1) {
        sum += 1;
        continue;
    }
    temp = number1 + number2;
    number1 = number2;
    number2 = temp;
    sum += temp;
}
console.log(sum);
