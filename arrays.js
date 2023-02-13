// let urun1 = "Iphone 12";
// let urun2 = "Iphone 13";
// let urun3 = "Iphone 13 pro";

let urunler = ["Iphone 12", "Iphone 13", "Iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold", "black", "white"];

let urun1 = ["Iphone 12", 9000, "gold"];

let urun2 = [];
urun2[0] = "Iphone 13";
urun2[1] = 12000;
urun2[2] = "black";

let urun3 = [
    "Iphone 12",
    13000,
    ["white", "black", "red"]
];

console.log(typeof urun3[2]);
console.log(urun3[2][0]);
console.log(urun3[2][1]);
console.log(urun3[2][2]);
// console.log(urunler[0]);
// console.log(urunler[1]);
// console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

let kursAdi = "Javascript Egitimi";
console.log(kursAdi[5]);                // output -> c
console.log(kursAdi.split(" ")[1]);     // output -> Egitimi

