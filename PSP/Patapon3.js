import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 3507, title: 'Patapon 3' })

const dungeons = {
    "Archfiend of Valour": 0x20,
    "Archfiend of Purity": 0x48,
    "Archfiend of Justice": 0x70,
    "Archfiend of Earnestness": 0x98,
    "Archfiend of Restraint": 0xc0,
    "Archfiend of Adamance": 0xe8,
    "The Secret of the Cave of Valour": 0x21,
    "Bound for Higher Heights": 0x49,
    "Mechanical Monstrosities": 0x71,
    "Mansion Inner Garden": 0x99,
    "Volcano King of the Labyrinth": 0xc1,
    "What Lurks Beyond the Guillotine": 0xe9,
}

const levels = {
    "The Legendary Gigantus": 0xf,
    "Manboth, Lord of the Snow Field": 0x36,
    "Ultimate Dragon Kacchindonga": 0x38,
    "Centura of the Mist": 0x60,
    "Terribird Mochicchichi": 0x88,
    "Zaknel, King of the Desert": 0xb0,
    "Legendary Fiend Goruru": 0xd8,
    "The Great Gigante King": 0x100,
}

const dlc = {
    "Onslaught of the Cyclopses": 0x24,
    "The Gigantic Teranteth": 0x2e,
    "Blizzard Tower Ice Legion": 0x33,
    "Manboroth, the Ancienct Arctic King": 0x38,
    "The Craggy Monsters": 0x42,
    "The Blood-Sucking Darantula": 0x3d,
    "The Forest Wanderers": 0x4c,
    "Desert Deth Squad": 0x56,
    "Dokaknel, Ruler of the Desert": 0x51,
    "Fenicchi, the Ageless Phoenix": 0x6f,
    "Gheek Dongora, Destruction Incarnate": 0x96,
}

const singlePlayerDLC = {
    "The Witch and the Thunder Beast": 0x29,
    "Revenge of the Thunder God": 0x5b,
    "Depths of Despair": 0x6a,
}

const summons = {
    "Yarigami": [0x3f79f, 0x57e3f],
    "Tategami": [0x445bf, 0x5cc5f],
    "Soragami": [0x493df, 0x61a7f],
    "Yamagami": [0x4e1ff, 0x6689f],
}

function stagePointer() {
    return ($(['AddAddress', 'Mem', '24bit', 0xab9020, '&', 'Value', '', 0x1fffffff]))
}

function characterPointerInLevel() {
    return ($(['AddAddress', 'Mem', '24bit', 0xd979d0, '&', 'Value', '', 0x1fffffff]))
}

function equipedSummon(ID) {
    let logic = {}
    logic = $(
        characterPointerInLevel(),
        ['OrNext', 'Mem', '32bit', 0x9518, '=', 'Value', '', ID[0]], 
        characterPointerInLevel(), 
        ['', 'Mem', '32bit', 0x9518, '=', 'Value', '', ID[1]], 
    )
    return(logic)
}

function summonScore() {
    let logic = {}
    logic = ($(
        ['AddAddress', 'Mem', '32bit', 0x1fff508, '&', 'Value', '', 0x1fffffff],
        ['Measured', 'Mem', '32bit', 0xf80052d8],
    ))
    return (logic)
}

function inSingleplayerLevel() {
    return ($(['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0a]))
}

function inMultiplayerLevel() {
    return ($(['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e05]))
}

function inSinglePlayerDungeon() {
    return ($(['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e10]))
}

function inMultiplayerDungeon() {
    return ($(['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0b]))
}

function inSingleVersus() {
    return ($(['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e09]))
}

function inMultiVersus() {
    return ($(['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e04]))
}

function inGameplay(core) {
    let modes = [inSingleplayerLevel(), inMultiplayerLevel(), inSinglePlayerDungeon(), inMultiplayerDungeon(), inSingleVersus(), inMultiVersus()];
    let i = 1;
    let logic = {};
    logic['core'] = core
    for (const mode of modes) {
        logic['alt' + i] = mode;
        i++;
    }
    return(logic)
}

function notInGameplay() {
    let logic = {}
    logic = $(
        ['', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e0a],
        ['', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e05],
        ['', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e10],
        ['', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e0b],
        ['', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e09],
        ['', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e04],
    )
    return(logic)
}

function infectionCheck() {
    return ($(['', 'Mem', '32bit', 0xd9851c, '=', 'Value', '', 0x00]))
}

function command(ID) {
/**
    ID options
    0x00 - Pata Pata Pata Pon (Onward)
    0x01 - Chaka Chaka Pata Pon (Defend)
    0x02 - Pon Pon Pata Pon (Attack)
    0x03 - Pon Pon Chaka Chaka (Charge)
    0x04 - Pon Pata Pon Pata (Retreat)
    0x05 - Don Don Chaka Chaka (Jump)
    0x06 - Pata Pon Don Chaka (Party)
    0x07 - Chaka Pata Chaka Pata (Step Back) (Multiplayer only)
    0x08 - Pata Pon Pata Pon (Pause) (Singleplayer only)
    0x09 - Don Dodon Dodon (Summon)
    0xffffffff - Idle
*/

    let logic = {}
    logic = $(
        stagePointer(),
        ['', 'Delta', '32bit', 0x2338, '!=', 'Value', '', ID],
        stagePointer(),
        ['', 'Mem', '32bit', 0x2338, '=', 'Value', '', ID]
    )
    return(logic)
}

//Logic to clear a standard level (non VS mode)
function clearLevel(levelID, levelType, singleAllowed, multiAllowed, dlc = false) {
    let levelPointer = 0x2310;
    if (dlc == true)
        levelPointer = 0x236c;
    let logic = {}
    logic['core'] = $(
        ['AddAddress', 'Mem', '24bit', 0xab9020],
        ['', 'Mem', '32bit', levelPointer, '=', 'Value', '', levelID], //Check if level is correct
        ['AddAddress', 'Mem', '24bit', 0xab9020],
        ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 2], 
        ['AddAddress', 'Mem', '24bit', 0xab9020],
        ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2], //Check if flag gets hit
        ['AddAddress', 'Mem', '24bit', 0xab9020],
        ['', 'Delta', '32bit', 0x22f8, '=', 'Value', '', 0],
        ['AddAddress', 'Mem', '24bit', 0xab9020],
        ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 7], //Check if level ends
        //infectionCheck(),
    )
    let i = 1
    if (levelType == 'Dungeon' && singleAllowed == true) {
        logic['alt' + i] = inSinglePlayerDungeon()
        i++
    }
    else if (levelType == 'Level' && singleAllowed == true) {
        logic['alt' + i] = inSingleplayerLevel()
        i++
    }
    if (levelType == 'Dungeon' && multiAllowed == true) {
        logic['alt' + i] = inMultiplayerDungeon()
        i++
    }
    else if(levelType == 'Level' && multiAllowed == true) {
        logic['alt' + i] = inMultiplayerLevel()
        i++
    }
    return(logic)
}

function surrender() {
    let logic = {}
    logic = $(
    stagePointer(),
    ['', 'Delta', '32bit', 0x22f8, '!=', 'Value', '', 0x05],
    stagePointer(),
    ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 0x05],
    )
    return(logic);
}

function defeat() {
    let logic = {}
    logic = $(
    stagePointer(),
    ['', 'Delta', '32bit', 0x22f8, '!=', 'Value', '', 0x08],
    stagePointer(),
    ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 0x08],
    )
    return(logic);
}

function distanceCovered(distance, operator = '>=', delta = false) {
    let logic = {}
    let check = 'Mem'
    if (delta == true) {
        check = 'Delta'
    }
    logic = $(
    stagePointer(),
    ['AddSource', check, 'Float', 0x2e00, '/', 'Value', '', 15],
    ['', 'Value', '', 0, operator, 'Value', '', distance]
    )
    return(logic)
}

function distanceCheck(distance) {
    let logic = {}
    logic = $(
        distanceCovered(distance, '<', true),
        distanceCovered(distance, '>=', false),
    )
    return(logic)
}

/*
for (level, ID in levels) {
    set.addAchievement({
        title: level,
        conditions: $(clearLevel(ID)),
    })
}
*/


//Create dungeon finish achievements
for (const [stage, ID] of Object.entries(dungeons)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: clearLevel(ID, "Dungeon", true, true)
    })
}

//Create level finish achievements
for (const [stage, ID] of Object.entries(levels)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: clearLevel(ID, "Level", true, true)
    })
}

//Create DLC level achievements
for (const [stage, ID] of Object.entries(dlc)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: clearLevel(ID, "Level", true, true, true)
    })
}

//Create single player only dlc achievements
for (const [stage, ID] of Object.entries(singlePlayerDLC)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: clearLevel(ID, "Level", true, false, true)
    })
}

let marchingcheevos = {"Keeping the Rhythm": 100, "Continueing the March": 500, "The Perfect March": 1000}

for(const [title, dist] of Object.entries(marchingcheevos)) {
    set.addAchievement({
        title: title, 
        points: 0,
        conditions: $(
            stagePointer(),
            ['', 'Mem', '32bit', 0x236c, '=', 'Value', '', 0x28],
            inSingleplayerLevel(),
            distanceCheck(dist),
        )
    })
}

for(const [summon, ID] of Object.entries(summons)) {
    set.addLeaderboard({
        title: summon + "'s Sutra High Score",
        description: "Get the highest score using " + summon + "'s or Super" + summon + "'s Sutra",
        lowerIsBetter: false,
        type: 'SCORE',
        conditions: {
            start: 
                inGameplay($(equipedSummon(ID), command(0x09))),
            cancel: {
                core: $(['', 'Value', '', 1, '=', 'Value', '', 1]),
                alt1: surrender(),
                alt2: defeat(),
            },
            submit: $(stagePointer(),
            ['', 'Delta', '32bit', 0x2338, '=', 'Value', '', 0x09],
            stagePointer(),
            ['', 'Mem', '32bit', 0x2338, '!=', 'Value', '', 0x09],),
            value: summonScore()
        }
    })
}

export default set
