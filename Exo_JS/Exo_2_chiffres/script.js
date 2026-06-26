const chiffre12 = document.querySelector(".chiffre12")
const chiffre14 = document.querySelector(".chiffre14")
const result = document.querySelector(".result")

let chiffre1 = Number(prompt("Veuillez entrer un premier chiffre : "))
let chiffre2 = Number(prompt("Veuillez entrer un second chiffre : "))
affichage = chiffre1 + " " + chiffre2

chiffre12.innerHTML = "Vous avez saisi : " + chiffre1
chiffre14.innerHTML = "Vous avez saisi : " + chiffre2
result.innerHTML = "La somme est de : " + (chiffre1 + chiffre2)