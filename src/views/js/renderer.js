import userMap from "./userMaping.js";

document.addEventListener('DOMContentLoaded', async () => {
  const usersUi = document.querySelector('#userInfo')

  const start = async () => {
    try {
      const users = await window.electronAPI.getUsers()
      const renders = userMap(users)
      renders.map(render => {
        usersUi.appendChild(render)
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  await start()

  const form = document.querySelector('#newUserForm')
  const btnRegister = document.querySelector('#btnRegister')

  btnRegister.addEventListener('click', (e) => {
    e.preventDefault()

    const user = {
      user: form[0].value,
      since: form[1].value
    }

    window.electronAPI.createUser(user)
    form.reset()
  })

  const tableBody = document.querySelector("tbody")
  const tableRows = tableBody.querySelectorAll("tr")

  tableRows.forEach(row => {
    let buttons = row.querySelectorAll('button')
    let totalPoints = row.querySelector('#points')
    let valorActual = 0
    row.addEventListener('change', (e) => {
      valorActual += Number(e.target.value)
      totalPoints.textContent = valorActual

    })
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault()

        if (e.target.title === "guardar") {
          const saveData = {}
          const fields = row.querySelectorAll('th')

          fields.forEach(field => {
            if (field.children[0].tagName === 'P') {
              saveData[field.children[0].title] = field.children[0].textContent
            }
            if (field.children[0].tagName === "SELECT") {
              saveData[field.children[0].name] = field.children[0].value
            }
          })
          window.electronAPI.updateUser(saveData)
        }
        if (e.target.title === "eliminar") {
          window.electronAPI.deleteUser(e.target.id)
        }
      })
    })
  })
  const resetData = document.querySelector('#reset')

  resetData.addEventListener('click', () => {
    window.electronAPI.resetPoints()
  })
})