/**
 * 
 * 
 * 1) Iki ogrencinin asagidaki bilgilerini degiskenler icerisinde saklayiniz.
 * 
 * Ogrenci 1;
 * isim : Fatih Cihan
 * dogum tarihi: 1993
 * matematik notlari: 70, 70, 50
 * 
 * Ogrenci 2;
 * isim: Yigit Bilgi
 * dogum tarihi: 1998
 * matematik notlari: 40, 40, 80
 * 
 * 2) Ogrencilerinin yas bilgilerini degiskende tutunuz.
 * 3) Ogrencilerin ders ortalama notunu desigkende saklayiniz.
 * Ogrencilerin 50 gecme notuna gore basari durumlarini degiskende saklayiniz. * 
 * 
 * 
 */

let student1Name = "Fatih";
let student1Surname = "Cihan";
let student1Birthday = 1993;
let student1Math1 = 70;
let student1Math2 = 70;
let student1Math3 = 50;
let student1Average = (student1Math1 + student1Math2 + student1Math3) / 3;
console.log(parseInt(student1Average));  // ondalikli kisimla ilgileniyorsak float'a parse edebiliriz.
console.log(student1Average >= 50);

let student2Name = "Yigit";
let student2Surname = "Bilgi";
let student2Birthday = 1998;
let student2Math1 = 40;
let student2Math2 = 40;
let student2Math3 = 50;
let student2Average = (student2Math1 + student2Math2 + student2Math3) / 3;
console.log(parseInt(student2Average));
console.log(student1Average >= 50);

let nowYear = new Date().getFullYear();

let studen1Age = nowYear - student1Birthday;
let studen2Age = nowYear - student2Birthday;
console.log(studen1Age);
console.log(studen2Age);