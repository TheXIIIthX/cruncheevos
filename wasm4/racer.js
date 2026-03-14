import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 27644, title: 'Racer' })

function track(level) {
    return($(
        ['', 'Mem', '8bit', 0x5eb8, '=', 'Value', '', level],
    ))
}

function raceEnd(level, trigger = '') {
    return($(
        [trigger, 'Mem', 'Float', 0x606c, '!=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x5eb8, '=', 'Value', '', level],
        ['', 'Delta', '8bit', 0x6080, '=', 'Value', '', 0],
        [trigger, 'Mem', '8bit', 0x6080, '=', 'Value', '', 1],
    ))
}

function raceTime(time) {
    return($(
        ['', 'Delta', 'Float', 0x606c, '<=', 'Value', '', time],
    ))
}

function gameTime(time) {
    return($(
        ['', 'Mem', 'Float', 0x5de4, '<=', 'Value', '', time],
    ))
}

set.addAchievement({
    title: "Desert Drifter",
    description: "Finish the Desert track",
    points: 1,
    type: "progression",
    conditions: $(
        raceEnd(0x0b),
    ),
})

set.addAchievement({
    title: "Highland Highway",
    description: "Finish the Mountain track",
    points: 1,
    type: "progression",
    conditions: $(
        raceEnd(0x0f)
    ),
})

set.addAchievement({
    title: "Neon Navigator",
    description: "Finish the City track",
    points: 3,
    type: "win_condition",
    conditions: $(
        raceEnd(0x13)
    ),
})

set.addAchievement({
    title: "Mirage Racer",
    description: "Finish the Desert track in 1:17 minutes or less",
    points: 5,
    conditions: $(
        raceTime(77),
        raceEnd(0x0b, 'Trigger'),
    ),
})

set.addAchievement({
    title: "Peak Performance",
    description: "Finish the Mountain track in 1:03 minutes or less",
    points: 5,
    conditions: $(
        raceTime(63),
        raceEnd(0x0f, 'Trigger'),
    ),
})

set.addAchievement({
    title: "Midnight Blitz",
    description: "Finish the City track in 0:40 minutes or less",
    points: 5,
    conditions: $(
        raceTime(40),
        raceEnd(0x13, 'Trigger'),
    ),
})

set.addAchievement({
    title: "Three-Minute Trial",
    description: "Finish the game in 3 minutes or less",
    points: 10,
    conditions: $(
        gameTime(180),
        ['', 'Delta', '8bit', 0x5eb8, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x5eb8, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x6080, '=', 'Value', '', 1],
    ),
})

set.addLeaderboard({
    title: "Desert Track High Score",
    description: "Finish the Desert track as fast as possible",
    lowerIsBetter: true,
    type: "MILLISECS",
    conditions: {
        start: $(
            raceEnd(0x0b),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x5eb8, '!=', 'Value', '', 0x0b],
        ),
        submit: $(
            raceEnd(0x0b),
        ),
        value: $(
            ['Measured', 'Mem', 'Float', 0x606c, '*', 'Value', '', 100],
        ),
    },
})

set.addLeaderboard({
    title: "Mountain Track High Score",
    description: "Finish the Mountain track as fast as possible",
    lowerIsBetter: true,
    type: "MILLISECS",
    conditions: {
        start: $(
            raceEnd(0x0f)
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x5eb8, '!=', 'Value', '', 0x0f],
        ),
        submit: $(
            raceEnd(0x0f)
        ),
        value: $(
            ['Measured', 'Mem', 'Float', 0x606c, '*', 'Value', '', 100],
        ),
    },
})

set.addLeaderboard({
    title: "City Track High Score",
    description: "Finish the City track as fast as possible",
    lowerIsBetter: true,
    type: "MILLISECS",
    conditions: {
        start: $(
            raceEnd(0x13),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x5eb8, '!=', 'Value', '', 0x13],
        ),
        submit: $(
            raceEnd(0x13),
        ),
        value: $(
            ['Measured', 'Mem', 'Float', 0x606c, '*', 'Value', '', 100],
        ),
    },
})

set.addLeaderboard({
    title: "Full Game High Score",
    description: "Finish the game as fast as possible",
    lowerIsBetter: true,
    type: "MILLISECS",
    conditions: {
        start: $(
            ['', 'Mem', 'Float', 0x606c, '!=', 'Value', '', 0x0],
            ['', 'Delta', '8bit', 0x5eb8, '=', 'Value', '', 0x1],
            ['', 'Mem', '8bit', 0x5eb8, '=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x6080, '=', 'Value', '', 1],
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x5eb8, '!=', 'Value', '', 0x0],
        ),
        submit: $(
            ['', 'Delta', '8bit', 0x5eb8, '=', 'Value', '', 0x1],
            ['', 'Mem', '8bit', 0x5eb8, '=', 'Value', '', 0x0],
        ),
        value: $(
            ['Measured', 'Mem', 'Float', 0x5de4, '*', 'Value', '', 100],
        ),
    },
})

export default set
