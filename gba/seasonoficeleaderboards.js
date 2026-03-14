import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 4203, title: 'Spyro: Season of Ice' })

set.addLeaderboard({
  title: "Stone Age Speedway Normal Mode Speedrun",
  description: "Finish Stone Age Speedway Normal mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x4],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0x4],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x4],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  }
})

set.addLeaderboard({
  title: "Stone Age Speedway Hard Mode Speedrun",
  description: "Finish Stone Age Speedway hard mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x4],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0x4],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x4],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  }
})

set.addLeaderboard({
  title: "Ice Age Speedway Normal Mode Speedrun",
  description: "Finish Ice Age Speedway Normal mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  }
})

set.addLeaderboard({
  title: "Ice Age Speedway Hard Mode Speedrun",
  description: "Finish Ice Age Speedway hard mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0xa],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  }
})

set.addLeaderboard({
  title: "Aqua Age Speedway Normal Mode Speedrun",
  description: "Finish Aqua Age Speedway Normal mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  }
})

set.addLeaderboard({
  title: "Aqua Age Speedway Hard Mode Speedrun",
  description: "Finish Aqua Age Speedway hard mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  }
})

set.addLeaderboard({
  title: "Space Age Speedway Normal Mode Speedrun",
  description: "Finish Space Age Speedway Normal mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x15],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0x15],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x15],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x0],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  }
})

set.addLeaderboard({
  title: "Space Age Speedway Hard Mode Speedrun",
  description: "Finish Space Age Speedway hard mode with as much time left as possible",
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x15],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    cancel: $(
      ['OrNext', 'Mem', '8bit', 0x0075b0, '!=', 'Value', '', 0x15],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0xf],
    ),
    submit: $(
      ['', 'Mem', '8bit', 0x0075b0, '=', 'Value', '', 0x15],
      ['', 'Mem', '8bit', 0x005b20, '=', 'Value', '', 0x1],
      ['', 'Delta', '8bit', 0x043200, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x043200, '=', 'Value', '', 0x8],
    ),
    value: $(
      ['AddSource', 'Mem', '8bit', 0x004cf5, '*', 'Value', '', 6000],
      ['AddSource', 'Mem', '8bit', 0x004cf6, '*', 'Value', '', 1000],
      ['AddSource', 'Mem', '8bit', 0x004cf7, '*', 'Value', '', 100],
      ['AddSource', 'Mem', '8bit', 0x004cf8, '*', 'Value', '', 10],
      ['Measured', 'Mem', '8bit', 0x004cf9],
    ),
  } 
})

set.addLeaderboard({
  title: "Dragonfly X High Score",
  description: "Get the highest score in Dragonfly X",
  lowerIsBetter: false,
  type: "SCORE",
  conditions: {
    start: $(
      ['AddAddress', 'Mem', 'Bit5', 0x0, '*', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x2254, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x75b0, '=', 'Value', '', 0x63],
      ['', 'Delta', '8bit', 0x047438, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x047438, '=', 'Value', '', 0x3],
    ),
    cancel: $(
      ['', 'Mem', '8bit', 0x75b0, '!=', 'Value', '', 0x63],
    ),
    submit: $(
      ['AddAddress', 'Mem', 'Bit5', 0x0, '*', 'Value', '', 0x10],
      ['', 'Mem', '8bit', 0x2254, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x75b0, '=', 'Value', '', 0x63],
      ['', 'Delta', '8bit', 0x047438, '=', 'Value', '', 0x0],
      ['', 'Mem', '8bit', 0x047438, '=', 'Value', '', 0x3],
    ),
    value: $(
      ['Measured', 'Mem', '32bit', 0x047470],
    ),
  }
})

export default set
