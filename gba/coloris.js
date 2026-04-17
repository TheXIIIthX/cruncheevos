import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 8878, title: 'bit Generations: Coloris' })

const levelBase1 = 0x13228
const basicLevelCount = 15
const levelBase2 = 0x13328
const advancedLevelCount = 35
const blockBase = 0x01391b
const blockCount = 285

function inLevel() {
    return($(
        ['', 'Mem', '8bit', 0x006474, '=', 'Value', '', 0xff],
    ))
}

function levelsClear(hits, set = 0) {
    let logic = []
    let deltas = []
    let mems = []
    let base
    let count
    let i
    if (set == 0) {
        base = levelBase1
        count = basicLevelCount
    }
    else {
        base = levelBase2
        count = advancedLevelCount
    }
    for (i = 0; i < (count - 1) * 4; i += 4) {
        deltas.push($(['AddSource', 'Delta', 'Bit0', base + i],))
        mems.push($(['AddSource', 'Invert', 'Bit0', base + i],))
    }
    logic.push($(
        ...deltas,
        ['', 'Delta', 'Bit0', base + i, '=','Value', '', count - hits + 1],
        ...mems,
        ['Measured', 'Invert', 'Bit0', base + i, '=','Value', '', hits],
    ))
    return(logic)
}

function blackCheck() {
    let logic = []
    for (let i = 0; i < blockCount * 4; i += 4) {
        logic.push($(['ResetIf', 'Mem', '8bit', blockBase + i, '=', 'Value', '', 0xc3],))
    }
    return(logic)
}

function colorCheck(colorcodes) {
    let logic = []
    for (let i = 0; i < blockCount * 4; i += 4) {
        colorcodes.forEach((color, index) => {
        const isLast = index === colorcodes.length - 1;
        if (!isLast) {
            logic.push($(
                ['AndNext', 'Delta', '8bit', blockBase + i, '!=', 'Value', '', color],
                ['AndNext', 'Mem', '8bit', blockBase + i, '=', 'Value', '', 0x0],
            ))
        } else {
            logic.push($(
                ['AndNext', 'Delta', '8bit', blockBase + i, '!=', 'Value', '', color],
                ['ResetIf', 'Mem', '8bit', blockBase + i, '=', 'Value', '', 0x0],
            ))
        }
        });
    }
    return(logic)
}

function levelStart(level, mode = 0, minimum = true) {
    let sign = '>='
    if (minimum == false) {
        sign = '='
    }
    return($(
        ['AndNext', 'Mem', '8bit', 0x0131e0, '=', 'Value', '', 0],
        ['AndNext', 'Mem', '8bit', 0x0138a0, '=', 'Value', '', mode],
        ['AndNext', 'Mem', '8bit', 0x0131e8, sign, 'Value', '', level - 1],
        ['AndNext', 'Delta', '8bit', 0x00666b, '=', 'Value', '', 0x3],
        ['', 'Mem', '8bit', 0x00666b, '=', 'Value', '', 0xff, 1],
    ))
}

function activeScore(level) {
    return($(
        ['', 'Mem', '8bit', 0x0131e0, '=', 'Value', '', 1],
        ['', 'Mem', '8bit', 0x0131e8, '=', 'Value', '', level - 1],
    ))
}

function scoreStart1() {
    return($(
        ['', 'Delta', '8bit', 0x00666b, '=', 'Value', '', 3],
        ['', 'Mem', '8bit', 0x00666b, '=', 'Value', '', 0],
    ))
}

function scoreStart2() {
    return($(
        ['', 'Delta', '8bit', 0x006826, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x006826, '=', 'Value', '', 6],
    ))
}

function levelEnd() {
    return($(
        ['', 'Delta', '8bit', 0x006826, '=', 'Value', '', 6],
        ['Trigger', 'Mem', '8bit', 0x006826, '=', 'Value', '', 0],
    ))
}

set.addAchievement({
  title: "Fiery Red",
  description: "Clear your first basic puzzle",
  points: 0,
  conditions: $(
    inLevel(),
    ['', 'Delta', '32bit', 0x13228, '=', 'Value', '', 0xffffffff],
    ['', 'Mem', '32bit', 0x13228, '=', 'Value', '', 0x64],
  ),
})

set.addAchievement({
  title: "Mellow Yellow",
  description: "Clear 5 basic puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(5, 0),
  ),
})

set.addAchievement({
  title: "Gentle Blue",
  description: "Clear 10 basic puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(10, 0),
  ),
})

set.addAchievement({
  title: "The Complete Palette",
  description: "Clear all 15 basic puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(15, 0),
  ),
})

set.addAchievement({
  title: "Saturated Thought",
  description: "Clear an advanced puzzle",
  points: 0,
  conditions: $(
    inLevel(),
    ['', 'Delta', '32bit', 0x13328, '=', 'Value', '', 0xffffffff],
    ['', 'Mem', '32bit', 0x13328, '=', 'Value', '', 0x64],
  ),
})

set.addAchievement({
  title: "Deep Pigment",
  description: "Clear 5 advanced puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(5, 1),
  ),
})

set.addAchievement({
  title: "Chromatic Calm",
  description: "Clear 10 advanced puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(10, 1),
  ),
})

set.addAchievement({
  title: "Infinite Ochre",
  description: "Clear 15 advanced puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(15, 1),
  ),
})

set.addAchievement({
  title: "Bold Vermilion",
  description: "Clear 20 advanced puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(20, 1),
  ),
})

set.addAchievement({
  title: "Indigo Wisdom",
  description: "Clear 25 advanced puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(25, 1),
  ),
})

set.addAchievement({
  title: "Master of Shades",
  description: "Clear 30 advanced puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(30, 1),
  ),
})

set.addAchievement({
  title: "Full Canvas",
  description: "Clear 35 advanced puzzles",
  points: 0,
  conditions: $(
    inLevel(),
    ...levelsClear(35, 1),
  ),
})

set.addAchievement({
  title: "Unblemished Pigment",
  description: "Clear an advanced puzzle level 30 or higher without getting any black blocks",
  points: 0,
  conditions: $(
    levelStart(30, 1),
    levelEnd(),
    ...blackCheck(),
  ),
})

set.addAchievement({
  title: "Elemental Peace",
  description: "Clear a basic puzzle level 10 or higher only clearing red, yellow and blue blocks",
  points: 0,
  conditions: $(
    levelStart(10),
    levelEnd(),
    ...colorCheck([0x03, 0x43, 0x83]),
  ),
})

set.addAchievement({
  title: "Color Cadence",
  description: "Attain a 5x combo",
  points: 0,
  conditions: $(
    inLevel(),
    ['', 'Delta', '8bit', 0x01a27c, '=', 'Value', '', 0x4],
    ['', 'Mem', '8bit', 0x01a27c, '=', 'Value', '', 0x5],
  ),
})

set.addAchievement({
  title: "Brilliance Unleashed",
  description: "Clear an Advanced level in 15 moves or less",
  points: 0,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0x0131e0, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x0138a0, '=', 'Value', '', 1],
    ['AndNext', 'Delta', '8bit', 0x00666b, '=', 'Value', '', 0x3],
    ['', 'Mem', '8bit', 0x00666b, '=', 'Value', '', 0xff, 1],
    levelEnd(),
    ['ResetIf', 'Mem', '32bit', 0x014904, '>', 'Value', '', 15],
  ),
})

set.addAchievement({
  title: "Soft Pastel",
  description: "Score 50000 points in score mode basic level 1",
  points: 0,
  conditions: $(
    activeScore(1),
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 50000],
  ),
})

set.addAchievement({
  title: "Golden Ochre",
  description: "Score 40000 points in score mode basic level 2",
  points: 0,
  conditions: $(
    activeScore(2),
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 40000],
  ),
})

set.addAchievement({
  title: "Lapis Serenity",
  description: "Score 30000 points in score mode basic level 3",
  points: 0,
  conditions: $(
    activeScore(3),
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 30000],
  ),
})

set.addAchievement({
  title: "Madder Rose",
  description: "Score 20000 points in score mode basic level 4",
  points: 0,
  conditions: $(
    activeScore(4),
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 20000],
  ),
})

set.addAchievement({
  title: "Pure Luminescence",
  description: "Score 20000 points in score mode basic level 5",
  points: 0,
  conditions: $(
    activeScore(5),
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 20000],
  ),
})

set.addAchievement({
  title: "Happy Little Accidents",
  description: "Score 1000 points in one combo in score attack",
  points: 0,
  conditions: $(
    ['', 'Mem', '8bit', 0x0131e0, '=', 'Value', '', 1],
    ['', 'Delta', '32bit', 0x01a280, '<', 'Value', '', 1000],
    ['', 'Mem', '32bit', 0x01a280, '>=', 'Value', '', 1000],
  ),
})

set.addLeaderboard({
  title: 'Score Mode - Basic 1',
  description: 'Get the highest score in Score Mode Basic 1',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: {
        core: $(
            activeScore(1),
        ),
        alt1: $(
            scoreStart1(),
        ),
        alt2: $(
            scoreStart2(),
        ),
    },
    cancel: $(
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['', 'Mem', '32bit', 0x0131ec, '!=', 'Value', '', 0],
        ['', 'Delta', '8bit', 0x006826, '=', 'Value', '', 6],
        ['', 'Mem', '8bit', 0x006826, '=', 'Value', '', 0],
    ),
    value: $(
        ['Measured', 'Mem', '32bit', 0x0131ec],
    ),
  },
  id: 161287,
})

set.addLeaderboard({
  title: 'Score Mode - Basic 2',
  description: 'Get the highest score in Score Mode Basic 2',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: {
        core: $(
            activeScore(2),
        ),
        alt1: $(
            scoreStart1(),
        ),
        alt2: $(
            scoreStart2(),
        ),
    },
    cancel: $(
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['', 'Mem', '32bit', 0x0131ec, '!=', 'Value', '', 0],
        ['', 'Delta', '8bit', 0x006826, '=', 'Value', '', 6],
        ['', 'Mem', '8bit', 0x006826, '=', 'Value', '', 0],
    ),
    value: $(
        ['Measured', 'Mem', '32bit', 0x0131ec],
    ),
  },
  id: 161288,
})

set.addLeaderboard({
  title: 'Score Mode - Basic 3',
  description: 'Get the highest score in Score Mode Basic 3',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: {
        core: $(
            activeScore(3),
        ),
        alt1: $(
            scoreStart1(),
        ),
        alt2: $(
            scoreStart2(),
        ),
    },
    cancel: $(
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['', 'Mem', '32bit', 0x0131ec, '!=', 'Value', '', 0],
        ['', 'Delta', '8bit', 0x006826, '=', 'Value', '', 6],
        ['', 'Mem', '8bit', 0x006826, '=', 'Value', '', 0],
    ),
    value: $(
        ['Measured', 'Mem', '32bit', 0x0131ec],
    ),
  },
  id: 161289,
})

set.addLeaderboard({
  title: 'Score Mode - Basic 4',
  description: 'Get the highest score in Score Mode Basic 4',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: {
        core: $(
            activeScore(4),
        ),
        alt1: $(
            scoreStart1(),
        ),
        alt2: $(
            scoreStart2(),
        ),
    },
    cancel: $(
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['', 'Mem', '32bit', 0x0131ec, '!=', 'Value', '', 0],
        ['', 'Delta', '8bit', 0x006826, '=', 'Value', '', 6],
        ['', 'Mem', '8bit', 0x006826, '=', 'Value', '', 0],
    ),
    value: $(
        ['Measured', 'Mem', '32bit', 0x0131ec],
    ),
  },
  id: 161290,
})

set.addLeaderboard({
  title: 'Score Mode - Basic 5',
  description: 'Get the highest score in Score Mode Basic 5',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: {
        core: $(
            activeScore(5),
        ),
        alt1: $(
            scoreStart1(),
        ),
        alt2: $(
            scoreStart2(),
        ),
    },
    cancel: $(
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['', 'Mem', '32bit', 0x0131ec, '!=', 'Value', '', 0],
        ['', 'Delta', '8bit', 0x006826, '=', 'Value', '', 6],
        ['', 'Mem', '8bit', 0x006826, '=', 'Value', '', 0],
    ),
    value: $(
        ['Measured', 'Mem', '32bit', 0x0131ec],
    ),
  },
  id: 161291,
})

export default set
