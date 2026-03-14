import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 620, title: 'Gunpey' })

set.addAchievement({
  title: 'Exploring the Outskirts',
  description: 'Earn 100,000 or more points in Endless mode',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x2cc, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x286, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x290, '=', 'Value', '', 0],
    ['', 'Delta', '8bit', 0x2b0, '<', 'Value', '', 1],
    ['', 'Mem', '8bit', 0x2b0, '>=', 'Value', '', 1],
  ),
})

set.addAchievement({
  title: 'The Endless Trail',
  description: 'Earn 250,000 or more points in Endless mode',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x2cc, '!=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x286, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x290, '=', 'Value', '', 0],
    ['AddSource', 'Delta', '8bit', 0x2b0, '*', 'Value', '', 10],
    ['', 'Delta', '8bit', 0x2af, '<', 'Value', '', 25],
    ['AddSource', 'Mem', '8bit', 0x2b0, '*', 'Value', '', 10],
    ['', 'Mem', '8bit', 0x2af, '>=', 'Value', '', 25],
  ),
  badge: '647572',
  id: 569174,
})

export default set
