const fs = require('node:fs/promises')

class UsersDao {
  constructor() {
    this.path = "./src/data/users.json"
    this.db = fs
  }

  #readAndParse = async () => {
    try {
      const users = await this.db.readFile(this.path, 'utf-8')
      return JSON.parse(users)
    } catch (error) {
      throw new Error(error)
    }
  }

  #stringAndWrite = async (usersArray) => {
    try {
      const stringUsers = JSON.stringify(usersArray, null, 2)
      fs.writeFile(this.path, stringUsers, 'utf-8')
    } catch (error) {
      throw new Error(error)
    }
  }

  get = async (filter) => {
    try {
      const parseUsers = await this.#readAndParse()
      if (!filter) return parseUsers

      return parseUsers.filter(user => {
        for (const key in filter) {
          if (user[key] !== filter[key]) {
            return false
          }
        }
        return true
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  getById = async (id) => {
    try {
      const parseUsers = await this.#readAndParse()
      const user = parseUsers.find(user => user.id == id)
      return user
    } catch (error) {
      throw new Error(error)
    }
  }

  create = async (user) => {
    try {
      const parseUsers = await this.#readAndParse()
      if (parseUsers.length === 0) {
        user.id = 1
      } else {
        const lastId = parseUsers[parseUsers.length - 1].id + 1
        user.id = lastId
      }

      parseUsers.push(user)
      this.#stringAndWrite(parseUsers)
    } catch (error) {
      throw new Error(error)
    }
  }

  update = async (user, data) => {
    try {
      const parseUsers = await this.#readAndParse()
      const findedUser = parseUsers.find(userData => {
        return userData.id === Number(user)
      })

      Object.assign(findedUser, data)
      this.#stringAndWrite(parseUsers)
    } catch (error) {
      throw new Error(error)
    }
  }

  delete = async (idUser) => {
    try {
      const parseUsers = await this.#readAndParse()

      const userPosition = parseUsers.findIndex(user => user.id === idUser)
      parseUsers.splice(userPosition, 1)

      this.#stringAndWrite(parseUsers)
    } catch (error) {
      throw new Error(error)
    }
  }

  reset = async () => {
    try {
      const parseUsers = await this.#readAndParse()
      const resetedUsers = parseUsers.map(user => {
        user.total = 0
        return user
      })
      this.#stringAndWrite(resetedUsers)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

module.exports = UsersDao;