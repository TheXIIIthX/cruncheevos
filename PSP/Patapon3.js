import { AchievementSet, define as $, orNext, andNext, trigger, once, resetIf, RichPresence } from '@cruncheevos/core'
import { invertObject } from '@cruncheevos/core/util'
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

const keyLevels = {
    "Advance! Attack!": 0x01,
    "Defence Practice": 0x02,
    "Attack and Dodge Practice": 0x03,
    "March and Jump Practice": 0x04,
    "Mechanical Monstrosities": 0x71,
    "Volcano King of the Labyrinth": 0xc1,
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
    "Yumiyacha": 0xd9ac,
    "Alosson": 0xe2f4,
    "Wondabarappa": 0xe378,
    "Jamsch": 0xe3fc,
    "Oohoroc": 0xe480,
    "Pingrek": 0xe504,
    "Cannogabang": 0xe588,
}

const classLevels = {
    "TYarida": [0x2, 0xac64],
    "TKibadda": [0x5, 0xadf0],
    "TPiekron": [0xc, 0xb18c],
    "TWooyari": [0xd, 0xb210],
    "TPyokorider": [0xe, 0xb294],
    "TCannassault": [0xf, 0xb318],
    "TCharibasa": [0x10, 0xb39c],
    "CTaterazay": [0x3, 0xc308],
    "CDestrobo": [0x9, 0xc620],
    "CGuardira": [0x11, 0xca40],
    "CTondenga": [0x12, 0xcac4],
    "CMyamsar": [0x13, 0xcb48],
    "CBowmunk": [0x14, 0xcbcc],
    "CGrenburr": [0x15, 0xcc50],
    "KYumiyacha": [0x4, 0xd9ac],
    "KAlosson": [0x16, 0xe2f4],
    "KWondabarappa": [0x17, 0xe378],
    "KJamsch": [0x18, 0xe3fc],
    "KOohoroc": [0x19, 0xe480],
    "KPingrek": [0x1a, 0xe504],
    "KCannogabang": [0x1b, 0xe588],
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

const uniqueWeapons = {
    "Flangil": 0x8d,
    "Drigonlay": 0x8e,
    "Tsuyugiri": 0xa4,
    "Murapata": 0xa5,
    "Gesundbeit": 0xc1,
    "Yumspar": 0xc2,
    "Goldora": 0xd8,
    "Pointidon": 0xd9,
    "Romulus' Halberd": 0xf5,
    "Incensar": 0xf6,
    "Deathwringer": 0x114,
    "Great Golem Arm": 0x115,
    "Crablessa": 0x12b,
    "Heltopay's Kiss": 0x137,
    "Excalipon": 0x14c,
    "Quagar": 0x14d,
    "Mono Hoshibo": 0x161,
    "Onigiri's Greatblade": 0x162,
    "Hilkinga's Chillaxe": 0x176,
    "Susurapon": 0x177,
    "Genmaru": 0x18b,
    "Mjollnir": 0x18c,
    "Bow of Apollopon": 0x1a0,
    "Yamibashiri": 0x1a1,
    "Crossbow of Faible": 0x1b5,
    "The Machinator": 0x1ca,
    "Healixir Horn": 0x1df,
    "Dragonap Horn": 0x1e0,
    "Horn of Homugai": 0x1f4,
    "Horns of Hamlin": 0x209,
    "Thunderstorm Staff": 0x226,
    "Firefighter Sceptre": 0x245,
    "Defrost Sceptre": 0x246,
    "Bonkadonk Cannon": 0x254,
    "Euryalus": 0x260,
    "Hoirenho": 0x26c,
    "Demonic Dark Claw": 0x377,
    "Gardsormr Ice Claw": 0x378,
    "Quickflash Scythe": 0x38c,
    "Deathsoul Scythe": 0x38d,
}

const uniqueWeaponsSlot2 = {
    "Tsuyugiri": 0xa4,
    "Murapata": 0xa5,
    "Deathwringer": 0x114,
    "Great Golem Arm": 0x115,
    "Crablessa": 0x12b,
    "Heltopay's Kiss": 0x137,
    "Demonic Dark Claw": 0x377,
    "Gardsormr Ice Claw": 0x378,
}

const uniqueHelms = {
    "Tahla Helm": 0x288,
    "Bunny Head": 0x289,
}

const uniqueArmor = {
    "Stinger Shield": 0x2a7,
    "Galapagoth Shield": 0x2a8,
    "Aegis": 0x2be,
    "Tokoyomamori": 0x2bf,
    "Frayola's Spaulders": 0x2d3,
    "Lonestars": 0x2d4,
    "Cape of Ulysses": 0x2e8,
    "Freja's Cape": 0x2e9,
    "Alarium Stompers": 0x2fd,
    "Moonwalkers": 0x2fe,
    "Sibericus the Frosty": 0x312,
    "Bullgam the Bully": 0x313,
    "Deep Impact": 0x327,
    "The Silencer": 0x344,
    "Ruemelter": 0x345,
}

const superUniqueWeapons = {
    "Fendus": 0x8f,
    "Castram": 0x90,
    "The Butcher": 0x91,
    "Blade of Astria": 0xa6,
    "Palkyria's Flight": 0xc3,
    "Dokaknel's Fang": 0xc4,
    "Poseipon's Trident": 0xc5,
    "Super Cedar Log": 0xda,
    "Gugnir": 0xf7,
    "Battachin": 0xf8,
    "Murakumon": 0xf9,
    "Piringar Zingar": 0x116,
    "Chosan's Arm": 0x117,
    "Natura's Touch": 0x118,
    "Feisho": 0x12c,
    "Goliamon's Shiv": 0x138,
    "Holymadda Shiv": 0x139,
    "Serberker": 0x14e,
    "Murasamune": 0x163,
    "Axe of Hanboon": 0x178,
    "Thor": 0x18d,
    "Raijinpon's Bow": 0x1a2,
    "Krakabom Crossbow": 0x1b6,
    "Yoichiro": 0x1b7,
    "Illiamtel's Overture": 0x1cb,
    "Teskatori Shooter": 0x1cc,
    "Sonic Demonslayer": 0x1e1,
    "Megaslayer": 0x1f5,
    "Great Howl": 0x1f6,
    "Siren's Song": 0x20a,
    "Spriggan's Song": 0x20b,
    "Flamesea Staff": 0x227,
    "Holymist Staff": 0x228,
    "Darkvenom Staff": 0x229,
    "Jewelsword Staff": 0x22a,
    "Antivenom Sceptre": 0x247,
    "Sleepless Sceptre": 0x248,
    "Maelstrom Sceptre": 0x249,
    "Lullablight": 0x255,
    "Dreadmare": 0x261,
    "Ichigeki": 0x26d,
    "Bengal Tiger Claw": 0x379,
    "Great God Scythe": 0x38e,
}

const superUniqueWeaponsSlot2 = {
    "Blade of Astria": 0xa6,
    "Piringar Zingar": 0x116,
    "Chosan's Arm": 0x117,
    "Natura's Touch": 0x118,
    "Feisho": 0x12c,
    "Goliamon's Shiv": 0x138,
    "Holymadda Shiv": 0x139,
    "Bengal Tiger Claw": 0x379,
}

const superUniqueHelms = {
    "Tebenos Helm": 0x28a,
    "Samurai Head": 0x28b,
    "Marumenko Helm": 0x28c,
}

const superUniqueArmor = {
    "Octagon Shield": 0x2a9,
    "Alldemonium Shield": 0x2aa,
    "Fireblessed Shield": 0x2ab,
    "Bacteon Greatshield": 0x2c0,
    "Crono Riggers": 0x2d5,
    "Vamp Cloak": 0x2ea,
    "Lilith Shoes": 0x2ff,
    "Ponbiscuit": 0x314,
    "Kotenho the King": 0x328,
    "Ponteo the Victorious": 0x329,
    "Silver Murzephone": 0x346,
    "Deedsarus Helltank": 0x348,
}

function stagePointer() {
    return ($(['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x01ffffff]))
}

function stageDataPointer() {
    return ($(['AddAddress', 'Mem', '32bit', 0xab9518, '&', 'Value', '', 0x01ffffff]))
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

function singleplayerCheck() {
    return ($(['', 'Mem', 'Bit0', 0xab95b4, '=', 'Value', '', 0]))
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
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x2b4e8, '=', 'Value', '', 0],
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x2b528, '=', 'Value', '', 0],
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x2b568, '=', 'Value', '', 0],    ))
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

function inRange() {
    return ($(inSingleVersus("OrNext"), inMultiVersus("OrNext"), inSingleplayerLevel("OrNext"), inMultiplayerLevel()))
}

function inGameplay() {
    return($(inSingleplayerLevel("OrNext"), inMultiplayerLevel("OrNext"), inSinglePlayerDungeon("OrNext"), inMultiplayerDungeon("OrNext"), inSingleVersus("OrNext"), inMultiVersus()))
}

function newLevel(hits = 0) {
    let flag = ''
    if (hits == 1) {
        flag = 'AndNext'
    }
    return($(
        stagePointer(),
        [flag, 'Delta', '32bit', 0x22f8, '=', 'Value', '', 0xffffffff], 
        stagePointer(),
        ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 0xffffffff, hits],
    ))
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

function resetNoVictory() {
    return($(
        stagePointer(),
        ['AndNext', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 0x00],
        stagePointer(),
        ['ResetIf', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 0x07],
    ))
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

function uberheroLevelCheck(level) {
    return($(characterPointer(), ['', 'Mem', '32bit', 0xf294, '<=', 'Value', '', level]))
}

function characterLevelCheck(character, ID, offset, level, flag = '') {
    return($(
        characterPointer(),
        ['AndNext', 'Mem', '32bit', character, '=', 'Value', '', ID],
        characterPointer(),
        [flag, 'Mem', '32bit', offset, '<=', 'Value', '', level],
    ))
}

function maxLevel(level) {
    let logic = []
    let TCK
    let intervals = [6, 13, 20]
    let flag = 'OrNext'
    let i = 0
    for (const [character, data] of Object.entries(classLevels)) {
        if (character.charAt(0) == "T") {
            TCK = 0xab40
        }
        else if (character.charAt(0) == "C") {
            TCK = 0xc160
        }
        else if (character.charAt(0) == "K") {
            TCK = 0xd780
        }
        else {
            return
        }
        if (intervals.includes(i)) {
            logic.push($(characterLevelCheck(TCK, data[0], data[1], level, '')))
        }
        else {
            logic.push($(characterLevelCheck(TCK, data[0], data[1], level, flag)))
        }
        i++
    }
    return(logic)
}

//Create Patapon 2 savedata import achievement
set.addAchievement({
    title: "The Return of Almighty",
    points: 1,
    conditions: $(
        ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1ed7],
        stagePointer(),
        ['AddAddress', 'Mem', '32bit', 0x1bc, '&', 'Value', '', 0x1ffffff],
        ['', 'Delta', 'Bit0', 0x1e8, '=', 'Value', '', 0],
        stagePointer(),
        ['AddAddress', 'Mem', '32bit', 0x1bc, '&', 'Value', '', 0x1ffffff],
        ['', 'Mem', 'Bit0', 0x1e8, '=', 'Value', '', 1],
    )
})

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

//Accursed Dodonga challenge
set.addAchievement({
    title: "I Would Prefer a Treasure Chest",
    points: 5,
    type: 'missable',
    description: "Slay the Accursed Dodonga without summoning",
    conditions: 
            $(
                checkLevel(32),
                singleplayerOnly(),
                newLevel(1),
                trigger(finishLevel()),
                command(0x09, 'ResetIf'),
                resetNoVictory(),
            ),
})

//Evilmass of Adamance challenge
set.addAchievement({
    title: "Brave the Guillotine",
    points: 10,
    description: "Finish the first floor of the mission Archfiend of Adamance or the mission What Lurks Beyond the Guillotine without retreating",
    conditions: 
        $(
            checkLevel(0xe8, false, 'OrNext'),
            checkLevel(0xe9),
            singleplayerOnly(),
            newLevel(1),
            trigger(finishLevel(5)),
            command(0x04, 'ResetIf'),
            resetNoVictory(),
        )
})

//Tomb of Tolerance challenge
set.addAchievement({
    title: "Trap Filled Tomb",
    points: 10,
    description: "Finish the first floor of the mission Archfiend of Tolerance or the mission Eternal Archfiends and the Other Vessel without jumping",
    conditions: 
        $(
            checkLevel(0x110, false, 'OrNext'),
            checkLevel(0x111),
            singleplayerOnly(),
            newLevel(1),
            trigger(finishLevel(5)),
            command(0x05, 'ResetIf'),
            resetNoVictory(),
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
//Missable
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

//Non missable
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
                finishLevel(4),
            ),
        }
    })
}

//Capture the flag
//Level cap
for (const [stage, ID] of Object.entries(arena)) {
    set.addAchievement({
        title: stage + " flag victory",
        points: 0,
        type: 'missable',
        description: "Finish " + stage + " by capturing the flag with all troops below level " + ID[1],
        conditions: {
            core: $(
                inVersus(),
                checkLevel(ID[0]),
                finishLevel(2),
                uberheroLevelCheck(ID[1]),
        ),
        alt1: $(
            singleplayerCheck(),
            ...maxLevel(ID[1]),
        ),
        alt2: $(
            soloPlay(),
        ),
        }
    })
}

//Non level cap
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
//Missable
for (const [stage, ID] of Object.entries(race)) {
    set.addAchievement({
        title: stage,
        points: 0,
        type: 'missable',
        conditions: {
            core:
                $(
                    checkLevel(ID[0]),
                    finishLevel(),
                    inLevel(),
                ),
            }
    })
}

//Non missable
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
//Missable
for (const [stage, ID] of Object.entries(range)) {
    set.addAchievement({
        title: stage,
        points: 0,
        type: 'missable',
        conditions: {
            core:
                $(
                    checkLevel(ID[0]),
                    inRange(),
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

//Non missable
for (const [stage, ID] of Object.entries(endRange)) {
    set.addAchievement({
        title: stage,
        points: 0,
        description: "Finish " + stage,
        conditions: {
            core: $(
                checkLevel(ID),
                inRange(),
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

//Destroy enemy base
set.addAchievement({
    title: "Total Ultrasonic Air Defence Shut Down!",
    points: 10,
    type: "missable",
    conditions: $(
        checkLevel(0x67),
        inRange(),
        finishLevel(2),
        uberheroLevelCheck(13),
        ...maxLevel(13),
    )
})

set.addAchievement({
    title: "Overwhelming the Defence",
    points: 10,
    type: "missable",
    conditions: $(
        checkLevel(0xdf),
        inRange(),
        finishLevel(2),
        uberheroLevelCheck(25),
        ...maxLevel(25),
    ),
})

set.addAchievement({
    title: "The Third Version of Justice",
    points: 10,
    conditions: $(
            checkLevel(0x68),
            inRange(),
            finishLevel(2),
        ),
})

set.addAchievement({
    title: "No More Slogging on the Job",
    points: 10,
    conditions: $(
            checkLevel(0xe0),
            inRange(),
            finishLevel(2),
        ),
})

function obtainKey() {
    return($(
        characterPointer(),
        ['', 'Delta', '16bit', 0x14e, '<', 'Mem', '16bit', 0x14e],
    ))
}

//Patapon song achievement
set.addAchievement({
    title: "Leisurely Lullaby",
    points: 5,
    description: "Obtain the Patapon song",
    conditions: $(
        loadProtect(),
        checkLevel(0x01),
        characterPointer(),
        ['', 'Delta', 'Bit0', 0x1755, '=', 'Value', '', 0],
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x1755, '=', 'Value', '', 1],
    )
})

//Key collection achievements
for (const [stage, ID] of Object.entries(keyLevels)) {
    set.addAchievement({
        title: "Key of " + stage,
        points: 5,
        description: "Obtain the key in " + stage,
        conditions: $(
            checkLevel(ID),
            obtainKey(),
        )
    })
}

//Obtain summon achievements
set.addAchievement({
    title: "Sutra of Power",
    points: 5,
    description: "Obtain Yarigami's Sutra from Shakapon",
    conditions: $(
        loadProtect(),
        checkLevel(0x129),
        characterPointer(),
        ['', 'Delta', 'Bit0', 0x75, '=', 'Value', '', 0],
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x75, '=', 'Value', '', 1],
    )
})

set.addAchievement({
    title: "Sutra of Defence",
    points: 5,
    description: "Obtain Tategami's Sutra from Gold Hoshipon",
    type: "missable",
    conditions: $(
        loadProtect(),
        checkLevel(0xd4),
        characterPointer(),
        ['', 'Delta', 'Bit0', 0x75, '=', 'Value', '', 0],
        characterPointer(),
        ['', 'Mem', 'Bit0', 0x75, '=', 'Value', '', 1],
    )
})

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
function uberheroEquipCheck(equipment, slot, level = 0) {
    if (level != 0) {
        return(
            $(
                characterPointer(),
                ['', 'Mem', '16bit', slot, '=', 'Value', '', equipment],
                characterPointer(),
                ['', 'Mem', '16bit', slot + 2, '>=', 'Value', '', level]
            )
        )
    }
    return(
        $(
            characterPointer(),
            ['', 'Mem', '16bit', slot, '=', 'Value', '', equipment],
        )
    )
}

function uniqueGenerate(level = 0) {
    let logic = {}
    logic['core'] = $(
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
    );
    let i = 1
    for (const [equip, ID] of Object.entries(uniqueWeapons)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2cc, level)
        i++
    }
    for (const [equip, ID] of Object.entries(uniqueWeaponsSlot2)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2d8, level)
        i++
    }
    for (const [equip, ID] of Object.entries(uniqueHelms)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2e4, level)
        i++
    }
    for (const [equip, ID] of Object.entries(uniqueArmor)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2f0, level)
        i++
    }
    for (const [equip, ID] of Object.entries(uniqueArmor)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2fe, level)
        i++
    }
    return(logic)
}

//Unique
set.addAchievement({
    title: "Unique Weaponry",
    points: 2,
    description: "Obtain and equip the Uberhero with a unique piece of equipment except DLC equipment and the Shubaba Gale Kabuto",
    conditions: uniqueGenerate(),
})

set.addAchievement({
    title: "Superior Unique Weaponry",
    points: 5,
    description: "Obtain and equip the Uberhero with a unique piece of equipment level 10 or higher DLC equipment and the Shubaba Gale Kabuto",
    conditions: uniqueGenerate(10),
})

function superUniqueGenerate(level = 0) {
    let logic = {}
    logic['core'] = $(
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
    );
    let i = 1
    for (const [equip, ID] of Object.entries(superUniqueWeapons)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2cc, level)
        i++
    }
    for (const [equip, ID] of Object.entries(superUniqueWeaponsSlot2)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2d8, level)
        i++
    }
    for (const [equip, ID] of Object.entries(superUniqueHelms)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2e4, level)
        i++
    }
    for (const [equip, ID] of Object.entries(superUniqueArmor)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2f0, level)
        i++
    }
    for (const [equip, ID] of Object.entries(superUniqueArmor)) {
        logic['alt' + i] = uberheroEquipCheck(ID, 0xf2fe, level)
        i++
    }
    return(logic)
}

//Super unique

set.addAchievement({
    title: "Super Unique Weaponry",
    points: 2,
    description: "Obtain and equip the Uberhero with a super unique piece of equipment",
    conditions: superUniqueGenerate(),
})

set.addAchievement({
    title: "Superior Super Unique Weaponry",
    points: 5,
    description: "Obtain and equip the Uberhero with a super unique piece of equipment level 10 or higher",
    conditions: superUniqueGenerate(10),
})

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

//Create distance travelled leaderboard
set.addLeaderboard({
    title: "Perfect Marching Challenge maximum distance",
    description: "March the furthest distance in the Perfect Marching Challenge",
    lowerIsBetter: false,
    type: 'VALUE',
    conditions: {
        start: $(
            checkLevel(0x28, true),
            ['', 'Mem', '32bit', 0xab7aa0, '=', 'Value', '', 0x1e0a],
            newLevel(),
        ),
        cancel: $(
            stagePointer(),
            ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 0],
            stagePointer(),
            ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 5],
            stagePointer(),
            ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 7],
            stagePointer(),
            ['', 'Mem', '32bit', 0x22f8, '!=', 'Value', '', 8],
        ),
        submit: {
            core: $(['', 'Value', '', 1, '=', 'Value', '', 1],),
            alt1: $(
                    stagePointer(),
                    ['', 'Delta', '32bit', 0x22f8, '!=', 'Value', '', 5], 
                    stagePointer(),
                    ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 5],
                ),
            alt2: $(
                stagePointer(),
                ['', 'Delta', '32bit', 0x22f8, '!=', 'Value', '', 7], 
                stagePointer(),
                ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 7],
            ),
            alt3: $(
                stagePointer(),
                ['', 'Delta', '32bit', 0x22f8, '!=', 'Value', '', 8], 
                stagePointer(),
                ['', 'Mem', '32bit', 0x22f8, '=', 'Value', '', 8],
            ),
        },
        value: $(
            stagePointer(),
            ['Measured', 'Mem', 'Float', 0x2e00, '/', 'Value', '', 15]
        ),
    }
})


export default set
