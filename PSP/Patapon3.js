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

export default set
