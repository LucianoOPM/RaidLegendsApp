const fs = require('node:fs/promises')

class ClanKeysDao {
  constructor() {
    this.path = "./src/data/clan_key_boss.json"
    this.db = fs
  }
}

module.exports = ClanKeysDao