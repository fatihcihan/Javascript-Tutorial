let result;
let a = 10, b = 20, c = 30;

// 1) Aritmetik operatorler
result = a + b;
result = a - b;
result = a * b;
result = a / b;
result = c % a;
// result = a++;   // once atama daha sonra artirilir. output -> 10
// result = ++a;   // once artirilir daha sonra atanir. output -> 11
// result = a--;
// result = --a;

// 2) Atama operatorleri
result = a;
result += a;    // result = result + a
result -= a;    // result = result - a
result *= a;    // result = result * a
result /= a;    // result = result / a

// 3) Karsilastirma operatorleri
result = (a == b)   // true or false.   output -> false
result = (a != b)   // output -> true
result = (3 === "3") // === demek -> deger kontrolu disinda tip kontrolu de yapar.  output -> false
result = (a > b)
result = (a >= b)
result = (a < b)
result = (a <= b)

// 4) Mantiksal operatorler

console.log(result);