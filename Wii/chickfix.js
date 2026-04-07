import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 36042, title: 'Chick Chick BOOM' })

set.addAchievement({
  title: 'Fresh Graduate Chick',
  description: 'Finish the tutorial and unlock the Master Chicks',
  points: 1,
  type: 'progression',
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c9279, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c9279, '=', 'Value', '', 1],
  ),
  badge: '655648',
  id: 571293,
})

set.addAchievement({
  title: 'UFOs? In This Economy?',
  description:
    'Win a round in the City arena in Duel Mode on Medium or Hard difficulty',
  points: 3,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '32bitBE', 0x2c9200, '=', 'Mem', '32bitBE', 0x2c9200],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655649',
  id: 571294,
})

set.addAchievement({
  title: `That's a Big Octopus...`,
  description:
    'Win a round in the Ship arena in Duel Mode on Medium or Hard difficulty',
  points: 3,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '32bitBE', 0x2c9200, '=', 'Mem', '32bitBE', 0x2c9200],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655650',
  id: 571295,
})

set.addAchievement({
  title: 'G-G-Ghost Chickens, Aaaaagh!',
  description:
    'Win a round in the Haunted Woods arena in Duel Mode on Medium or Hard difficulty',
  points: 3,
  type: 'progression',
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['AddSource', 'Value', '', 1],
      ['', 'Delta', '32bitBE', 0x2c9200, '=', 'Mem', '32bitBE', 0x2c9200],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655651',
  id: 571296,
})

set.addAchievement({
  title: 'Living in the Chick City',
  description:
    'Win a 3 round duel in the City arena in Duel Mode on Hard difficulty',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c910c, '=', 'Value', '', 2],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655652',
  id: 571297,
})

set.addAchievement({
  title: 'Yarr Harr, Me Chickies!',
  description:
    'Win a 3 round duel in the Ship arena in Duel Mode on Hard difficulty',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c910c, '=', 'Value', '', 2],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655653',
  id: 571298,
})

set.addAchievement({
  title: `It's Spoooooky up Here`,
  description:
    'Win a 3 round duel in the Haunted Woods arena in Duel Mode on Hard difficulty',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c910c, '=', 'Value', '', 2],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655654',
  id: 571299,
})

set.addAchievement({
  title: 'Quick Chick',
  description:
    'Knock out 10 or more chicks in the City arena in a 3 minute Timed Mode match on Medium or Hard difficulty',
  points: 5,
  conditions: {
    core: $(
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 0],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
      ['Measured', 'Mem', '32bitBE', 0x3a3b6c, '>=', 'Value', '', 10],
    ),
    alt2: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 0],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
      ['Measured', 'Mem', '32bitBE', 0x3a3b70, '>=', 'Value', '', 10],
    ),
  },
  badge: '655655',
  id: 571300,
})

set.addAchievement({
  title: 'Lucky Chick',
  description:
    'Knock out 15 or more chicks in the Ship arena in a 5 minute Timed Mode match on Medium or Hard difficulty',
  points: 5,
  conditions: {
    core: $(
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
      ['Measured', 'Mem', '32bitBE', 0x3a3b6c, '>=', 'Value', '', 15],
    ),
    alt2: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
      ['Measured', 'Mem', '32bitBE', 0x3a3b70, '>=', 'Value', '', 15],
    ),
  },
  badge: '655656',
  id: 571301,
})

set.addAchievement({
  title: 'Endurance Chick',
  description:
    'Knock out 25 or more chicks in the Haunted Woods arena in a 10 minute Timed Mode match on Medium or Hard difficulty',
  points: 5,
  conditions: {
    core: $(
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
      ['Measured', 'Mem', '32bitBE', 0x3a3b6c, '>=', 'Value', '', 25],
    ),
    alt2: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['OrNext', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 2],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
      ['Measured', 'Mem', '32bitBE', 0x3a3b70, '>=', 'Value', '', 25],
    ),
  },
  badge: '655657',
  id: 571302,
})

set.addAchievement({
  title: 'Mayor of Chicksville',
  description: 'Knock out 40 or more chicks in the City arena in Pro Mode',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b6c, '>=', 'Value', '', 40],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b70, '>=', 'Value', '', 40],
    ),
  },
  badge: '655658',
  id: 571303,
})

set.addAchievement({
  title: 'Captain Chick Sparrow',
  description: 'Knock out 40 or more chicks in the Ship arena in Pro Mode',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b6c, '>=', 'Value', '', 40],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b70, '>=', 'Value', '', 40],
    ),
  },
  badge: '655659',
  id: 571304,
})

set.addAchievement({
  title: 'The Mystery Chick Gang',
  description:
    'Knock out 40 or more chicks in the Haunted Woods arena in Pro Mode',
  points: 10,
  conditions: {
    core: $(
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b6c, '>=', 'Value', '', 40],
    ),
    alt2: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b70, '>=', 'Value', '', 40],
    ),
  },
  badge: '655660',
  id: 571305,
})

set.addAchievement({
  title: 'Cuddly Chicks',
  description: 'Win 10 total rounds and unlock the Teddy Team',
  points: 1,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c927a, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c927a, '=', 'Value', '', 1],
  ),
  badge: '655661',
  id: 571306,
})

set.addAchievement({
  title: 'Mushy Chicks',
  description: 'Win 20 total rounds and unlock the Mushheads Team',
  points: 3,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c927b, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c927b, '=', 'Value', '', 1],
  ),
  badge: '655662',
  id: 571307,
})

set.addAchievement({
  title: 'Colorful Chicks',
  description: 'Win 30 total rounds and unlock the Rainbow Team',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c927c, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c927c, '=', 'Value', '', 1],
  ),
  badge: '655663',
  id: 571308,
})

set.addAchievement({
  title: 'Oriental Spiced Chicks',
  description: 'Knock out 10 chicks in Pro Mode and unlock the Orients Team',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c927d, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c927d, '=', 'Value', '', 1],
  ),
  badge: '655664',
  id: 571309,
})

set.addAchievement({
  title: 'Brooding Chicks',
  description:
    'Knock out 30 chicks in Pro Mode and unlock the Sitting Chick Team',
  points: 10,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c927e, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c927e, '=', 'Value', '', 1],
  ),
  badge: '655665',
  id: 571310,
})

set.addAchievement({
  title: 'God of Chicks',
  description:
    'Knock out 50 chicks in Pro Mode and unlock the Zulu Chicks Team',
  points: 25,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c927f, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c927f, '=', 'Value', '', 1],
  ),
  badge: '655666',
  id: 571311,
})

set.addAchievement({
  title: 'Choc Chicks',
  description:
    'Perform an attack with 100% accuracy and unlock the Chocdrops Team',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c9280, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c9280, '=', 'Value', '', 1],
  ),
  badge: '655667',
  id: 571312,
})

set.addAchievement({
  title: 'Natural Chicks',
  description:
    'Knock out 3 chicks in one attack and unlock the Flower Power Team',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c9281, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c9281, '=', 'Value', '', 1],
  ),
  badge: '655668',
  id: 571313,
})

set.addAchievement({
  title: 'Spicy Chicks',
  description:
    'Use every attack in one fight with red upgrades and unlock the Little Devils Team',
  points: 2,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['', 'Delta', '8bit', 0x2c9282, '=', 'Value', '', 0],
    ['', 'Mem', '8bit', 0x2c9282, '=', 'Value', '', 1],
  ),
  badge: '655669',
  id: 571314,
})

set.addAchievement({
  title: 'Protector of Chicks',
  description:
    'Win a round in Duel Mode on Hard difficulty without letting any of your chicks get knocked out',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['AddSource', 'Value', '', 1],
      [
        'Trigger',
        'Delta',
        '32bitBE',
        0x2c9200,
        '=',
        'Mem',
        '32bitBE',
        0x2c9200,
      ],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b70, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3a3b6c, '=', 'Value', '', 0],
    ),
  },
  badge: '655670',
  id: 571315,
})

set.addAchievement({
  title: 'Crazy Chick',
  description:
    'Win all 5 rounds in a First to 5 Duel Mode match on Hard Difficulty',
  points: 25,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c910c, '=', 'Value', '', 4],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x2c91f8, '=', 'Value', '', 5],
      ['', 'Mem', '32bitBE', 0x2c91fc, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['Trigger', 'Mem', '32bitBE', 0x2c91fc, '=', 'Value', '', 5],
      ['', 'Mem', '32bitBE', 0x2c91f8, '=', 'Value', '', 0],
    ),
  },
  badge: '655671',
  id: 571316,
})

set.addAchievement({
  title: 'Here, Hold This',
  description: 'Win a round in Duel Mode by using only bombs',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['AddSource', 'Value', '', 1],
      [
        'Trigger',
        'Delta',
        '32bitBE',
        0x2c9200,
        '=',
        'Mem',
        '32bitBE',
        0x2c9200,
      ],
      ['ResetIf', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['AndNext', 'Delta', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 2048, 1],
      ['AndNext', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be63c, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be63c, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be640, '!=', 'Value', '', 1],
      ['AndNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be8a8, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be8a8, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be8ac, '!=', 'Value', '', 1],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655672',
  id: 571317,
})

set.addAchievement({
  title: 'Whose Idea Was This?',
  description: 'Win a round in Duel Mode by using only weights',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['AddSource', 'Value', '', 1],
      [
        'Trigger',
        'Delta',
        '32bitBE',
        0x2c9200,
        '=',
        'Mem',
        '32bitBE',
        0x2c9200,
      ],
      ['ResetIf', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['AndNext', 'Delta', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 2048, 1],
      ['AndNext', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be63c, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be63c, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be640, '!=', 'Value', '', 0],
      ['AndNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be8a8, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be8a8, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be8ac, '!=', 'Value', '', 0],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655673',
  id: 571318,
})

set.addAchievement({
  title: `I'm on My Way to Eat Your Chicks`,
  description: 'Win a round in Duel Mode by using only plants',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['AddSource', 'Value', '', 1],
      [
        'Trigger',
        'Delta',
        '32bitBE',
        0x2c9200,
        '=',
        'Mem',
        '32bitBE',
        0x2c9200,
      ],
      ['ResetIf', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['AndNext', 'Delta', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 2048, 1],
      ['AndNext', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be63c, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be63c, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be640, '!=', 'Value', '', 3],
      ['AndNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be8a8, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be8a8, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be8ac, '!=', 'Value', '', 3],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655674',
  id: 571319,
})

set.addAchievement({
  title: 'Kentucky Fried Chicks',
  description: 'Win a round in Duel Mode by using only lightning',
  points: 10,
  conditions: {
    core: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 0],
      ['AddSource', 'Value', '', 1],
      [
        'Trigger',
        'Delta',
        '32bitBE',
        0x2c9200,
        '=',
        'Mem',
        '32bitBE',
        0x2c9200,
      ],
      ['ResetIf', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['AndNext', 'Delta', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
      ['', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 2048, 1],
      ['AndNext', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be63c, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be63c, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be640, '!=', 'Value', '', 2],
      ['AndNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['AndNext', 'Delta', '32bitBE', 0x3be8a8, '=', 'Value', '', -1],
      ['AndNext', 'Mem', '32bitBE', 0x3be8a8, '=', 'Value', '', 7],
      ['ResetIf', 'Mem', '32bitBE', 0x3be8ac, '!=', 'Value', '', 2],
    ),
    alt1: $(
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0],
    ),
    alt2: $(
      ['', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 1],
    ),
  },
  badge: '655675',
  id: 571320,
})

set.addAchievement({
  title: 'Corncobman!',
  description:
    'In one appearance of Corncobman, get 10 pieces of corn on your side',
  points: 5,
  conditions: {
    core: $(['ResetIf', 'Mem', '32bitBE', 0x3c64ec, '=', 'Value', '', -1]),
    alt1: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '!=', 'Value', '', 3],
      [
        'Measured',
        'Delta',
        '32bitBE',
        0x3bd564,
        '<',
        'Mem',
        '32bitBE',
        0x3bd564,
        10,
      ],
    ),
    alt2: $(
      ['MeasuredIf', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '!=', 'Value', '', 3],
      [
        'Measured',
        'Delta',
        '32bitBE',
        0x3bd5ec,
        '<',
        'Mem',
        '32bitBE',
        0x3bd564,
        10,
      ],
    ),
  },
  badge: '655676',
  id: 571321,
})

set.addAchievement({
  title: 'Piñata!',
  description:
    'Hit and activate the Piñata on your side every time it falls down in one round',
  points: 5,
  conditions: $(
    ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
    ['ResetIf', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
    ['AndNext', 'Delta', '32bitBE', 0x2caa68, '=', 'Value', '', 0],
    ['', 'Mem', '32bitBE', 0x2caa68, '=', 'Value', '', 2048, 1],
    ['', 'Mem', '32bitBE', 0x2c90f8, '!=', 'Value', '', 2],
    ['', 'Mem', '32bitBE', 0x2c90f8, '!=', 'Value', '', 3],
    ['AndNext', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
    ['AddAddress', 'Mem', '32bitBE', 0x3be2a0, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x40, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x4, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xc, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xa0, '&', 'Value', '', 0x1ffffff],
    ['AndNext', 'Delta', '32bitBE', 0x298, '=', 'Value', '', 1],
    ['AddAddress', 'Mem', '32bitBE', 0x3be2a0, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x40, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x4, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xc, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xa0, '&', 'Value', '', 0x1ffffff],
    ['ResetIf', 'Mem', '32bitBE', 0x298, '=', 'Value', '', 0],
    ['AndNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
    ['AddAddress', 'Mem', '32bitBE', 0x3be2a0, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x40, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x4, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xc, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xa0, '&', 'Value', '', 0x1ffffff],
    ['AndNext', 'Delta', '32bitBE', 0x298, '=', 'Value', '', -1],
    ['AddAddress', 'Mem', '32bitBE', 0x3be2a0, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x40, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0x4, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xc, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bitBE', 0xa0, '&', 'Value', '', 0x1ffffff],
    ['ResetIf', 'Mem', '32bitBE', 0x298, '=', 'Value', '', 0],
    ['AddSource', 'Value', '', 1],
    ['Trigger', 'Delta', '32bitBE', 0x2c9200, '=', 'Mem', '32bitBE', 0x2c9200],
  ),
  badge: '655677',
  id: 571322,
})

set.addLeaderboard({
  title: 'Time Mode 3 Minutes High Score',
  description: 'Get the highest score in a 3 minute Time Mode match',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 0],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    cancel: $(['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 0],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    value: {
      core: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b6c],
      ),
      alt1: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b70],
      ),
    },
  },
  id: 150707,
})

set.addLeaderboard({
  title: 'Time Mode 5 Minutes High Score',
  description: 'Get the highest score in a 5 minute Time Mode match',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 1],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    cancel: $(['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 1],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    value: {
      core: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b6c],
      ),
      alt1: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b70],
      ),
    },
  },
  id: 150708,
})

set.addLeaderboard({
  title: 'Time Mode 10 Minutes High Score',
  description: 'Get the highest score in a 10 minute Time mode match',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 2],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    cancel: $(['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 1],
      ['', 'Mem', '32bitBE', 0x2c9108, '=', 'Value', '', 2],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    value: {
      core: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b6c],
      ),
      alt1: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b70],
      ),
    },
  },
  id: 150709,
})

set.addLeaderboard({
  title: 'Pro Mode City High Score',
  description: 'Get the highest score in the City arena in Pro Mode',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    cancel: $(['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 0],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    value: {
      core: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b6c],
      ),
      alt1: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b70],
      ),
    },
  },
  id: 150710,
})

set.addLeaderboard({
  title: 'Pro Mode Ship High Score',
  description: 'Get the highest score in the Ship arena in Pro Mode',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    cancel: $(['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 3],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    value: {
      core: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b6c],
      ),
      alt1: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b70],
      ),
    },
  },
  id: 150711,
})

set.addLeaderboard({
  title: 'Pro Mode Haunted Woods High Score',
  description: 'Get the highest score in the Haunted Woods arena in Pro Mode',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    cancel: $(['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Mem', '8bit', 0x2c8b58, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', 2],
      ['', 'Mem', '32bitBE', 0x2c90fc, '=', 'Value', '', 6],
      ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', -1],
      ['', 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 2],
    ),
    value: {
      core: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9180, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b6c],
      ),
      alt1: $(
        ['MeasuredIf', 'Mem', '32bitBE', 0x2c9178, '=', 'Value', '', -1],
        ['Measured', 'Mem', '32bitBE', 0x3a3b70],
      ),
    },
  },
  id: 150712,
})

export default set
