import { AchievementSet, define as $, resetIf, resetNextIf, addHits, andNext } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 22605, title: 'Tarzan Untamed' })

function initNegate() {
    return($(
        pointerMaker(0x4ca030),
        pointerMaker(0xc),
        pointerMaker(0x0),
        pointerMaker(0x0),
        pointerMaker(0x4),
        pointerMaker(0x4),
        pointerMaker(0x4),
        pointerMaker(0x4),
        pointerMaker(0x4),
        pointerMaker(0x10),
        ['AndNext', 'Mem', '32bit', 0xf8, '!=', 'Value', '', 0x0],
    ))
}

function pointerMaker(address) {
    return($(['AddAddress', 'Mem', '32bit', address]))
}

function filmPointer(count, format = '16bit', offset = 0x104, flag = '', equation = '>=', hits = 1) {
    return($(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x1d4),
        pointerMaker(0x120),
        pointerMaker(0x18),
        [flag, 'Delta', format, offset, equation, 'Value', '', count, hits],
    ))
}

function map() {
    return($(
        pointerMaker(0x004c5cc0),
        ['', 'Mem', '32bit', 0x4, '=', 'Value', '', 0],
    ))
}

function reelsCounter(total) {
    let logic = []
    let value
    let ascii
    for(let i = 1; i < total; i++) {
        value = i.toString()
        if(value.length < 2) {
            ascii = Number(value[0])
            logic.push($(filmPointer(ascii, 'Lower4', 0x104, 'OrNext', '>=', 0)))
            logic.push($(filmPointer(0, '8bit', 0x105, 'AddHits', '!=', 1)))
        }
        else {
            ascii = Number(value[0])
            if(Number(value[1]) == 0) {
                logic.push($(filmPointer(ascii, 'Lower4', 0x104, 'AndNext', '>=', 0)))
                logic.push($(filmPointer(0, '8bit', 0x105, 'AddHits', '!=', 1)))
            }
            else {
                logic.push($(filmPointer(ascii, 'Lower4', 0x104, 'AndNext', '=', 0)))
                ascii = Number(value[1])
                logic.push($(filmPointer(ascii, 'Lower4', 0x105, 'OrNext', '>=', 0)))
                ascii = Number(value[0])
                logic.push($(filmPointer(ascii, 'Lower4', 0x104, 'AndNext', '>', 0)))
                logic.push($(filmPointer(0, '8bit', 0x105, 'AddHits', '!=', 1)))
            }
        }
    }
    return(logic)
}

function maxValue(reels) {
    reels = reels.toString()
    if(reels[1] != 0) {
        return($(
            pointerMaker(0x4d8e8c),
            pointerMaker(0x110),
            pointerMaker(0x1d4),
            pointerMaker(0x120),
            pointerMaker(0x18),
            ['AndNext', 'Delta', 'Lower4', 0x105, '>=', 'Value', '', Number(reels[1])],
            pointerMaker(0x4d8e8c),
            pointerMaker(0x110),
            pointerMaker(0x1d4),
            pointerMaker(0x120),
            pointerMaker(0x18),
            ['OrNext', 'Delta', 'Lower4', 0x104, '=', 'Value', '', Number(reels[0])],
            pointerMaker(0x4d8e8c),
            pointerMaker(0x110),
            pointerMaker(0x1d4),
            pointerMaker(0x120),
            pointerMaker(0x18),
            ['AndNext', 'Delta', 'Lower4', 0x104, '>', 'Value', '', Number(reels[0])],
            pointerMaker(0x4d8e8c),
            pointerMaker(0x110),
            pointerMaker(0x1d4),
            pointerMaker(0x120),
            pointerMaker(0x18),
            ['ResetIf', 'Delta', '8bit', 0x104, '!=', 'Value', '', 0x0],
        ))
    }
    else {
        return($(
            pointerMaker(0x4d8e8c),
            pointerMaker(0x110),
            pointerMaker(0x1d4),
            pointerMaker(0x120),
            pointerMaker(0x18),
            ['AndNext', 'Delta', 'Lower4', 0x105, '!=', 'Value', '', 0],
            pointerMaker(0x4d8e8c),
            pointerMaker(0x110),
            pointerMaker(0x1d4),
            pointerMaker(0x120),
            pointerMaker(0x18),
            ['ResetIf', 'Delta', 'Lower4', 0x104, '>=', 'Value', '', Number(reels[0])],
        ))
    }
}

function inLevelCounter() {
    return($(
        ['AndNext', 'Delta', '32bit', 0x004c541c, '!=', 'Mem', '32bit', 0x004c541c],
        pointerMaker(0x004ca030),
        pointerMaker(0xC),
        pointerMaker(0x0),
        pointerMaker(0x0),
        pointerMaker(0x4),
        pointerMaker(0x4),
        pointerMaker(0x4),
        pointerMaker(0x4),
        pointerMaker(0x10),
        ['AddHits', 'Mem', '8bit', 0xF8, '>', 'Delta', '8bit', 0xF8],
    ))
}

set.addAchievement({
  title: 'What Are These Used For?',
  description: 'Collect 20 film reels',
  points: 2,
  conditions: $(
    resetIf(map()),
    maxValue(20),
    ...reelsCounter(20),
    pointerMaker(0x004c5cc0),
    ['AndNext', 'Delta', '32bit', 0x4, '!=', 'Value', '', 0x0],
    inLevelCounter(),
    ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 20],
  ),
  badge: '626188',
  id: 545559,
})

set.addAchievement({
  title: 'The Elephant Graveyard!',
  description: 'Collect 45 film reels',
  points: 5,
  conditions: $(
    resetIf(map()),
    maxValue(45),
    ...reelsCounter(45),
    pointerMaker(0x004c5cc0),
    ['AndNext', 'Delta', '32bit', 0x4, '!=', 'Value', '', 0x0],
    inLevelCounter(),
    ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 45],
  ),
  badge: '626189',
  id: 545560,
})

set.addAchievement({
  title: 'The Savage Ape-Man',
  description: 'Collect all 75 film reels',
  points: 10,
  conditions: $(
    resetIf(map()),
    maxValue(75),
    ...reelsCounter(75),
    pointerMaker(0x004c5cc0),
    ['AndNext', 'Delta', '32bit', 0x4, '!=', 'Value', '', 0x0],
    inLevelCounter(),
    ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 75],
  ),
  badge: '626190',
  id: 545561,
})

export default set