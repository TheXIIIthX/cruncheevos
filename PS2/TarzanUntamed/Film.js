import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 22605, title: 'Tarzan Untamed' })

function pointerMaker(address) {
    return($(['AddAddress', 'Mem', '32bit', address]))
}

function levelEnd() {
  return($(
    ['AndNext', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
    ['OrNext', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1, 1],
    levelQuit(),
  ))
}

function levelQuit() {
  return($(
    ['AndNext', 'Delta', '8bit', 0x0049fd40, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x0049fd40, '=', 'Value', '', 0, 1],
  ))
}

function resetonlevelstart() {
  return($(
    pointerMaker(0x004c5cc0),
    ['AndNext', 'Delta', '32bit', 0x4, '=', 'Value', '', 0],   
    pointerMaker(0x004c5cc0),
    ['AndNext', 'Mem', '32bit', 0x4, '>=', 'Value', '', 1],
    pointerMaker(0x004c5cc0),
    ['ResetIf', 'Mem', '32bit', 0x4, '<=', 'Value', '', 4],
  ))
}

function resetonexit() {
  return($(
    ['ResetIf', 'Mem', '32bit', 0x006ce164, '=', 'Value', '', 0]
  ))
}

function filmstotal(count) {
  return($(
        pointerMaker(0x004c5cc0),
        ['AndNext', 'Mem', '32bit', 0x4, '=', 'Value', '', 0],
        ['AndNext', 'Mem', '32bit', 0x4d8e8c, '!=', 'Value', '', 0x0],
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x1d4),
        pointerMaker(0x120),
        pointerMaker(0x18),
        ['', 'Delta', '16bitBE', 0x104, '<', 'Value', '', count, 1],
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x1d4),
        pointerMaker(0x120),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '>=', 'Value', '', count],
  ))
}

function films(count) {
  return($(
    levelEnd(),
    resetonlevelstart(),
    resetonexit(),
    filmstotal(count),
  ))
}

set.addAchievement({
  title: 'What Are These Used For?',
  description: 'Collect 20 film reels',
  points: 2,
  conditions: $(
    films(0x3230),
  ),
  badge: '626188',
  id: 545559,
})

set.addAchievement({
  title: 'The Elephant Graveyard!',
  description: 'Collect 45 film reels',
  points: 5,
  conditions: $(
    films(0x3435),
  ),
  badge: '626189',
  id: 545560,
})

set.addAchievement({
  title: 'The Savage Ape-Man',
  description: 'Collect all 75 film reels',
  points: 10,
  conditions: $(
    films(0x3735),
  ),
  badge: '626190',
  id: 545561,
})

export default set
