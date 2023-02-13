let ogrenciler = ['yigit', 'cinar', 'esra'];
sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join("-")      // output -> murat-ali-esra

// eleman silme
// sonuc = ogrenciler.pop();         // son eleman silinir ve silinen eleman geri dondurulur.
// sonuc=ogrenciler.shift();           // ilk eleman silinir.


// eleman ekleme
// sonuc = ogrenciler.push("okan")     // dizinin sonuna eleman ekler.
// sonuc = ogrenciler.unshift("merve");      // dizinin basina eleman ekler.

let markalar1 = ['x', 'y', 'z']
let markalar2 = ['a']
let markalar3 = ['1', '2',]

// sonuc = markalar1.concat(markalar2, markalar3);
// sonuc = markalar1.splice(0, 0, markalar2);      // output -> [ [ 'a' ], 'x', 'y', 'z' ]
// sonuc = markalar1.splice(0, 1, "qwe")
sonuc = markalar1.splice(0, 1);        // ilk elemani silip geriye doner




console.log(sonuc);
console.log(markalar1);