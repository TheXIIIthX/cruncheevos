import { AchievementSet, define as $, measured, trigger, measuredIf } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 16669, title: `Tigger's Honey Hunt` })

const levelids = {
    "Adventure Begins": 0x1,
    "Night Tail": 0x2,
    "Blustery Day": 0x3,
    "Dark Trees": 0x4,
    "Frog Pond": 0x5,
    "Wardrobe": 0x6,
    "Rabbit Says": 0x10,
    "Pooh Sticks": 0x16,
    "Paper, Scissors, Owl": 0x13,
    "Rabbit Says minigame": 0xe,
    "Pooh Sticks minigame": 0xf,
    "Paper, Scissors, Stone minigame": 0xd,
    "Main Menu": 0xa,
    "Level Select": 0xb,
    "Photo Album": 0xc,
}

function inLevel() {
    return($(['', 'Mem', '8bit', 0xb73ac, '=', 'Value', '', 0],))
}

function levelstarthit() {
    return($(
        ['AndNext', 'Delta', '8bit', 0xb73ac, '=', 'Value', '', 1],
        ['', 'Mem', '8bit', 0xb73ac, '=', 'Value', '', 0, 1],
    ))
}

function resetLevel() {
    return($(
        ['ResetIf', 'Mem', '8bit', 0xb73ac, '=', 'Value', '', 1],
    ))
}

function hardminigame() {
    return($(['', 'Mem', '8bit', 0x0c6ea4, '=', 'Value', '', 1],))
}

function timetrial() {
    return($(
        ['', 'Delta', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0x1],
    ))
}

function timetrialstart() {
    return($(
        ['AndNext', 'Delta', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0x1, 1],
    ))
}

function timetrialend() {
    return($(
        ['', 'Delta', '8bit', 0x0c7070, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x0c7070, '=', 'Value', '', 1],
    ))
}

function checkpointProtect() {
    return($(
        ['AndNext', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
        ['ResetIf', 'Mem', '8bit', 0x0c70b1, '=', 'Value', '', 1],
    ))
}

function checkpointProtectLB() {
    return($(
        ['', 'Mem', '8bit', 0x0c70b1, '=', 'Value', '', 0],
    ))
}

function level(id) {
    return($(['', 'Mem', '8bit', 0xc6a33, '=', 'Value', '', id],))
}

function timetrialunlock(levelid) {
    return($(
        ['', 'Delta', 'Bit3', 0xc707b + levelid, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit3', 0xc707b + levelid, '=', 'Value', '', 1],
    ))
}

function timetrialunlocked(levelid) {
    return($(
        ['', 'Mem', 'Bit3', 0xc707b + levelid, '=', 'Value', '', 1],
    ))
}

function honeytally(potsneeded) {
    return($(
        ['', 'Mem', '8bit', 0x0c7098, '>=', 'Value', '', potsneeded],
        ['', 'Delta', '8bit', 0x0c706e, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x0c706e, '=', 'Value', '', 1],
    ))
}

function trialtimed(time) {
    return($(
        ['', 'Mem', '32bit', 0x0c7090, '<=', 'Value', '', time * 0x7800],
        ['', 'Delta', '8bit', 0x0c7070, '=', 'Value', '', 0],
        ['Trigger', 'Mem', '8bit', 0x0c7070, '=', 'Value', '', 1],
    ))
}

function bouncy(time) {
    return($(
        ['OrNext', 'Mem', '32bit', 0x0c70a8, '=', 'Value', '', 0x0],
        ['OrNext', 'Mem', '8bit', 0x0c7260, '=', 'Value', '', 0x1],
        ['ResetNextIf', 'Mem', '8bit', 0x0b7400, '>=', 'Value', '', 0x3],
        ['ResetIf', 'Mem', '8bit', 0xb7400, '<', 'Value', '', 0x3, time * 60],
    ))
}

set.addAchievement({
  id: 234412,
  title: "Now You're Flappin'!",
  description: `Win "Rabbit Says" and learn the Arm Flap`,
  points: 5,
  type: 'progression',
  conditions: {
    core: $(
        ['', 'Prior', '8bit', 0xc6a33, '=', 'Value', '', 16],
        ['', 'Mem', '8bit', 0xc6a33, '=', 'Value', '', 14],
        ['', 'Delta', '8bit', 0xc75cd, '=', 'Value', '', 3],
        ['', 'Mem', '8bit', 0xc75cd, '=', 'Value', '', 4],
    ),
  },
})

set.addAchievement({
  id: 234417,
  title: "Now That's a Bounce!",
  description: `Win "Pooh Sticks" and learn the Spring Jump`,
  points: 5,
  type: 'progression',
  conditions: {
    core: $(
        ['', 'Prior', '8bit', 0xc6a33, '=', 'Value', '', 22],
        ['', 'Mem', '8bit', 0xc6a33, '=', 'Value', '', 15],
        ['', 'Delta', '8bit', 0xc759d, '=', 'Value', '', 3],
        ['', 'Mem', '8bit', 0xc759d, '=', 'Value', '', 4],
    ),
  },
})

set.addAchievement({
  id: 234422,
  title: `Partyin' is What Tiggers do Best!`,
  description: `Win "Paper, Scissors, Owl" and finish the game`,
  points: 5,
  type: 'win_condition',
  conditions: {
    core: $(
        ['', 'Prior', '8bit', 0xc6a33, '=', 'Value', '', 19],
        ['', 'Mem', '8bit', 0xc6a33, '=', 'Value', '', 13],
        ['', 'Delta', '8bit', 0xc7518, '=', 'Value', '', 3],
        ['', 'Mem', '8bit', 0xc7518, '=', 'Value', '', 4],
    ),
  },
})

set.addAchievement({
    title: "You're a Picture-Perfect Bouncer, Roo!",
    description: "Collect all of Roo's pictures in the game",
    points: 5,
    conditions: {
        core: $(
            inLevel(),
            ['AddSource', 'Delta', 'Bit0', 0xc7074],
            ['AddSource', 'Delta', 'Bit0', 0xc7075],
            ['AddSource', 'Delta', 'Bit0', 0xc7076],
            ['AddSource', 'Delta', 'Bit0', 0xc7077],
            ['AddSource', 'Delta', 'Bit0', 0xc7078],
            ['', 'Delta', 'Bit0', 0xc7079, '=', 'Value', '', 5],
            ['AddSource', 'Mem', 'Bit0', 0xc7074],
            ['AddSource', 'Mem', 'Bit0', 0xc7075],
            ['AddSource', 'Mem', 'Bit0', 0xc7076],
            ['AddSource', 'Mem', 'Bit0', 0xc7077],
            ['AddSource', 'Mem', 'Bit0', 0xc7078],
            ['', 'Mem', 'Bit0', 0xc7079, '=', 'Value', '', 6],
        ),
        alt1: $(
            ['', 'Value', '', 1, '=', 'Value', '', 1],
        ),
        alt2: $(
            ['', 'Value', '', 0, '=', 'Value', '', 1],
            ['AddSource', 'Mem', 'Bit0', 0xc7074, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit0', 0xc7075, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit0', 0xc7076, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit0', 0xc7077, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit0', 0xc7078, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit0', 0xc7079, '*', 'Value', '', 4],
            ['AddSource', 'Mem', '8bit', 0xc7088, '&', 'Value', '', 3],
            ['Measured', 'Value', '', 0, '=', 'Value', '', 24],
        ),
    }
})

set.addAchievement({
    title: "Now That's Organized!",
    description: "Collect all of Rabbits pictures in the game",
    points: 10,
    conditions: {
        core: $(
            inLevel(),
            ['AddSource', 'Delta', 'Bit2', 0xc7074],
            ['AddSource', 'Delta', 'Bit2', 0xc7075],
            ['AddSource', 'Delta', 'Bit2', 0xc7076],
            ['AddSource', 'Delta', 'Bit2', 0xc7077],
            ['AddSource', 'Delta', 'Bit2', 0xc7078],
            ['', 'Delta', 'Bit2', 0xc7079, '=', 'Value', '', 5],
            ['AddSource', 'Mem', 'Bit2', 0xc7074],
            ['AddSource', 'Mem', 'Bit2', 0xc7075],
            ['AddSource', 'Mem', 'Bit2', 0xc7076],
            ['AddSource', 'Mem', 'Bit2', 0xc7077],
            ['AddSource', 'Mem', 'Bit2', 0xc7078],
            ['', 'Mem', 'Bit2', 0xc7079, '=', 'Value', '', 6],
        ),
        alt1: $(
            ['', 'Value', '', 1, '=', 'Value', '', 1],
        ),
        alt2: $(
            ['', 'Value', '', 0, '=', 'Value', '', 1],
            ['AddSource', 'Mem', 'Bit2', 0xc7074, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit2', 0xc7075, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit2', 0xc7076, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit2', 0xc7077, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit2', 0xc7078, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit2', 0xc7079, '*', 'Value', '', 4],
            ['AddSource', 'Mem', '8bit', 0xc7084, '&', 'Value', '', 3],
            ['Measured', 'Value', '', 0, '=', 'Value', '', 24],
        ),
    }
})

set.addAchievement({
    title: "We Did It, Pooh Bear!",
    description: "Collect all of Pooh's pictures in the game",
    points: 10,
    conditions: {
        core: $(
            inLevel(),
            ['AddSource', 'Delta', 'Bit1', 0xc7074],
            ['AddSource', 'Delta', 'Bit1', 0xc7075],
            ['AddSource', 'Delta', 'Bit1', 0xc7076],
            ['AddSource', 'Delta', 'Bit1', 0xc7077],
            ['AddSource', 'Delta', 'Bit1', 0xc7078],
            ['', 'Delta', 'Bit1', 0xc7079, '=', 'Value', '', 5],
            ['AddSource', 'Mem', 'Bit1', 0xc7074],
            ['AddSource', 'Mem', 'Bit1', 0xc7075],
            ['AddSource', 'Mem', 'Bit1', 0xc7076],
            ['AddSource', 'Mem', 'Bit1', 0xc7077],
            ['AddSource', 'Mem', 'Bit1', 0xc7078],
            ['', 'Mem', 'Bit1', 0xc7079, '=', 'Value', '', 6],
        ),
        alt1: $(
            ['', 'Value', '', 1, '=', 'Value', '', 1],
        ),
        alt2: $(
            ['', 'Value', '', 0, '=', 'Value', '', 1],
            ['AddSource', 'Mem', 'Bit1', 0xc7074, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit1', 0xc7075, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit1', 0xc7076, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit1', 0xc7077, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit1', 0xc7078, '*', 'Value', '', 4],
            ['AddSource', 'Mem', 'Bit1', 0xc7079, '*', 'Value', '', 4],
            ['AddSource', 'Mem', '8bit', 0xc708c, '&', 'Value', '', 3],
            ['Measured', 'Value', '', 0, '=', 'Value', '', 24],
        ),
    }
})

set.addAchievement({
    title: "You Remember Better Than Rabbit!",
    description: 'Win "Rabbit Says" on hard difficulty',
    points: 5,
    conditions: $(
        level(levelids['Rabbit Says minigame']),
        hardminigame(),
        ['', 'Mem', '8bit', 0x0c6cba, '=', 'Value', '', 0],
        ['AddAddress', 'Mem', '8bit', 0x1f2adc],
        ['', 'Delta', '8bit', 0x0c75cc, '=', 'Value', '', 3],
        ['AddAddress', 'Mem', '8bit', 0x1f2adc],
        ['', 'Mem', '8bit', 0x0c75cc, '=', 'Value', '', 4],
    ),
})

set.addAchievement({
    title: "Whoo-Hoo! Fastest Stick Wins!",
    description: 'Win "Pooh Sticks" on hard difficulty',
    points: 5,
    conditions: $(
        level(levelids['Pooh Sticks minigame']),
        hardminigame(),
        ['', 'Mem', '8bit', 0x0c6cba, '=', 'Value', '', 0],
        ['AddAddress', 'Mem', '8bit', 0x1f2a70],
        ['', 'Delta', '8bit', 0x0c759c, '=', 'Value', '', 3],
        ['AddAddress', 'Mem', '8bit', 0x1f2a70],
        ['', 'Mem', '8bit', 0x0c759c, '=', 'Value', '', 4],
    ),
})

set.addAchievement({
    title: "You Outsmarted Owl!",
    description: 'Win "Paper, Scissors, Stone" on hard difficulty',
    points: 5,
    conditions: $(
        level(levelids['Paper, Scissors, Stone minigame']),
        hardminigame(),
        ['', 'Mem', '8bit', 0x0c6cba, '=', 'Value', '', 0],
        ['AddAddress', 'Mem', '8bit', 0x0c74ec],
        ['', 'Delta', '8bit', 0x0c7518, '=', 'Value', '', 3],
        ['AddAddress', 'Mem', '8bit', 0x0c74ec],
        ['', 'Mem', '8bit', 0x0c7518, '=', 'Value', '', 4],
    ),
})

set.addAchievement({
    title: "Did You Check Down the Road?",
    description: "Retrieve Rabbit's Wheel Barrow's Wheel",
    points: 1,
    conditions: $(
        inLevel(),
        level(levelids['Adventure Begins']),
        timetrialunlock(levelids['Adventure Begins']),
    ),
})

set.addAchievement({
    title: "Good as New, Eeyore!",
    description: "Retrieve Eeyore's Tail",
    points: 4,
    conditions: $(
        inLevel(),
        level(levelids['Night Tail']),
        timetrialunlock(levelids['Night Tail']),
    ),
})

set.addAchievement({
    title: "Safe and Snug!",
    description: "Retrieve Roo's Scarve",
    points: 2,
    conditions: $(
        inLevel(),
        level(levelids['Blustery Day']),
        timetrialunlock(levelids['Blustery Day']),
    ),
})

set.addAchievement({
    title: "Sweepin' Time!",
    description: "Retrieve Piglett's Broom",
    points: 3,
    conditions: $(
        inLevel(),
        level(levelids['Dark Trees']),
        timetrialunlock(levelids['Dark Trees']),
    ),
})

set.addAchievement({
    title: "Bees Can't Stop Us!",
    description: "Retrieve Pooh's Umbrella",
    points: 3,
    conditions: $(
        inLevel(),
        level(levelids['Frog Pond']),
        timetrialunlock(levelids['Frog Pond']),
    ),
})

set.addAchievement({
    title: "That's a Job Well Bounced",
    description: "Send Roo home to Kanga",
    points: 2,
    conditions: $(
        inLevel(),
        level(levelids.Wardrobe),
        timetrialunlock(levelids.Wardrobe),
    ),
})

set.addAchievement({
    title: "Ready, Set... Bounce!",
    description: 'Beat the "And So the Adventure Begins" Time trail in 1 minute, 20 seconds. Start the trial before hitting the second checkpoint',
    points: 10,
    conditions: $(
        levelstarthit(),
        level(levelids['Adventure Begins']),
        timetrialunlocked(levelids['Adventure Begins']),
        checkpointProtect(),
        trialtimed(80),
    ),
})

set.addAchievement({
    title: "Nothing Scares a Tigger!",
    description: 'Beat the "Night Tail" Time trail in 1 minute, 43 seconds. Start the trial before hitting the second checkpoint',
    points: 10,
    conditions: $(
        levelstarthit(),
        level(levelids['Night Tail']),
        timetrialunlocked(levelids['Night Tail']),
        checkpointProtect(),
        trialtimed(103),
    ),
})

set.addAchievement({
    title: "Hang On to Your Tail!",
    description: 'Beat the "A Blustery Day" Time trail in 1 minute, 25 seconds. Start the trial before hitting the second checkpoint',
    points: 10,
    conditions: $(
        levelstarthit(),
        level(levelids['Blustery Day']),
        timetrialunlocked(levelids['Blustery Day']),
        checkpointProtect(),
        trialtimed(85),
    ),
})

set.addAchievement({
    title: "Too Fast for the Bumblebees!",
    description: 'Beat the "Dark Trees and Busy Bees" Time trail in 1 minute, 26 seconds. Start the trial before hitting the second checkpoint',
    points: 10,
    conditions: $(
        levelstarthit(),
        level(levelids['Dark Trees']),
        timetrialunlocked(levelids['Dark Trees']),
        checkpointProtect(),
        trialtimed(86),
    ),
})

set.addAchievement({
    title: "Hop to It!",
    description: 'Beat the "Beyond the Frog Pond" Time trail in 2 minutes, 7 seconds. Start the trial before hitting the second checkpoint',
    points: 10,
    conditions: $(
        levelstarthit(),
        level(levelids['Frog Pond']),
        timetrialunlocked(levelids['Frog Pond']),
        checkpointProtect(),
        trialtimed(127),
    ),
})

set.addAchievement({
    title: "A Tigger Can Do Anything!",
    description: 'Beat the "Tigger, the Witch, and the Wardrobe" Time trail in 3 minutes, 3 seconds. Start the trial before hitting the second checkpoint',
    points: 10,
    conditions: $(
        levelstarthit(),
        level(levelids.Wardrobe),
        timetrialunlocked(levelids.Wardrobe),
        checkpointProtect(),
        trialtimed(183),
    ),
})

set.addAchievement({
    title: "Starting With a Belly Full of Honey!",
    description: 'Beat "And So the Adventure Begins" with all 100 hunny pots',
    points: 5,
    conditions: $(
        inLevel(),
        level(levelids['Adventure Begins']),
        honeytally(100),
    ),
})

set.addAchievement({
    title: "No Pot Too Hidden!",
    description: 'Beat "Night Tail" with all 100 hunny pots',
    points: 5,
    conditions: $(
        inLevel(),
        level(levelids['Night Tail']),
        honeytally(100),
    ),
})

set.addAchievement({
    title: "Blew Right Through 'Em!",
    description: 'Beat "A Blustery Day" with all 100 hunny pots',
    points: 5,
    conditions: $(
        inLevel(),
        level(levelids['Blustery Day']),
        honeytally(100),
    ),
})

set.addAchievement({
    title: "Every Pot was Worth It!",
    description: 'Beat "Dark Trees and Busy Bees" with all 100 hunny pots',
    points: 5,
    conditions: $(
        inLevel(),
        level(levelids['Dark Trees']),
        honeytally(100),
    ),
})

set.addAchievement({
    title: "Frogs Can't Beat Tiggers!",
    description: 'Beat "Beyond the Frog Pond" with all 100 hunny pots',
    points: 5,
    conditions: $(
        inLevel(),
        level(levelids['Frog Pond']),
        honeytally(100),
    ),
})

set.addAchievement({
    title: "Heffalumps Won't Hide These Pots from Tigger!",
    description: 'Beat the "Tigger, the Witch, and the Wardrobe" with all 100 hunny pots',
    points: 5,
    conditions: $(
        inLevel(),
        level(levelids.Wardrobe),
        honeytally(100),
    ),
})

set.addAchievement({
    title: "Let's Bounce Right In!",
    description: 'Finish "And So the Adventure Begins" without being grounded for more than 3 consecutive seconds',
    points: 5,
    conditions: {
        core: 
            $(
            levelstarthit(),
            level(levelids['Adventure Begins']),
            resetLevel(),
            bouncy(3),
        ),
        alt1: $(
            trigger(honeytally(60)),
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x0c7070, '=', 'Value', '', 0],
            ['Trigger', 'Mem', '8bit', 0x0c7070, '=', 'Value', '', 1],
        ),
    }
})

set.addAchievement({
    title: "A Tigger Never Stops Bouncin'!",
    description: 'Finish "Night Tail" without being grounded for more than 3 consecutive seconds',
    points: 5,
    conditions: {
        core: 
            $(
            levelstarthit(),
            level(levelids['Night Tail']),
            resetLevel(),
            bouncy(3),
        ),
        alt1: $(
            trigger(honeytally(65)),
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x0c7070, '=', 'Value', '', 0],
            ['Trigger', 'Mem', '8bit', 0x0c7070, '=', 'Value', '', 1],
        ),
    }
})

set.addAchievement({
    title: "Just Pure Bounce!",
    description: 'Finish "A Blustery Day" without using the Arm Flap',
    points: 5,
    conditions: {
        core: $(
            levelstarthit(),
            level(levelids['Blustery Day']),
            resetLevel(),
            ['AndNext', 'Delta', '8bit', 0x0b7390, '=', 'Value', '', 0x7],
            ['ResetIf', 'Mem', '8bit', 0x0b7390, '=', 'Value', '', 0x8],
        ),
        alt1: $(
            trigger(honeytally(70)),
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x0c7070, '=', 'Value', '', 0],
            ['Trigger', 'Mem', '8bit', 0x0c7070, '=', 'Value', '', 1],
        ),
    }
})

set.addAchievement({
    title: "Still Bouncin' Strong!",
    description: 'Finish "Dark Trees and Busy Bees" without using the Arm Flap and without dying',
    points: 10,
    conditions: {
        core: $(
            levelstarthit(),
            level(levelids['Dark Trees']),
            resetLevel(),
            ['AndNext', 'Delta', '8bit', 0x0b7390, '=', 'Value', '', 0x7],
            ['ResetIf', 'Mem', '8bit', 0x0b7390, '=', 'Value', '', 0x8],
            ['AndNext', 'Delta', '8bit', 0x0c7094, '=', 'Value', '', 0x1],
            ['ResetIf', 'Mem', '8bit', 0x0c7094, '=', 'Value', '', 0x0],
        ),
        alt1: $(
            trigger(honeytally(75)),
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x0c7070, '=', 'Value', '', 0],
            ['Trigger', 'Mem', '8bit', 0x0c7070, '=', 'Value', '', 1],
        ),
    }
})

set.addAchievement({
    title: "Make Every Bounce Count!",
    description: 'Beat the "Beyond the Frog Pond" Time trial in 2 minutes without using the Spring Jump more than 10 times. Start the timer before triggering the second checkpoint',
    points: 10,
    conditions: { 
        core: 
            $(
            ['AndNext', 'Delta', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
            ['', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0x1, 1],
            level(levelids['Frog Pond']),
            trialtimed(120),
            resetLevel(),
        ),
        alt1: $(
            ['ResetNextIf', 'Mem', '8bit', 0x0b7390, '!=', 'Value', '', 0x0],
            ['AndNext', 'Delta', '8bit', 0x0b7390, '=', 'Value', '', 0x9],
            ['ResetNextIf', 'Mem', '8bit', 0x0b7390, '=', 'Value', '', 0x0, 2],
            ['PauseIf', 'Value', '', 1, '=', 'Value', '', 1, 1],
            ['AndNext', 'Delta', '8bit', 0x0b7390, '=', 'Value', '', 0x0],
            ['ResetIf', 'Mem', '8bit', 0x0b7390, '=', 'Value', '', 0x4, 10],
        ),
        alt2: $(
            ['', 'Value', '', 0, '=', 'Value', '', 1],
            ['MeasuredIf', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0x1, 1],
            measuredIf(level(levelids['Frog Pond'])),
            ['ResetNextIf', 'Mem', '8bit', 0x0b7390, '!=', 'Value', '', 0x0],
            ['AndNext', 'Delta', '8bit', 0x0b7390, '=', 'Value', '', 0x9],
            ['ResetNextIf', 'Mem', '8bit', 0x0b7390, '=', 'Value', '', 0x0, 2],
            ['PauseIf', 'Value', '', 1, '=', 'Value', '', 1, 1],
            ['AndNext', 'Delta', '8bit', 0x0b7390, '=', 'Value', '', 0x0],
            ['Measured', 'Mem', '8bit', 0x0b7390, '=', 'Value', '', 0x4, 10],
        ),
        alt3: $(
            ['', 'Value', '', 1, '=', 'Value', '', 1],
        )
    }
})

set.addAchievement({
    title: "Heffalumps, Woozles and the Bouncin' Tigger",
    description: 'Finish "Tigger, the Witch, and the Wardrobe" without being grounded for more than 3 consecutive seconds',
    points: 5,
    conditions: {
        core: 
            $(
            levelstarthit(),
            level(levelids.Wardrobe),
            resetLevel(),
            bouncy(3),
        ),
        alt1: $(
            trigger(honeytally(85)),
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x0c7070, '=', 'Value', '', 0],
            ['Trigger', 'Mem', '8bit', 0x0c7070, '=', 'Value', '', 1],
        ),
    }
})

set.addLeaderboard({
    title: "And so the Adventure begins time trial",
    description: 'Finish the "And so the Adventure begins" time trial as quickly as possible! Start the timer before triggering the second checkpoint',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: $(
            level(levelids['Adventure Begins']),
            checkpointProtectLB(),
            timetrial(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
            ['', 'Mem', '8bit', 0xc6a33, '!=', 'Value', '', levelids['Adventure Begins']],
        ),
        submit: $(
            timetrialend(),
        ),
        value: $(
            ['Measured', 'Mem', '32bit', 0x0c7090, '/', 'Value', '', 0x200],
        )
    }
})

set.addLeaderboard({
    title: "Night tail time trial",
    description: 'Finish the "Night tail" time trial as quickly as possible! Start the timer before triggering the second checkpoint',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: $(
            level(levelids['Night Tail']),
            checkpointProtectLB(),
            timetrial(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
            ['', 'Mem', '8bit', 0xc6a33, '!=', 'Value', '', levelids['Night Tail']],
        ),
        submit: $(
            timetrialend(),
        ),
        value: $(
            ['Measured', 'Mem', '32bit', 0x0c7090, '/', 'Value', '', 0x200],
        )
    }
})

set.addLeaderboard({
    title: "A blustery day time trial",
    description: 'Finish the "A blustery day" time trial as quickly as possible! Start the timer before triggering the second checkpoint',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: $(
            level(levelids['Blustery Day']),
            checkpointProtectLB(),
            timetrial(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
            ['', 'Mem', '8bit', 0xc6a33, '!=', 'Value', '', levelids['Blustery Day']],
        ),
        submit: $(
            timetrialend(),
        ),
        value: $(
            ['Measured', 'Mem', '32bit', 0x0c7090, '/', 'Value', '', 0x200],
        )
    }
})

set.addLeaderboard({
    title: "Dark Trees and Busy Bees time trial",
    description: 'Finish the "Dark Trees and Busy Bees" time trial as quickly as possible! Start the timer before triggering the second checkpoint',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: $(
            level(levelids['Dark Trees']),
            checkpointProtectLB(),
            timetrial(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
            ['', 'Mem', '8bit', 0xc6a33, '!=', 'Value', '', levelids['Dark Trees']],
        ),
        submit: $(
            timetrialend(),
        ),
        value: $(
            ['Measured', 'Mem', '32bit', 0x0c7090, '/', 'Value', '', 0x200],
        )
    }
})

set.addLeaderboard({
    title: "Beyond the Frog Pond time trial",
    description: 'Finish the "Beyond the Frog Pond" time trial as quickly as possible! Start the timer before triggering the second checkpoint',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: $(
            level(levelids['Frog Pond']),
            checkpointProtectLB(),
            timetrial(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
            ['', 'Mem', '8bit', 0xc6a33, '!=', 'Value', '', levelids['Frog Pond']],
        ),
        submit: $(
            timetrialend(),
        ),
        value: $(
            ['Measured', 'Mem', '32bit', 0x0c7090, '/', 'Value', '', 0x200],
        )
    }
})

set.addLeaderboard({
    title: "Tigger, the witch and the wardrobe time trial",
    description: 'Finish the "Tigger, the witch and the wardrobe" time trial as quickly as possible! Start the timer before triggering the second checkpoint',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: $(
            level(levelids.Wardrobe),
            checkpointProtectLB(),
            timetrial(),
        ),
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0x0c7072, '=', 'Value', '', 0xff],
            ['', 'Mem', '8bit', 0xc6a33, '!=', 'Value', '', levelids.Wardrobe],
        ),
        submit: $(
            timetrialend(),
        ),
        value: $(
            ['Measured', 'Mem', '32bit', 0x0c7090, '/', 'Value', '', 0x200],
        )
    }
})

export default set
