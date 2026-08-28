import { AchievementSet, define as $, andNext } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 8752, title: 'Sword of Kalin' })

function selectSave() {
    return($(
        ['AddAddress', 'Mem', '8bit', 0x0030],
    ))
}

function position(map, x, y, mem = 'Mem') {
    return($(
        selectSave(),
        ['', mem, '8bit', 0x071e, '=', 'Value', '', map],
        selectSave(),
        ['', mem, '8bit', 0x0726, '=', 'Value', '', x],
        selectSave(),
        ['', mem, '8bit', 0x0727, '=', 'Value', '', y],
    ))
}

function flagCheck(map, x, y, bit, address) {
    return($(
        position(map, x, y),
        selectSave(),
        ['', 'Delta', bit, address, '=', 'Value', '', 0],
        selectSave(),
        ['', 'Mem', bit, address, '=', 'Value', '', 1],
    ))
}

function battle(monsterID) {
    return($(
        ['', 'Mem', '8bit', 0x63, '=', 'Value', '', monsterID],
    ))
}

function bestiary(monster) {
    return($(
        ['AndNext', 'Mem', '8bit', 0x63, '=', 'Value', '', monster],
        ['AddHits', 'Delta', '8bit', 0x60, '>', 'Mem', '8bit', 0x60, 1],
    ))
}

function itemChallenge(monster, item) {
    return($(
        battle(monster),
        ['AndNext', 'Delta', '8bit', 0x60, '=', 'Value', '', 0],
        ['AndNext', 'Mem', '8bit', 0x60, '>=', 'Value', '', 5],
        ['', 'Mem', '8bit', 0x60, '<', 'Value', '', 10, 1],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0x0],
        selectSave(),
        ['AndNext', 'Mem', '8bit', 0x71d, '!=', 'Value', '', item],
        selectSave(),
        ['ResetIf', 'Delta', '8bit', 0x72a, '>', 'Mem', '8bit', 0x72a],
        selectSave(),
        ['ResetIf', 'Delta', '8bit', 0x733, '>', 'Mem', '8bit', 0x733],
        selectSave(),
        ['ResetIf', 'Delta', '8bit', 0x734, '>', 'Mem', '8bit', 0x734],
        selectSave(),
        ['AndNext', 'Mem', '8bit', 0x71d, '=', 'Value', '', item],
        selectSave(),
        ['Trigger', 'Delta', '8bit', 0x72a, '>', 'Mem', '8bit', 0x72a, 1],
        ['AndNext', 'Delta', '8bit', 0x60, '>=', 'Value', '', 1],
        ['AndNext', 'Delta', '8bit', 0x60, '<', 'Value', '', 10],
        ['Trigger', 'Mem', '8bit', 0x60, '=', 'Value', '', 0],
    ))
}

set.addAchievement({
    title: "Echoes of the Sacred Chimes",
    description: "Restore the Silver Bell's power",
    points: 3,
    type: 'progression',
    conditions: $(
        flagCheck(0x1, 0x0, 0x2, 'Bit0', 0x738),
    ),
})

set.addAchievement({
    title: "Ascend of the Cursed Village",
    description: "Restore Nirulag Village",
    points: 3,
    type: 'progression',
    conditions: $(
        flagCheck(0x0, 0x9, 0x4, 'Bit1', 0x738),
    ),
})

set.addAchievement({
    title: "Breaker of Arlem's Curse",
    description: "Find a way passed cursed barrier of Arlem Castle",
    points: 2,
    type: 'progression',
    conditions: $(
        selectSave(),
        ['', 'Mem', '8bit', 0x071d, '=', 'Value', '', 0x17],
        position(0x0, 0xC, 0x0, 'Delta'),
        position(0x1, 0x7, 0x3),
    ),
})

set.addAchievement({
    title: "Bearer of Unveiled Destiny",
    description: "Trade for the Ring of Truth",
    points: 2,
    type: 'progression',
    conditions: $(
        flagCheck(0x1, 0x6, 0x0, 'Bit1', 0x735),
    ),
})

set.addAchievement({
    title: "Purity of the Blade",
    description: "Defeat the Assassin without using any magic",
    points: 10,
    type: 'missable',
    conditions: $(
        position(0x1, 0x1, 0x2),
        battle(0xf),
        ['AndNext', 'Delta', '8bit', 0x60, '=', 'Value', '', 0x0],
        ['', 'Mem', '8bit', 0x60, '=', 'Value', '', 0x1, 1],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0x0],
        selectSave(),
        ['ResetIf', 'Delta', '8bit', 0x72a, '>', 'Mem', '8bit', 0x72a],
        ['AndNext', 'Delta', '8bit', 0x60, '=', 'Value', '', 0x1],
        ['Trigger', 'Mem', '8bit', 0x60, '=', 'Value', '', 0x0],
    ),
})

set.addAchievement({
    title: "Silencer of the Hidden Threat",
    description: "Kill the Assassin",
    points: 5,
    type: 'progression',
    conditions: $(
        flagCheck(0x1, 0x1, 0x2, 'Bit7', 0x738),
    ),
})

set.addAchievement({
    title: "Descend into the Realm of Damnation",
    description: "Enter the world of Len for the first time",
    points: 5,
    type: 'progression',
    conditions: $(
        selectSave(),
        ['', 'Mem', '8bit', 0x71d, '=', 'Value', '', 0x18],
        selectSave(),
        ['OrNext', 'Delta', '8bit', 0x71e, '=', 'Value', '', 0x0],
        selectSave(),
        ['', 'Delta', '8bit', 0x71e, '=', 'Value', '', 0x1],
        position(0x2, 0x7, 0x0),
    ),
})

set.addAchievement({
    title: "Through the Veil of Len",
    description: "Make it passed the Northeast Pass in Len",
    points: 10,
    type: 'progression',
    conditions: $(
        position(0x3, 0xB, 0x5, 'Delta'),
        position(0x2, 0xD, 0x1),
    ),
})

set.addAchievement({
    title: "Breaker of Infernal Flames",
    description: "Find a way to pass the lava to the Center Cave in Len",
    points: 5,
    type: 'progression',
    conditions: $(
        flagCheck(0x2, 0x8, 0x5, 'Bit3', 0x739),
    ),
})

set.addAchievement({
    title: "Savior of Alitania",
    description: "Eradicate the monster threat and save Alitania",
    points: 25,
    type: 'win_condition',
    conditions: $(
        position(0x3, 0x0, 0x0),
        ['', 'Delta', '8bit', 0x51, '=', 'Value', '', 0xff],
        ['', 'Mem', '8bit', 0x51, '=', 'Value', '', 0x1],
    ),
})

set.addAchievement({
    title: "Light of the Princess",
    description: "Receive the White Idol from the Princess",
    points: 3,
    conditions: $(
        flagCheck(0x1, 0x5, 0x2, 'Bit5', 0x737),
    ),
})

set.addAchievement({
    title: "Red Omen of Destruction",
    description: "Find the Red Idol",
    points: 3,
    conditions: $(
        flagCheck(0x1, 0x5, 0x3, 'Bit2', 0x737),
    ),
})

set.addAchievement({
    title: "Judgement of the Azure Storm",
    description: "Liberate the Blue Idol",
    points: 5,
    conditions: $(
        flagCheck(0x1, 0x9, 0x1, 'Bit3', 0x737),
    ),
})

set.addAchievement({
    title: "Dark Relic of Damnation",
    description: "Recover the Black Idol",
    points: 5,
    conditions: $(
        flagCheck(0x2, 0x5, 0x9, 'Bit4', 0x737),
    ),
})

set.addAchievement({
    title: "Golden Wrath of Radiance",
    description: "Discover the Gold Idol",
    points: 5,
    conditions: $(
        flagCheck(0x3, 0x6, 0x4, 'Bit6', 0x737),
    ),
})

set.addAchievement({
    title: "Royal Flamebearer",
    description: "Get the Fire Rod from the King of Alitania",
    points: 1,
    conditions: $(
        flagCheck(0x1, 0x4, 0x2, 'Bit4', 0x736),
    ),
})

set.addAchievement({
    title: "Stormforged Champion",
    description: "Unearth the Thunder Rod and Reed Helmet",
    points: 5,
    conditions: $(
        selectSave(),
        ['AddSource', 'Delta', 'Bit5', 0x736],
        selectSave(),
        ['', 'Delta', 'Bit7', 0x736, '=', 'Value', '', 0x1],
        selectSave(),
        ['AddSource', 'Mem', 'Bit5', 0x736],
        selectSave(),
        ['Measured', 'Mem', 'Bit7', 0x736, '=', 'Value', '', 0x2],
    ),
})

set.addAchievement({
    title: "Grace Reclaimed from Darkness",
    description: "Recover the Angel Statue from Arlem Castle",
    points: 3,
    conditions: $(
        flagCheck(0x1, 0x6, 0x3, 'Bit6', 0x736),
    ),
})

set.addAchievement({
    title: "Summoning of the Sacred Blade",
    description: "Summon forth the Sword of Kalin",
    points: 25,
    conditions: $(
        position(0x3, 0x5, 0x3),
        selectSave(),
        ['', 'Delta', '8bit', 0x730, '<', 'Value', '', 0x5],
        selectSave(),
        ['', 'Mem', '8bit', 0x730, '=', 'Value', '', 0x5],
    ),
})

set.addAchievement({
    title: "Silver Against the Abyss",
    description: "Purchase the Silver Mail",
    points: 5,
    conditions: $(
        position(0x1, 0x6, 0x1),
        selectSave(),
        ['', 'Delta', '8bit', 0x731, '<', 'Value', '', 0x9],
        selectSave(),
        ['', 'Mem', '8bit', 0x731, '=', 'Value', '', 0x9],
    ),
})

set.addAchievement({
    title: "Bulwark of the Divine",
    description: "Buy the God Shield",
    points: 5,
    conditions: $(
        position(0x1, 0x6, 0x1),
        selectSave(),
        ['', 'Delta', '8bit', 0x732, '<', 'Value', '', 0xd],
        selectSave(),
        ['', 'Mem', '8bit', 0x732, '=', 'Value', '', 0xd],
    ),
})

set.addAchievement({
    title: "First Steps of a Legend",
    description: "Reach level 5",
    points: 2,
    conditions: $(
        ['', 'Mem', '8bit', 0x63, '<=', 'Value', '', 0x2f],
        selectSave(),
        ['', 'Delta', '8bit', 0x71f, '=', 'Value', '', 4],
        selectSave(),
        ['', 'Mem', '8bit', 0x71f, '=', 'Value', '', 5],
    ),
})

set.addAchievement({
    title: "Forged by Trial",
    description: "Reach level 10",
    points: 3,
    conditions: $(
        ['', 'Mem', '8bit', 0x63, '<=', 'Value', '', 0x2f],
        selectSave(),
        ['', 'Delta', '8bit', 0x71f, '=', 'Value', '', 9],
        selectSave(),
        ['', 'Mem', '8bit', 0x71f, '=', 'Value', '', 10],
    ),
})

set.addAchievement({
    title: "Ascendant Warrior",
    description: "Reach level 20",
    points: 5,
    conditions: $(
        ['', 'Mem', '8bit', 0x63, '<=', 'Value', '', 0x2f],
        selectSave(),
        ['', 'Delta', '8bit', 0x71f, '=', 'Value', '', 19],
        selectSave(),
        ['', 'Mem', '8bit', 0x71f, '=', 'Value', '', 20],
    ),
})

set.addAchievement({
    title: "Paragon of the Realm",
    description: "Reach level 30",
    points: 10,
    conditions: $(
        ['', 'Mem', '8bit', 0x63, '<=', 'Value', '', 0x2f],
        selectSave(),
        ['', 'Delta', '8bit', 0x71f, '=', 'Value', '', 29],
        selectSave(),
        ['', 'Mem', '8bit', 0x71f, '=', 'Value', '', 30],
    ),
})

set.addAchievement({
    title: "Fighting Fire with Fire",
    description: "Burn a group of 5 or more Demi-Demons with only your Sword and the Fire Rod",
    points: 10,
    conditions: $(
        itemChallenge(0xf, 0x1c),
    ),
})

set.addAchievement({
    title: "Storm and Steel",
    description: "Shock a group of 5 or more Crys-Warriors with only your Sword and the Thunder Rod",
    points: 10,
    conditions: $(
        itemChallenge(0x11, 0x1f),
    ),
})

set.addAchievement({
    title: "Scarlet Dominion",
    description: "Overpower a group of 5 or more Baarik by empowering yourself with the Red Idol and using only your Sword",
    points: 5,
    conditions: $(
        itemChallenge(0x1c, 0x22),
    ),
})

set.addAchievement({
    title: "Azure Extermination",
    description: "Squish a group of 5 or more Eye-Slimes with your Sword and the Blue Idol",
    points: 5,
    conditions: $(
        itemChallenge(0x20, 0x23),
    ),
})

set.addAchievement({
    title: "Damnation's Embrace",
    description: "Destroy a group of 5 or more Wights by slowing them down with the Black Idol and usign only your Sword",
    points: 10,
    conditions: $(
        itemChallenge(0x25, 0x24),
    ),
})

set.addAchievement({
    title: "Radiance of Retribution",
    description: "Smite a group of 5 or more Hell Angels with your Sword and the Gold Idol",
    points: 10,
    conditions: $(
        itemChallenge(0x2d, 0x26),
    ),
})

set.addAchievement({
    title: "Vanguard of the Living",
    description: "Defeat a Zombie, Skeleton, Goblin and Orc without dying",
    points: 5,
    conditions: $(
        bestiary(0x0),
        bestiary(0x1),
        bestiary(0x2),
        bestiary(0x3),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Purge of the Crawling Blight",
    description: "Defeat an Insect, Shaker, Ghoul and Gak without dying",
    points: 5,
    conditions: $(
        bestiary(0x4),
        bestiary(0x5),
        bestiary(0x6),
        bestiary(0x7),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Defender of the Sunken Vale",
    description: "Defeat a Mini, Bone Golom, Rock Lizard and Paradon without dying",
    points: 5,
    conditions: $(
        bestiary(0x8),
        bestiary(0x9),
        bestiary(0xa),
        bestiary(0xb),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Warden of the Cursed Citadel",
    description: "Defeat a Denyag, Crab Hugger, Shell Golem and Demi-Demon without dying",
    points: 10,
    conditions: $(
        bestiary(0xc),
        bestiary(0xd),
        bestiary(0xe),
        bestiary(0xf),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Conquerer of the Northern Front",
    description: "Defeat a Crys-Beast, Crys-Warrior, Lizardman and Demon without dying",
    points: 10,
    conditions: $(
        bestiary(0x10),
        bestiary(0x11),
        bestiary(0x12),
        bestiary(0x13),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Triumph over the Dune Beasts",
    description: "Defeat an Aspic, Cyclops, Sandworm and Schuback without dying",
    points: 10,
    conditions: $(
        bestiary(0x14),
        bestiary(0x15),
        bestiary(0x16),
        bestiary(0x17),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Scourge of the Pyre Beasts",
    description: "Defeat a Lava-Creature, Gargoyle, Hydra and Dragonette without dying",
    points: 10,
    conditions: $(
        bestiary(0x18),
        bestiary(0x19),
        bestiary(0x1a),
        bestiary(0x1b),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Champion of the Core",
    description: "Defeat a Baarik, Neeluroolu, Flydra and Wyvern without dying",
    points: 10,
    conditions: $(
        bestiary(0x1c),
        bestiary(0x1d),
        bestiary(0x1e),
        bestiary(0x1f),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Hunter of the Crawling Depths",
    description: "Defeat an Eye-Slime, Jyaggo, Slime Eater and Chiru without dying",
    points: 10,
    conditions: $(
        bestiary(0x20),
        bestiary(0x21),
        bestiary(0x22),
        bestiary(0x23),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Bane of the Shadowed Dead",
    description: "Defeat a Spirit, Wight, Strooper and Rockgal without dying",
    points: 10,
    conditions: $(
        bestiary(0x24),
        bestiary(0x25),
        bestiary(0x26),
        bestiary(0x27),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Breaker of the Titanic Guard",
    description: "Defeat a Jaa, Bone Wolf, Gnoll and Colossus without dying",
    points: 10,
    conditions: $(
        bestiary(0x28),
        bestiary(0x29),
        bestiary(0x2a),
        bestiary(0x2b),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

set.addAchievement({
    title: "Vanquisher of Hell's Dominion",
    description: "Defeat a Storm, Hell Angel, Falchist and Demon Lord without dying",
    points: 25,
    conditions: $(
        bestiary(0x2c),
        bestiary(0x2d),
        bestiary(0x2e),
        bestiary(0x2f),
        ['Measured', 'Value', '', 0, '=', 'Value', '', 1, 4],
        selectSave(),
        ['ResetIf', 'Mem', '8bit', 0x710, '=', 'Value', '', 0],
    ),
})

export default set
