// ********** Number Veri Turu ile Calismak **********
// number veri turu tanimlamak:
let price = 56
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Orani:", tax,
    "KDV Tutari:", priceTax,
    "Fiyat: ", total

);

let stringNumber = "11"
console.log(stringNumber);
let newNumber = Number(stringNumber)
console.log(newNumber);

// arttirma ve azaltma islemleri:
let counter = 320
counter = counter + 1 // uzun yol
counter += 1
counter ++
console.log(counter);

counter --
counter -= 1
console.log(counter);

counter *= 10
console.log(counter);

counter /= 2
console.log(counter);

// islem onceligi:
// https://tr.wikipedia.org/wiki/%C4%B0%C5%9Flem_s%C4%B1ras%C4%B1

console.log(2 + 3 * 10)
console.log((2 + 3) * 10);

// mod(kalan) alma %:
// sayi tek mi cift mi ???
console.log(15 % 3);

// 8 urun alan koliye tum urunler sigiyor mu ?
console.log("koli kalan urun ornegi: ", 18%8);

// ust alma **:
console.log(2 * 2 * 2 * 2);
console.log(2 ** 4);

// asagi yuvarlama islemi -> Math.floor:
console.log("Asagi yuvarlama:", Math.floor(1.9));

// yukari yuvarlama islemi -> Math.ceil :
console.log("Yukari yuvarlama:", Math.ceil(1.9));


// yakina yuvarlama islemi -> Math.round :
console.log("Yakina yuvarlama:", Math.round(1.2));