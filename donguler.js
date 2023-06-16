
for (i = 1;i<=10;i++) {
    console.log(i);
}
console.log("Bitti");

 var sehirler = ["Antalya","İstanbul","Ankara","İzmir"]

for(i = 0; i< sehirler.length;i++){
    console.log(sehirler[i])
}

var i = 1;
while(i<=10){
    console.log(i);
    i++;
}

var i = 1;
do{}while(i>10){
    console.log(i); 
}

sehirler.forEach(function(sehir){
    console.log(sehir);
})