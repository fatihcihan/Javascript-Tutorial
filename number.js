let sonuc;
sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseFloat("10a");            // output -> 10
sonuc = parseFloat("a10");            // output -> NaN

sonuc = isNaN("10a");                 // output -> true

let sayi = 15.123456;
sonuc = sayi.toPrecision(5);             // output -> 15.123   komple 5 basamak alir
sonuc = sayi.toFixed(5);                 // output -> 15.12346  virgulden sonra 5 basamak alir ve yuvarlar
sonuc = Math.round(2.4)                  // output -> 2
sonuc = Math.round(2.6)                  // output -> 3
sonuc = Math.ceil(2.1);                  // output -> 3 (her halukarda yukariya yuvarlar)
sonuc = Math.floor(2.9);                 // output -> 2 (asagi yuvarlar)
sonuc = Math.sqrt(25);                   // output -> 5
sonuc = Math.abs(-10);                   // output -> 10
sonuc = Math.min(1, 2, 3, 4, 5);         // output -> 1
sonuc = Math.max(1, 2, 3, 4, 5);         // output -> 5
sonuc = Math.floor(Math.random() * 10) + 1;  // output -> 0 ile 10 arasinda random sayi uretir


console.log(typeof sonuc);
console.log(sonuc);