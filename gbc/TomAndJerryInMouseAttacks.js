import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({
  gameId: 6550,
  title: 'Tom and Jerry in Mouse Attacks',
})

set.addAchievement({
  title: `Jerry's Tangled Web`,
  description: 'Defeat the Spider and rescue Duckling',
  points: 2,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 1],
    ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x72e552],
    ['', 'Delta', '8bit', 0xc1e2, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xc1e2, '=', 'Value', '', 0],
  ),
  badge: '546495',
  id: 481815,
})

set.addAchievement({
  title: 'Tall in The Trap',
  description: 'Use every button to trigger the trap and damage the Spider',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xc15a, '<', 'Value', '', 32],
    ['AndNext', 'Mem', '8bit', 0xc15c, '<', 'Value', '', 64],
    ['', 'Mem', '8bit', 0xc1e2, '<', 'Delta', '8bit', 0xc1e2, 1],
    ['AndNext', 'Mem', '8bit', 0xc15a, '>', 'Value', '', 128],
    ['AndNext', 'Mem', '8bit', 0xc15c, '<', 'Value', '', 64],
    ['', 'Mem', '8bit', 0xc1e2, '<', 'Delta', '8bit', 0xc1e2, 1],
    ['AndNext', 'Mem', '8bit', 0xc15a, '<', 'Value', '', 32],
    ['AndNext', 'Mem', '8bit', 0xc15c, '>', 'Value', '', 64],
    ['', 'Mem', '8bit', 0xc1e2, '<', 'Delta', '8bit', 0xc1e2, 1],
    ['AndNext', 'Mem', '8bit', 0xc15a, '>', 'Value', '', 128],
    ['AndNext', 'Mem', '8bit', 0xc15c, '>', 'Value', '', 64],
    ['', 'Mem', '8bit', 0xc1e2, '<', 'Delta', '8bit', 0xc1e2, 1],
    ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x72e552],
    ['ResetIf', 'Mem', '16bit', 0xcfdc, '=', 'Value', '', 1024],
  ),
  badge: '547185',
  id: 482455,
})

set.addAchievement({
  title: 'Eight Legs No Aiming',
  description: 'Defeat the Spider without taking damage',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 1, 1],
      ['Trigger', 'Delta', '8bit', 0xc1e2, '=', 'Value', '', 1],
      ['Trigger', 'Mem', '8bit', 0xc1e2, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1, 1],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x72e552],
      ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
      ['ResetIf', 'Mem', '16bit', 0xcfdc, '=', 'Value', '', 1024],
    ),
  },
  badge: '546505',
  id: 481825,
})

set.addAchievement({
  title: `Tom's Dream Ball`,
  description: 'Defeat Tom and rescue Uncle Pecos',
  points: 3,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 2],
    ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x76f553],
    ['', 'Delta', '8bit', 0xc1e1, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xc1e1, '=', 'Value', '', 0],
  ),
  badge: '546496',
  id: 481816,
})

set.addAchievement({
  title: 'The Bowling Alley-Mouse',
  description: 'Defeat Tom in the Kitchen using 5 bowling balls or less',
  points: 5,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0xc1e1, '>', 'Mem', '8bit', 0xc1e1],
      ['', 'Mem', '8bit', 0xc1e1, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xc4ca, '<', 'Delta', '8bit', 0xc4ca, 6],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x76f553],
      ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
    ),
  },
  badge: '547186',
  id: 482456,
})

set.addAchievement({
  title: `Tom's Nightmare Ball`,
  description: 'Defeat Tom in the Kitchen without taking damage',
  points: 5,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 2, 1],
      ['Trigger', 'Delta', '8bit', 0xc1e1, '=', 'Value', '', 1],
      ['Trigger', 'Mem', '8bit', 0xc1e1, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1, 1],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x76f553],
      ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
      ['ResetIf', 'Mem', '16bit', 0xcfdc, '=', 'Value', '', 1024],
    ),
  },
  badge: '546506',
  id: 481826,
})

set.addAchievement({
  title: 'The Muscle Cats',
  description: 'Defeat the Muscle Cats and rescue Tyke',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 3],
    ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x738543],
    ['', 'Delta', '8bit', 0xc1e1, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xc1e1, '=', 'Value', '', 0],
  ),
  badge: '546497',
  id: 481817,
})

set.addAchievement({
  title: 'Dirty Work Inc.',
  description:
    'Hit every cat in the fight with the Muscle Cats and defeat them',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '8bit', 0xd0f0, '=', 'Value', '', 23],
    ['', 'Mem', '8bit', 0xc1e1, '<', 'Delta', '8bit', 0xc1e1, 1],
    ['AndNext', 'Mem', '8bit', 0xd0f0, '=', 'Value', '', 79],
    ['', 'Mem', '8bit', 0xc1e1, '<', 'Delta', '8bit', 0xc1e1, 1],
    ['AndNext', 'Mem', '8bit', 0xd0f0, '=', 'Value', '', 133],
    ['', 'Mem', '8bit', 0xc1e1, '<', 'Delta', '8bit', 0xc1e1, 1],
    ['', 'Mem', '8bit', 0xc1e1, '<', 'Delta', '8bit', 0xc1e1],
    ['', 'Mem', '8bit', 0xc1e1, '=', 'Value', '', 0],
    ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x738543],
    ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
  ),
  badge: '547187',
  id: 482457,
})

set.addAchievement({
  title: 'Muscles Must Be Proud',
  description: 'Defeat the Muscle Cats without taking damage',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 3, 1],
      ['Trigger', 'Delta', '8bit', 0xc1e1, '=', 'Value', '', 1],
      ['Trigger', 'Mem', '8bit', 0xc1e1, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1, 1],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x738543],
      ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
      ['ResetIf', 'Mem', '16bit', 0xcfdc, '=', 'Value', '', 1024],
    ),
  },
  badge: '546507',
  id: 481827,
})

set.addAchievement({
  title: 'Push-Button Kitty',
  description: 'Defeat Mechano and rescue Tuffy',
  points: 5,
  type: 'progression',
  conditions: $(
    ['', 'Delta', '8bit', 0xc064, '=', 'Value', '', 4],
    ['', 'Delta', '24bit', 0xc0c9, '=', 'Value', '', 0x790007],
    ['', 'Mem', '8bit', 0xc064, '>', 'Delta', '8bit', 0xc064],
  ),
  badge: '546498',
  id: 481818,
})

set.addAchievement({
  title: 'Self-Destruct-Button Kitty',
  description: 'Defeat Mechano without taking damage',
  points: 25,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 4, 1],
      ['Trigger', 'Mem', '8bit', 0xc064, '>', 'Delta', '8bit', 0xc064],
      ['PauseIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1, 1],
    ),
    alt1: $(
      ['ResetIf', 'Delta', '24bit', 0xc0c9, '!=', 'Value', '', 0x790007],
      ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
      ['ResetIf', 'Mem', '16bit', 0xcfdc, '=', 'Value', '', 1024],
    ),
  },
  badge: '546508',
  id: 481828,
})

set.addAchievement({
  title: 'Puss Will Get the Boot',
  description: 'Defeat Tom again and rescue Muscles',
  points: 10,
  type: 'win_condition',
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 0],
    ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x5f003c],
    ['', 'Delta', '8bit', 0xc4f1, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xc4f1, '=', 'Value', '', 0],
  ),
  badge: '546499',
  id: 481819,
})

set.addAchievement({
  title: 'The Endless Table',
  description: 'Defeat Tom in the Attic while only ever moving right',
  points: 10,
  conditions: {
    core: $(
      ['Trigger', 'Mem', '8bit', 0xc4f1, '<', 'Delta', '8bit', 0xc4f1],
      ['Trigger', 'Mem', '8bit', 0xc4f1, '=', 'Value', '', 0],
      ['AndNext', 'Delta', 'Bit0', 0xc0a4, '=', 'Value', '', 0],
      ['AndNext', 'Mem', 'Bit1', 0xc109, '=', 'Value', '', 1],
      ['PauseIf', 'Mem', 'Bit0', 0xc0a4, '=', 'Value', '', 1, 1],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x5f003c],
      ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
    ),
  },
  badge: '547188',
  id: 482458,
})

set.addAchievement({
  title: `Listen Pussycat! Don't Pick On My Friends Again!`,
  description: 'Defeat Tom in the Attic without taking damage',
  points: 25,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 0, 1],
      ['Trigger', 'Delta', '8bit', 0xc4f1, '=', 'Value', '', 1],
      ['Trigger', 'Mem', '8bit', 0xc4f1, '=', 'Value', '', 0],
      ['PauseIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1, 1],
    ),
    alt1: $(
      ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x5f003c],
      ['ResetIf', 'Mem', '8bit', 0xc048, '<', 'Delta', '8bit', 0xc048],
      ['ResetIf', 'Mem', '16bit', 0xcfdc, '=', 'Value', '', 1024],
    ),
  },
  badge: '546509',
  id: 481829,
})

set.addAchievement({
  title: 'Johann Mouse',
  description: 'Collect all 36 music notes in the Lounge',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0xc039, '<', 'Value', '', 36],
    ['', 'Mem', '8bit', 0xc039, '>=', 'Value', '', 36],
  ),
  badge: '546500',
  id: 481820,
})

set.addAchievement({
  title: 'Let the Mouse Eat Cake',
  description: 'Collect all 41 cakes in the Kitchen',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 2],
    ['', 'Delta', '8bit', 0xc039, '<', 'Value', '', 41],
    ['', 'Mem', '8bit', 0xc039, '>=', 'Value', '', 41],
  ),
  badge: '546501',
  id: 481821,
})

set.addAchievement({
  title: 'The Mouse Does Not Fall Far from the Tree',
  description: 'Collect all 99 acorns in the Garden',
  points: 5,
  type: 'missable',
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 3],
    ['', 'Delta', '8bit', 0xc039, '<', 'Value', '', 99],
    ['', 'Mem', '8bit', 0xc039, '>=', 'Value', '', 99],
  ),
  badge: '546502',
  id: 481822,
})

set.addAchievement({
  title: 'Cuban Jerry',
  description: 'Collect all 49 maracas in the Toy Room',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 4],
    ['', 'Delta', '8bit', 0xc039, '<', 'Value', '', 49],
    ['', 'Mem', '8bit', 0xc039, '>=', 'Value', '', 49],
  ),
  badge: '546503',
  id: 481823,
})

set.addAchievement({
  title: 'Open Mousame',
  description: 'Collect all 52 keys in the Attic',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 5],
    ['', 'Delta', '8bit', 0xc039, '<', 'Value', '', 52],
    ['', 'Mem', '8bit', 0xc039, '>=', 'Value', '', 52],
  ),
  badge: '546504',
  id: 481824,
})

set.addAchievement({
  title: `Jerry's Nine Lives`,
  description: 'Beat the game with nine lives left without using passcodes',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0xc064, '=', 'Value', '', 0],
    ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x5f003c],
    ['', 'Delta', '8bit', 0xc4f1, '=', 'Value', '', 1],
    ['', 'Mem', '8bit', 0xc4f1, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0xc048, '=', 'Value', '', 9],
    ['ResetNextIf', 'Mem', '8bit', 0xc064, '=', 'Value', '', 1],
    ['PauseIf', 'Mem', '16bit', 0xcfdc, '=', 'Value', '', 24136, 1],
  ),
  badge: '546514',
  id: 481834,
})

set.addAchievement({
  title: 'Speedy Puzzler',
  description: 'Complete a block puzzle in 10 seconds or less',
  points: 5,
  conditions: {
    core: $(
      ['', 'Delta', '8bit', 0xffa1, '!=', 'Value', '', 44],
      ['', 'Mem', '8bit', 0xffa1, '=', 'Value', '', 44],
      ['PauseIf', 'Mem', '8bit', 0x10280, '!=', 'Delta', '8bit', 0x10280, 10],
    ),
    alt1: $(
      ['AndNext', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x6ed556],
      ['AndNext', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x737555],
      ['AndNext', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x73c350],
      ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x73d557],
    ),
  },
  badge: '547189',
  id: 482459,
})

set.addAchievement({
  title: 'My Sole Earthly Possession, Ten Custard Pie',
  description: 'Win the Pie Panic minigame without missing a single throw',
  points: 5,
  conditions: $(
    ['', 'Mem', '24bit', 0xc0c9, '!=', 'Delta', '24bit', 0xc0c9, 1],
    ['', 'Delta', '8bit', 0x10303, '=', 'Value', '', 10, 1],
    ['', 'Delta', '8bit', 0x10303, '!=', 'Value', '', 255],
    ['', 'Mem', '8bit', 0x10303, '=', 'Value', '', 255],
    ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x79f55e],
    ['AddHits', 'Mem', '8bit', 0x102bd, '<', 'Delta', '8bit', 0x102bd],
    ['SubHits', 'Mem', '8bit', 0x10303, '<', 'Delta', '8bit', 0x10303],
    ['ResetIf', 'Value', '', 49152, '=', 'Value', '', 1, 2],
  ),
  badge: '546515',
  id: 481835,
})

set.addAchievement({
  title: 'The Mouse Diver',
  description: 'Finish Live Bait without taking damage',
  points: 5,
  conditions: $(
    ['', 'Mem', '24bit', 0xc0c9, '!=', 'Delta', '24bit', 0xc0c9, 1],
    ['AndNext', 'Mem', '8bit', 0xc1b1, '<', 'Value', '', 5],
    ['ResetIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1],
    ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x720027],
    ['Trigger', 'Mem', '8bit', 0xffa1, '!=', 'Delta', '8bit', 0xffa1],
    ['Trigger', 'Mem', '8bit', 0xffa1, '=', 'Value', '', 44],
  ),
  badge: '546511',
  id: 481831,
})

set.addAchievement({
  title: 'Super Ski Stunts',
  description: 'Finish Water Skiing without taking damage',
  points: 5,
  conditions: $(
    ['', 'Mem', '24bit', 0xc0c9, '!=', 'Delta', '24bit', 0xc0c9, 1],
    ['AndNext', 'Mem', '8bit', 0xc1b1, '<', 'Value', '', 3],
    ['ResetIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1],
    ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x610038],
    ['Trigger', 'Mem', '8bit', 0xffa1, '!=', 'Delta', '8bit', 0xffa1],
    ['Trigger', 'Mem', '8bit', 0xffa1, '=', 'Value', '', 44],
  ),
  badge: '546510',
  id: 481830,
})

set.addAchievement({
  title: 'The Eggs and Jerry',
  description: 'Finish Eggs Game without dropping any eggs',
  points: 5,
  conditions: $(
    ['AndNext', 'Mem', '24bit', 0xc0c9, '!=', 'Delta', '24bit', 0xc0c9],
    ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x4f0028, 1],
    ['Trigger', 'Delta', '8bit', 0xc1e1, '=', 'Value', '', 10],
    ['ResetIf', 'Mem', '8bit', 0xc1e2, '>', 'Delta', '8bit', 0xc1e2],
  ),
  badge: '546513',
  id: 481833,
})

set.addAchievement({
  title: 'Surfer Supreme',
  description: 'Finish Soap Surfing without taking damage',
  points: 5,
  conditions: $(
    ['', 'Mem', '24bit', 0xc0c9, '!=', 'Delta', '24bit', 0xc0c9, 1],
    ['AndNext', 'Mem', '8bit', 0xc1b1, '<', 'Value', '', 3],
    ['ResetIf', 'Mem', '8bit', 0xc1b1, '<', 'Delta', '8bit', 0xc1b1],
    ['ResetIf', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x76003a],
    ['Trigger', 'Mem', '8bit', 0xffa1, '!=', 'Delta', '8bit', 0xffa1],
    ['Trigger', 'Mem', '8bit', 0xffa1, '=', 'Value', '', 44],
  ),
  badge: '546512',
  id: 481832,
})

set.addLeaderboard({
  title: 'Block Puzzle',
  description: 'Beat the Block Puzzle in the fastest time',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
      alt1: $(
        ['', 'Delta', '24bit', 0xc0c9, '!=', 'Value', '', 0x6ed556],
        ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x6ed556],
      ),
      alt2: $(
        ['', 'Delta', '24bit', 0xc0c9, '!=', 'Value', '', 0x737555],
        ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x737555],
      ),
      alt3: $(
        ['', 'Delta', '24bit', 0xc0c9, '!=', 'Value', '', 0x73c350],
        ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x73c350],
      ),
      alt4: $(
        ['', 'Delta', '24bit', 0xc0c9, '!=', 'Value', '', 0x73d557],
        ['', 'Mem', '24bit', 0xc0c9, '=', 'Value', '', 0x73d557],
      ),
    },
    cancel: {
      core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
      alt1: $(
        ['', 'Delta', '8bit', 0xffa1, '!=', 'Value', '', 48],
        ['', 'Mem', '8bit', 0xffa1, '=', 'Value', '', 48],
      ),
      alt2: $(
        ['', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x6ed556],
        ['', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x737555],
        ['', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x73c350],
        ['', 'Mem', '24bit', 0xc0c9, '!=', 'Value', '', 0x73d557],
      ),
    },
    submit: $(
      ['', 'Delta', '8bit', 0xffa1, '!=', 'Value', '', 44],
      ['', 'Mem', '8bit', 0xffa1, '=', 'Value', '', 44],
    ),
    value: $([
      'Measured',
      'Delta',
      '8bit',
      0x10281,
      '!=',
      'Mem',
      '8bit',
      0x10281,
    ]),
  },
  id: 125247,
})

export default set
