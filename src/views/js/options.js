const hidraOpts = [
  { selected: true, textContent: "Llaves Hidra", disabled: true },
  { selected: false, textContent: "0 Llaves", value: -1 },
  { selected: false, textContent: "1 Llave", value: 1 },
  { selected: false, textContent: "2 Llaves", value: 3 },
  { selected: false, textContent: "3 Llaves", value: 4 },
]

const bossOpts = [
  { selected: true, textContent: "Llaves Boss", disabled: true },
  { textContent: "0 Llaves", value: -1 },
  { textContent: "1 Llave", value: 1 },
  { textContent: "2 Llaves", value: 1.5 },
  { textContent: "3 Llaves", value: 2 },
  { textContent: "4 Llaves", value: 3 }
]

const cvcRp = [
  { selected: true, textContent: "Clan vs Clan RP", disabled: true },
  { textContent: "0 pts", value: -1 },
  { textContent: "10k pts", value: 1 },
  { textContent: "25k pts", value: 1.5 },
  { textContent: "50k pts", value: 2 },
  { textContent: "70k pts", value: 3 }
]

const cvcSrp = [
  { selected: true, textContent: "Clan vs Clan SRP", disabled: true },
  { textContent: "0 pts", value: -1 },
  { textContent: "7.5k pts", value: 1 },
  { textContent: "15k pts", value: 1.5 },
  { textContent: "30k pts", value: 2 },
  { textContent: "50k pts", value: 3 }
]

const xpDelClan = [
  { selected: true, textContent: "XP del Clan", disabled: true },
  { textContent: "0 pts", value: -1 },
  { textContent: "25 pts", value: 1 },
  { textContent: "75 pts", value: 1.5 },
  { textContent: "150 pts", value: 2 },
  { textContent: "400 pts", value: 3 }
]

const estrellas24H = [
  { selected: true, textContent: "Estrellas C/24hrs", disabled: true },
  { textContent: "0 pts", value: -1 },
  { textContent: "1 pto", value: 1 },
  { textContent: "2 pts", value: 3 },
  { textContent: "3 pts", value: 4 }
]

export {
  hidraOpts,
  bossOpts,
  cvcRp,
  cvcSrp,
  xpDelClan,
  estrellas24H
}