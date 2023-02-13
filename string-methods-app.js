let url = "https://www.google.com";
let kursAdi = "Javascript Egitimi";

// 1) url kac karakterlidir?
let sonuc;
sonuc = url.length;

// 2) kursAdi kac kelimeden olusmaktadir?
sonuc = kursAdi.split(" ").length;

// 3) url http ile mi basliyor?
sonuc = url.startsWith("https");
if (sonuc) {
    console.log("evet basliyor");
} else {
    console.log("hayir baslamiyor");
}

// 4) kursAdi icerisinde Egitimi kelimesi var mi?
if (kursAdi.indexOf("Egitimi") > -1) {          // string'in icinde bir kelime yoksa -1 doner, o yuzden.
    console.log("evet var");
} else {
    console.log("hayir yok");
}

// 5) url ve kursAdi degiskenlerini kullanarak asagidaki string bilgiyi olusturunuz.
// https://www.google.com/javascript-egitimi

kursAdi = kursAdi.toLowerCase();
kursAdi = kursAdi.replace(" ", "-");
sonuc = `${url}/${kursAdi}`;
console.log(sonuc);