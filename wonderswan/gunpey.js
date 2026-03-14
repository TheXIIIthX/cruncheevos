import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 620, title: 'Gunpey' })

function antiDemo() {
    return($(
        ['', 'Mem', '8bit', 0x2cc, '!=', 'Value', '', 0x0],
    ))
}

function activeMode(modes) {
    return($(
        ['', 'Mem', '8bit', 0x286, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x290, '=', 'Value', '', modes],
    ))
}

function levelEnd() {
    return($(
        ['', 'Delta', '8bit', 0x000d5e, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x000d5e, '=', 'Value', '', 0x0],
    ))
}

function stageEnd() {
    return($(
        ['OrNext', 'Delta', '8bit', 0x0003a6, '=', 'Value', '', 0x0],
        ['OrNext', 'Delta', '8bit', 0x0003a6, '=', 'Value', '', 0x3],
        ['', 'Delta', '8bit', 0x0003a6, '=', 'Value', '', 0x4],
        ['', 'Mem', '8bit', 0x0003a6, '=', 'Value', '', 0x1],
    ))
}

function storyEnd() {
    return($(
        ['OrNext', 'Delta', '8bit', 0x0003a6, '=', 'Value', '', 0x0],
        ['OrNext', 'Delta', '8bit', 0x0003a6, '=', 'Value', '', 0x3],
        ['', 'Delta', '8bit', 0x0003a6, '=', 'Value', '', 0x5],
        ['', 'Mem', '8bit', 0x0003a6, '=', 'Value', '', 0x1],
    ))
}

function score() {
    return($(
        ['AddSource', 'Mem', '8bit', 0x2b1, '*', 'Value', '', 1000000],
        ['AddSource', 'Mem', '8bit', 0x2b0, '*', 'Value', '', 100000],
        ['AddSource', 'Mem', '8bit', 0x2af, '*', 'Value', '', 10000],
        ['AddSource', 'Mem', '8bit', 0x2ae, '*', 'Value', '', 1000],
        ['AddSource', 'Mem', '8bit', 0x2ad, '*', 'Value', '', 100],
        ['Measured', 'Mem', '8bit', 0x2ac, '*', 'Value', '', 10],
    ))
}

function nextLevel(levelid) {
    return($(
        ['', 'Delta', '8bit', 0x2cc, '=', 'Value', '', levelid],
        ['', 'Mem', '8bit', 0x2cc, '=', 'Value', '', levelid + 1],
    ))
}


set.addAchievement({
    title: "WANTED: Hank $1000",
    description: "Defeat Hank in Story Mode",
    type: "progression",
    points: 2,
    conditions: $(
        activeMode(0x3),
        nextLevel(1),
    ),
})

set.addAchievement({
    title: "WANTED: Nick $1000",
    description: "Defeat Nick in Story Mode",
    type: "progression",
    points: 3,
    conditions: $(
        activeMode(0x3),
        nextLevel(2),
    ),
})

set.addAchievement({
    title: "WANTED: Domingo $1500",
    description: "Defeat Domingo in Story Mode",
    type: "progression",
    points: 5,
    conditions: $(
        activeMode(0x3),
        nextLevel(3),
    ),
})

set.addAchievement({
    title: "WANTED: Patrick $1200",
    description: "Defeat Patrick in Story Mode",
    type: "progression",
    points: 3,
    conditions: $(
        activeMode(0x3),
        nextLevel(4),
    ),
})

set.addAchievement({
    title: "WANTED: Thomas $1200",
    description: "Defeat Thomas in Story Mode",
    type: "progression",
    points: 2,
    conditions: $(
        activeMode(0x3),
        nextLevel(5),
    ),
})

set.addAchievement({
    title: "WANTED: Bobby $2000",
    description: "Defeat Bobby in Story Mode",
    type: "progression",
    points: 5,
    conditions: $(
        activeMode(0x3),
        nextLevel(6),
    ),
})

set.addAchievement({
    title: "WANTED: Domingo $2500",
    description: "Win the rematch against Domingo in Story Mode",
    type: "progression",
    points: 10,
    conditions: $(
        activeMode(3),
        nextLevel(7),
    ),
})

set.addAchievement({
    title: "WANTED: Bobby $2500",
    description: "Win the rematch against Bobby in Story Mode",
    type: "progression",
    points: 10,
    conditions: $(
        activeMode(3),
        nextLevel(8),
    ),
})

set.addAchievement({
    title: "WANTED: Pike $5000",
    description: "Defeat Pike in Story Mode and save Sherry",
    type: "win_condition",
    points: 25,
    conditions: $(
        activeMode(3),
        nextLevel(9),
    ),
})

set.addAchievement({
    title: "Short Shooter",
    description: "In Endless, Stage or Story Mode, Score 5000 points in one connection",
    points: 2,
    conditions: $(
        antiDemo(),
        ['', 'Mem', '8bit', 0x286, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x3],
        ['AddSource', 'Delta', '8bit', 0x2bb, '*', 'Value', '', 10],
        ['', 'Delta', '8bit', 0x2ba, '<', 'Value', '', 5],
        ['AddSource', 'Mem', '8bit', 0x2bb, '*', 'Value', '', 10],
        ['', 'Mem', '8bit', 0x2ba, '>=', 'Value', '', 5],
    ),
})

set.addAchievement({
    title: "Sharp Shooter",
    description: "In Endless, Stage or Story Mode, Score 10000 points in one connection",
    points: 3,
    conditions: $(
        antiDemo(),
        ['', 'Mem', '8bit', 0x286, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x3],
        ['AddSource', 'Delta', '8bit', 0x2bb, '*', 'Value', '', 10],
        ['', 'Delta', '8bit', 0x2ba, '<', 'Value', '', 10],
        ['AddSource', 'Mem', '8bit', 0x2bb, '*', 'Value', '', 10],
        ['', 'Mem', '8bit', 0x2ba, '>=', 'Value', '', 10],
    ),
})

set.addAchievement({
    title: "Supreme Shooter",
    description: "In Endless, Stage or Story Mode, Score 15000 points in one connection",
    points: 5,
    conditions: $(
        antiDemo(),
        ['', 'Mem', '8bit', 0x286, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x3],
        ['AddSource', 'Delta', '8bit', 0x2bb, '*', 'Value', '', 10],
        ['', 'Delta', '8bit', 0x2ba, '<', 'Value', '', 15],
        ['AddSource', 'Mem', '8bit', 0x2bb, '*', 'Value', '', 10],
        ['', 'Mem', '8bit', 0x2ba, '>=', 'Value', '', 15],
    ),
})

set.addAchievement({
    title: "Clear Shot",
    description: "Get the stage clear bonus",
    points: 10,
    conditions: $(
        antiDemo(),
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x290, '=', 'Value', '', 0x3],
        ['', 'Delta', '8bit', 0x2e1, '=', 'Value', '', 0x00],
        ['', 'Mem', '8bit', 0x2e1, '=', 'Value', '', 0x80],
    ),
})

set.addAchievement({
    title: "Double-Crosser",
    description: "Beat level 5 in stage mode",
    points: 2,
    conditions: $(
        activeMode(0x1),
        nextLevel(5),
    ),
})

set.addAchievement({
    title: "Path Maker",
    description: "Beat level 10 in stage mode",
    points: 3,
    conditions: $(
        activeMode(0x1),
        nextLevel(10),
    ),
})

set.addAchievement({
    title: "Grid Crafter",
    description: "Beat level 15 in stage mode",
    points: 5,
    conditions: $(
        activeMode(0x1),
        nextLevel(15),
    ),
})

set.addAchievement({
    title: "Flow Architect",
    description: "Beat level 20 in stage mode",
    points: 10,
    conditions: $(
        activeMode(0x1),
        nextLevel(20),
    ),
})

set.addAchievement({
    title: "Chain Master",
    description: "Beat level 25 in stage mode",
    points: 10,
    conditions: $(
        activeMode(0x1),
        nextLevel(25),
    ),
})

set.addAchievement({
    title: "Pathway Perfection",
    description: "Beat level 30 in stage mode",
    points: 25,
    conditions: $(
        activeMode(0x1),
        nextLevel(30),
    ),
})

set.addAchievement({
    title: "Deputy in Training",
    description: "Beat level 5 in puzzle mode",
    points: 2,
    conditions: $(
        activeMode(0x2),
        nextLevel(5),
    ),
})

set.addAchievement({
    title: "Rookie Lawkeeper",
    description: "Beat level 10 in puzzle mode",
    points: 3,
    conditions: $(
        activeMode(0x2),
        nextLevel(10),
    ),
})

set.addAchievement({
    title: "Frontier Lawbringer",
    description: "Beat level 15 in puzzle mode",
    points: 5,
    conditions: $(
        activeMode(2),
        nextLevel(15),
    ),
})

set.addAchievement({
    title: "High-Plains Arbiter",
    description: "Beat level 20 in puzzle mode",
    points: 5,
    conditions: $(
        activeMode(2),
        nextLevel(20),
    ),
})

set.addAchievement({
    title: "High-Noon Enforcer",
    description: "Beat level 25 in puzzle mode",
    points: 10,
    conditions: $(
        activeMode(2),
        nextLevel(25),
    ),
})

set.addAchievement({
    title: "Legend of the Sheriff's Star",
    description: "Beat level 30 in puzzle mode",
    points: 10,
    conditions: $(
        activeMode(2),
        nextLevel(30),
    ),
})

set.addAchievement({
    title: "The Endless Trail",
    description: "Earn 500.000 or more points in Endless mode",
    points: 25,
    conditions: $(
        antiDemo(),
        activeMode(0),
        ['', 'Delta', '8bit', 0x2b0, '<', 'Value', '', 5],
        ['', 'Mem', '8bit', 0x2b0, '>=', 'Value', '', 5],
    ),
})

set.addAchievement({
    title: "High Count Clear",
    description: "Clear 20 panels at once in free mode",
    points: 5,
    conditions: $(
        antiDemo(),
        activeMode(4),
        ['', 'Delta', '8bit', 0x2d6, '<', 'Value', '', 20],
        ['', 'Mem', '8bit', 0x2d6, '>=', 'Value', '', 20],
    ),
})


set.addLeaderboard({
    title: "Endless Mode High Score", 
    description: "Set the highest score possible in Endless mode",
    type: "SCORE",
    lowerIsBetter: false,
    conditions: {
        start: $(
            antiDemo(),
            activeMode(0x0),
            levelEnd(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x286, '!=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x290, '!=', 'Value', '', 0x0],
        ),
        submit: $(
            activeMode(0x0),
            levelEnd(),
        ),
        value: $(
            score(),
        ),
    }
})

set.addLeaderboard({
    title: "Stage Mode High Score", 
    description: "Set the highest score possible in stage mode",
    type: "SCORE",
    lowerIsBetter: false,
    conditions: {
        start: $(
            antiDemo(),
            activeMode(0x1),
            stageEnd(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x286, '!=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x290, '!=', 'Value', '', 0x1],
        ),
        submit: $(
            activeMode(0x1),
            stageEnd(),
        ),
        value: $(
            score(),
        ),
    }
})

set.addLeaderboard({
    title: "Stage Mode Level Reached", 
    description: "Get to the highest stage possible in stage mode",
    type: "SCORE",
    lowerIsBetter: false,
    conditions: {
        start: $(
            antiDemo(),
            activeMode(0x1),
            stageEnd(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x286, '!=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x290, '!=', 'Value', '', 0x1],
        ),
        submit: $(
            activeMode(0x1),
            stageEnd(),
        ),
        value: $(
            ['Measured', 'Mem', '8bit', 0x0002cc],
        ),
    }
})

set.addLeaderboard({
    title: "Puzzle Mode Level Reached", 
    description: "Get to the highest level possible in puzzle mode",
    type: "SCORE",
    lowerIsBetter: false,
    conditions: {
        start: $(
            antiDemo(),
            activeMode(0x2),
            levelEnd(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x286, '!=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x290, '!=', 'Value', '', 0x2],
        ),
        submit: $(
            activeMode(0x2),
            levelEnd(),
        ),
        value: $(
            ['Measured', 'Mem', '8bit', 0x0002cc],
        ),
    }
})

set.addLeaderboard({
    title: "Story Mode High Score", 
    description: "Set the highest score possible in story mode",
    type: "SCORE",
    lowerIsBetter: false,
    conditions: {
        start: $(
            antiDemo(),
            activeMode(0x3),
            storyEnd(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x286, '!=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x290, '!=', 'Value', '', 0x3],
        ),
        submit: $(
            activeMode(0x3),
            storyEnd(),
        ),
        value: $(
            score(),
        ),
    }
})

set.addLeaderboard({
    title: "Free Mode Most Panels in 1 Match", 
    description: "Clear the most panels at once in free mode",
    type: "SCORE",
    lowerIsBetter: false,
    conditions: {
        start: $(
            antiDemo(),
            activeMode(0x4),
            levelEnd(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x286, '!=', 'Value', '', 0x0],
            ['', 'Mem', '8bit', 0x290, '!=', 'Value', '', 0x4],
        ),
        submit: $(
            activeMode(0x4),
            levelEnd(),
        ),
        value: $(
            ['Measured', 'Mem', '8bit', 0x0002c4],
        ),
    }
})

export default set
