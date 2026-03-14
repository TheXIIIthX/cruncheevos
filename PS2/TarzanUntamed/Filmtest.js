import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 22605, title: 'Tarzan Untamed' })

function pointerMaker(address) {
    return($(['AddAddress', 'Mem', '32bit', address]))
}

set.addAchievement({
    title: "test 1",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x1d4),
        pointerMaker(0x124),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

set.addAchievement({
    title: "test 2",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x1d4),
        pointerMaker(0x120),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

set.addAchievement({
    title: "test 3",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0xE4),
        pointerMaker(0x124),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

set.addAchievement({
    title: "test 4",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0xE4),
        pointerMaker(0x120),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

set.addAchievement({
    title: "test 5",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x184),
        pointerMaker(0x124),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

set.addAchievement({
    title: "test 6",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x184),
        pointerMaker(0x120),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

set.addAchievement({
    title: "test 7",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x134),
        pointerMaker(0x124),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

set.addAchievement({
    title: "test 8",
    points: 0,
    conditions: $(
        pointerMaker(0x4d8e8c),
        pointerMaker(0x110),
        pointerMaker(0x134),
        pointerMaker(0x120),
        pointerMaker(0x18),
        ['', 'Mem', '16bitBE', 0x104, '!=', 'Value', '', 0x0],
    )
})

export default set
