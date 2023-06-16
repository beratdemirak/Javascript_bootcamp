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

function kullaniciVarmi(email,sifre){
    console.log(email);
    console.log(sifre);

 for(i=0;i<kullanicilar.length;i++)   {
    if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre){
        return true;
    }
 }
 return false;
}

function giris(){
if(kullaniciVarmi(email,sifre)){
   console.log(tivitler)
}else{
    console.log("Kullanıcı adı veya şifre hatalı");
}
}
giris(email,sifre)