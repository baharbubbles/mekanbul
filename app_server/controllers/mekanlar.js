var express = require('express');
var router = express.Router();
const mekanBilgisi = function (req, res) {
  res.render('mekanbilgisi',
    {
      "baslik": "Mekan Bilgisi",
      "mekanBaslik": "Antre Gurme Kitchen",
      "mekanDetay": {
        "ad": "Antre Gurme Kitchen",
        "adres": "Isparta Merkez",
        "puan": "5",
        "imkanlar": ["Restoran"],
        "koordinatlar": {
          "enlem": "37.7812653",
          "boylam": "30.5653227"
        },
        "saatler": [
          {
            "günler": "Pazartesi-Cuma",
            "acilis": "09.00",
            "kapanis": "23.00",
            "kapali": false
          },
          {
            "günler": "Cumartesi-Pazar",
            "acilis": "08.00",
            "kapanis": "00.00",
            "kapali": false

          }
        ],
        "yorumlar": [
          {
            "yorumYapan": "Ahmet Işık",
            "puan": "5",
            "tarih": "10 Ağustos 2022",
            "yorumMetni": "Yemekler güzel, servis hızlı."
          },
          {
            "yorumYapan": "Gülin Aslan",
            "puan": "4",
            "tarih": "12 Mart 2022",
            "yorumMetni": "Aile ile gidilebilecek güzel bir yer."
          }
        ]


      }
    }
  );
}

const anaSayfa = function (req, res, next) {
  res.render('anasayfa', 
  { baslik: 'Ana Sayfa', 
  sayfaBaslik: { slogan: 'Civardaki mekanları keşfet!', siteAd: 'MekanBul' },
  mekanlar: [
    {
      "ad": "Antre Gurme Kitchen",
      "adres": "Isparta Merkez",
      "puan": "5",
      "imkanlar": ["Restoran"],
      "mesafe": "40m"
    },
    {
      "ad": "Brewmood Cafe",
      "adres": "Isparta Merkez",
      "puan": "4",
      "imkanlar": ["Kahve"],
      "mesafe": "140m"
    },
    {
      "ad": "HollStone Gece Kulübü",
      "adres": "Isparta Merkez",
      "puan": "5",
      "imkanlar": ["Müzikli Eğlence"],
      "mesafe": "400m"
    }
  ]

});
}
const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'Yorum ekle' });
}




module.exports =
{
  anaSayfa, mekanBilgisi, yorumEkle
}
