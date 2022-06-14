// ********** let ve const ile Degisken Tanimlama **********

// var ile degisken tanimlamak:
// var serverName = "icewasonline.com"
//console.log(serverName);

// let ile degiskeni bos tanimlamak:
let serverName
console.log(serverName);
// let ile degiskene bilgi atamak:
serverName="http://icewasonline.com"
console.log(serverName);

// let ile degiskene bilgi atayarak tanimlamak:
let password = "12345"
console.log(password);

// degisken atamasi yapmadan once kullanmaya calismak:
//HATALI KULLANIM
// console.log(fullName);
// let fullName= "Aysel"

// let fullName= "Aysel C"
// console.log(fullName);

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek:
let fullName = "Aysel C"
fullName="Oguzhan C"
console.log(fullName);

// birlestirme veya ekleme islemi
fullName = fullName + " Yeni Eklenen Bilgi"
console.log(fullName);

fullName= "sifirladik"
fullName += " ve Yeni bilgi ekledik"
console.log(fullName);

// const ile degiskeni bos tanimlamaya calismak :( :

// const ile degisken tanimlamak:
const SERVER_PASSWORD = "oojvfjvoajvao221"
console.log(SERVER_PASSWORD);

// SERVER_PASSWORD="1234"
// console.log(SERVER_PASSWORD);