class Personel {

    constructor(ad,soyad){
      this.ad = ad;
      this.soyad = soyad;
    }

    kaydet(){
        console.log(`Personel Başarıyla Kaydedildi : ${this.ad}`);
    }
}

const personel = new Personel("Berat","Demirak");
personel.kaydet();
 personel.adi = "Berat";
 console.log(personel.adi);

