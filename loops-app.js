let sayilar = [1, 6, 7, 12, 3, 25];

// 1) sayilar listesindeki her bir elemanin karesini yazdiriniz.

// for (let sayi of sayilar) {
//     console.log(sayi*sayi);
// }

// 2) sayilar listesidndeki hangi sayilar 5'in katidir?

// for (let i = 0; i < sayilar.length; i++) {
//     if (sayilar[i] % 5 == 0){
//         console.log(sayilar[i]);
//     }
// }

// 3) sayilar listesindeki cift sayilarin toplamini bulunuz

// let toplam = 0;
// for (let i in sayilar) {
//     if (sayilar[i] % 2 == 0) {
//         toplam += sayilar[i];
//     }
// }
// console.log(toplam);

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];

// 4) urunler listesindeki tum utunleri buyuk harfle yazdiriniz.

// for (let urun of urunler) {
//     console.log(urun.toUpperCase());
// }

// 5) urunler listesi icinde samsung gecen kac urun var?

// let adet = 0;
// for (let urun of urunler) {
//     if (urun.includes("samsung")) {
//         adet++;
//     }
// }
// console.log(adet);

let ogrenciler = [
    { "ad": "fatih", "soyad": "cihan", "notlar": [60, 70, 60] },
    { "ad": "yigit", "soyad": "bilgi", "notlar": [80, 70, 80] },
    { "ad": "cinar", "soyad": "turan", "notlar": [30, 40, 60] },
]

// 6) ogrenciler listesindeki her ogrencinin nor ortalamasi ve basari durumlari

for (let ogrenci of ogrenciler) {
    let notToplam = 0;
    let ortalama = 0;
    let adet = 0;

    for (let not of ogrenci.notlar) {
        notToplam += not;
        adet++;
    }
    ortalama = notToplam / adet

    if (ortalama >= 50) {
        console.log("basarili");
    }else{
        console.log("basarisiz");
    }
    console.log(ortalama.toFixed());
}

// tum ogrencilerin not ortalamasi kactir?