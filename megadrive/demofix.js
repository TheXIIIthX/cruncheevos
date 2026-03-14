import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 2158, title: 'Fire Mustang' })

function fix() {
  return($(
    ['OrNext', 'Mem', '8bit', 0x00ffff, '=', 'Value', '', 0x0],
    ['', 'Mem', '8bit', 0x00ffff, '=', 'Value', '', 0x4],
  ))
}

set.addAchievement({
  title: 'Warning: Unknown Emulator',
  description: 'Hardcore unlocks cannot be earned using this emulator.',
  points: 0,
  conditions: '1=1.300.',
  badge: '00000',
  id: 101000001,
})

set.addAchievement({
  title: 'Operation: Iron Anvil',
  description:
    'Destroy enemy industry in Normandy and defeat the Messerschmitt ME321',
  points: 2,
  type: 'progression',
  conditions: $(
    
    fix(),
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 1],
  ),
  badge: '638687',
  id: 559271,
})

set.addAchievement({
  title: 'Operation: Pacific Anchor',
  description:
    'Stop Japanese ships at Truck Island and down the Nakajima Type 95',
  points: 3,
  type: 'progression',
  conditions: $(
    
    fix(),
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 2],
  ),
  badge: '638688',
  id: 559272,
})

set.addAchievement({
  title: 'Operation: Island Torch',
  description: `Assault Saipan and eliminate the Mitsubishi Ki-51 "Sonia"`,
  points: 5,
  type: 'progression',
  conditions: $(
    
    fix(),
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 3],
  ),
  badge: '638689',
  id: 559273,
})

set.addAchievement({
  title: 'Operation: Desert Specter',
  description:
    'Crush Axis forces in Algeria and defeat the Blohm & Voss BV 141 squadron',
  points: 5,
  type: 'progression',
  conditions: $(
    
    fix(),
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 4],
  ),
  badge: '638690',
  id: 559274,
})

set.addAchievement({
  title: 'Operation: Monsoon Tempest',
  description: `Fight through Burma's storms and bring down the Mitsubishi G4M "Betty"`,
  points: 5,
  type: 'progression',
  conditions: $(
    
    fix(),
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 5],
  ),
  badge: '638691',
  id: 559275,
})

set.addAchievement({
  title: 'Operation: Alpine Eclipse',
  description: `Battle over the Alps and destroy the Heinkel He 219 "Uhu" squadron`,
  points: 5,
  type: 'progression',
  conditions: $(
    
    fix(),
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 6],
  ),
  badge: '638692',
  id: 559276,
})

set.addAchievement({
  title: 'Operation: Rising Dusk',
  description: 'End the war over Okinawa by defeating the Miyama',
  points: 10,
  type: 'win_condition',
  conditions: $(
    
    fix(),
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 7],
  ),
  badge: '638693',
  id: 559277,
})

set.addAchievement({
  title: 'Fall of the Messerschmitt Gigant',
  description: 'Destroy the Messerschmitt Gigant in Normandy for a second time',
  points: 10,
  conditions: $(
    
    fix(),
    ['', 'Mem', '8bit', 0xcf11, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 1],
  ),
  badge: '638694',
  id: 559278,
})

set.addAchievement({
  title: 'Echoes of the Nakajima Type 95',
  description: 'Defeat the Nakajima Type 95 once again over Truck Island',
  points: 10,
  conditions: $(
    
    fix(),
    ['', 'Mem', '8bit', 0xcf11, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 2],
  ),
  badge: '638695',
  id: 559279,
})

set.addAchievement({
  title: `Fury of the Mitsubishi Ki-51 "Sonia"`,
  description: `Face the return of the Ki-51 and reclaim Saipan's skies`,
  points: 10,
  conditions: $(
    
    fix(),
    ['', 'Mem', '8bit', 0xcf11, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 2],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 3],
  ),
  badge: '638696',
  id: 559280,
})

set.addAchievement({
  title: 'Eyes of the Blohm & Voss BV 141',
  description: 'Eliminate the BV 141 scouts once more in Algeria',
  points: 10,
  conditions: $(
    
    fix(),
    ['', 'Mem', '8bit', 0xcf11, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 3],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 4],
  ),
  badge: '638697',
  id: 559281,
})

set.addAchievement({
  title: `Ashes of the Mitsubishi G4M "Betty"`,
  description: 'Burn down the G4M bombers returning to Burma',
  points: 10,
  conditions: $(
    
    fix(),
    ['', 'Mem', '8bit', 0xcf11, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 4],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 5],
  ),
  badge: '638698',
  id: 559282,
})

set.addAchievement({
  title: `Twilight of the Heinkel He 219 "Uhu"`,
  description: 'Destroy the Uhu night fighters over the Alps again',
  points: 10,
  conditions: $(
    
    fix(),
    ['', 'Mem', '8bit', 0xcf11, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 5],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 6],
  ),
  badge: '638699',
  id: 559283,
})

set.addAchievement({
  title: 'The Last Flight of the Miyama',
  description: `Defeat the final Miyama in Okinawa's skies`,
  points: 25,
  conditions: $(
    
    fix(),
    ['', 'Mem', '8bit', 0xcf11, '=', 'Value', '', 128],
    ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 6],
    ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 7],
  ),
  badge: '638700',
  id: 559284,
})

set.addAchievement({
  title: 'Steel Wings Unbroken',
  description: 'Finish Normandy without crashing',
  points: 10,
  conditions: {
    core: $(
      fix(),
      ['ResetIf', 'Mem', '8bit', 0xbdb2, '<', 'Delta', '8bit', 0xbdb2],
      ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 0],
      ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 1],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 7],
      ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 0, 1],
    ),
    alt2: $(['', 'Mem', '8bit', 0xcf12, '!=', 'Delta', '8bit', 0xcf12, 1]),
  },
  badge: '638701',
  id: 559285,
})

set.addAchievement({
  title: 'Swift Sea Raider',
  description: 'Finish Truck Island without crashing',
  points: 10,
  conditions: {
    core: $(
      fix(),
      ['ResetIf', 'Mem', '8bit', 0xbdb2, '<', 'Delta', '8bit', 0xbdb2],
      ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 1],
      ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 1, 1],
    ),
    alt2: $(['', 'Mem', '8bit', 0xcf12, '!=', 'Delta', '8bit', 0xcf12, 1]),
  },
  badge: '638702',
  id: 559286,
})

set.addAchievement({
  title: 'Guardian of the Pacific Skies',
  description: 'Finish Saipan without crashing',
  points: 10,
  conditions: {
    core: $(
      fix(),
      ['ResetIf', 'Mem', '8bit', 0xbdb2, '<', 'Delta', '8bit', 0xbdb2],
      ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 2],
      ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 3],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 1],
      ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 2, 1],
    ),
    alt2: $(['', 'Mem', '8bit', 0xcf12, '!=', 'Delta', '8bit', 0xcf12, 1]),
  },
  badge: '638703',
  id: 559287,
})

set.addAchievement({
  title: 'Desert Falcon',
  description: 'Finish Algeria without crashing',
  points: 10,
  conditions: {
    core: $(
      fix(),
      ['ResetIf', 'Mem', '8bit', 0xbdb2, '<', 'Delta', '8bit', 0xbdb2],
      ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 3],
      ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 4],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 2],
      ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 3, 1],
    ),
    alt2: $(['', 'Mem', '8bit', 0xcf12, '!=', 'Delta', '8bit', 0xcf12, 1]),
  },
  badge: '638704',
  id: 559288,
})

set.addAchievement({
  title: 'Unyielding Monsoon',
  description: 'Finish Burma without crashing',
  points: 10,
  conditions: {
    core: $(
      fix(),
      ['ResetIf', 'Mem', '8bit', 0xbdb2, '<', 'Delta', '8bit', 0xbdb2],
      ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 4],
      ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 5],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 4, 1],
    ),
    alt2: $(['', 'Mem', '8bit', 0xcf12, '!=', 'Delta', '8bit', 0xcf12, 1]),
  },
  badge: '638705',
  id: 559289,
})

set.addAchievement({
  title: 'Ghost of the Peaks',
  description: 'Finish the Alps without crashing',
  points: 10,
  conditions: {
    core: $(
      fix(),
      ['ResetIf', 'Mem', '8bit', 0xbdb2, '<', 'Delta', '8bit', 0xbdb2],
      ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 5],
      ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 6],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 4],
      ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 5, 1],
    ),
    alt2: $(['', 'Mem', '8bit', 0xcf12, '!=', 'Delta', '8bit', 0xcf12, 1]),
  },
  badge: '638706',
  id: 559290,
})

set.addAchievement({
  title: 'Sky Emperor',
  description: 'Finish Okinawa without crashing',
  points: 25,
  conditions: {
    core: $(
      fix(),
      ['ResetIf', 'Mem', '8bit', 0xbdb2, '<', 'Delta', '8bit', 0xbdb2],
      ['', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 6],
      ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 7],
    ),
    alt1: $(
      ['AndNext', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 5],
      ['', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 6, 1],
    ),
    alt2: $(['', 'Mem', '8bit', 0xcf12, '!=', 'Delta', '8bit', 0xcf12, 1]),
  },
  badge: '638707',
  id: 559291,
})

set.addAchievement({
  title: 'Full Throttle Arsenal',
  description: `Upgrade the Mustang's firepower to level 3`,
  points: 3,
  conditions: $(
    fix(),
    ['', 'Delta', '8bit', 0xbbec, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xbbec, '=', 'Value', '', 2],
  ),
  badge: '638708',
  id: 559292,
})

set.addAchievement({
  title: 'Tempest in Reserve',
  description: 'Hold 8 Strike Forcer charges at once',
  points: 4,
  conditions: $(
    fix(),
    ['', 'Delta', '8bit', 0xbd6e, '=', 'Value', '', 7],
    ['', 'Mem', '8bit', 0xbd6e, '=', 'Value', '', 8],
  ),
  badge: '638709',
  id: 559293,
})

set.addAchievement({
  title: 'Wings of Valor',
  description: 'Score 100,000 points',
  points: 3,
  conditions: $(
    fix(),
    ['', 'Delta', '8bit', 0xb95c, '=', 'Value', '', 36],
    ['', 'Mem', '8bit', 0xb95c, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb95c, '<=', 'Value', '', 9],
  ),
  badge: '638710',
  id: 559294,
})

set.addAchievement({
  title: 'Air Superiority',
  description: 'Score 500,000 points',
  points: 10,
  conditions: $(
    fix(),
    ['OrNext', 'Delta', '8bit', 0xb95c, '=', 'Value', '', 36],
    ['', 'Delta', '8bit', 0xb95c, '<', 'Value', '', 5],
    ['OrNext', 'Mem', '8bit', 0xb95c, '>=', 'Value', '', 5],
    ['OrNext', 'Mem', '8bit', 0xb95a, '!=', 'Value', '', 36],
    ['', 'Mem', '8bit', 0xb958, '!=', 'Value', '', 36],
  ),
  badge: '638711',
  id: 559295,
})

set.addAchievement({
  title: 'Ace of Aces',
  description: 'Score 1,000,000 points',
  points: 25,
  conditions: $(
    fix(),
    ['', 'Delta', '8bit', 0xb95a, '=', 'Value', '', 36],
    ['', 'Mem', '8bit', 0xb95a, '>=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xb95a, '<=', 'Value', '', 9],
  ),
  badge: '638712',
  id: 559296,
})

set.addAchievement({
  title: 'The Eternal Mustang',
  description: 'Finish the entire game without using continues',
  points: 50,
  conditions: $(
    fix(),
    ['ResetIf', 'Mem', '8bit', 0xcf12, '<', 'Delta', '8bit', 0xcf12],
    ['AndNext', 'Delta', '8bit', 0xcf12, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xcf12, '=', 'Value', '', 3, 1],
    ['Trigger', 'Delta', '8bit', 0xb94e, '=', 'Value', '', 6],
    ['Trigger', 'Mem', '8bit', 0xb94e, '=', 'Value', '', 7],
  ),
  badge: '638713',
  id: 559297,
})

set.addLeaderboard({
  title: 'One Credit High Score',
  description:
    'Set the highest score starting from level 1 before using a continue',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      fix(),
      ['', 'Delta', '8bit', 0xcf12, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xcf12, '=', 'Value', '', 3],
    ),
    cancel: $(['', 'Mem', '8bit', 0xcf12, '<', 'Value', '', 2]),
    submit: $(
      fix(),
      ['', 'Delta', '8bit', 0xcf12, '=', 'Value', '', 3],
      ['', 'Mem', '8bit', 0xcf12, '=', 'Value', '', 2],
    ),
    value: $(
      ['AddSource', 'Mem', 'Lower4', 0xb958, '*', 'Invert', 'Bit5', 0xb958],
      ['Remember', 'Value', '', 0],
      ['Remember', 'Recall', '', 0x0, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb95a, '*', 'Invert', 'Bit5', 0xb95a],
      ['Remember', 'Recall', '', 0x0],
      ['Remember', 'Recall', '', 0x0, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb95c, '*', 'Invert', 'Bit5', 0xb95c],
      ['Remember', 'Recall', '', 0x0],
      ['Remember', 'Recall', '', 0x0, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb95e, '*', 'Invert', 'Bit5', 0xb95e],
      ['Remember', 'Recall', '', 0x0],
      ['Remember', 'Recall', '', 0x0, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb960, '*', 'Invert', 'Bit5', 0xb960],
      ['Remember', 'Recall', '', 0x0],
      ['Remember', 'Recall', '', 0x0, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb962, '*', 'Invert', 'Bit5', 0xb962],
      ['Remember', 'Recall', '', 0x0],
      ['Remember', 'Recall', '', 0x0, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb964, '*', 'Invert', 'Bit5', 0xb964],
      ['Remember', 'Recall', '', 0x0],
      ['Remember', 'Recall', '', 0x0, '*', 'Value', '', 10],
      ['AddSource', 'Mem', 'Lower4', 0xb966, '*', 'Invert', 'Bit5', 0xb966],
      ['Measured', 'Recall', '', 0x0],
    ),
  },
  id: 145962,
})

export default set
