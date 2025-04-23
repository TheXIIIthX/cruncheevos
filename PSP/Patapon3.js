import { AchievementSet, define as $, orNext, andNext, trigger, once, resetIf, RichPresence } from '@cruncheevos/core'
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
    "Will the Angry Wolf See a Full Moon?": [0x17, 5],
    "Anything for a Rare Item": [0x8f, 17],
}

const race = {
    "Ephemeral Dreams Dashed": [0x3f, 9],
    "A Horse's Pride": [0xb7, 21],
}

const range = {
    "Total Ultrasonic Air Defence!": [0x67, 13],
    "What He Fights For": [0xdf, 25],
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

const classLevels = {
    "Yarida": 0x9644,
    "Taterazay": 0x96c8,
    "Yumiyacha": 0x974c,
    "Kibadda": 0x97d0,
    "Destrobo": 0x99e0,
    "Piekron": 0x9b6c,
    "Wooyari": 0x9bf0,
    "Pyokorider": 0x9c74,
    "Cannassault": 0x9cf8,
    "Charibasa": 0x9d7c,
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
    "TYarida": 0xac64,
    "TKibadda": 0xadf0,
    "TPiekron": 0xb18c,
    "TWooyari": 0xb210,
    "TPyokorider": 0xb294,
    "TCannassault": 0xb318,
    "TCharibasa": 0xb39c,
    "CTaterazay": 0xc308,
    "CGuardira": 0xca40,
    "CTondenga": 0xcac4,
    "CMyamsar": 0xcb48,
    "CBowmunk": 0xcbcc,
    "CGrenburr": 0xcc50,
    "KYumiyacha": 0xd9ac,
    "KAlosson": 0xe2f4,
    "KWondabarappa": 0xe378,
    "KJamsch": 0xe3fc,
    "KOohoroc": 0xe480,
    "KPingrek": 0xe504,
    "KCannogabang": 0xe588,
}

//Max 1 level offsets class skills
const class1offsets = {
    "Thunderific": 0xa270,
    "Hellfire": 0xa274,
    "Nova Nova": 0xa278,
    "Venomist": 0xa27c,
    "KanThunderific": 0xe4d0,
    "KanHellfire": 0xe4d4,
    "KanNovaNova": 0xe4d8,
    "KanVenomist": 0xe4dc,
}

//Max 4 levels offsets class skills
const class4offsets = {
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

//Max 5 levels offsets class skills
const class5offsets = {
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

function multiplayerOnly() {
    return ($(['', 'Mem', 'Bit0', 0xab95b4, '=', 'Value', '', 1]))
}

function soloPlay() {
    return($(
        multiplayerOnly(),
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 0],
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x2b528, '=', 'Value', '', 0],
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x2b568, '=', 'Value', '', 0],
    ))
}

function singleplayerOnly() {
    return ($(
        ['OrNext', 'Mem', 'Bit0', 0xab95b4, '=', 'Value', '', 0],
        soloPlay(),
    ))
}

function inSingleplayerLevel(flag = '') {
    return ($([flag, 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0a]))
}

function inMultiplayerLevel(flag = '') {
    return ($([flag, 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e05]))
}

function inSinglePlayerDungeon(flag = '', hits = 0) {
    if (hits != 0) {
        return ($(
            ['AndNext', 'Delta', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e10],
            [flag, 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e10, hits]
        ))
    }
    return ($([flag, 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e10,]))
}

function inMultiplayerDungeon(flag = '') {
    return ($([flag, 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0b]))
}

function inSingleVersus(flag = '') {
    return ($([flag, 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e09]))
}

function inMultiVersus(flag = '') {
    return ($([flag, 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e04]))
}

function inLevel() {
    return ($(inSingleplayerLevel("OrNext"), inMultiplayerLevel()))
}

function inDungeon() {
    return ($(inSinglePlayerDungeon("OrNext"), inMultiplayerDungeon()))
}

function inVersus() {
    return ($(inSingleVersus("OrNext"), inMultiVersus()))
}

function inGameplay() {
    return($(inSingleplayerLevel("OrNext"), inMultiplayerLevel("OrNext"), inSinglePlayerDungeon("OrNext"), inMultiplayerDungeon("OrNext"), inSingleVersus("OrNext"), inMultiVersus()))
}

function infectionCheck() {
    return ($(['', 'Mem', '32bit', 0xd9851c, '=', 'Value', '', 0x00]))
}

function command(ID, flag = '') {
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
    return($(
        stagePointer(),
        ['AndNext', 'Delta', '32bit', 0x2338, '!=', 'Value', '', ID],
        stagePointer(),
        [flag, 'Mem', '32bit', 0x2338, '=', 'Value', '', ID]
    ))
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

function checkLevel(levelID, dlc = false, flag = '') {
    let levelPointer = 0x2310;
    if (dlc == true)
        levelPointer = 0x236c;
    return($(
        stagePointer(),
        [flag, 'Mem', '32bit', levelPointer, '=', 'Value', '', levelID], //Check if level is correct
    ))
}

function finishLevel(levelEnd = 2, flag = '') {
    return($(
        stagePointer(),
        [flag, 'Delta', '32bit', 0x22f4, '!=', 'Value', '', levelEnd], 
        stagePointer(),
        [flag, 'Mem', '32bit', 0x22f4, '=', 'Value', '', levelEnd], //Check if flag gets hit
    ))
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

function characterLevelCheck(ID, level) {
    return($(['', 'Mem', '32bit', ID, '<=', 'Value', '', level]))
}

function maxLevel(level) {
    let logic = []
    for (const [character, offset] of Object.entries(classLevels)) {
        logic.push($(characterPointer(), characterLevelCheck(offset, level)))
    }
    return(logic)
}

//Create prologue achievement
set.addAchievement({
    title: "The Coming of Almighty",
    points: 1,
    type: 'progression',
    conditions: $(
        checkLevel(0x00),
        finishLevel(7),
        ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0b],
    )
})

//Create dungeon finish achievements
for (const [stage, ID] of Object.entries(dungeons)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: $(
            checkLevel(ID),
            finishLevel(),
            inDungeon(),
        )
    })
}

//Tomb of Tolerance challenge
set.addAchievement({
    title: "Trap Filled Tomb",
    points: 10,
    conditions: $(
        checkLevel(0x110, false, 'OrNext'),
        checkLevel(0x111),
        inSinglePlayerDungeon('', 1),
        trigger(finishLevel(5)),
        command(0x05, 'ResetIf'),
        ['ResetIf', 'Mem', '32bit', 0xab7aa0, '!=', 'Value', '', 0x1e10],
    )
})

//Create multi dungeon singleplayer challenge achievements
for (const [stage, ID] of Object.entries(multiDungeons)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: $(
            checkLevel(ID),
            finishLevel(), 
            inDungeon(),
            singleplayerOnly(),
        )
    })
}

//Create level finish achievements
for (const [stage, ID] of Object.entries(levels)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: $(
            checkLevel(ID),
            finishLevel(),
            inLevel(),
        )
    })
}

//Create DLC level achievements
for (const [stage, ID] of Object.entries(dlc)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: $(
            checkLevel(ID, true),
            finishLevel(),
            inLevel(),
            singleplayerOnly(),
        )
    })
}

//Create single player only dlc achievements
for (const [stage, ID] of Object.entries(singlePlayerDLC)) {
    set.addAchievement({
        title: stage,
        points: 0,
        conditions: $(
            checkLevel(ID, true),
            finishLevel(),
            inLevel(),
            singleplayerOnly(),
        )
    })
}

//Create arena achievements
//Level cap
for (const [stage, ID] of Object.entries(arena)) {
    set.addAchievement({
        title: stage,
        points: 0,
        type: 'missable',
        conditions: {
            core:
                $(
                    checkLevel(ID[0]),
                    inVersus(),
                    singleplayerOnly(),
                    maxLevel(ID[1])[0],
                    maxLevel(ID[1])[1],
                    maxLevel(ID[1])[2],
                    maxLevel(ID[1])[3],
                    maxLevel(ID[1])[4],
                    maxLevel(ID[1])[5],
                    maxLevel(ID[1])[6],
                    maxLevel(ID[1])[7],
                    maxLevel(ID[1])[8],
                    maxLevel(ID[1])[9],
                    maxLevel(ID[1])[10],
                    maxLevel(ID[1])[11],
                    maxLevel(ID[1])[12],
                    maxLevel(ID[1])[13],
                    maxLevel(ID[1])[14],
                    maxLevel(ID[1])[15],
                    maxLevel(ID[1])[16],
                    maxLevel(ID[1])[17],
                    maxLevel(ID[1])[18],
                    maxLevel(ID[1])[19],
                    maxLevel(ID[1])[20],
                    maxLevel(ID[1])[21],
                    maxLevel(ID[1])[22],
                    maxLevel(ID[1])[23],
                    maxLevel(ID[1])[24],
                    maxLevel(ID[1])[25],
                    maxLevel(ID[1])[26],
                    maxLevel(ID[1])[27],
                    maxLevel(ID[1])[28],
                    maxLevel(ID[1])[29],
                    maxLevel(ID[1])[30],
                    maxLevel(ID[1])[31],
                    maxLevel(ID[1])[32],
                    maxLevel(ID[1])[33],
                    maxLevel(ID[1])[34],
                    maxLevel(ID[1])[35],
                    maxLevel(ID[1])[36],
                    maxLevel(ID[1])[37],
                    maxLevel(ID[1])[38],
                    maxLevel(ID[1])[39],
                    maxLevel(ID[1])[40],
                    maxLevel(ID[1])[41],
                ),
            alt1:
                $(
                    finishLevel(2),
                ),
            alt2: $(
                finishLevel(4),
            ),
        }
    })
}

//No level cap
for (const [stage, ID] of Object.entries(endArena)) {
    set.addAchievement({
        title: stage,
        points: 0,
        description: "Finish " + stage,
        conditions: {
            core: $(
                checkLevel(ID),
                inVersus(),
            ),
            alt1: $(
                finishLevel(2),
            ),
            alt2: $(
                finishLevel(4)
            ),
        }
    })
}

//Capture the flag
for (const [stage, ID] of Object.entries(arena)) {
    set.addAchievement({
        title: stage + " flag victory",
        points: 0,
        type: 'missable',
        description: "Finish " + stage,
        conditions: $(
                checkLevel(ID[0]),
                inVersus(),
                singleplayerOnly(),
                finishLevel(2),
        )
    })
}

for (const [stage, ID] of Object.entries(endArena)) {
    set.addAchievement({
        title: stage + " flag victory",
        points: 0,
        description: "Finish " + stage,
        conditions: $(
                checkLevel(ID),
                inVersus(),
                singleplayerOnly(),
                finishLevel(2),
        )
    })
}

//Create racing achievements
//Level cap
for (const [stage, ID] of Object.entries(race)) {
    set.addAchievement({
        title: stage,
        points: 0,
        type: 'missable',
        conditions: 
                $(
                    checkLevel(ID[0]),
                    finishLevel(),
                    inLevel(),
                    singleplayerOnly(),
                    maxLevel(ID[1])[0],
                    maxLevel(ID[1])[1],
                    maxLevel(ID[1])[2],
                    maxLevel(ID[1])[3],
                    maxLevel(ID[1])[4],
                    maxLevel(ID[1])[5],
                    maxLevel(ID[1])[6],
                    maxLevel(ID[1])[7],
                    maxLevel(ID[1])[8],
                    maxLevel(ID[1])[9],
                    maxLevel(ID[1])[10],
                    maxLevel(ID[1])[11],
                    maxLevel(ID[1])[12],
                    maxLevel(ID[1])[13],
                    maxLevel(ID[1])[14],
                    maxLevel(ID[1])[15],
                    maxLevel(ID[1])[16],
                    maxLevel(ID[1])[17],
                    maxLevel(ID[1])[18],
                    maxLevel(ID[1])[19],
                    maxLevel(ID[1])[20],
                    maxLevel(ID[1])[21],
                    maxLevel(ID[1])[22],
                    maxLevel(ID[1])[23],
                    maxLevel(ID[1])[24],
                    maxLevel(ID[1])[25],
                    maxLevel(ID[1])[26],
                    maxLevel(ID[1])[27],
                    maxLevel(ID[1])[28],
                    maxLevel(ID[1])[29],
                    maxLevel(ID[1])[30],
                    maxLevel(ID[1])[31],
                    maxLevel(ID[1])[32],
                    maxLevel(ID[1])[33],
                    maxLevel(ID[1])[34],
                    maxLevel(ID[1])[35],
                    maxLevel(ID[1])[36],
                    maxLevel(ID[1])[37],
                    maxLevel(ID[1])[38],
                    maxLevel(ID[1])[39],
                    maxLevel(ID[1])[40],
                    maxLevel(ID[1])[41],
                ),
        
    })
}

//No level cap
for(const [stage, ID] of Object.entries(endRace)) {
    set.addAchievement({
        title: stage,
        points: 0,
        description: "Finish " + stage,
        conditions: $(
            checkLevel(ID),
            finishLevel(),
            inLevel(),
        )
    })
}

//Timed challenge

//Create missile range achievements
//Level cap
for (const [stage, ID] of Object.entries(range)) {
    set.addAchievement({
        title: stage,
        points: 0,
        type: 'missable',
        conditions: {
            core:
                $(
                    checkLevel(ID[0]),
                    inVersus(),
                    singleplayerOnly(),
                    maxLevel(ID[1])[0],
                    maxLevel(ID[1])[1],
                    maxLevel(ID[1])[2],
                    maxLevel(ID[1])[3],
                    maxLevel(ID[1])[4],
                    maxLevel(ID[1])[5],
                    maxLevel(ID[1])[6],
                    maxLevel(ID[1])[7],
                    maxLevel(ID[1])[8],
                    maxLevel(ID[1])[9],
                    maxLevel(ID[1])[10],
                    maxLevel(ID[1])[11],
                    maxLevel(ID[1])[12],
                    maxLevel(ID[1])[13],
                    maxLevel(ID[1])[14],
                    maxLevel(ID[1])[15],
                    maxLevel(ID[1])[16],
                    maxLevel(ID[1])[17],
                    maxLevel(ID[1])[18],
                    maxLevel(ID[1])[19],
                    maxLevel(ID[1])[20],
                    maxLevel(ID[1])[21],
                    maxLevel(ID[1])[22],
                    maxLevel(ID[1])[23],
                    maxLevel(ID[1])[24],
                    maxLevel(ID[1])[25],
                    maxLevel(ID[1])[26],
                    maxLevel(ID[1])[27],
                    maxLevel(ID[1])[28],
                    maxLevel(ID[1])[29],
                    maxLevel(ID[1])[30],
                    maxLevel(ID[1])[31],
                    maxLevel(ID[1])[32],
                    maxLevel(ID[1])[33],
                    maxLevel(ID[1])[34],
                    maxLevel(ID[1])[35],
                    maxLevel(ID[1])[36],
                    maxLevel(ID[1])[37],
                    maxLevel(ID[1])[38],
                    maxLevel(ID[1])[39],
                    maxLevel(ID[1])[40],
                    maxLevel(ID[1])[41],
                ),
            alt1:
                $(
                    finishLevel(2),
                ),
            alt2: $(
                finishLevel(4),
            ),
        }
    })
}

//No level cap
for (const [stage, ID] of Object.entries(endRange)) {
    set.addAchievement({
        title: stage,
        points: 0,
        description: "Finish " + stage,
        conditions: {
            core: $(
                checkLevel(ID),
                inVersus(),
            ),
            alt1: $(
                finishLevel(2),
            ),
            alt2: $(
                finishLevel(4),
            ),
        }  
    })
}

//No base damage

//Create solo Pingrek achievement
set.addAchievement({
    title: "Battle Penguin",
    points: 10,
    description: "Finish a level outside of the Patapon Training Grounds with solo Pingrek",
    conditions: {
        core: $(
                soloPlay(),
                characterPointer(),
                ['', 'Mem', '32bit', 0xf280, '=', 'Value', '', 26],
                stagePointer(),
                ['', 'Mem', '32bit', 0x236c, '!=', 'Value', '', 40],
            ),
        alt1: $(
            trigger(inMultiplayerLevel()),
            finishLevel(2, 'Trigger'),
        ),
        alt2: $(
            trigger(inMultiVersus()),
            finishLevel(4, 'Trigger'),
        ),
    }
})

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

//Create equipment achievements
//Unique

//Super unique

//Equipment sets
//2 piece
set.addAchievement({
    title: "2 piece set",
    points: 5,
    description: "Equip your Uberhero with a 2 piece equipment set consisting of unique and super unique pieces of equipment",
    conditions: {
        core: $(
            loadProtect(),
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2cc, '!=', 'Mem', '16bit', 0xf2cc],
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2e4, '!=', 'Mem', '16bit', 0xf2e4],
            characterPointer(),
            ['', 'Delta', '16bit', 0xf2f0, '!=', 'Mem', '16bit', 0xf2f0],
        ),
        alt1: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0xc5],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x289],
        ),
        alt2: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0xda],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28a],
        ),
        alt3: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28c],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2bf],
        ),
        alt4: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x163],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28b],
        ),
        alt5: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x1cc],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28c],
        ),
        alt6: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x1b7],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28b],
        ),
        alt7: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x14e],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28c],
        ),
        alt8: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x1a2],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x289],
        ),
        alt9: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x249],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2ff],
        ),
        alt10: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x26d],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28b],
        )
    }
})

//3 piece
set.addAchievement({
    title: "3 piece set",
    points: 5,
    description: "Equip your Uberhero with a 3 piece equipment set consisting of unique and super unique pieces of equipment",
    conditions: {
        core: $(
            loadProtect(),
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2cc, '!=', 'Mem', '16bit', 0xf2cc],
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2d8, '!=', 'Mem', '16bit', 0xf2d8],
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2e4, '!=', 'Mem', '16bit', 0xf2e4],
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2f0, '!=', 'Mem', '16bit', 0xf2f0],
            characterPointer(),
            ['', 'Delta', '16bit', 0xf2fc, '!=', 'Mem', '16bit', 0xf2fc],
        ),
        alt1: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x12c],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x288],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2a8],
        ),
        alt2: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0xf8],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28b],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2fc, '=', 'Value', '', 0x329],
        ),
        alt3: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x178],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28a],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2fc, '=', 'Value', '', 0x348],
        ),
        alt4: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x91],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x288],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2aa],
        ),
        alt5: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x115],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2d8, '=', 'Value', '', 0x115],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28a],
        ),
        alt6: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x118],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2d8, '=', 'Value', '', 0x118],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x289],
        ),
        alt7: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x1f6],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x288],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2ea],
        ),
        alt8: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x20b],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28b],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2e9],
        ),
        alt9: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x1e1],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x288],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2e8],
        ),
        alt10: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x22a],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28c],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2ff],
        )
    }
})

//4 piece set
set.addAchievement({
    title: "4 piece set",
    points: 10,
    description: "Equip your Uberhero with a 3 piece equipment set consisting of unique and super unique pieces of equipment",
    conditions: {
        core: $(
            loadProtect(),
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2cc, '!=', 'Mem', '16bit', 0xf2cc],
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2d8, '!=', 'Mem', '16bit', 0xf2d8],
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2e4, '!=', 'Mem', '16bit', 0xf2e4],
            characterPointer(),
            ['OrNext', 'Delta', '16bit', 0xf2f0, '!=', 'Mem', '16bit', 0xf2f0],
            characterPointer(),
            ['', 'Delta', '16bit', 0xf2fc, '!=', 'Mem', '16bit', 0xf2fc],
        ),
        alt1: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0xf5],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28a],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2a9],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2fc, '=', 'Value', '', 0x313],
        ),
        alt2: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0xf7],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x289],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2a7],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2fc, '=', 'Value', '', 0x347],
        ),
        alt3: $(
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x18d],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x289],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2aa],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2fc, '=', 'Value', '', 0x2d5],
        ),
        alt4: $(
            characterPointer(),
            ['OrNext', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0xa6],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2cc, '=', 'Value', '', 0x139],
            characterPointer(),
            ['OrNext', 'Mem', '16bit', 0xf2d8, '=', 'Value', '', 0xa6],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2d8, '=', 'Value', '', 0x139],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2e4, '=', 'Value', '', 0x28b],
            characterPointer(),
            ['', 'Mem', '16bit', 0xf2f0, '=', 'Value', '', 0x2d3],
        )
    }
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
            inLevel(),
            singleplayerOnly(),
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
        conditions: $(
            inGameplay(),
            equippedSummon(ID), 
            summonEnd(0x09), 
            ['AddAddress', 'Mem', '32bit', 0x1fff508, '&', 'Value', '', 0x1fffffff], 
            ['', 'Mem', '32bit', 0xf80052d8, '>=', 'Value', '', 1000000000],)
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
            start: $(
                inGameplay(),
                equippedSummon(ID), 
                command(0x09)),
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
