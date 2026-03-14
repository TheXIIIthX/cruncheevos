import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 20525, title: 'Cars' })

const c1 = 5
const c2 = 5
const c3 = 25

function pointer(offset) {
  return($(
    ['AddAddress', 'Mem', '32bit', offset],
  ))
}

function lapPointer(loop1, loop2) {
  let logic = []
  logic.push(
    pointer(0x004ee7a8),
    pointer(0x290),
    pointer(0x10),
  )
  for (let i = 0; i < loop1; i++ ) {
    logic.push(pointer(0xc),)
  }
  logic.push(
    pointer(0x10),
    pointer(0x10),
  )
  for (let i = 0; i < loop2; i++ ) {
    logic.push(pointer(0xc),)
  }
  logic.push(
    pointer(0x54),
    pointer(0x0),
    pointer(0xc),
    pointer(0x80),    
  )
  return(logic)
}

function lookup1(test1) {
  let logic = []
  logic.push(
    pointer(0x004ee7a8),
    pointer(0x290),
    pointer(0x10),
  )
  for (let i = 0; i<test1; i++) {
    logic.push(pointer(0xc),)
  }
  return(logic)
}

function lookup2(test1, test2) {
  let logic = []
  logic.push(
    pointer(0x004ee7a8),
    pointer(0x290),
    pointer(0x10),
  )
  for (let i = 0; i<test1; i++) {
    logic.push(pointer(0xc),)
  }
  logic.push(
    pointer(0x10),
  )
  for (let i = 0; i < test2; i++ ) {
    logic.push(pointer(0xc),)
  }
  return(logic)
}

function lookup3(test1, test2, test3) {
  let logic = []
  logic.push(
    pointer(0x004ee7a8),
    pointer(0x290),
    pointer(0x10),
  )
  for (let i = 0; i<test1; i++) {
    logic.push(pointer(0xc),)
  }
  logic.push(
    pointer(0x10),
  )
  for (let i = 0; i < test2; i++ ) {
    logic.push(pointer(0xc),)
  }
  logic.push(
    pointer(0x10),
    pointer(0x10),
  )
  for (let i = 0; i < test3; i++ ) {
  logic.push(pointer(0xc),)
  }
  return(logic)
}


for (let i = 0; i < c1; i++) {
  set.addAchievement({
    title: "FirstLookup" + i,
    points: 0,
    conditions: $(
      ...lookup1(i),
      ['', 'Mem', '32bit', 0xc, '=', 'Value', '', 0x0],
    )
  })
}

for (let i = 0; i < c1; i++) {
  for (let j = 0; j < c2; j++) {
    set.addAchievement({
      title: "FirstLookup" + i + " " + j,
      points: 0,
      conditions: $(
        ...lookup2(i, j),
        ['', 'Mem', '32bit', 0xc, '=', 'Value', '', 0x0],
      )
    })
  }
}


let i = 2;
let j = 0;
for (let k = 0; k < c3; k++) {
  set.addAchievement({
    title: "FirstLookup" + i + " " + j + " " + k,
    points: 0,
    conditions: $(
      ...lookup3(i, j, k),
      ['', 'Mem', '32bit', 0xc, '=', 'Value', '', 0x0],
    )
  })
}



export default set
