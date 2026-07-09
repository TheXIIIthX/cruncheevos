import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 3507, id:38680, title: 'Patapon 3' })

let Yarida = 0x2
let Taterazay = 0x3
let Yumiyacha = 0x4
let Kibadda = 0x5
let Destrobo = 0x9
let Piekron = 0xc
let Wooyari = 0xd
let Pyokorider = 0xe
let Cannassault = 0xf
let Charibasa = 0x10
let Guardira = 0x11
let Tondenga = 0x12
let Myamsar = 0x13
let Bowmunk = 0x14
let Grenburr = 0x15
let Alosson = 0x16
let Wondabarappa = 0x17
let Jamsch = 0x18
let Oohoroc = 0x19
let Pingrek = 0x1a
let Cannogabang = 0x1b
let Ravenous = 0x1c
let Sonarchy = 0x1d
let Ragewolf = 0x1e
let Naughtyfins = 0x1f
let Slogturtle = 0x20
let CovetHiss = 0x21
let Buzzcrave = 0x22

function characterPointer() {
    let pointer = {}
    pointer = $(
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x01ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x01ffffff]
    )
    return (pointer)
}

function allowedClasses(classes = [], player = 1) {
  let offset
  let logic = []
  if(player == 1) {
    offset = 0x2b46c
  }
  else if(player == 2) {
    offset = 0x2b4ec
  }
  else if(player == 3) {
    offset = 0x2b52c
  }
  else if(player == 4) {
    offset = 0x2b56c
  }
  else {
    return("Error, only 4 players available")
  }
  if(player != 1) {
    logic.push($(
      characterPointer(),
      ['OrNext', 'Mem', '32bit', offset, '=', 'Value', '', 0x0],
    ))
  }
  for(const [index, unit] of classes.entries()) {
    if (index != classes.length - 1) {
      logic.push(
        $(
          characterPointer(),
          ['OrNext', 'Mem', '32bit', offset, '=', 'Value', '', unit],
        )
      )
    }
    else {
      logic.push(
        $(
          characterPointer(),
          ['', 'Mem', '32bit', offset, '=', 'Value', '', unit],
        )
      )
    }
  }
  return(logic)
}

set.addAchievement({
  title: 'Dragon Hunting Party',
  description: 'Defeat Fire Dragon Valo in multiplayer with only Yarida, Taterazay and Yumiyacha class Uberheroes in your party',
  points: 5,
  conditions: $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0x2a],
    ...allowedClasses([Yarida, Taterazay, Yumiyacha], 1),
    ...allowedClasses([Yarida, Taterazay, Yumiyacha], 2),
    ...allowedClasses([Yarida, Taterazay, Yumiyacha], 3),
    ...allowedClasses([Yarida, Taterazay, Yumiyacha], 4),
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['OrNext', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 10],
  ),
})

set.addAchievement({
  title: 'Cold Front Coalition',
  description: 'Defeat Ice Dragon Inosen in multiplayer with only Kibadda, Tondenga and Wondabarappa class Uberheroes in your party',
  points: 5,
  conditions: $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0x52],
    ...allowedClasses([Kibadda, Tondenga, Wondabarappa], 1),
    ...allowedClasses([Kibadda, Tondenga, Wondabarappa], 2),
    ...allowedClasses([Kibadda, Tondenga, Wondabarappa], 3),
    ...allowedClasses([Kibadda, Tondenga, Wondabarappa], 4),
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['OrNext', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 10],
  ),
})

set.addAchievement({
  title: 'Task Force Tempest',
  description: 'Defeat Thunder Beast Justi in multiplayer with only Cannasault, Destrobo and Pingrek class Uberheroes in your party',
  points: 5,
  conditions: $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0x7a],
    ...allowedClasses([Cannassault, Destrobo, Pingrek], 1),
    ...allowedClasses([Cannassault, Destrobo, Pingrek], 2),
    ...allowedClasses([Cannassault, Destrobo, Pingrek], 3),
    ...allowedClasses([Cannassault, Destrobo, Pingrek], 4),
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['OrNext', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 10],
  ),
})

set.addAchievement({
  title: 'Forest Rangers',
  description: 'Defeat Godtree Feisu in multiplayer with only Piekron, Guardira and Alosson class Uberheroes',
  points: 10,
  conditions: $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0xa2],
    ...allowedClasses([Piekron, Guardira, Alosson], 1),
    ...allowedClasses([Piekron, Guardira, Alosson], 2),
    ...allowedClasses([Piekron, Guardira, Alosson], 3),
    ...allowedClasses([Piekron, Guardira, Alosson], 4),
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['OrNext', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 10],
  ),
})

set.addAchievement({
  title: 'The Babysitting Brigade',
  description: 'Defeat Hyumitto the Baby Dragon in multiplayer with only Pyokorider, Myamsar and Jamsch class Uberheroes in your party',
  points: 10,
  conditions: $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0xca],
    ...allowedClasses([Pyokorider, Myamsar, Jamsch], 1),
    ...allowedClasses([Pyokorider, Myamsar, Jamsch], 2),
    ...allowedClasses([Pyokorider, Myamsar, Jamsch], 3),
    ...allowedClasses([Pyokorider, Myamsar, Jamsch], 4),
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['OrNext', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 10],
  ),
})

set.addAchievement({
  title: "Hell's Hit Squad",
  description: 'Defeat Demon Forudo in multiplayer with only Wooyari, Bowmunk and Oohoroc class Uberheroes in your party',
  points: 10,
  conditions: $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0xf2],
    ...allowedClasses([Wooyari, Bowmunk, Oohoroc], 1),
    ...allowedClasses([Wooyari, Bowmunk, Oohoroc], 2),
    ...allowedClasses([Wooyari, Bowmunk, Oohoroc], 3),
    ...allowedClasses([Wooyari, Bowmunk, Oohoroc], 4),
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['OrNext', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 10],
  ),
})

set.addAchievement({
  title: 'Elite Strike Force',
  description: 'Defeat Black Dragon Libera in multiplayer with only Charibassa, Grenburr and Cannogabang class Uberheroes in your party',
  points: 25,
  conditions: $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0x11a],
    ...allowedClasses([Charibasa, Grenburr, Cannogabang], 1),
    ...allowedClasses([Charibasa, Grenburr, Cannogabang], 2),
    ...allowedClasses([Charibasa, Grenburr, Cannogabang], 3),
    ...allowedClasses([Charibasa, Grenburr, Cannogabang], 4),
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['OrNext', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x22f4, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 10],
  ),
})

export default set
