var kullanicilar = [
    {email:"demirakberat@gmail.com",sifre:"123456"},
    {email:"demirak_008@hotmail.com",sifre:"123456"}
]

var tivitler = [
    {email:"demirakberat@gmail.com",tivit:"Bugün hava çok güzel"},
    {email:"demirakberat@gmail.com",tivit:"Bugün hava çok güzel 2"},
    {email:"demirak_008@hotmail.com",tivit:"Kitap okuyacağım"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris(){
if((email == kullanicilar[0].email  && sifre == kullanicilar[0].sifre) ||   
   (email == kullanicilar[1].email  && sifre == kullanicilar[1].sifre)){
   console.log(tivitler)
}else{
    console.log("Kullanıcı adı veya şifresi hatalı");
}
}
giris(email,sifre)