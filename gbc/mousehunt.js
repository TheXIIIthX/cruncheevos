import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 6549,
  title: 'Tom and Jerry: Mouse Hunt',
})


function levelActive() {
  return($(
    ['', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0x20],
  ))
}

function highScore(score) {
  return($(
    ['', 'Mem', '16bit', 0x00cfcf, '>=', 'Value', '', score],
  ))
}

function trackScore(score) {
  return($(
    ['ResetIf', 'Mem', '8bit', 0x00c1c3, '=', 'Value', '', 0x3a],
    ['AndNext', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 1],
    ['AndNext', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
    ['', 'Mem', '16bit', 0x00cfd3, '>', 'Delta', '16bit', 0x00cfd3, score],
  ))
}

function activeLevel(level) {
  return($(
    ['', 'Mem', '8bit', 0x00c2c9, '=', 'Value', '', level],
  ))
}

function levelEnd() {
  return($(
    ['', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x00c8f1, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 2],
  ))
}

function victory() {
  return($(
    ['', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
  ))
}

function difficulty() {
  return($(
    ['OrNext', 'Mem', '8bit', 0x00c91a, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x00c91a, '=', 'Value', '', 2],
  ))
}

set.addAchievement({
  title: "Home Is Where the Cat Is",
  description: "Finish 'Tom's House'",
  points: 5,
  type: "progression",
  conditions: $(
    activeLevel(0x4),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Sky-High Hijinks",
  description: "Finish 'City Skyscraper'",
  points: 5,
  type: "progression",
  conditions: $(
    activeLevel(0x9),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Ship-Shape Shenanigans",
  description: "Finish 'Cruise Ship'",
  points: 5,
  type: "progression",
  conditions: $(
    activeLevel(0xe),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Barnyard Bedlam",
  description: "Finish 'Down on the Farm'",
  points: 5,
  type: "progression",
  conditions: $(
    activeLevel(0x13),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "City Dump Chumps",
  description: "Finish 'City Street'",
  points: 10,
  type: "win_condition",
  conditions: $(
    activeLevel(0x18),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Cat's Whiskers Advantage",
  description: "Finish a level with 10 mice or more than your rival",
  points: 3,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c8f1, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x0],
      ['AddSource', 'Value', '', 10],
      ['', 'Mem', '8bit', 0x00c92e, '<=', 'Mem', '8bit', 0x00c92f],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x1],
      ['AddSource', 'Value', '', 10],
      ['', 'Mem', '8bit', 0x00c92f, '<=', 'Mem', '8bit', 0x00c92e],
    ),
  }
})

set.addAchievement({
  title: "No Mouse Left Behind",
  description: "Finish a level with your rival having no mice",
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c8f1, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x00c92e, '=', 'Value', '', 0x0],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x1],
      ['', 'Mem', '8bit', 0x00c92f, '=', 'Value', '', 0x0],
    ),
  }
})

set.addAchievement({
  title: "Ultimate Mouse Catching Master",
  description: "Finish the game with a high score of 1,500 points or more on medium difficulty or higher",
  points: 25,
  conditions: $(
    activeLevel(0x18),
    highScore(1500),
    difficulty(),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Home Turf Triumph",
  description: "Get a high score of 350 points or more in 'Tom's House' on medium difficulty or higher",
  points: 10,
  conditions: $(
    trackScore(350),
    activeLevel(0x4),
    difficulty(),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Towering Tomfoolery",
  description: "Get a high score of 180 points or more in 'City Skyscraper' on medium difficulty or higher",
  points: 10,
  conditions: $(
    trackScore(180),
    activeLevel(0x9),
    difficulty(),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Decked Out Domination",
  description: "Get a high score of 150 points or more in 'Cruise Ship' on medium difficulty or higher",
  points: 10,
  conditions: $(
    trackScore(150),
    activeLevel(0xe),
    difficulty(),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Barnyard Blitz",
  description: "Get a high score of 120 points or more in 'Down on the Farm' on medium difficulty or higher",
  points: 10,
  conditions: $(
    trackScore(120),
    activeLevel(0x13),
    difficulty(),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Downtown Takedown",
  description: "Get a high score of 200 points or more in 'City Street' on medium difficulty or higher",
  points: 10,
  conditions: $(
    trackScore(200),
    activeLevel(0x18),
    difficulty(),
    victory(),
    levelEnd(),
  ),
})

set.addAchievement({
  title: "Golden Mouse Mayhem",
  description: "Collect 5 mice or more while the golden super mouse powerup is active",
  points: 3,
  conditions: {
    core: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    alt1: $(
      ['MeasuredIf', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0x20],
      ['MeasuredIf', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0],
      ['ResetNextIf', 'Mem', '8bit', 0x00c931, '=', 'Value', '', 0],
      ['Measured', 'Delta', '8bit', 0x00c92f, '<', 'Mem', '8bit', 0x00c92f, 5],
    ),
    alt2: $(
      ['MeasuredIf', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0x20],
      ['MeasuredIf', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 1],
      ['ResetNextIf', 'Mem', '8bit', 0x00c930, '=', 'Value', '', 0],
      ['Measured', 'Delta', '8bit', 0x00c92e, '<', 'Mem', '8bit', 0x00c92e, 5],
    )
  }
})

set.addAchievement({
  title: "Whack-a-Rival",
  description: "Score 40 points or more in the 'Whack Attack' minigame",
  points: 10,
  conditions: $(
    ['MeasuredIf', 'Mem', '8bit', 0x00dfa1, '=', 'Value', '', 0x5],
    ['', 'Delta', '8bit', 0x00c89b, '<', 'Value', '', 40],
    ['Measured', 'Mem', '8bit', 0x00c89b, '>=', 'Value', '', 40],
  ),
})

set.addAchievement({
  title: "Dish-Flyin' Disaster",
  description: "Finish round 5 of the 'Plate Panic' minigame",
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x00dfa1, '=', 'Value', '', 0x06],
    ['', 'Delta', '16bit', 0x00c866, '<', 'Value', '', 150],
    ['', 'Mem', '16bit', 0x00c866, '=', 'Value', '', 150],
  ),
})

set.addAchievement({
  title: "Fine Dining Catastrophe!",
  description: "Finish round 9 of the 'Plate Panic' minigame",
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x00dfa1, '=', 'Value', '', 0x06],
    ['', 'Delta', '16bit', 0x00c866, '<', 'Value', '', 270],
    ['', 'Mem', '16bit', 0x00c866, '=', 'Value', '', 270],
  ),
})

set.addAchievement({
  title: "Caught in the Bulldog's Grip",
  description: "Let Spike catch your rival",
  points: 1,
  conditions: {
    core: $(
      levelActive(),
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x00c319, '<', 'Value', '', 0x9],
      ['', 'Mem', '8bit', 0x00c319, '=', 'Value', '', 0xd],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x00c2cb, '<', 'Value', '', 0x9],
      ['', 'Mem', '8bit', 0x00c2cb, '=', 'Value', '', 0xd],      
    ),
  }
})

set.addAchievement({
  title: "Quack Attack!",
  description: "Catch Ducky",
  points: 1,
  conditions: {
    core: $(
      levelActive(),
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x0],
      ['AddSource', 'Value', '', 3],
      ['', 'Delta', '8bit', 0x00c92f, '=', 'Mem', '8bit', 0x00c92f],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x1],
      ['AddSource', 'Value', '', 3],
      ['', 'Delta', '8bit', 0x00c92e, '=', 'Mem', '8bit', 0x00c92e],
    ),
  }
})

set.addAchievement({
  title: "Love-Struck Rodent",
  description: "Let your rival get entranced by their lover",
  points: 1,
  conditions: {
    core: $(
      levelActive(),
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x00c319, '<', 'Value', '', 0x9],
      ['', 'Mem', '8bit', 0x00c319, '=', 'Value', '', 0xe],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x00c2cb, '<', 'Value', '', 0x9],
      ['', 'Mem', '8bit', 0x00c2cb, '=', 'Value', '', 0xe],      
    ),
  }
})

set.addAchievement({
  title: "Explosive Takeover",
  description: "Steal your opponents mice with a bomb",
  points: 1,
  conditions: {
    core: $(
      levelActive(),
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x0],
      ['AddSource', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x00c92e, '=', 'Delta', '8bit', 0x00c92e],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x00c917, '=', 'Value', '', 0x1],
      ['AddSource', 'Value', '', 1],
      ['', 'Mem', '8bit', 0x00c92f, '=', 'Delta', '8bit', 0x00c92f],
    ),
  }
})

set.addLeaderboard({
  title: "Tom's House High Score",
  description: "Get the highest score in the 5 levels of Tom's House",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x00c2c9, '=', 'Value', '', 0],
      ['', 'Delta', '8bit', 0x00c94c, '=', 'Value', '', 0x00],
      ['', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0xcc],
    ),
    cancel: $(
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
    ),
    submit: $(
      activeLevel(0x4),
      victory(),
      levelEnd(),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
      ['Measured', 'Mem', '16bit', 0x00cfd3, '>', 'Delta', '16bit', 0x00cfd3],
    )
  }
})

set.addLeaderboard({
  title: "City Skyscraper High Score",
  description: "Get the highest score in the 5 levels of City Skyscraper",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x00c2c9, '=', 'Value', '', 0x5],
      ['', 'Delta', '8bit', 0x00c94c, '=', 'Value', '', 0x00],
      ['', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0xcc],
    ),
    cancel: $(
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
    ),
    submit: $(
      activeLevel(0x9),
      victory(),
      levelEnd(),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
      ['Measured', 'Mem', '16bit', 0x00cfd3, '>', 'Delta', '16bit', 0x00cfd3],
    )
  }
})

set.addLeaderboard({
  title: "Cruise Ship High Score",
  description: "Get the highest score in the 5 levels of Cruise Ship",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x00c2c9, '=', 'Value', '', 0xa],
      ['', 'Delta', '8bit', 0x00c94c, '=', 'Value', '', 0x00],
      ['', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0xcc],
    ),
    cancel: $(
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
    ),
    submit: $(
      activeLevel(0xe),
      victory(),
      levelEnd(),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
      ['Measured', 'Mem', '16bit', 0x00cfd3, '>', 'Delta', '16bit', 0x00cfd3],
    )
  }
})

set.addLeaderboard({
  title: "Down on the Farm High Score",
  description: "Get the highest score in the 5 levels of Down on the Farm",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x00c2c9, '=', 'Value', '', 0xf],
      ['', 'Delta', '8bit', 0x00c94c, '=', 'Value', '', 0x00],
      ['', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0xcc],
    ),
    cancel: $(
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
    ),
    submit: $(
      activeLevel(0x13),
      victory(),
      levelEnd(),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
      ['Measured', 'Mem', '16bit', 0x00cfd3, '>', 'Delta', '16bit', 0x00cfd3],
    )
  }
})

set.addLeaderboard({
  title: "City Street High Score",
  description: "Get the highest score in the 5 levels of City Street",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x00c2c9, '=', 'Value', '', 0x14],
      ['', 'Delta', '8bit', 0x00c94c, '=', 'Value', '', 0x00],
      ['', 'Mem', '8bit', 0x00c94c, '=', 'Value', '', 0xcc],
    ),
    cancel: $(
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
    ),
    submit: $(
      activeLevel(0x18),
      victory(),
      levelEnd(),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x00c259, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00c8f1, '=', 'Value', '', 1],
      ['AndNext', 'Mem', '8bit', 0x00cfcd, '=', 'Value', '', 1],
      ['Measured', 'Mem', '16bit', 0x00cfd3, '>', 'Delta', '16bit', 0x00cfd3],
    )
  }
})

set.addLeaderboard({
  title: "Tom and Jerry: Mouse Hunt High Score",
  description: "Get the highest score by the end of the game",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      activeLevel(0x18),
      victory(),
      levelEnd(),
    ),
    cancel: $(
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '8bit', 0x00c2c9, '!=', 'Mem', '8bit', 0x00c2c9],
      ['', 'Delta', '16bit', 0x00cfcf, '>', 'Mem', '16bit', 0x00cfcf],
    ),
    submit: $(
      activeLevel(0x18),
      victory(),
      levelEnd(),
    ),
    value: $(
      ['Measured', 'Mem', '16bit', 0x00cfcf],
    )
  }
})

set.addLeaderboard({
  title: "Plate Panic High Score",
  description: "Get the highest score in the Plate Panic minigame",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x00dfa1, '=', 'Value', '', 0x6],
      ['', 'Delta', '8bit', 0x00c778, '=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x00c778, '=', 'Value', '', 0x13],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0x00dfa1, '!=', 'Value', '', 0x6],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x00dfa1, '=', 'Value', '', 0x6],
      ['', 'Delta', '8bit', 0x00c778, '=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x00c778, '=', 'Value', '', 0x13],
    ),
    value: $(
      ['Measured', 'Mem', '16bit', 0x00c866],
    ),
  }
})

set.addLeaderboard({
  title: "Whack Attack High Score",
  description: "Get the highest score in the Whack Attack minigame",
  type: "SCORE",
  lowerIsBetter: false,
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x00dfa1, '=', 'Value', '', 0x5],
      ['', 'Delta', '8bit', 0x00c778, '=', 'Value', '', 0x1],
      ['', 'Mem', '8bit', 0x00c778, '=', 'Value', '', 0xa],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0x00dfa1, '!=', 'Value', '', 0x5],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x00c778, '=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x00c778, '=', 'Value', '', 0x13],
    ),
    value: $(
      ['Measured', 'Mem', '8bit', 0x00c89b],
    ),
  }
})

export default set
