// ********** css class eklemek veya cikartmak **********

let greeting = document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title");
greeting.classList.add("new-info","second-class");// birden fazla class eklemek

greeting.classList.remove("title")
console.log(greeting.classList);