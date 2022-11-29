const expect = require("chai").expect;
var adres = "https://mekanbul.baharbubbles.repl.co";
const request = require("supertest").agent(adres);
describe("POST /api/mekanlar", function () {
  it("Yeni mekan ekle:", async function () {
    const response = await request.post("/api/mekanlar").send({
      ad: "Antre Gurme Kitchen",
      adres: "Isparta Merkez",
      puan: 5,
      imkanlar: "Restoran",
      enlem: 37.7,
      boylam: 30.5,
      gunler1: "Pazartesi-Cuma",
      acilis1: "09.00",
      kapanis1: "23.00",
      kapali1: false,
      gunler2: "Cumartesi-Pazar",
      acilis2: "08.00",
      kapanis2: "00.00",
      kapali2: false,
    });
    expect(response.status).to.eql(201);
    process.env.mekanid = response.body._id;
  });
});

describe("GET /api/mekanlar", function () {
  it("Girilen konum civarındaki tüm mekanları listele:", async function () {
    const response = await request.get("/api/mekanlar?enlem=37&boylam=35");
    expect(response.status).to.eql(200);
  });
});

describe("GET /api/mekanlar/:mekanid", function () {
  it("Mekan getir:", async function () {
    const response = await request.get(`/api/mekanlar/${process.env.mekanid}`);
    expect(response.status).to.eql(200);
  });
});

describe("PUT /api/mekanlar/:mekanid", function () {
  it("Mekan Güncelle:", async function () {
    const response = await request
      .put(`/api/mekanlar/${process.env.mekanid}`)
      .send({
        ad: "Antre Gurme Kitchen 2",
        adres: "Isparta Çarşı",
        puan: 4,
        imkanlar: "Restoran",
        enlem: 37,
        boylam: 32,
        gunler1: "Pazartesi-Cuma",
        acilis1: "09.00",
        kapanis1: "22.00",
        kapali1: false,
        gunler2: "Cumartesi-Pazar",
        acilis2: "08.00",
        kapanis2: "23.00",
        kapali2: true,
      });
    expect(response.status).to.eql(200);
  });
});

describe("POST /api/mekanlar/:mekanid/yorumlar", function () {
  it("Yorum ekle:", async function () {
    const response = await request
      .post(`/api/mekanlar/${process.env.mekanid}/yorumlar`)
      .send({
        yorumYapan: "Bahar",
        puan: 3,
        yorumMetni: "Güzeldi",
      });
    process.env.yorumid = response.body._id;
    expect(response.status).to.eql(201);
  });
});

describe("GET /api/mekanlar/:mekanid/yorumlar/:yorumid", function () {
  it("Yorum getir:", async function () {
    const response = await request.get(
      `/api/mekanlar/${process.env.mekanid}/yorumlar/${process.env.yorumid}`
    );
    expect(response.status).to.eql(200);
  });
});

describe("PUT /api/mekanlar/:mekanid/yorumlar/:yorumid", function () {
  it("Yorum güncelle:", async function () {
    const response = await request
      .put(
        `/api/mekanlar/${process.env.mekanid}/yorumlar/${process.env.yorumid}`
      )
      .send({
        yorumYapan: "Irmak",
        puan: 4,
        yorumMetni: "Çok da beğenmedim yemekleri",
      });
    expect(response.status).to.eql(200);
  });
});

describe("DELETE /api/mekanlar/:mekanid/yorumlar/:yorumid", function () {
  it("Yorum sil:", async function () {
    const response = await request.delete(
      `/api/mekanlar/${process.env.mekanid}/yorumlar/${process.env.yorumid}`
    );
    expect(response.status).to.eql(200);
  });
});

describe("DELETE /api/mekanlar/:mekanid", function () {
  it("Mekan sil:", async function () {
    const response = await request.delete(
      `/api/mekanlar/${process.env.mekanid}`
    );
    expect(response.status).to.eql(200);
  });
});
after((done) => {
  done();
});