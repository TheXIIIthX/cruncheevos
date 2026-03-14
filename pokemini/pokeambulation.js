import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 38036,
  title: '~Homebrew~ Pokémon Mini Ambulation',
})

set.addAchievement({
  title: 'Who Needs Surf?',
  description: 'In a single session, successfully traverse 75 river tiles',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x511, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x50d, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '8bit', 0x4ef, '>=', 'Value', '', 0xa],
    ['AndNext', 'Mem', '8bit', 0x4ef, '<=', 'Value', '', 0xf],
    ['AndNext', 'Prior', '8bit', 0x4f0, '>=', 'Value', '', 0xa],
    ['AndNext', 'Prior', '8bit', 0x4f0, '<=', 'Value', '', 0xf],
    ['Measured', 'Delta', '8bit', 0x514, '!=', 'Mem', '8bit', 0x514, 75],
    ['ResetIf', 'Mem', '8bit', 0x591, '=', 'Value', '', 1],
  ),
})


export default set
