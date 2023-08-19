const { app, ipcMain } = require('electron');
const windowConfig = require('./config/electron.config.js')
const UserController = require('./controller/user.controller.js')
const users = new UserController()

app.whenReady().then(() => {

  ipcMain.handle('aComer'/*La invocacion necesita un manejador el cual es este*/, () => 'Ya eh comido'/*y esta es la respuesta del servidor*/)
  ipcMain.handle('getUsers', () => {
    return users.get()
  })

  ipcMain.on('createUser', async (event, user) => {
    try {
      await users.create(user)
    } catch (error) {
      throw new Error(error.message)
    }
  })

  ipcMain.on('deleteUser', async (event, userId) => {
    try {
      await users.delete(userId)
    } catch (error) {
      throw new Error(error.message)
    }
  })

  ipcMain.on('updateUser', async (evt, userData) => {
    try {
      await users.update(userData)
    } catch (error) {
      throw new Error(error.message)
    }
  })

  ipcMain.on('resetPoints', async () => {
    try {
      await users.reset()
    } catch (error) {
      throw new Error(error)
    }
  })

  windowConfig()
})
