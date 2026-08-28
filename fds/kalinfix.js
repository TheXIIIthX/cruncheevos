import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 8752, title: 'Sword of Kalin (FDS)' })


set.addAchievement({
  title: 'Breaker of Infernal Flames',
  description: 'Find a way to pass the lava to the Center Cave in Len',
  points: 5,
  type: 'progression',
  conditions: $(
    ['AddAddress', 'Mem', '8bit', 0x30],
    ['', 'Mem', '8bit', 0x71e, '=', 'Value', '', 2],
    ['AddAddress', 'Mem', '8bit', 0x30],
    ['AndNext', 'Mem', '8bit', 0x726, '>=', 'Value', '', 6],
    ['AddAddress', 'Mem', '8bit', 0x30],
    ['', 'Mem', '8bit', 0x726, '<=', 'Value', '', 8],
    ['AddAddress', 'Mem', '8bit', 0x30],
    ['AndNext', 'Mem', '8bit', 0x727, '>=', 'Value', '', 4],
    ['AddAddress', 'Mem', '8bit', 0x30],
    ['', 'Mem', '8bit', 0x727, '<=', 'Value', '', 6],
    ['AddAddress', 'Mem', '8bit', 0x30],
    ['', 'Delta', 'Bit0', 0x739, '=', 'Value', '', 0],
    ['AddAddress', 'Mem', '8bit', 0x30],
    ['', 'Mem', 'Bit0', 0x739, '=', 'Value', '', 1],
  ),
  badge: '00000',
  id: 582297,
})

export default set
