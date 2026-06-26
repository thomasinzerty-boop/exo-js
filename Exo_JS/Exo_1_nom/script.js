const resultat = document.querySelector(".result")

//Décalration de plusieurs variables en une fois
let name1, name2, result, affichage

name1 = prompt("Veuillez entrer votre nom : ")
name2 = prompt("Veuillez entrer votre nom : ")
result = `${name1} ${name2}`

affichage = `<p>Vous avez saisi : ${name1}</p>`
affichage += `<p>Vous avez saisi : ${name2}</p>`
affichage += `<p>Vous avez saisi : ${result}</p>`

resultat.innerHTML = affichage