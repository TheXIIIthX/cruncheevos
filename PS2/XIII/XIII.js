import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 19373, title: 'XIII' })

function pointer(offset) {
    return($(
        ['AddAddress', 'Mem', '32bit', offset],
    ))
}

function level(ascii) {
    return($(['', 'Mem', '32bitBE', 0x454c50, '=', 'Value', '', ascii],))
}

function objective(objective) {
    let offset
    console.log(objective)
    switch(objective) {
        case 1:
            offset = 0xc
            break
        case 2:
            offset = 0x1c
            break
        case 3:
            offset = 0x2c
            break
        case 4:
            offset = 0x3c
            break
    }
    return($(
        pointer(0x0069149c),
        pointer(0x4cc),
        pointer(0x6c0),
        pointer(0x228),
        ['', 'Delta', '32bit', offset, '=', 'Value', '', 0x2],
        pointer(0x0069149c),
        pointer(0x4cc),
        pointer(0x6c0),
        pointer(0x228),
        ['', 'Mem', '32bit', offset, '=', 'Value', '', 0x3],
    ))
}

set.addAchievement({
    title: 'This is (Unintentionally) a Robbery',
    description: '"Escape" a bank visit gone wrong',
    points: 0,
    conditions: $(
        level(0x42616e71),
        objective(2),
    ),
})

export default set
