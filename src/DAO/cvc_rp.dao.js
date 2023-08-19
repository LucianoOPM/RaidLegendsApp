const fs = require('node:fs/promises')

class CvcDao {
  constructor() {
    this.path = "./src/data/cvc_rp.json"
    this.db = fs
  }

  #readAndParse = async () => {
    try {
      const cvc = await this.db.readFile(this.path, 'utf-8')
      return JSON.parse(cvc)
    } catch (error) {
      throw new Error(error)
    }
  }

  #stringAndWrite = async (cvcArray) => {
    try {
      const stringCvc = JSON.stringify(cvcArray, null, 2)
      fs.writeFile(this.path, stringCvc, 'utf-8')
    } catch (error) {
      throw new Error(error)
    }
  }

  get = async (filter) => {
    try {
      const cvcs = await this.#readAndParse()
      if (!filter) return cvcs

      return cvcs.filter(cvc => {
        for (const key in filter) {
          if (cvc[key] === filter[key]) {
            return false
          }
        }
        return true
      })
    } catch (error) {
      throw new Error(error)
    }
  }

  getById = async id => {
    try {
      const cvcs = await this.#readAndParse()
      return cvcs.find(cvc => cvc.id === id)
    } catch (error) {
      throw new Error(error)
    }
  }

  create = async cvc => {
    try {
      const parseCvc = await this.#readAndParse()
      const lastId = parseCvc[parseCvc.length - 1].id + 1
      parseCvc.push({ id: lastId, ...cvc })

      this.#stringAndWrite(parseCvc)
    } catch (error) {
      throw new Error(error)
    }
  }

  update = async (id, data) => {
    try {
      const cvcs = this.#readAndParse()
      const finded = cvcs.find(cvc => cvc.id === id)

      Object.assign(finded, data)
      this.#stringAndWrite(cvcs)
    } catch (error) {
      throw new Error(error)
    }
  }

  delete = async (id) => {
    try {
      const cvcs = await this.#readAndParse()

      const cvcPosition = cvcs.findIndex(cvc => cvc.id === id)
      cvcs.splice(cvcPosition, 1)

      this.#stringAndWrite(cvcs)
    } catch (error) {
      throw new Error(error)
    }
  }

}

module.exports = CvcDao