// let toplam = 0;
// for (i = 0; i <= 10; i++) {
//     toplam += i;
// }
// console.log(toplam);

let sayilar = [1, 4, 5, 8, 4, 3];
let toplam = 0;

// for (i = 0; i < sayilar.length; i++) {
//     toplam += sayilar[i];
// }


// for (let i in sayilar) {     // in operatoru araciligiyla sayilarin index nosunu tutar
//     toplam += sayilar[i];
// }


// for (let sayi of sayilar) {     // of operatoru indexle ilgilenmez, degerler sayiya atanir direkt
//     toplam += sayi;
// }

let user = {
    "name": "fatih",
    "username": "fatihcihan",
    "password": "12345",
    "email": "info@fatihcihan.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}