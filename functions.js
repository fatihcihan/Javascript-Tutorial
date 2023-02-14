function selamlama(msg) {
    console.log(msg);
}

selamlama("slm");
selamlama("mrb");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasFatih = yasHesapla(1993);
let yasAhmet = yasHesapla(1990);
console.log(yasFatih, yasAhmet);

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili)
    let kalanSene = 65 - yas;
    if (kalanSene > 0) {
        console.log(`emekli olmaniza ${kalanSene} yil kaldi.`);
    } else {
        console.log("emekli oldunuz");
    }
}

emekliligeKacYilKaldi(1993,"fatih");
emekliligeKacYilKaldi(1990,"okan");

