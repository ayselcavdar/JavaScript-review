// ********** String Veri Turu Islemleri **********
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "aysel.ice@gmail.com"
let firstName = "aysel"
let lastName = "cavdar"

// string karakter sayisi -> length
console.log(email.length);

// Ilk Karakteri Bulmak -> [0]:
console.log(firstName[0]);
console.log(firstName.charAt(0));

// buyuk harf / kucuk harf :
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());

// String Icinde Istedigimiz Bilgiyi Aramak ve Yerini Bulmak -> search:
console.log(email.search("@"))

email.search("olamyan") // -1
// belli bir yere kadar al -> slice :  (domain bilgisi)
let DOMAIN = email.slice(email.search("@") + 1);
console.log(DOMAIN);

console.log(
  DOMAIN.slice(0, DOMAIN.indexOf(".")) // sadece gmail kismini aldik
);

// bilgiyi degistir -> replace :
email = email.replace("gmail.com","hotmail.com")
console.log(email);

// istedigim bilgi var mi ? -> includes :
email.includes('dkfhsd') // false
email.includes('@') // true

// istedigim bilgiyle basladi mi ? bitti mi -> startsWidth, endsWidth :
console.log(email.endsWith("hotmail.com"));

// Ilk Harflerini Buyuk Yapmak
firstName = "FIRST";
lastName = "LAST";
let fullName = `${firstName[0].toUpperCase()}${firstName
  .slice(1)
  .toLowerCase()} ${lastName[0].toUpperCase()}${lastName
  .slice(1)
  .toLowerCase()}`;

  console.log(fullName);
