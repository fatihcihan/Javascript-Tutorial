var isim = "Fatih";
const adres = "Aydin";
adres = "İzmir";

function yazdir() {
    var isim = "Ahmet";
    var yas = 20;
    console.log("function scope:", isim, yas);
}

if (true) {
    let cinsiyet = "Erkek"
    let isim = "Ali";
    console.log(isim, cinsiyet);
}
console.log(cinsiyet);
console.log(isim);
yazdir();

// fonksiyonlar kendi scope alanlarini olusturur.
// if-for vs. blok icerisinde yeni bir scope olusmaz. (let, const)