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

const arena = {
    "Will the Angry Wolf See a Full Moon?": 0x17,
    "Anything for a Rare Item": 0x8f,
}

const race = {
    "Ephemeral Dreams Dashed": 0x3f,
    "A Horse's Pride": 0xb7,
}

const range = {
    "Total Ultrasonic Air Defence!": 0x67,
    "What He Fights For": 0xdf,
}

const endArena = {
    "The Galland, if Merciless, Knight": 0x18,
    "Victory! Treasures for All!": 0x90,
    "Heroes Never Rest": 0x107,
}

const endRace = {
    "The Great Race for Pride": 0x40,
    "Erupting Shockwaves of Destruction": 0xb8,
}

const endRange = {
    "Two Versions of Justice": 0x68,
    "Slogging on the Job": 0xe0,
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

const singleplayerSummons = {
    "Yarigami": [0x3f79f, 0x57e3f],
    "Tategami": [0x445bf, 0x5cc5f],
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

function gameState(state) {
    return ($(['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', state]))
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

function summonEnd() {
    let logic = {}
    logic = $(
        stagePointer(),
        ['', 'Delta', '32bit', 0x2338, '=', 'Value', '', 0x09],
        stagePointer(),
        ['', 'Mem', '32bit', 0x2338, '!=', 'Value', '', 0x09]
    )
    return(logic)
}

//Logic to clear a standard level (non VS mode)
function clearLevel(levelID, levelType, singleAllowed, multiAllowed, dlc = false) {
    let levelPointer = 0x2310;
    let levelEnd = 7;
    if (levelType == "Arena" || levelType == "Race")
        levelEnd = 2;
    if (dlc == true)
        levelPointer = 0x236c;
    let logic = {}
    logic['core'] = $(
        ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
        ['', 'Mem', '32bit', levelPointer, '=', 'Value', '', levelID], //Check if level is correct
        ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
        ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 2], 
        ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
        ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2], //Check if flag gets hit
        ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
        ['', 'Delta', '32bit', 0x22f8, '=', 'Value', '', 0],
        ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
        ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', levelEnd], //Check if level ends
    )
    let i = 1
    if (levelType == 'Dungeon' && singleAllowed == true) {
        logic['alt' + i] = inSinglePlayerDungeon()
        i++
    }
    else if ((levelType == 'Level' || levelType == 'Race') && singleAllowed == true) {
        logic['alt' + i] = inSingleplayerLevel()
        i++
    }
    else if(levelType == 'Arena' && singleAllowed == true) {
        logic['alt' + i] = inSingleVersus()
        i++
    }
    if (levelType == 'Dungeon' && multiAllowed == true) {
        logic['alt' + i] = inMultiplayerDungeon()
        i++
    }
    else if((levelType == 'Level' || levelType == 'Race') && multiAllowed == true) {
        logic['alt' + i] = inMultiplayerLevel()
        i++
    }
    else if(levelType == 'Arena' && multiAllowed == true) {
        logic['alt' + i] = inMultiVersus()
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

//Create arena achievements
//No level cap
for (const [stage, ID] of Object.entries(endArena)) {
    set.addAchievement({
        title: stage,
        points: 0,
        description: "Finish " + stage,
        conditions: {
            core: $(
                ['OrNext', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e09],
                ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e04],
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', ID], //Check if level is correct
            ),
            alt1: $(
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 2], 
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2], //Check if flag gets hit
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Delta', '32bit', 0x22f8, '=', 'Value', '', 0],
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 2], //Check if level ends
            ),
            alt2: $(
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 4], 
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 4], //Check if flag gets hit
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 0],
            ),
        }
    })
}

//Level cap

//Capture the flag

//Create racing achievements
//No level cap
for(const [stage, ID] of Object.entries(endRace)) {
    set.addAchievement({
        title: stage,
        points: 0,
        description: "Finish " + stage,
        conditions: clearLevel(ID, "Race", true, true)
    })
}

//Level cap

//Timed challenge

//Create missile range achievements
//No level cap
for (const [stage, ID] of Object.entries(endRange)) {
    set.addAchievement({
        title: stage,
        points: 0,
        description: "Finish " + stage,
        conditions: {
            core: $(
                ['OrNext', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0a],
                ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e05],
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x2310, '=', 'Value', '', ID], //Check if level is correct
            ),
            alt1: $(
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 2], 
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 2], //Check if flag gets hit
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Delta', '32bit', 0x22f8, '=', 'Value', '', 0],
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 2], //Check if level ends
            ),
            alt2: $(
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Delta', '32bit', 0x22f4, '!=', 'Value', '', 4], 
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f4, '=', 'Value', '', 4], //Check if flag gets hit
                ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1fffffff],
                ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 0],
            ),
        }
    })
}

//Level cap

//No base damage

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
for (const [name, classet] of Object.entries(heroes)) {
    if (name != "Uberhero") {
        minLevel = [15, 25]
    }
    for (var level of minLevel) {
        set.addAchievement({
            title: "Levelgrind" + name + " " + level,
            description: "Reach level " + level + " with " + name,
            points: 0,
            conditions: levelCheck(classet, level),
        })
    }
}

//Create class skill achievements
//Max 1 level offsets
let class1offsets = {
    "Thunderific": 0xa270,
    "Hellfire": 0xa274,
    "Nova Nova": 0xa278,
    "Venomist": 0xa27c,
    "KanThunderific": 0xe4d0,
    "KanHellfire": 0xe4d4,
    "KanNovaNova": 0xe4d8,
    "KanVenomist": 0xe4dc,
}

//Max 4 levels offsets
let class4offsets = {
    "Yarida": 0x9688,
    "Kibadda": 0x9814,
    "Destrobo": 0x9a24,
    "Piekron": 0x9bb0,
    "Pyokorider": 0x9cb8,
    "Cannassault": 0x9d3c,
    "Charibasa": 0x9dc0,
    "Guardira": 0x9e44,
    "Tondenga": 0x9ec8,
    "Myamsar": 0x9f4c,
    "Bowmunk": 0x9fd0,
    "Alosson": 0xa0d8,
    "Wondabarappa": 0xa15c,
    "Jamsch": 0xa1e0,
    "TonYarida": 0xaca8,
    "TonKibadda": 0xae34,
    "TonPiekron": 0xb1d0,
    "TonPyokorider": 0xb2d8,
    "TonCannassault": 0xb35c,
    "TonCharibasa": 0xb3e0,
    "ChinDestrobo": 0xc664,
    "ChinGuardira": 0xca84,
    "ChinTondenga": 0xcb08,
    "ChinMyamsar": 0xcb8c,
    "ChinBowmunk": 0xcc10,
    "KanAlosson": 0xe338,
    "KanWondabarappa": 0xe3bc,
    "KanJamsch": 0xe440,
}

//Max 5 levels offsets
let class5offsets = {
    "Taterazay": 0x970c,
    "Yumiyacha": 0x9790,
    "Wooyari": 0x9c34,
    "Grenburr": 0xa054,
    "Singe": 0xa264,
    "Volcano": 0xa268,
    "FlashCrackBoom": 0xa26c,
    "Pingrek": 0xa2e8,
    "Cannogabang": 0xa36c,
    "TonWooyari": 0xb254,
    "ChinTaterazay": 0xc34c,
    "ChinGrenburr": 0xcc94,
    "KanYumiyacha": 0xd9f0,
    "KanSinge": 0xe4c4,
    "KanVolcano": 0xe4c8,
    "KanFlashCrackBoom": 0xe4cc,
    "KanPingrek": 0xe548,
    "KanCannogabang": 0xe5cc,
}

function classSkillCheck(offset, treshold = 1.0) {
    return($(
        characterPointer(),
        ['', 'Delta', 'Float', offset, '<', 'Float', '', treshold],
        characterPointer(),
        ['', 'Mem', 'Float', offset, '>=', 'Float', '', treshold],
    ))
}

function classSkillBuilder(oneskill = false) {
    let logic = {}
    logic['core'] = loadProtect();
    let i = 1
    let level1 = 1.0
    let level4 = 4.0
    let level5 = 5.0
    if (oneskill == true) {
        level1 = 1.0
        level4 = 1.0
        level5 = 1.0
    }
    for (const [character, offset] of Object.entries(class4offsets)) {
        logic['alt' + i] = classSkillCheck(offset, level4)
        i++
    }
    for (const [character, offset] of Object.entries(class5offsets)) {
        logic['alt' + i] = classSkillCheck(offset, level5)
        i++
    }
    if (oneskill == true) {
        for (const [character, offset] of Object.entries(class1offsets)) {
            logic['alt' + i] = classSkillCheck(offset, level1)
            i++
        }
    }
    return(logic)
}

//Master 1 class skill
set.addAchievement({
    title: "Skilled warrior",
    points: 2,
    description: "Master a class skill",
    conditions: classSkillBuilder(true)
})

//Master all class skills of class
set.addAchievement({
    title: "Master warrior",
    points: 10,
    description: "Master all class skills for a single character class",
    conditions: classSkillBuilder()
})

//Create blacksmith achievements
let blacksmithLevels = [1, 2, 3]
for (var blacksmithLevel of blacksmithLevels) {
    set.addAchievement({
        title: "Master blacksmith " + blacksmithLevel,
        points: 0,
        conditions: $(
            characterPointer(),
            ['', 'Delta', '32bit', 0x29728, '=', 'Value', '', blacksmithLevel - 1],
            characterPointer(),
            ['', 'Mem', '32bit', 0x29728, '=', 'Value', '', blacksmithLevel],
            loadProtect(),
        )
    })
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

//Create summon achievements
for(const [summon, ID] of Object.entries(singleplayerSummons)) {
    set.addAchievement({
        title: summon + "'s pride",
        points: 0,
        description: "Earn 1.000.000.000 or more points using " + summon + "'s or Super " + summon + "'s Sutra",
        conditions: 
            inGameplay($(equippedSummon(ID), summonEnd(0x09), ['AddAddress', 'Mem', '32bit', 0x1fff508, '&', 'Value', '', 0x1fffffff], ['', 'Mem', '32bit', 0xf80052d8, '>=', 'Value', '', 1000000000],)),
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
                core: $(['', 'Delta', '32bit', 0xab7aa0, '!=', 'Mem', '32bit', 0xab7aa0])
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
