/**
 * 1) Siparis bilgilerini object icerisinde saklayin.
 * 2) Her siparisin ayri ayri kdv dahil toplam odenen ucretini hesaplayin.
 * 3) Tum siparislerin kdv dahil toplam odenen ucretini hesaplayin
 * 
 * siparis id: 101
 * siparis tarihi: 31.12.2022
 * odeme sekli: kredi karti
 * kargo adresi: Yahya kaptan mah. Kocaeli Izmit
 * satin alinan urunler:
 *      urun id: 5
 *      urun basligi: iphone 13 pro
 *      urun url: xyz.com
 *      urun fiyati: 22000
 * 
 *      urun id: 6
 *      urun basligi: iphone 13 pro max
 *      urun url: abc.com
 *      urun fiyati: 25000
 * musteri:
 *      musteri id: 12
 * satici:
 *      firma id: 34
 *      firma adi: Apple turkiye 
 * 
 * siparis id: 102
 * siparis tarihi: 30.12.2022
 * odeme sekli: kredi karti
 * kargo adresi: Yahya kaptan mah. Kocaeli Izmit
 * satin alinan urunler: 
 * 
 *      urun id: 6
 *      urun basligi: iphone 13 pro max
 *      urun url: abc.com
 *      urun fiyati: 25000
 * musteri:
 *      musteri id: 12
 * satici:
 *      firma id: 34
 *      firma adi: Apple turkiye 
 * 
 */

let siparis_1 = {
    "siparisId": 101,
    "siparisTarihi": "30.12.2022",
    "odemeSekli": "kredi karti",
    "kargoAdresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urunId": 5,
            "urunAdi": "iphone 13 pro",
            "urunUrl": "xyz.com",
            "urunFiyat": 22000
        },
        {
            "urunId": 6,
            "urunAdi": "iphone 13 pro max",
            "urunUrl": "abc.com",
            "urunFiyat": 25000
        }
    ]
}

let siparis_2 = {
    "siparisId": 102,
    "siparisTarihi": "30.12.2022",
    "odemeSekli": "kredi karti",
    "kargoAdresi": {
        "mahalle": "yahya kaptan",
        "ilce": "izmit",
        "sehir": "kocaeli"
    },
    "urunler": [
        {
            "urunId": 6,
            "urunAdi": "iphone 13 pro max",
            "urunUrl": "abc.com",
            "urunFiyat": 25000
        }
    ]
}


let siparisler = [siparis_1, siparis_2];

let siparis1Toplam = (siparis_1.urunler[0].urunFiyat + siparis_1.urunler[1].urunFiyat) * 1.18;
let siparis2Toplam = (siparis_2.urunler[0].urunFiyat) * 1.18;
let toplamSiparis = siparis1Toplam + siparis2Toplam;

console.log(siparis1Toplam);
console.log(siparis2Toplam);
console.log(toplamSiparis);