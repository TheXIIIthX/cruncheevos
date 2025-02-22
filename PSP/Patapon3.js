import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 3507, title: 'Patapon 3' })

function clearLevel(LevelID) {
    return {
        core: $(
            ['AddAddress', 'Mem', '24bit', 0xab9020],
            ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', LevelID],
            ['AddAddress', 'Mem', '24bit', 0xab9020],
            ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 2],
            ['AddAddress', 'Mem', '24bit', 0xab9020],
            ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2],
            ['AddAddress', 'Mem', '24bit', 0xab9020],
            ['', 'Delta', '32bit', 0x22f8, '=', 'Value', '', 0],
            ['AddAddress', 'Mem', '24bit', 0xab9020],
            ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 7],
    ),
        alt1: $(
            ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0a]
    ),
        alt2: $(
            ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e05]
    ),
    }
}

set.addAchievement({
    title: 'Archfiend of Valour',
    description: 'Search the Cave of Valor and slay the Accursed Dodonga',
    points: 5,
    type: 'progression',
    conditions: $(clearLevel(0x20)),
})

export default set
