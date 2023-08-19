const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI'/*Esto es como se llamará la propiedad de window*/, {
  getUsers: () => ipcRenderer.invoke('getUsers'),
  createUser: (user) => ipcRenderer.send('createUser', user),
  deleteUser: userId => ipcRenderer.send('deleteUser', userId),
  updateUser: data => ipcRenderer.send('updateUser', data),
  resetPoints: () => ipcRenderer.send('resetPoints'),
  comer/*Este es el evento que se ejecutará desde el front*/: () => ipcRenderer.invoke('aComer'/*Esta es la invocación que se realizará cuando se ejecute la funcion desde el frontend*/)
})

// contextBridge.exposeInIsolatedWorld('users', {
//   getUse: ()=>ipcRenderer.invoke('getUser')
// })