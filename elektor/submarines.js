import { AchievementSet, define as $, measuredIf, once, addHits, andNext, measured } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 37507, title: 'Submarine + Racing' })

function submarine() {
    return($(
        ['', 'Mem', '8bit', 0xba, '=', 'Value', '', 0xca],
    ))
}

function levelEnd() {
    return($(
        ['ResetIf', 'Delta', 'Upper4', 0x175c, '!=', 'Mem', 'Upper4', 0x175c],
    ))
}

function ship(lane, id) {
    return($(
        ['', 'Mem', '8bit', lane, '=', 'Value', '', id],
    ))
}

function shipHit(lane) {
    return($(
        ['OrNext', 'Delta', '8bit', lane, '=', 'Value', '', 0x01],
        ['AndNext', 'Delta', '8bit', lane, '=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', lane, '=', 'Value', '', 0x0],
    ))
}

function laneSweep(id) {
    return($(
        andNext(shipHit(0x175e), addHits(ship(0x1754, id))),
        andNext(shipHit(0x175f), addHits(ship(0x1755, id))),
        andNext(shipHit(0x1760), addHits(ship(0x1756, id))),
        andNext(shipHit(0x1761), ship(0x1757, id)),
    ))
}

set.addAchievement({
    title: "Deep Diver",
    description: "Earn 1,000 points",
    points: 2,
    type: "progression",
    conditions: {
        core: $(
            submarine(),
            ['', 'Mem', '16bitBE', 0x175c, '>=', 'Value', '', 0x1000],
            ['', 'Mem', '16bitBE', 0x175c, '<', 'Value', '', 0x2000],
        ),
        alt1: $(
            ['', 'Delta', '8bit', 0x1758, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x1758, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x1758, '=', 'Value', '', 0x0],
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x1759, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x1759, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x1759, '=', 'Value', '', 0x0],
        ),
        alt3: $(
            ['', 'Delta', '8bit', 0x175a, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x175a, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x175a, '=', 'Value', '', 0x0],
        ),
        alt4: $(
            ['', 'Delta', '8bit', 0x175b, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x175b, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x175b, '=', 'Value', '', 0x0],
        )
    }
})

set.addAchievement({
    title: "Sea Veteran",
    description: "Earn 5,000 points",
    points: 3,
    type: "progression",
    conditions: {
        core: $(
            submarine(),
            ['', 'Mem', '16bitBE', 0x175c, '>=', 'Value', '', 0x5000],
            ['', 'Mem', '16bitBE', 0x175c, '<', 'Value', '', 0x6000],
        ),
        alt1: $(
            ['', 'Delta', '8bit', 0x1758, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x1758, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x1758, '=', 'Value', '', 0x0],
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x1759, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x1759, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x1759, '=', 'Value', '', 0x0],
        ),
        alt3: $(
            ['', 'Delta', '8bit', 0x175a, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x175a, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x175a, '=', 'Value', '', 0x0],
        ),
        alt4: $(
            ['', 'Delta', '8bit', 0x175b, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x175b, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x175b, '=', 'Value', '', 0x0],
        )
    }
})

set.addAchievement({
    title: "Master of the Depths",
    description: "Overflow the counter by earning 10,000 points",
    points: 5,
    type: "progression",
    conditions: {
        core: $(
            submarine(),
            ['', 'Mem', '16bitBE', 0x175c, '<', 'Value', '', 0x1000],
        ),
        alt1: $(
            ['', 'Delta', '8bit', 0x1758, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x1758, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x1758, '=', 'Value', '', 0x0],
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x1759, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x1759, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x1759, '=', 'Value', '', 0x0],
        ),
        alt3: $(
            ['', 'Delta', '8bit', 0x175a, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x175a, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x175a, '=', 'Value', '', 0x0],
        ),
        alt4: $(
            ['', 'Delta', '8bit', 0x175b, '>', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x175b, '<=', 'Value', '', 0x30],
            ['', 'Mem', '8bit', 0x175b, '=', 'Value', '', 0x0],
        )
    }
})

set.addAchievement({
    title: "Row Reaper",
    description: "Shoot down a ship on every row in one round",
    points: 3,
    conditions: $(
        submarine(),
        levelEnd(),
        once(shipHit(0x175e)),
        once(shipHit(0x175f)),
        once(shipHit(0x1760)),
        once(shipHit(0x1761)),
    ),
})

set.addAchievement({
    title: "Naval Collector",
    description: "Shoot down every kind of ship in one round",
    points: 2,
    conditions: $(
        submarine(),
        levelEnd(),
        once(laneSweep(0x1)),
        once(laneSweep(0x4)),
        once(laneSweep(0x8)),
        once(laneSweep(0xe)),
    ),
})

set.addAchievement({
    title: "Speedboat Sniper",
    description: "Shoot down 3 speedboats in 1 round",
    points: 10,
    conditions: $(
        submarine(),
        levelEnd(),
        measured('hits 3', laneSweep(0x1)),
    ),
})

set.addAchievement({
    title: "Sailslayer",
    description: "Shoot down 5 sailing boats in 1 round",
    points: 5,
    conditions: $(
        submarine(),
        levelEnd(),
        measured('hits 5', laneSweep(0x4)),
    ),
})

set.addAchievement({
    title: "Cargo Crusher",
    description: "Shoot down 7 cargo ship in 1  round",
    points: 5,
    conditions: $(
        submarine(),
        levelEnd(),
        measured('hits 7', laneSweep(0x8)),
    ),
})

set.addAchievement({
    title: "Warship Wrecker",
    description: "Shoot down 9 warships in 1 round",
    points: 5,
    conditions: $(
        submarine(),
        levelEnd(),
        measured('hits 9', laneSweep(0xe)),
    ),
})

set.addAchievement({
    title: "Bullseye",
    description: "Shoot down 5 ships without missing a loaded torpedo",
    points: 10,
    conditions: $(
        submarine(),
        ['ResetIf', 'Mem', '8bit', 0x17c9, '=', 'Value', '', 0x5],
        addHits(shipHit(0x175e)),
        addHits(shipHit(0x175f)),
        addHits(shipHit(0x1760)),
        measured('hits 5', shipHit(0x1761)),
    ),
})


set.addLeaderboard({
    title: "Racing High Score",
    description: "Set the highest score in Racing",
    type: 'SCORE',
    lowerIsBetter: false,
    conditions: {
        start: {
            core: $(
                ['', 'Mem', '8bit', 0xba, '=', 'Value', '', 0x3],
            ),
            alt1: $(
                ['', 'Delta', '8bit', 0x17c3, '=', 'Value', '', 0x2],
                ['', 'Mem', '8bit', 0x17c3, '=', 'Value', '', 0x0],
            ),
            alt2: $(
                ['', 'Delta', '8bit', 0x17c8, '=', 'Value', '', 0xff],
                ['', 'Mem', '8bit', 0x17c8, '!=', 'Value', '', 0xff],
            ),
        },
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0xba, '!=', 'Value', '', 0x3],
            ['', 'Mem', '8bit', 0x17c8, '=', 'Value', '', 0xff],
        ),
        submit: $(
            ['', 'Mem', '8bit', 0xba, '=', 'Value', '', 0x3],
            ['', 'Delta', '8bit', 0x17c3, '=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x17c3, '=', 'Value', '', 0x2],
        ),
        value: $(
            ['Measured', 'Delta', '8bit', 0x1755, '<', 'Mem', '8bit', 0x1755],
        ),
    }
})

export default set
