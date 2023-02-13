// 1) Elma, armut, muz, cilek elemanlarinsa sahip bir dizi olsturunuz
let meyveler = ['elma', 'armut', 'muz', 'cilek'];

// 2) Dizi kac elemanlıdır
console.log(meyveler.length);

// 3) Dizinin ilk ve son elemani nedir?
console.log(meyveler[0])
console.log(meyveler[meyveler.length - 1])

// 4) Elma dizinin bir elemani midir?

console.log(meyveler.includes('elma'));
console.log(meyveler.indexOf('muz'));

// 5) Kiraz meyvesini listenin sonuna ekleyiniz
// meyveler[meyveler.length] = "kiraz";
// meyveler.push('kiraz');
console.log(meyveler);

// 6) Dizinin son 2 elemanini siliniz
// meyveler.pop();
// meyveler.pop();

// meyveler.splice(meyveler.length - 2, 2);


// Asagidaki bilgileri dizi icersinde saklayiniz ve her ogrencinin yasini ve not ortalamasini hesaplayiniz.
/**
 * 
 * Ogrenci 1 : Yigit Bilgi 2010 (70,60,80)
 * Ogrenci 2 : Ada Bilgi 2012 (80,80,80)
 * Ogrenci 3: Ahmet Turan 2009 (60,60,70)
 * 
 */

let ogr1 = [
    'Yigit',
    'Bilgi',
    2011,
    [70, 60, 80]
];

let ogr2 = [
    'Ada',
    'Bilgi',
    2005,
    [80, 80, 90]
];

let ogr3 = [
    'Ahmet',
    'Turan',
    2009,
    [60, 60, 70]
];

let ogrenciler = [ogr1, ogr2, ogr3];

let yigitYas = new Date().getFullYear() - ogrenciler[0][2];
let adaYas = new Date().getFullYear() - ogrenciler[1][2];
let ahmetYas = new Date().getFullYear() - ogrenciler[2][2];

let yigitNot = (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2])/3;
let adaNot = (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2])/3;
let ahmetNot = (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2])/3;
console.log(yigitNot.toFixed(),'cfds')
console.log(adaNot.toFixed(),'cfds')
console.log(ahmetNot.toFixed(),'cfds')



console.log(yigitYas);
console.log(adaYas);
console.log(ahmetYas);