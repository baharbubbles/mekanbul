const passport = require("passport");
const LocalStategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const Kullanici = mongoose.model("kullanici");


passport.use(
    new LocalStategy(
        {
            usernameField: "eposta",
            passwordField: "sifre",
        },
        (eposta, sifre, done) => {
            Kullanici.findOne({eposta: eposta}, (hata, kullanici) => {
                if(hata){
                    return done(hata);
                }
                if(!kullanici){
                    return done(null, false,{
                        mesaj: "Yanlış kullanıcı adı.",
                    });
                }
                if(!kullanici.sifreDogrumu(sifre)){
                    return done(null, false,{
                        mesaj: "Yanlış şifre.",
                    });
                }
                return done(null, kullanici);
            });

        }   
     )
);