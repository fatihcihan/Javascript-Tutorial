/**
 * 1) Bir sayinin 10-50 arasinda olup olmadigini kontrol edin
 * 2) Bir sayinin pozitif tek sayi olup olmadigini kontrol edin
 * 3) x, y, z sayilarinin buyukluk karsilastirmasini yapiniz (else if)
 * 4) 2 vize (%40) ve 1 final (%60) notuna gore hesaplanan ortalama icin;
 *  a) Eger ortalama 50 ve ustundeyse gecti aksi halde kaldi
 *  b) Gecmek icin ortalama 50 bile olsa final notu en az 50 olmalidir
 *  c) Finalden 70 alindiginda ortalama 50'nin altinda olsa bile dersten gecilsin
 */

// 1)

let sayi1 = 20;
if (sayi1 > 10 && sayi1 < 50) {
    console.log("sayi 10-50 arasindadir.");
} else {
    console.log("sayi 10-50 arasinda degildir.");
}

// 2)
let sayi = 21;
if (sayi % 2 == 1 && sayi > 0) {
    console.log("sayi pozitif tek sayidir.");
}

// 3) 
let x = 40, y = 20, z = 30;

if (x > y && x > z) {
    console.log("x en buyuk.");
} else if (y > x && y > z) {
    console.log("y en buyuk.");
}
else if (z > x && z > y) {
    console.log("z en buyuk.");
} else {
    console.log("sayilar esit.");
}

// 4)
let vize1 = 10;
let vize2 = 10;
let final = 70;

let ortalama = ((vize1 + vize2) / 2) * 0.4 + final * 0.6;
console.log("ortalama : " + ortalama);
// a)
if (ortalama >= 50) {
    console.log("gectiniz.");
} else {
    console.log("kaldiniz.");
}

// b)
if (ortalama >= 50 && final >= 50) {
    console.log("gectiniz.");
} else {
    console.log("kaldiniz.");
}

// c) 
if (ortalama >= 50 || final >= 70) {
    console.log("gectiniz.");
} else {
    console.log("kaldiniz.");
}
