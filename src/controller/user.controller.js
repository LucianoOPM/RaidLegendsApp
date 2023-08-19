const UserDao = require('../DAO/user.dao')
//Crear
//Modificar
//Eliminar
//Obtener
//USUARIOS

class UserController {
  constructor() {
    this.service = new UserDao()
  }
  get = async () => {
    try {
      return await this.service.get()
    } catch (error) {
      throw new Error(error)
    }
  }

  create = async (user) => {
    try {
      const userData = {
        ...user,
        keyBoss: 0,
        keyHidra: 0,
        cvcRp: 0,
        cvcSrp: 0,
        clanXp: 0,
        estrellas: 0,
        total: 0
      }
      await this.service.create(userData)
      return "User created"
    } catch (error) {
      throw new Error(error.message)
    }
  }

  delete = async (userId) => {
    try {
      const id = userId.split('-')[1]
      await this.service.delete(id)
      return "User Deleted"
    } catch (error) {
      throw new Error(error.message)
    }
  }

  update = async (userData) => {
    try {
      const { id, username, since, ...data } = userData
      await this.service.update(id, data)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  reset = async () => {
    try {
      await this.service.reset()
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = UserController