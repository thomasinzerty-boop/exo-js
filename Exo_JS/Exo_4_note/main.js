function mention(note) {
  if (note >= 16) return "excellent"
  if (note >= 12) return "bien"
  return "insuffisant"
}

const bouton = document.getElementById("btnValider")
const champNote = document.getElementById("noteInput")
const zoneResultat = document.getElementById("resultat")

bouton.onclick = function() {
  const note = champNote.value
  const resultat = mention(note)
  zoneResultat.textContent = "Mention : " + resultat
}