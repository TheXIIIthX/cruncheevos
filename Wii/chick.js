import { AchievementSet, define as $, orNext, trigger, measured, measuredIf } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 36042, title: 'Chick Chick BOOM' })

const teams = {
    "ChickGang": 0x002c9274,
    "Eggheads": 0x002c9275,
    "Pirates": 0x002c9276,
    "Chickings": 0x002c9277,
    "Snobs": 0x002c9278,
    "MasterChicks": 0x002c9279,
    "Teddy": 0x002c927a,
    "Mushheads": 0x002c927b,
    "Rainbow": 0x002c927c,
    "Orients": 0x002c927d,
    "SittingChick": 0x002c927e,
    "ZuluChicks": 0x002c927f,
    "Chocdrops": 0x002c9280,
    "FlowerPower": 0x002c9281,
    "LittleDevils": 0x002c9282,
}

const modes = {
    "Duel": 0x0,
    "Time": 0x1,
    "Pro": 0x2,
    "Tutorial": 0x3,
}

const arenas = {
    "Town": 0x0,
    "Ship": 0x1,
    "Woods": 0x2,
}

const time = {
    "3min": 0x0,
    "5min":0x1,
    "10min": 0x2,
}

const wins = {
    "1": 0x0,
    "2": 0x1,
    "3": 0x2,
    "4": 0x3,
    "5": 0x4,
}

const attacks = {
    "weight": 0x0,
    "bomb": 0x1,
    "lightning": 0x2,
    "plant": 0x3,
    "ufo": 0x4,
    "ghost": 0x5,
    "monster": 0x6,
}

const difficulties = {
    "easy": 0x0,
    "medium": 0x1,
    "hard": 0x2,
}

const teamcolor = {
    "yellow": 0x0,
    "black": 0x1,
}

const killaddress = {
    "yellow": 0x003a3b6c,
    "black": 0x003a3b70,
}

function pointer(offset) {
    return($(
        ['AddAddress', 'Mem', '32bitBE', offset, '&', 'Value', '', 0x1ffffff],
    ))
}

function pinata() {
    return($(
        pointer(0x003be2a0),
        pointer(0x40),
        pointer(0x4),
        pointer(0xc),
        pointer(0xa0)
    ))
}

function gameon() {
    return($(
        ['', 'Mem', '8bit', 0x002c8b58, '=', 'Value', '', 1],
    ))
}

function roundOver(trig = '') {
    return($(
        ['AddSource', 'Value', '', 1],
        [trig, 'Delta', '32bitBE', 0x002c9200, '=', 'Mem', '32bitBE', 0x002c9200],
    ))
}

function gameover(trig = '') {
    return($(
        ['', 'Delta', '32bitBE', 0x3cff4c, '=', 'Value', '', 0xffffffff],
        [trig, 'Mem', '32bitBE', 0x3cff4c, '=', 'Value', '', 0x2],
    ))
}

function unlock(address) {
    return($(
        ['', 'Delta', '8bit', address, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', address, '=', 'Value', '', 1],
    ))
}

function noPVP() {
    return($(
        ['OrNext', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
        ['', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
    ))
}

function gamemode(mode) {
    return($(
        ['', 'Mem', '32bitBE', 0x2c90f8, '=', 'Value', '', mode],
    ))
}

function battlefield(arena) {
    return($(
        ['', 'Mem', '32bitBE', 0x2c9100, '=', 'Value', '', arena],
    ))
}

function difficulty(setting) {
    return($(
        ['', 'Mem', '32bitBE', 0x2c9110, '=', 'Value', '', setting],
    ))
}

function rounds(count) {
    return($(
        ['', 'Mem', '32bitBE', 0x002c910c, '=', 'Value', '', count],
    ))
}

function timemode(minutes) {
    return($(
        ['', 'Mem', '32bitBE', 0x002c9108, '=', 'Value', '', minutes],
    ))
}

function killgoal(teamaddress, kills) {
    return($(
        ['', 'Mem', '32bitBE', teamaddress, '>=', 'Value', '', kills],
    ))
}

//Starts at the beginning of a round
function startHit() {
    return($(
        ['ResetIf', 'Mem', '32bitBE', 0x002caa68, '=', 'Value', '', 0],
        ['AndNext', 'Delta', '32bitBE', 0x002caa68, '=', 'Value', '', 0],
        ['', 'Mem', '32bitBE', 0x002caa68, '=', 'Value', '', 0x0800, 1],
    ))
}

function win(team, measuredif = 0) {
    let mIf = ''
    if (measuredif == 1) {
        mIf = 'MeasuredIf'
    }
    if (team == 0) {
        return($(
            [mIf, 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0x0],
        ))
    }
    else if (team == 1) {
        return($(
            [mIf, 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['', 'Mem', '32bitBE', 0x2c9204, '=', 'Value', '', 0x1],
        ))
    }
    throw new console.error("Provide a team color you fuckwit");
        
}

set.addAchievement({
    title: "Fresh Graduate Chick",
    description: "Finish the tutorial and unlock the Master Chicks",
    type: 'progression',
    points: 1,
    conditions: $(
        gameon(),
        unlock(teams.MasterChicks),
    ),
})

set.addAchievement({
    title: "UFO's? In This Economy?",
    description: "Win a round in the City arena in Duel mode on medium or hard difficulty",
    type: 'progression',
    points: 3,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            battlefield(arenas.Town),
            orNext(difficulty(difficulties.medium), difficulty(difficulties.hard)),
            roundOver(),
        ),
        alt1: $(
            win(teamcolor.yellow),
        ),
        alt2: $(
            win(teamcolor.black),
        )
    }
})

set.addAchievement({
    title: "That's a Big Octopus..",
    description: "Win a round in the Ship arena in Duel mode on medium or hard difficulty",
    type: 'progression',
    points: 3,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            battlefield(arenas.Ship),
            orNext(difficulty(difficulties.medium), difficulty(difficulties.hard)),
            roundOver(),
        ),
        alt1: $(
            win(teamcolor.yellow),
        ),
        alt2: $(
            win(teamcolor.black),
        )
    }
})

set.addAchievement({
    title: "G-G-Ghost Chickens, Aaaaagh!",
    description: "Win a round in the Haunted Woods arena in Duel mode on medium or hard difficulty",
    type: 'progression',
    points: 3,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            battlefield(arenas.Woods),
            orNext(difficulty(difficulties.medium), difficulty(difficulties.hard)),
            roundOver(),
        ),
        alt1: $(
            win(teamcolor.yellow),
        ),
        alt2: $(
            win(teamcolor.black),
        )
    }
})

set.addAchievement({
    title: "Living in the Chick City",
    description: "Win duel mode in the City arena on hard difficulty in a 3 round duel",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            battlefield(arenas.Town),
            difficulty(difficulties.hard),
            rounds(wins[3]),
            gameover('Trigger'),
        ),
        alt1: $(
            win(teamcolor.yellow),
        ),
        alt2: $(
            win(teamcolor.black),
        )
    }
})

set.addAchievement({
    title: "Yarr Harr, me Chickies!",
    description: "Win duel mode in the Ship arena on hard difficulty in a 3 round duel",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            battlefield(arenas.Ship),
            difficulty(difficulties.hard),
            rounds(wins[3]),
            gameover('Trigger'),
        ),
        alt1: $(
            win(teamcolor.yellow),
        ),
        alt2: $(
            win(teamcolor.black),
        )
    }
})

set.addAchievement({
    title: "It's Spoooooky up Here",
    description: "Win duel mode in the Haunted Woods arena on hard difficulty in a 3 round duel",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            battlefield(arenas.Woods),
            difficulty(difficulties.hard),
            rounds(wins[3]),
            gameover('Trigger'),
        ),
        alt1: $(
            win(teamcolor.yellow),
        ),
        alt2: $(
            win(teamcolor.black),
        )
    }
})

set.addAchievement({
    title: "Quick Chick",
    description: "Knockout 10 chicks or more in timed mode, the City arena, in 3 minutes, on medium or hard difficulty",
    points: 5,
    conditions: {
        core: $(

            gameover('Trigger'),
        ),
        alt1: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Time)),
            measuredIf(battlefield(arenas.Town)),
            measuredIf(orNext(difficulty(difficulties.medium), difficulty(difficulties.hard))),
            measuredIf(timemode(time['3min'])),
            win(teamcolor.yellow, 1),
            measured(killgoal(killaddress.yellow, 10)),
        ),
        alt2: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Time)),
            measuredIf(battlefield(arenas.Town)),
            measuredIf(orNext(difficulty(difficulties.medium), difficulty(difficulties.hard))),
            measuredIf(timemode(time['3min'])),
            win(teamcolor.black, 1),
            measured(killgoal(killaddress.black, 10)),
        )
    }
})

set.addAchievement({
    title: "Lucky Chick",
    description: "Knockout 15 chicks or more in timed mode, the Ship arena, in 5 minutes, on medium or hard difficulty",
    points: 5,
    conditions: {
        core: $(
            gameover('Trigger'),
        ),
        alt1: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Time)),
            measuredIf(battlefield(arenas.Ship)),
            measuredIf(orNext(difficulty(difficulties.medium), difficulty(difficulties.hard))),
            measuredIf(timemode(time['5min'])),
            win(teamcolor.yellow, 1),
            measured(killgoal(killaddress.yellow, 15)),
        ),
        alt2: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Time)),
            measuredIf(battlefield(arenas.Ship)),
            measuredIf(orNext(difficulty(difficulties.medium), difficulty(difficulties.hard))),
            measuredIf(timemode(time['5min'])),
            win(teamcolor.black, 1),
            measured(killgoal(killaddress.black, 15)),
        )
    }
})

set.addAchievement({
    title: "Endurance Chick",
    description: "Knockout 25 chicks or more in timed mode, the Haunted Woods arena, in 10 minutes, on medium or hard difficulty",
    points: 5,
    conditions: {
        core: $(
            gameover('Trigger'),
        ),
        alt1: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Time)),
            measuredIf(battlefield(arenas.Woods)),
            measuredIf(orNext(difficulty(difficulties.medium), difficulty(difficulties.hard))),
            measuredIf(timemode(time['10min'])),
            win(teamcolor.yellow, 1),
            measured(killgoal(killaddress.yellow, 25)),
        ),
        alt2: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Time)),
            measuredIf(battlefield(arenas.Woods)),
            measuredIf(orNext(difficulty(difficulties.medium), difficulty(difficulties.hard))),
            measuredIf(timemode(time['10min'])),
            win(teamcolor.black, 1),
            measured(killgoal(killaddress.black, 25)),
        )
    }
})

set.addAchievement({
    title: "Mayor of Chicksville",
    description: "Knockout 40 chicks or more in the City arena in pro mode",
    points: 10,
    conditions: {
        core: $(
            gameover('Trigger'),
        ),
        alt1: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Pro)),
            measuredIf(battlefield(arenas.Town)),
            win(teamcolor.yellow, 1),
            measured(killgoal(killaddress.yellow, 40)),
        ),
        alt2: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Pro)),
            measuredIf(battlefield(arenas.Town)),
            win(teamcolor.black, 1),
            measured(killgoal(killaddress.black, 40)),
        )
    }
})

set.addAchievement({
    title: "Captain Chick Sparrow",
    description: "Knockout 40 chicks or more in the Ship arena in pro mode",
    points: 10,
    conditions: {
        core: $(
            gameover('Trigger'),
        ),
        alt1: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Pro)),
            measuredIf(battlefield(arenas.Ship)),
            win(teamcolor.yellow, 1),
            measured(killgoal(killaddress.yellow, 40)),
        ),
        alt2: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Pro)),
            measuredIf(battlefield(arenas.Ship)),
            win(teamcolor.black, 1),
            measured(killgoal(killaddress.black, 40)),
        )
    }
})

set.addAchievement({
    title: "The Mystery Chick Gang",
    description: "Knockout 40 chicks or more in the Haunted Woods arena in pro mode",
    points: 10,
    conditions: {
        core: $(
            gameover('Trigger'),
        ),
        alt1: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Pro)),
            measuredIf(battlefield(arenas.Woods)),
            win(teamcolor.yellow, 1),
            measured(killgoal(killaddress.yellow, 40)),
        ),
        alt2: $(
            measuredIf(gameon()),
            measuredIf(gamemode(modes.Pro)),
            measuredIf(battlefield(arenas.Woods)),
            win(teamcolor.black, 1),
            measured(killgoal(killaddress.black, 40)),
        )
    }
})

set.addAchievement({
    title: "Cuddly Chicks",
    description: "Win 10 rounds and unlock the Teddy team",
    points: 1,
    conditions: $(
        gameon(),
        unlock(teams.Teddy),
    ),
})

set.addAchievement({
    title: "Mushy Chicks",
    description: "Win 20 rounds and unlock the Mushheads team",
    points: 3,
    conditions: $(
        gameon(),
        unlock(teams.Mushheads),
    ),
})

set.addAchievement({
    title: "Colorful Chicks",
    description: "Win 30 rounds and unlock the Rainbow team",
    points: 5,
    conditions: $(
        gameon(),
        unlock(teams.Rainbow),
    ),
})

set.addAchievement({
    title: "Oriental Spiced Chicks",
    description: "Knockout 10 chicks in pro mode and unlock the Orients team",
    points: 5,
    conditions: $(
        gameon(),
        unlock(teams.Orients),
    ),
})

set.addAchievement({
    title: "Brooding Chicks",
    description: "Knockout 30 chicks in pro mode and unlock the Sitting Chick team",
    points: 10,
    conditions: $(
        gameon(),
        unlock(teams.SittingChick),
    ),
})

set.addAchievement({
    title: "God of Chicks",
    description: "Knockout 50 chicks in pro mode and unlock the Zulu Chicks team",
    points: 25,
    conditions: $(
        gameon(),
        unlock(teams.ZuluChicks),
    ),
})

set.addAchievement({
    title: "Choc Chicks",
    description: "Perform an attack with 100% accuracy and unlock the Chocdrops team",
    points: 2,
    conditions: $(
        gameon(),
        unlock(teams.Chocdrops),
    ),
})

set.addAchievement({
    title: "Natural Chicks",
    description: "Knockout 3 chicks in one attack and unlock the Flower Power team",
    points: 2,
    conditions: $(
        gameon(),
        unlock(teams.FlowerPower),
    ),
})

set.addAchievement({
    title: "Spicy Chicks",
    description: "Use all attacks in one fight with red upgrades and unlock the Little Devils team",
    points: 2,
    conditions: $(
        gameon(),
        unlock(teams.LittleDevils),
    ),
})

set.addAchievement({
    title: "Protector of Chicks",
    description: "Win a round in duel mode on hard difficulty without letting any of your chicks get knocked out",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            difficulty(difficulties.hard),
            roundOver('Trigger'),
        ),
        alt1: $(
            ['', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['', 'Mem', '32bitBE', killaddress.black, '=', 'Value', '', 0],
        ),
        alt2: $(
            ['', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['', 'Mem', '32bitBE', killaddress.yellow, '=', 'Value', '', 0],
        )
    }
})

set.addAchievement({
    title: "Crazy Chick",
    description: "In duel mode, in a first to 5 game on hard difficulty, win all 5 rounds",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            difficulty(difficulties.hard),
            ['', 'Mem', '32bitBE', 0x002c910c, '=', 'Value', '', wins[5]],
            gameover('Trigger'),
        ),
        alt1: $(
            ['', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['Trigger', 'Mem', '32bitBE', 0x002c91f8, '=', 'Value', '', 5],
            ['', 'Mem', '32bitBE', 0x002c91fc, '=', 'Value', '', 0],
        ),
        alt2: $(
            ['', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['Trigger', 'Mem', '32bitBE', 0x002c91fc, '=', 'Value', '', 5],
            ['', 'Mem', '32bitBE', 0x002c91f8, '=', 'Value', '', 0],
        )
    }
})

set.addAchievement({
    title: "Here, Hold This",
    description: "Win a round in duel mode using only bombs to attack",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            roundOver('Trigger'),
            startHit(),
            ['AndNext', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be63c, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be63c, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be640, '!=', 'Value', '', 0x1],
            ['AndNext', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be8a8, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be8a8, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be8ac, '!=', 'Value', '', 0x1],
        ),
    }
})

set.addAchievement({
    title: "Whose Idea Was This?",
    description: "Win a round in duel mode using only weights to attack",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            roundOver('Trigger'),
            startHit(),
            ['AndNext', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be63c, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be63c, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be640, '!=', 'Value', '', 0x0],
            ['AndNext', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be8a8, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be8a8, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be8ac, '!=', 'Value', '', 0x0],
        ),
    }
})

set.addAchievement({
    title: "I'm on my Way to Eat Your Chicks",
    description: "Win a round in duel mode using only plants to attack",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            roundOver('Trigger'),
            startHit(),
            ['AndNext', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be63c, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be63c, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be640, '!=', 'Value', '', 0x3],
            ['AndNext', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be8a8, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be8a8, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be8ac, '!=', 'Value', '', 0x3],
        ),
    }
})

set.addAchievement({
    title: "Kentucky Fried Chicks",
    description: "Win a round in duel mode using only lightning to attack",
    points: 10,
    conditions: {
        core: $(
            gameon(),
            gamemode(modes.Duel),
            roundOver('Trigger'),
            startHit(),
            ['AndNext', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be63c, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be63c, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be640, '!=', 'Value', '', 0x2],
            ['AndNext', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Delta', '32bitBE', 0x003be8a8, '=', 'Value', '', 0xffffffff],
            ['AndNext', 'Mem', '32bitBE', 0x003be8a8, '=', 'Value', '', 0x07],
            ['ResetIf', 'Mem', '32bitBE', 0x003be8ac, '!=', 'Value', '', 0x2],
        ),
    }
})

set.addAchievement({
    title: "Corncobman!",
    description: "In one appearance of Corncobman, get 10 pieces of corn on your side",
    points: 5,
    conditions: {
        core: $(
            ['ResetIf', 'Mem', '32bitBE', 0x003c64ec, '=', 'Value', '', 0xffffffff],
        ),
        alt1: $(
            measuredIf(gameon()),
            ['MeasuredIf', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '!=', 'Value', '', 0x3],
            ['Measured', 'Delta', '32bitBE', 0x003bd564, '<', 'Mem', '32bitBE', 0x003bd564, 10],
        ),
        alt2: $(
            measuredIf(gameon()),
            ['MeasuredIf', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            ['MeasuredIf', 'Mem', '32bitBE', 0x2c90f8, '!=', 'Value', '', 0x3],
            ['Measured', 'Delta', '32bitBE', 0x003bd5ec, '<', 'Mem', '32bitBE', 0x003bd564, 10],
        )
    }
})

set.addAchievement({
    title: "Pinata!",
    description: "Hit and activate the Pinata on your side every time it falls down in one round",
    points: 5,
    conditions: {
        core: $(
            gameon(),
            startHit(),
            ['', 'Mem', '32bitBE', 0x2c90f8, '!=', 'Value', '', 0x3],
            ['AndNext', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
            pinata(),
            ['AndNext', 'Delta', '32bitBE', 0x298, '=', 'Value', '', 0x1],
            pinata(),
            ['ResetIf', 'Mem', '32bitBE', 0x298, '=', 'Value', '', 0x0],
            ['AndNext', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
            pinata(),
            ['AndNext', 'Delta', '32bitBE', 0x298, '=', 'Value', '', 0xffffffff],
            pinata(),
            ['ResetIf', 'Mem', '32bitBE', 0x298, '=', 'Value', '', 0x0],
            roundOver('Trigger'),
        ),
    }
})

set.addLeaderboard({
    title: "Time Mode 3 Minutes High Score",
    description: "Get the highest score in a 3 minutes time mode match in any arena",
    type: 'SCORE',
    lowerIsBetter: false,
    conditions: {
        start: $(
            gameon(),
            noPVP(),
            gamemode(modes.Time),
            timemode(time['3min']),
            gameover(),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x002c8b58, '=', 'Value', '', 0],
        ),
        submit: $(
            gameon(),
            noPVP(),
            gamemode(modes.Time),
            timemode(time['3min']),
            gameover(),
        ),
        value: {
            core: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b6c]
            ),
            alt1: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b70]
            )
        }
    }
})

set.addLeaderboard({
    title: "Time Mode 5 Minutes High Score",
    description: "Get the highest score in a 5 minutes time mode match in any arena",
    type: 'SCORE',
    lowerIsBetter: false,
    conditions: {
        start: $(
            gameon(),
            noPVP(),
            gamemode(modes.Time),
            timemode(time['5min']),
            gameover(),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x002c8b58, '=', 'Value', '', 0],
        ),
        submit: $(
            gameon(),
            noPVP(),
            gamemode(modes.Time),
            timemode(time['5min']),
            gameover(),
        ),
        value: {
            core: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b6c]
            ),
            alt1: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b70]
            )
        }
    }
})

set.addLeaderboard({
    title: "Time Mode 10 Minutes High Score",
    description: "Get the highest score in a 10 minutes time mode match in any arena",
    type: 'SCORE',
    lowerIsBetter: false,
    conditions: {
        start: $(
            gameon(),
            noPVP(),
            gamemode(modes.Time),
            timemode(time['10min']),
            gameover(),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x002c8b58, '=', 'Value', '', 0],
        ),
        submit: $(
            gameon(),
            noPVP(),
            gamemode(modes.Time),
            timemode(time['10min']),
            gameover(),
        ),
        value: {
            core: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b6c]
            ),
            alt1: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b70]
            )
        }
    }
})

set.addLeaderboard({
    title: "Pro Mode City High Score",
    description: "Get the highest score in the pro mode City arena",
    type: 'SCORE',
    lowerIsBetter: false,
    conditions: {
        start: $(
            gameon(),
            noPVP(),
            gamemode(modes.Pro),
            battlefield(arenas.Town),
            gameover(),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x002c8b58, '=', 'Value', '', 0],
        ),
        submit: $(
            gameon(),
            noPVP(),
            gamemode(modes.Pro),
            battlefield(arenas.Town),
            gameover(),
        ),
        value: {
            core: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b6c]
            ),
            alt1: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b70]
            )
        }
    }
})

set.addLeaderboard({
    title: "Pro Mode Ship High Score",
    description: "Get the highest score in the pro mode Ship arena",
    type: 'SCORE',
    lowerIsBetter: false,
    conditions: {
        start: $(
            gameon(),
            noPVP(),
            gamemode(modes.Pro),
            battlefield(arenas.Ship),
            gameover(),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x002c8b58, '=', 'Value', '', 0],
        ),
        submit: $(
            gameon(),
            noPVP(),
            gamemode(modes.Pro),
            battlefield(arenas.Ship),
            gameover(),
        ),
        value: {
            core: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b6c]
            ),
            alt1: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b70]
            )
        }
    }
})

set.addLeaderboard({
    title: "Pro Mode Haunted Woods High Score",
    description: "Get the highest score in the pro mode Haunted Woods arena",
    type: 'SCORE',
    lowerIsBetter: false,
    conditions: {
        start: $(
            gameon(),
            noPVP(),
            gamemode(modes.Pro),
            battlefield(arenas.Woods),
            gameover(),
        ),
        cancel: $(
            ['', 'Mem', '8bit', 0x002c8b58, '=', 'Value', '', 0],
        ),
        submit: $(
            gameon(),
            noPVP(),
            gamemode(modes.Pro),
            battlefield(arenas.Woods),
            gameover(),
        ),
        value: {
            core: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9180, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b6c]
            ),
            alt1: $(
                ['MeasuredIf', 'Mem', '32bitBE', 0x002c9178, '=', 'Value', '', 0xffffffff],
                ['Measured', 'Mem', '32bitBE', 0x003a3b70]
            )
        }
    }
})

export default set
