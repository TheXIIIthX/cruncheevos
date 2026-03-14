import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 2158, title: 'Fire Mustang' })

function Gameplay() {
    return($(
        ['', 'Mem', '8bit', 0xcf1b, '=', 'Value', '', 0],
    ))
}

function levelStart(level) {
    return($(
        ['AndNext', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', level - 1],
        ['', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', level, 1]
    ))
}

function levelComplete(level) {
    return($(
        ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', level],
        ['', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', level + 1],
    ))
}

function hardMode() {
    return($(
        ['', 'Mem', '8bit', 0x00cf11, '=', 'Value', '', 0x80],
    ))
}

function crash() {
    return($(
        ['ResetIf', 'Mem', '8bit', 0x00bdb2, '<', 'Delta', '8bit', 0x00bdb2],
    ))
}

function deathless(level) {
    return($(
        levelStart(level),
        crash(),
    ))
}

function continueless() {
    return($(
        ['ResetIf', 'Mem', '8bit', 0x00cf12, '<', 'Delta', '8bit', 0x00cf12],
    ))
}

function continues() {
    return($(
        ['', 'Mem', '8bit', 0x00cf12, '!=', 'Delta', '8bit', 0x00cf12, 1]
    ))
}

set.addAchievement({
    title: "Operation: Iron Anvil",
    description: "Destroy enemy industry in Normandy and defeat the Messerschmitt ME321",
    points: 2,
    type: "progression",
    conditions: $(
        Gameplay(),
        levelComplete(0),
    )
})

set.addAchievement({
    title: "Operation: Pacific Anchor",
    description: "Stop Japanese ships at Truck Island and down the Nakajima Type 95",
    points: 3,
    type: "progression",
    conditions: $(
        Gameplay(),
        levelComplete(1),
    )
})

set.addAchievement({
    title: "Operation: Island Torch",
    description: 'Assault Saipan and eliminate the Mitsubishi Ki-51 "Sonia"',
    points: 5,
    type: "progression",
    conditions: $(
        Gameplay(),
        levelComplete(2),
    )
})

set.addAchievement({
    title: "Operation: Desert Specter",
    description: "Crush Axis forces in Algeria and defeat the Blohm & Voss BV 141 squadron",
    points: 5,
    type: "progression",
    conditions: $(
        Gameplay(),
        levelComplete(3),
    )
})

set.addAchievement({
    title: "Operation: Monsoon Tempest",
    description: "Fight through Burma's storms and bring down the Mitsubishi G4M 'Betty'",
    points: 5,
    type: "progression",
    conditions: $(
        Gameplay(),
        levelComplete(4),
    )
})

set.addAchievement({
    title: "Operation: Alpine Eclipse",
    description: 'Battle over the Alps and destroy the Heinkel He 219 "Uhu" squadron',
    points: 5,
    type: "progression",
    conditions: $(
        Gameplay(),
        levelComplete(5),
    )
})

set.addAchievement({
    title: "Operation: Rising Dusk",
    description: "End the war over Okinawa by defeating the Miyama",
    points: 10,
    type: "win_condition",
    conditions: $(
        Gameplay(),
        levelComplete(6),
    )
})

set.addAchievement({
    title: "Fall of the Messerschmitt Gigant",
    description: "Destroy the Messerschmitt Gigant in Normandy for a second time",
    points: 10,
    conditions: $(
        Gameplay(),
        hardMode(),
        levelComplete(0),
    )
})

set.addAchievement({
    title: "Echoes of the Nakajima Type 95",
    description: "Defeat the Nakajima Type 95 once again over Truck Island",
    points: 10,
    conditions: $(
        Gameplay(),
        hardMode(),
        levelComplete(1),
    )
})

set.addAchievement({
    title: 'Fury of the Mitsubishi Ki-51 "Sonia"',
    description: "Face the return of the Ki-51 and reclaim Saipan's skies",
    points: 10,
    conditions: $(
        Gameplay(),
        hardMode(),
        levelComplete(2),
    )
})

set.addAchievement({
    title: "Eyes of the Blohm & Voss BV 141",
    description: "Eliminate the BV 141 scouts once more in Algeria",
    points: 10,
    conditions: $(
        Gameplay(),
        hardMode(),
        levelComplete(3),
    )
})

set.addAchievement({
    title: 'Ashes of the Mitsubishi G4M "Betty"',
    description: "Burn down the G4M bombers returning to Burma",
    points: 10,
    conditions: $(
        Gameplay(),
        hardMode(),
        levelComplete(4),
    )
})

set.addAchievement({
    title: 'Twilight of the Heinkel He 219 "Uhu"',
    description: "Destroy the Uhu night fighters over the Alps again",
    points: 10,
    conditions: $(
        Gameplay(),
        hardMode(),
        levelComplete(5),
    )
})

set.addAchievement({
    title: "The Last Flight of the Miyama",
    description: "Defeat the final Miyama in Okinawa's skies",
    points: 25,
    conditions: $(
        Gameplay(),
        hardMode(),
        levelComplete(6),
    )
})

set.addAchievement({
    title: "Steel Wings Unbroken",
    description: "Finish Normandy without crashing",
    points: 10,
    conditions: {
        core: $(
            Gameplay(),
            crash(),
            ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 0],
            ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 1],
        ),
        alt1: $(
            ['AndNext', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 0x7],
            ['', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 0x0, 1]
        ),
        alt2: $(
            continues(),
        )
    }
})

set.addAchievement({
    title: 'Swift Sea Raider',
    description: "Finish Truck Island without crashing",
    points: 10,
    conditions: {
        core: $(
            Gameplay(),
            crash(),
            ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 1],
            ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 2],
        ),
        alt1: $(
            levelStart(1),
        ),
        alt2: $(
            continues(),
        )
    }
})

set.addAchievement({
    title: 'Guardian of the Pacific Skies',
    description: "Finish Saipan without crashing",
    points: 10,
    conditions: {
        core: $(
            Gameplay(),
            crash(),
            ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 2],
            ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 3],
        ),
        alt1: $(
            levelStart(2),
        ),
        alt2: $(
            continues(),
        )
    }
})

set.addAchievement({
    title: 'Desert Falcon',
    description: "Finish Algeria without crashing",
    points: 10,
    conditions: {
        core: $(
            Gameplay(),
            crash(),
            ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 3],
            ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 4],
        ),
        alt1: $(
            levelStart(3),
        ),
        alt2: $(
            continues(),
        )
    }
})

set.addAchievement({
    title: 'Unyielding Monsoon',
    description: "Finish Burma without crashing",
    points: 10,
    conditions: {
        core: $(
            Gameplay(),
            crash(),
            ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 4],
            ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 5],
        ),
        alt1: $(
            levelStart(4),
        ),
        alt2: $(
            continues(),
        ),
    }
})

set.addAchievement({
    title: 'Ghost of the Peaks',
    description: "Finish the Alps without crashing",
    points: 10,
    conditions: {
        core: $(
            Gameplay(),
            crash(),
            ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 5],
            ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 6],
        ),
        alt1: $(
            levelStart(5),
        ),
        alt2: $(
            continues(),
        ),
    }
})

set.addAchievement({
    title: 'Sky Emperor',
    description: "Finish Okinawa without crashing",
    points: 25,
    conditions: {
        core: $(
            Gameplay(),
            crash(),
            ['', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 6],
            ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 7],
        ),
        alt1: $(
            levelStart(6),
        ),
        alt2: $(
            continues(),
        ),
    }
})

set.addAchievement({
    title: "The Eternal Mustang",
    description: "Finish the entire game without using continues",
    points: 50,
    conditions: $(
        Gameplay(),
        continueless(),
        ['AndNext', 'Delta', '8bit', 0xcf12, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0xcf12, '=', 'Value', '', 3, 1],
        ['Trigger', 'Delta', '8bit', 0x00b94e, '=', 'Value', '', 6],
        ['Trigger', 'Mem', '8bit', 0x00b94e, '=', 'Value', '', 7],
    )
})

set.addAchievement({
    title: "Full Throttle Arsenal",
    description: "Upgrade the Mustang's firepower to level 3",
    points: 3,
    conditions: $(
        Gameplay(),
        ['', 'Delta', '8bit', 0x00bbec, '=', 'Value', '', 1],
        ['', 'Mem', '8bit', 0x00bbec, '=', 'Value', '', 2],
    )
})

set.addAchievement({
    title: "Tempest in Reserve",
    description: "Hold 8 Strike Forcer charges at once",
    points: 4,
    conditions: $(
        Gameplay(),
        ['', 'Delta', '8bit', 0x00bd6e, '=', 'Value', '', 0x7],
        ['', 'Mem', '8bit', 0x00bd6e, '=', 'Value', '', 0x8],
    )
})

set.addAchievement({
    title: "Wings of Valor",
    description: "Score 100,000 points",
    points: 3,
    conditions: $(
        Gameplay(),
        ['', 'Delta', '8bit', 0x00b95c, '=', 'Value', '', 0x24],
        ['', 'Mem', '8bit', 0x00b95c, '>=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x00b95c, '<=', 'Value', '', 0x9],
    )
})

set.addAchievement({
    title: "Air Superiority",
    description: "Score 500,000 points",
    points: 10,
    conditions: $(
        Gameplay(),
        ['OrNext', 'Delta', '8bit', 0x00b95c, '=', 'Value', '', 0x24],
        ['', 'Delta', '8bit', 0x00b95c, '<', 'Value', '', 0x5],
        ['OrNext', 'Mem', '8bit', 0x00b95c, '>=', 'Value', '', 0x5],
        ['OrNext', 'Mem', '8bit', 0x00b95a, '!=', 'Value', '', 0x24],
        ['', 'Mem', '8bit', 0x00b958, '!=', 'Value', '', 0x24],
    )
})

set.addAchievement({
    title: "Ace of Aces",
    description: "Score 1,000,000 points",
    points: 25,
    conditions: $(
        Gameplay(),
        ['', 'Delta', '8bit', 0x00b95a, '=', 'Value', '', 0x24],
        ['', 'Mem', '8bit', 0x00b95a, '>=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x00b95a, '<=', 'Value', '', 0x9],
    )
})

export default set
