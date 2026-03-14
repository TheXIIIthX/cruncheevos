import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 20525, title: 'Cars' })

function pointer(offset) {
  return($(
    ['AddAddress', 'Mem', '32bit', offset],
  ))
}

set.addAchievement({
  title: "Lap Test Pointer Chain",
  points: 0,
  conditions: $(
    pointer(0x48d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    pointer(0xc),
    pointer(0x80),
    ['Measured', 'Delta', '32bit', 0x3c, '<', 'Mem', '32bit', 0x3c, 3],
  )
})

export default set
