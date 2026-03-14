import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 20675,
  title: 'LEGO Indiana Jones: The Original Adventures',
})

set.addLeaderboard({
  title: "Ancient City Speedrun",
  description: "Finish the Ancient City bonus level as fast as possible",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x00496568, '=', 'Value', '', 0x17],
      ['', 'Delta', '32bit', 0x005896f0, '<', 'Value', '', 1000000],
      ['', 'Mem', '32bit', 0x005896f0, '>=', 'Value', '', 1000000],
    ),
    cancel: $(
    ['', 'Mem', '32bit', 0x00496568, '!=', 'Value', '', 0x17],
    ),
    submit: $(
      ['', 'Mem', '32bit', 0x00496568, '=', 'Value', '', 0x17],
      ['', 'Delta', '32bit', 0x005896f0, '<', 'Value', '', 1000000],
      ['', 'Mem', '32bit', 0x005896f0, '>=', 'Value', '', 1000000],
    ),
    value: $(
      ['Measured', 'Mem', 'Float', 0x00598f70, '*', 'Value', '', 100],
    ),
  }
})

export default set
