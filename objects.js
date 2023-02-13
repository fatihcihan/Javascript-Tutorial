
let kullanici1 = {
    "ad": "fatih",
    "soyad": "cihan",
    "yas": 30,
    "adres": {
        "sehir": "aydin",
        "ilce": "efeler"
    },
    "hobiler": ["sinema", "spor"]
}

let kullanici2 = {
    "ad": "bilgi",
    "soyad": "cinar",
    "yas": 20,
    "adres": {
        "sehir": "izmir",
        "ilce": "bornova"
    },
    "hobiler": ["kitap"]
}


let sonuc;
sonuc = kullanici1.ad;
sonuc = kullanici1.soyad;
sonuc = kullanici1["yas"];
sonuc = kullanici1.adres.sehir;
sonuc = kullanici1.hobiler[1];
sonuc = kullanici1.hobiler[0];

let kullanicilar = [
    kullanici1,
    kullanici2
]
sonuc = kullanicilar[0].ad;


let urunler = [
    {
        "urunAdi": "samsung s22",
        "urunFiyat": 12000
    },
    {
        "urunAdi": "samsung s23",
        "urunFiyat": 15000
    },
]

sonuc = urunler[0].urunAdi;
console.log(sonuc)
