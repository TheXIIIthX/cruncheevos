import { AchievementSet, define as $ , measuredIf} from '@cruncheevos/core'
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
    for (i = 0; i < (count) * 4; i += 4) {
        deltas.push($(['AddSource', 'Delta', 'Bit2', base + i, '^', 'Delta', 'Bit0', base + i],))
        mems.push($(['AddSource', 'Mem', 'Bit2', base + i, '^', 'Mem', 'Bit0', base + i],))
    }
    logic.push($(
        ...deltas,
        ['', 'Value', '', 0x0, '=','Value', '', hits - 1],
        ...mems,
        ['Measured', 'Value', '', 0x0, '=','Value', '', hits],
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
      logic.push($(
        ['AndNext', 'Delta', '32bit', 0x014b70, '<', 'Mem', '32bit', 0x014b70],
      ))
      for (let color of colorcodes) {
        logic.push($(
          ['AndNext', 'Prior', '8bit', blockBase + i, '!=', 'Value', '', color],
        ))
      }
      logic.push($(
        ['ResetIf', 'Mem', '8bit', blockBase + i, '=', 'Value', '', 0x0],
      ))
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
        ['AndNext', 'Mem', '8bit', 0x0131e4, '=', 'Value', '', mode],
        ['AndNext', 'Mem', '8bit', 0x0131e8, sign, 'Value', '', level - 1],
        ['AndNext', 'Delta', '8bit', 0x01a284, '=', 'Value', '', 0x1],
        ['', 'Mem', '8bit', 0x01a284, '=', 'Value', '', 0x0, 1],
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
        ['', 'Delta', '8bit', 0x01a284, '=', 'Value', '', 1],
        ['', 'Mem', '8bit', 0x01a284, '=', 'Value', '', 0],
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
        ['', 'Delta', '8bit', 0x01a2b9, '=', 'Value', '', 0],
        ['Trigger', 'Mem', '8bit', 0x01a2b9, '=', 'Value', '', 1],
    ))
}

function menuReset() {
  return($(
    ['ResetIf', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
  ))
}

function startup() {
  return($(
    ['', 'Mem', '8bit', 0x006826, '!=', 'Value', '', 0x01],
    ['', 'Mem', '8bit', 0x006826, '!=', 'Value', '', 0xff],
  ))
}

set.addAchievement({
  title: "Fiery Red",
  description: "Clear your first basic puzzle",
  points: 1,
  type: 'progression',
  conditions: $(
    inLevel(),
    ['OrNext', 'Delta', '32bit', 0x13228, '=', 'Value', '', 0xffffffff],
    ['', 'Delta', '32bit', 0x13228, '=', 'Value', '', 0x0],
    ['', 'Mem', '32bit', 0x13228, '=', 'Value', '', 0x64],
    startup(),
  ),
  id: 602086,
})

set.addAchievement({
  title: "Mellow Yellow",
  description: "Clear 5 basic puzzles",
  points: 3,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(5, 0),
    measuredIf(startup()),
  ),
  id: 602087,
})

set.addAchievement({
  title: "Gentle Blue",
  description: "Clear 10 basic puzzles",
  points: 4,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(10, 0),
    measuredIf(startup()),  ),
  id: 602088,
})

set.addAchievement({
  title: "The Complete Palette",
  description: "Clear all 15 basic puzzles",
  points: 5,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(15, 0),
    measuredIf(startup()),
  ),
  id: 602089,
})

set.addAchievement({
  title: "Saturated Thought",
  description: "Clear an advanced puzzle",
  points: 2,
  type: 'progression',
  conditions: $(
    inLevel(),
    ['OrNext', 'Delta', '32bit', 0x13328, '=', 'Value', '', 0xffffffff],
    ['', 'Delta', '32bit', 0x13328, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0x13328, '=', 'Value', '', 0x64],
    startup(),
  ),
  id: 602090,
})

set.addAchievement({
  title: "Deep Pigment",
  description: "Clear 5 advanced puzzles",
  points: 3,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(5, 1),
    measuredIf(startup()),
  ),id: 602091,
})

set.addAchievement({
  title: "Chromatic Calm",
  description: "Clear 10 advanced puzzles",
  points: 3,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(10, 1),
    measuredIf(startup()),
  ),
  id: 602092,
})

set.addAchievement({
  title: "Infinite Ochre",
  description: "Clear 15 advanced puzzles",
  points: 4,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(15, 1),
    measuredIf(startup()),
  ),
  id: 602093,
})

set.addAchievement({
  title: "Bold Vermilion",
  description: "Clear 20 advanced puzzles",
  points: 5,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(20, 1),
    measuredIf(startup()),
  ),
  id: 602094,
})

set.addAchievement({
  title: "Indigo Wisdom",
  description: "Clear 25 advanced puzzles",
  points: 5,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(25, 1),
    measuredIf(startup()),
  ),
  id: 602095,
})

set.addAchievement({
  title: "Master of Shades",
  description: "Clear 30 advanced puzzles",
  points: 10,
  type: 'progression',
  conditions: $(
    inLevel(),
    ...levelsClear(30, 1),
    measuredIf(startup()),
  ),
  id: 602096,
})

set.addAchievement({
  title: "Full Canvas",
  description: "Clear 35 advanced puzzles",
  points: 10,
  type: 'win_condition',
  conditions: $(
    inLevel(),
    ...levelsClear(35, 1),
    measuredIf(startup()),
  ),
  id: 602097,
})

set.addAchievement({
  title: "Unblemished Pigment",
  description: "Clear an advanced puzzle level 30 or higher without getting any black blocks",
  points: 25,
  conditions: $(
    levelStart(30, 1),
    levelEnd(),
    ...blackCheck(),
    menuReset(),
    startup(),
  ),
  id: 602098,
})

set.addAchievement({
  title: "[Void] Elemental Peace",
  description: "Clear a basic puzzle level 10 or higher only clearing red, yellow and blue blocks",
  points: 0,
  conditions: $(
    levelStart(10),
    levelEnd(),
    ...colorCheck([0x03, 0x43, 0x83]),
    menuReset(),
    startup(),
  ),
  id: 602099,
})

set.addAchievement({
  title: "Color Cadence",
  description: "Attain a 5x combo",
  points: 5,
  conditions: $(
    inLevel(),
    ['', 'Delta', '8bit', 0x01a27c, '=', 'Value', '', 0x4],
    ['', 'Mem', '8bit', 0x01a27c, '=', 'Value', '', 0x5],
    startup(),
  ),
  id: 602100,
})

set.addAchievement({
  title: "Brilliance Unleashed",
  description: "Clear an Advanced level changing the color of blocks 15 times or less",
  points: 10,
  conditions: $(
    inLevel(),
    ['', 'Mem', '8bit', 0x0131e0, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x0131e4, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x01a284, '=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0x014904, '<=', 'Value', '', 15],
    levelEnd(),
    startup(),
  ),
  id: 602101,
})

set.addAchievement({
  title: "Soft Pastel",
  description: "Score 20,000 points in score mode basic level 1",
  points: 10,
  conditions: $(
    activeScore(1),
    ['', 'Delta', '32bit', 0x0131ec, '<', 'Value', '', 20000],
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 20000],
    startup(),
  ),
  id: 602102,
})

set.addAchievement({
  title: "Golden Ochre",
  description: "Score 15,000 points in score mode basic level 2",
  points: 10,
  conditions: $(
    activeScore(2),
    ['', 'Delta', '32bit', 0x0131ec, '<', 'Value', '', 15000],
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 15000],
    startup(),
  ),
  id: 602103,
})

set.addAchievement({
  title: "Lapis Serenity",
  description: "Score 15,000 points in score mode basic level 3",
  points: 10,
  conditions: $(
    activeScore(3),
    ['', 'Delta', '32bit', 0x0131ec, '<', 'Value', '', 15000],
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 15000],
    startup(),
  ),
  id: 602104,
})

set.addAchievement({
  title: "Madder Rose",
  description: "Score 10,000 points in score mode basic level 4",
  points: 10,
  conditions: $(
    activeScore(4),
    ['', 'Delta', '32bit', 0x0131ec, '<', 'Value', '', 10000],
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 10000],
    startup(),
  ),
  id: 602105,
})

set.addAchievement({
  title: "Pure Luminescence",
  description: "Score 10,000 points in score mode basic level 5",
  points: 10,
  conditions: $(
    activeScore(5),
    ['', 'Delta', '32bit', 0x0131ec, '<', 'Value', '', 10000],
    ['', 'Mem', '32bit', 0x0131ec, '>=', 'Value', '', 10000],
    startup(),
  ),
  id: 602106,
})

set.addAchievement({
  title: "Happy Little Accidents",
  description: "Score 1000 points in one combo in score attack",
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x0131e0, '=', 'Value', '', 1],
    ['', 'Delta', '32bit', 0x01a280, '<', 'Value', '', 1000],
    ['', 'Mem', '32bit', 0x01a280, '>=', 'Value', '', 1000],
    startup(),
  ),
  id: 602107,
})

set.addLeaderboard({
  title: 'Score Mode - Basic 1',
  description: 'Get the highest score in Score Mode Basic 1',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: {
        core: $(
            scoreStart1(),
            activeScore(1),
        ),
    },
    cancel: $(
        ['', 'Delta', '8bit', 0x006474, '!=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['AndNext', 'Delta', '8bit', 0x006474, '=', 'Value', '', 0xff],
        ['OrNext', 'Mem', '8bit', 0x006474, '=', 'Value', '', 0x54],
        ['', 'Delta', '32bit', 0x0131ec, '>', 'Mem', '32bit', 0x0131ec],

    ),
    value: $(
        ['Measured', 'Delta', '32bit', 0x0131ec],
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
            scoreStart1(),
            activeScore(2),
        ),
    },
    cancel: $(
        ['', 'Delta', '8bit', 0x006474, '!=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['AndNext', 'Delta', '8bit', 0x006474, '=', 'Value', '', 0xff],
        ['OrNext', 'Mem', '8bit', 0x006474, '=', 'Value', '', 0x54],
        ['', 'Delta', '32bit', 0x0131ec, '>', 'Mem', '32bit', 0x0131ec],
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
            scoreStart1(),
            activeScore(3),
        ),
    },
    cancel: $(
        ['', 'Delta', '8bit', 0x006474, '!=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['AndNext', 'Delta', '8bit', 0x006474, '=', 'Value', '', 0xff],
        ['OrNext', 'Mem', '8bit', 0x006474, '=', 'Value', '', 0x54],
        ['', 'Delta', '32bit', 0x0131ec, '>', 'Mem', '32bit', 0x0131ec],
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
            scoreStart1(),
            activeScore(4),
        ),
    },
    cancel: $(
        ['', 'Delta', '8bit', 0x006474, '!=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['AndNext', 'Delta', '8bit', 0x006474, '=', 'Value', '', 0xff],
        ['OrNext', 'Mem', '8bit', 0x006474, '=', 'Value', '', 0x54],
        ['', 'Delta', '32bit', 0x0131ec, '>', 'Mem', '32bit', 0x0131ec],
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
            scoreStart1(),
            activeScore(5),
        ),
    },
    cancel: $(
        ['', 'Delta', '8bit', 0x006474, '!=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x006474, '!=', 'Value', '', 0xff],
    ),
    submit: $(
        ['AndNext', 'Delta', '8bit', 0x006474, '=', 'Value', '', 0xff],
        ['OrNext', 'Mem', '8bit', 0x006474, '=', 'Value', '', 0x54],
        ['', 'Delta', '32bit', 0x0131ec, '>', 'Mem', '32bit', 0x0131ec],
    ),
    value: $(
        ['Measured', 'Mem', '32bit', 0x0131ec],
    ),
  },
  id: 161291,
})

export default set
