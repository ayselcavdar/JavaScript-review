// ********** Template Literals Kullanimi **********
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

let userName = "aysel"
const DOMAIN = "icewasonline.com"
let email = userName + "@" + DOMAIN

//console.log("Merhaba", userName, "sitemize hos geldin", "mail adresin:", email);

let info = `Merhaba ${userName}. Sitemize hoşgeldin..
Mail adresin: ${email}
mail adresinin uzunlugu ${email.length}
borcunuz: ${(2+5)*10} TL
gunun saat bilgisi: ${new Date().getHours()}
kisa isminiz: ${userName[0]}
`
console.log(info);