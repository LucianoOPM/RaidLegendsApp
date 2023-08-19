import { hidraOpts, bossOpts, cvcRp, cvcSrp, xpDelClan, estrellas24H } from "./options.js";
import selectHtmlGenerator from "./createView.js";

const userMap = users => users.map(user => {

  const trUser = document.createElement('tr')
  trUser.id = `userRow${user.id}`

  const pId = document.createElement('p')
  pId.textContent = `${user.id}`
  pId.title = "id"

  const pUsername = document.createElement('p')
  pUsername.textContent = `${user.user}`
  pUsername.title = "username"

  const pDate = document.createElement('p')
  pDate.textContent = `${user.since}`
  pDate.title = "since"

  const thTotalPointsP = document.createElement('p')
  thTotalPointsP.textContent = user.total
  thTotalPointsP.id = "points"
  thTotalPointsP.title = "total"

  const saveButton = document.createElement('button')
  saveButton.id = `user-${user.id}`
  saveButton.type = 'button'
  saveButton.className = "btn btn-success"
  saveButton.innerText = "Guardar datos"
  saveButton.title = "guardar"

  const deleteButton = document.createElement('button')
  deleteButton.id = `user-${user.id}`
  deleteButton.type = "button"
  deleteButton.className = "btn btn-danger"
  deleteButton.innerText = "Eliminar Usuario"
  deleteButton.title = "eliminar"

  const thId = document.createElement('th')
  thId.scope = "row"
  thId.appendChild(pId)

  const thDate = document.createElement('th')
  thDate.appendChild(pDate)

  const thUsername = document.createElement('th')
  thUsername.appendChild(pUsername)

  const thBoss = document.createElement('th')
  thBoss.appendChild(selectHtmlGenerator(bossOpts, "keyBoss"))

  const thHidra = document.createElement('th')
  thHidra.appendChild(selectHtmlGenerator(hidraOpts, "keyHidra"))

  const thCvcRp = document.createElement('th')
  thCvcRp.appendChild(selectHtmlGenerator(cvcRp, "cvcRp"))

  const thCvcSrp = document.createElement('th')
  thCvcSrp.appendChild(selectHtmlGenerator(cvcSrp, "cvcSrp"))

  const thClanXp = document.createElement('th')
  thClanXp.appendChild(selectHtmlGenerator(xpDelClan, "clanXp"))

  const thStars24h = document.createElement('th')
  thStars24h.appendChild(selectHtmlGenerator(estrellas24H, "estrellas"))

  const thSave = document.createElement('th')
  thSave.appendChild(saveButton)

  const thDelete = document.createElement('th')
  thDelete.appendChild(deleteButton)

  const thTotalPoints = document.createElement('th')
  thTotalPoints.appendChild(thTotalPointsP)

  trUser.appendChild(thId)
  trUser.appendChild(thUsername)
  trUser.appendChild(thDate)
  trUser.appendChild(thBoss)
  trUser.appendChild(thHidra)
  trUser.appendChild(thCvcRp)
  trUser.appendChild(thCvcSrp)
  trUser.appendChild(thClanXp)
  trUser.appendChild(thStars24h)
  trUser.appendChild(thTotalPoints)
  trUser.appendChild(thSave)
  trUser.appendChild(thDelete)

  return trUser
})

export default userMap