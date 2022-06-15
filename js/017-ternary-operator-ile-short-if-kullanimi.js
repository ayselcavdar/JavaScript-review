// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

let userName = prompt("Kullanici adinizi giriniz")
let info = document.querySelector("#info")
// ternary kullanimi:
// kosul ? dogruysa : yanlissa

info.innerHTML = `${userName ? userName : "kullanici adiniz bulunamadi :("}`
// userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi :("