let ad = "Fatih";
let soyad = "Cihan";
let yas = 66;
let sehir = "Aydin";

let mesaj = "Benim adim " + ad + ' ve soyadim ' + soyad + '. ' + sehir + '\'da yasiyorum.' + ' Emeklilige ' + (65 - yas) + ' yil kaldi';

let mesaj2 = `Benim adim ${ad} ve soyadim ${soyad}. ${sehir}'de yasiyorum. Emeklilige ${(65 - yas)} yilim kaldi`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emeklilige " + (65 - yas) + " yil kaldi" : "Zaten emekli oldunuz";
let mesaj3 = `Benim adim ${ad} ve soyadim ${soyad}. ${sehir}'de yasiyorum.  ${emeklilik}`;

console.log(mesaj3);