// Javascript String Methods

let kursAdi = String("Javascript Egitimi");
let sonuc;

sonuc = kursAdi.toLowerCase();      // output -> javascript egitimi
sonuc = kursAdi.toUpperCase();      // output -> JAVASCRIPT EGITIMI
sonuc = kursAdi.length;             // output -> 18
sonuc = kursAdi[0];                 // output -> J
sonuc = kursAdi.slice(0, 10);       // output -> Javascript
sonuc = kursAdi.slice(10)           // output -> Egitimi
sonuc = kursAdi.slice(-10, -5);     // negatif indexten baslar
sonuc = kursAdi.substring(0, 10);   // output -> Javascript
sonuc = kursAdi.replace("Javascript", "React");    // output -> React Egitimi
sonuc = kursAdi.trim();                  // sag ve soldan bosluk karakterleri siler
sonuc = kursAdi.trimEnd();               // sondan siler
sonuc = kursAdi.trimStart();             // bastan siler  
sonuc = kursAdi.indexOf("Egitimi");      // output -> 11
sonuc = kursAdi.split(" ");              // output -> [ 'Javascript', 'Egitimi' ]
sonuc = kursAdi.split(" ")[0];           // output -> Javascript


console.log(sonuc);