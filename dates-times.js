let simdi = new Date();

// Get methods
sonuc = simdi;
sonuc = simdi.getDate();
sonuc = simdi.getDay();
sonuc = simdi.getFullYear();
sonuc = simdi.getHours();
sonuc = simdi.getTime();

// Set methods
// simdi.setFullYear(2025);
simdi.setMonth(7);      // 0 -> Ocak'a denk gelir, index numarasi gibi.
simdi.setDate(15);
sonuc = simdi;

let dogumTarihi = new Date(1990, 5, 15);
sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();
// sonuc = simdi - dogumTarihi;        // output -> milisecond
let milisecond = simdi - dogumTarihi;
let saniye = milisecond / 1000;     // saniye
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;
sonuc = saat;

console.log(sonuc);
console.log(typeof sonuc);