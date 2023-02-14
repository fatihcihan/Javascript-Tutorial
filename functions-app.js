// 1) Kendisine gonderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yazin

function kelimeYazdir(kelime, adet) {
    for (let i = 0; i < adet; i++) {
        console.log(kelime);
    }
}
// kelimeYazdir("merhaba", 3);

// 2) Dikdortgenin alan ve cevresini hesaplayan fonksiyonu yazin

function alanCevreHesapla(kisa, uzun) {
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2;
    return `alan : ${alan} cevre : ${cevre}`;
}
let sonuc = alanCevreHesapla(4, 5);
// console.log(sonuc);

// 3) Yazi tura uygulamasini fonksiyon kullanarak yaziniz.

function yaziTuraAt() {
    let random = Math.random();
    if (random < 0.5) {
        console.log("yazi");
    } else {
        console.log("tura");
    }
    console.log(random);
}

// yaziTuraAt();
// yaziTuraAt();
// yaziTuraAt();

// 4) Kendisine gonderilen bir sayinin tam bolenlerini dizi seklinde donduren fonksiyonu yazin

function tamBolenler(sayi) {
    let sayilar = [];
    for (let i = 2; i < sayi; i++) {
        if (sayi % i == 0) {
            sayilar.push(i);
        }
    }
    return sayilar;
}
// console.log(tamBolenler(10));
// console.log(tamBolenler(45));

// 5) Degisken sayida parametre alan toplam isminde bir fonksiyon tanimlayin

function toplam() {
    let sonuc = 0;
    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }
    return sonuc;
}
console.log(toplam(2, 5));     
console.log(toplam(2, 5, 7));
console.log(toplam(2, 5, 7, 7));