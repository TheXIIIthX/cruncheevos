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

const multiDungeons = {
    "Fire Dragon Valo": 0x2a,
    "Ice Dragon Inosen": 0x52,
    "Thunder Beast Justi": 0x7a,
    "Godtree Feisu": 0xa2,
    "Hyumitto the Baby Dragon": 0xca,
    "Demon Dorudo": 0xf2,
    "Black Dragon Libera": 0x011a,
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

const startingHeroes = {
    "Yarida": 0x9644,
    "Taterazay": 0x96c8,
    "Yumiyacha": 0x974c,
}

const unlockCharacters = {
    "Kibadda": 0x97d0,
    "Piekron": 0x9b6c,
    "Wooyari": 0x9bf0,
    "Pyokorider": 0x9c74,
    "Cannassault": 0x9cf8,
    "Charibasa": 0x9d7c,
    "Destrobo": 0x99e0,
    "Guardira": 0x9e00,
    "Tondenga": 0x9e84,
    "Myamsar": 0x9f08,
    "Bowmunk": 0x9f8c,
    "Grenburr": 0xa010,
    "Alosson": 0xa094,
    "Wondabarappa": 0xa118,
    "Jamsch": 0xa19c,
    "Oohoroc": 0xa220,
    "Pingrek": 0xa2a4,
    "Cannogabang": 0xa328,
    "Ton Kibadda": 0xadf0,
    "Ton Piekron": 0xb18c,
    "Ton Wooyari": 0xb210,
    "Ton Pyokorider": 0xb294,
    "Ton Cannassault": 0xb318,
    "Ton Charibasa": 0xb39c,
    "Chin Destrobo": 0xc620,
    "Chin Guardira": 0xca40,
    "Chin Tondenga": 0xcac4,
    "Chin Myamsar": 0xcb48,
    "Chin Bowmunk": 0xcbcc,
    "Chin Grenburr": 0xcc50,
    "Kan Alosson": 0xe2f4,
    "Kan Wondabarappa": 0xe378,
    "Kan Jamsch": 0xe3fc,
    "Kan Oohoroc": 0xe480,
    "Kan Pingrek": 0xe504,
    "Kan Cannogabang": 0xe588,
}

const uberheroClasses = {
    "Yarida": 0x9644,
    "Taterazay": 0x96c8,
    "Yumiyacha": 0x974c,
    "Kibadda": 0x97d0,
    "Piekron": 0x9b6c,
    "Wooyari": 0x9bf0,
    "Pyokorider": 0x9c74,
    "Cannassault": 0x9cf8,
    "Charibasa": 0x9d7c,
    "Destrobo": 0x99e0,
    "Guardira": 0x9e00,
    "Tondenga": 0x9e84,
    "Myamsar": 0x9f08,
    "Bowmunk": 0x9f8c,
    "Grenburr": 0xa010,
    "Alosson": 0xa094,
    "Wondabarappa": 0xa118,
    "Jamsch": 0xa19c,
    "Oohoroc": 0xa220,
    "Pingrek": 0xa2a4,
    "Cannogabang": 0xa328,
}

const tonClasses = {
    "Yarida": 0xac64,
    "Kibadda": 0xadf0,
    "Piekron": 0xb18c,
    "Wooyari": 0xb210,
    "Pyokorider": 0xb294,
    "Cannassault": 0xb318,
    "Charibasa": 0xb39c,
}

const chinClasses = {
    "Taterazay": 0xc308,
    "Destrobo": 0xc620,
    "Guardira": 0xca40,
    "Tondenga": 0xcac4,
    "Myamsar": 0xcb48,
    "Bowmunk": 0xcbcc,
    "Grenburr": 0xcc50,
}

const kanClasses = {
    "Yumiyacha": 0xd9a8,
    "Alosson": 0xe2f4,
    "Wondabarappa": 0xe378,
    "Jamsch": 0xe3fc,
    "Oohoroc": 0xe480,
    "Pingrek": 0xe504,
    "Cannogabang": 0xe588,
}

const summons = {
    "Yarigami": [0x3f79f, 0x57e3f],
    "Tategami": [0x445bf, 0x5cc5f],
    "Soragami": [0x493df, 0x61a7f],
    "Yamagami": [0x4e1ff, 0x6689f],
}

function stagePointer() {
    return ($(['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x01ffffff]))
}

function characterPointer() {
    let pointer = {}
    pointer = $(
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x01ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x01ffffff]
    )
    return (pointer)
}

function loadProtect() {
    return($(['', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1eec]))
}

function equippedSummon(ID) {
    let logic = {}
    logic = $(
        characterPointer(),
        ['OrNext', 'Mem', '32bit', 0x9518, '=', 'Value', '', ID[0]], 
        characterPointer(), 
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

function trifectaUnlock() {
    let logic = {};
    logic['core'] = loadProtect();
    let i = 1;
    for(const [character, offset] of Object.entries(startingHeroes)) {
        logic['alt' + i] = $(
            characterPointer(),
            ['', 'Delta', '32bit', offset, '<', 'Value', '', 15],
            characterPointer(),
            ['', 'Mem', '32bit', offset, '>=', 'Value', '', 15],
        )
        i++
    }
    return(logic)
}

function levelCheck(hero, level) {
    let logic = {}
    logic['core'] = loadProtect();
    let i = 1;
    for(const [character, offset] of Object.entries(hero)) {
        logic['alt' + i] = $(
            characterPointer(),
            ['', 'Delta', '32bit', offset, '<', 'Value', '', level],
            characterPointer(),
            ['', 'Mem', '32bit', offset, '>=', 'Value', '', level],
        )
        i++
    }
    return(logic)
}

//Create prologue achievement
set.addAchievement({
    title: "The Coming of Almighty",
    points: 1,
    type: 'progression',
    conditions: $(
        stagePointer(),
        ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', 0x00], //Check if level is correct
        stagePointer(),
        ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 7], 
        stagePointer(),
        ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 7], //Check if flag gets hit
        stagePointer(),
        ['', 'Delta', '32bit', 0x22f8, '=', 'Value', '', 0],
        stagePointer(),
        ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 7], //Check if level ends
        ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0b],
    )
})

//Create dungeon finish achievements
for (const [stage, ID] of Object.entries(dungeons)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: clearLevel(ID, "Dungeon", true, true)
    })
}

//Create multi dungeon singleplayer challenge achievements
for (const [stage, ID] of Object.entries(multiDungeons)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: clearLevel(ID, "Dungeon", true, false)
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

//Create Trifecta Uberhero unlock achievement
set.addAchievement({
    title: "Uberhero Trifecta",
    points: 0,
    conditions: trifectaUnlock(),
})

//Create character unlock achievements
for(const [title, offset] of Object.entries(unlockCharacters)) {
    set.addAchievement({
        title: "Unlock " + title,
        points: 0,
        conditions: $(
        characterPointer(),
        ['', 'Delta', '32bit', offset, '=', 'Value', '', 1],
        characterPointer(),
        ['', 'Mem', '32bit', offset, '!=', 'Value', '', 1],
        loadProtect(),
        )
    })
}

//Create leveling achievements
const heroes = {"Uberhero": uberheroClasses, "Ton": tonClasses, "Chin": chinClasses, "Kan": kanClasses}
let minLevel = [15, 25, 32]
console.log(minLevel)
for (const [name, classet] of Object.entries(heroes)) {
    if (name != "Uberhero") {
        minLevel = [15, 25]
    }
    for (var level of minLevel) {
        console.log(level)
        set.addAchievement({
            title: "Levelgrind" + name + " " + level,
            description: "Reach level " + level + " with " + name,
            points: 0,
            conditions: levelCheck(classet, level),
        })
    }
}

//Create Perfect March Achievements
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

//Create summon leaderboards
for(const [summon, ID] of Object.entries(summons)) {
    set.addLeaderboard({
        title: summon + "'s Sutra High Score",
        description: "Get the highest score using " + summon + "'s or Super " + summon + "'s Sutra",
        lowerIsBetter: false,
        type: 'SCORE',
        conditions: {
            start: 
                inGameplay($(equippedSummon(ID), command(0x09))),
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
