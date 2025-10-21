import { AchievementSet, define as $, trigger, measured, addHits, pauseIf, andNext, measuredIf, orNext, resetNextIf, once, resetIf } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 22605, title: 'Tarzan Untamed' })

function pointerMaker(address) {
    return($(['AddAddress', 'Mem', '32bit', address, '&', 'Value', '', 0x1ffffff]))
}

function bananaPointer(chain) {
    let logic = []
    let offset
    logic.push(pointerMaker(0x6bfcd8))
    logic.push(pointerMaker(0xC))
    for (let i = 0; i < chain.length; i++) {
        if (chain[i] == 0) {
            offset = 0x0
        }
        else if (chain[i] == 4){
            offset = 0x4
        }
        else {
            break
        }
        logic.push(pointerMaker(offset))
    }
    logic.push(pointerMaker(0x18))
    return(logic)
}

function loadProtect() {
    return($(['', 'Delta', '32bit', 0x006ce164, '!=', 'Value', '', 0]))
}

function addBanana(chain) {
    return($(
        ...bananaPointer(chain),
        ['AddSource', 'Invert', 'Bit0', 0x3b9],
    ))
}

function addBananabunch(chain) {
    return($(
        ...bananaPointer(chain),
        ['AddSource', 'Invert', 'Bit0', 0x3b9, '*', 'Value', '', 5],
    ))
}

function finalBanana(chain, count) {
    return($(
        ...bananaPointer(chain),
        ['Measured', 'Invert', 'Bit0', 0x3b9, '=', 'Value', '', count],
    ))
}

function notBanana(chain) {
    return($(
        ...bananaPointer(chain),
        ['', 'Mem', 'Bit0', 0x3b9, '!=', 'Value', '', 0],
    ))
}

function istrue() {
    return($(['', 'Value', '', 1, '=', 'Value', '', 1],))
}

function isfalse() {
    return($(['', 'Value', '', 0, '=', 'Value', '', 1],))
}

function unlockCheck(address) {
    return($(
        ['', 'Delta', '8bit', address, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', address, '=', 'Value', '', 1],
    ))
}

function unlockProtect() {
    return($(
        activeMode(0),
    ))
}

function levelEnd() {
    return($(
        ['', 'Delta', '8bit', 0x004c5b38, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x004c5b38, '=', 'Value', '', 1],
    ))
}

function retry() {
    return($(
        ['', 'Delta', '8bit', 0x004c5b38, '=', 'Value', '', 1],
        ['', 'Mem', '8bit', 0x004c5b38, '=', 'Value', '', 0],
    )) 
}

function restart() {
    return($(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
    )) 
}

function resetOnDeath() {
    return($(
        pointerMaker(0x004c5b98),
        ['ResetIf', 'Mem', '8bit', 0x160, '=', 'Value', '', 0],
    ))
}

function check30fps() {
    return($(
        ['AndNext', 'Mem', '8bit', 0x006ad8b8, '=', 'Value', '', 1],
    ))
}

function check60fps() {
    return($(
        ['', 'Mem', '8bit', 0x006ad8b8, '=', 'Value', '', 0],
    ))
}

function timer() {
    return($(
        ['', 'Delta', '32bit', 0x4c541c, '!=', 'Mem', '32bit', 0x4c541c],
    ))
}

function graceperiod() {
    return($(
        ['PauseIf', 'Mem', '8bit', 0x004c5b18, '=', 'Value', '', 1],
    ))
}

function pausetimer() {
    return($(
        ['PauseIf', 'Mem', '8bit', 0x8dace0, '=', 'Value', '', 1],
    ))
}

function activeLevel(level) {
    return($(['', 'Mem', '32bit', 0x009116b4, '=', 'Value', '', level],))
}

function activeMode(mode) {
    return($(['', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', mode],))
}

function previousMode(mode) {
    return($(['AndNext', 'Delta', '8bit', 0x00f7c904, '=', 'Value', '', mode],))
}

function gameplayMode() {
    return($(
        ['OrNext', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 1],
        ['OrNext', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 2],
        ['OrNext', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 3],
        ['', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 4],
    ))
}

function filmsCollected(films) {
    return($(
        ['', 'Delta', '8bit', 0x00fbac74, '<', 'Value', '', films],
        ['', 'Mem', '8bit', 0x00fbac74, '>=', 'Value', '', films],
    ))
}

function bungeeComplete() {
    return($(
        ['AddSource', 'Value', '', 1],
        ['', 'Delta', '8bit', 0x00fbac74, '=', 'Mem', '8bit', 0x00fbac74],
    ))
}

function superScore(score) {
    return($(['', 'Mem', '32bit', 0x00fbabec, '>=', 'Value', '', score],))
}

function skiMove(move) {
    return($(['', 'Mem', '8bit', 0x00fbac48, '=', 'Value', '', move],))
}

function superChallenge(level, score) {
    return($(
        activeLevel(level),
        activeMode(modes.super),
        superScore(score),
        levelEnd(),
    ))
}

const levels = {
    level1: 0xbe,
    level2: 0xbf,
    level3: 0xc0,
    boss1: 0xc1,
    bungee1: 0xc2,
    level4: 0xc3,
    level5: 0xc4,
    level6: 0xc5,
    boss2: 0xc6,
    bungee2: 0xc7,
    level7: 0xc8,
    level8: 0xc9,
    level9: 0xca,
    boss3: 0xcb,
    bungee3: 0xcc,
}

const modes = {
    menu: 0,
    story: 1,
    score: 2,
    speed: 3,
    super: 4,
}

set.addAchievement({
    title: "Back to the Asylum, Mr. Wolff",
    description: "Defeat Wolff and save Tantor",
    points: 2,
    type: "progression",
    conditions: $(
        activeLevel(levels.boss1),
        activeMode(modes.story),
        levelEnd(),
    )
})

set.addAchievement({
    title: "Why Did It Have to Be Crocodiles?",
    description: "Escape from the crocodile and continue your pursuit",
    points: 3,
    type: "progression",
    conditions: $(
        activeLevel(levels.boss2),
        activeMode(modes.story),
        levelEnd(),
    )
})

set.addAchievement({
    title: "The Cost of Greed",
    description: "Defeat Oswald Gardner and Wolff and save Jane",
    points: 5,
    type: "win_condition",
    conditions: $(
        activeLevel(levels.boss3),
        activeMode(modes.story),
        levelEnd(),
    )
})

set.addAchievement({
    title: "What Are These Used For?",
    description: "Collect 20 film reels",
    points: 2,
    conditions: $(
        filmsCollected(20),
        levelEnd(),
    )
})

set.addAchievement({
    title: "The Elephant Graveyard!",
    description: "Collect 45 film reels",
    points: 5,
    conditions: $(
        filmsCollected(45),
        levelEnd(),
    )
})

set.addAchievement({
    title: "The Savage Ape-Man",
    description: "Collect all 75 film reels",
    points: 10,
    conditions: $(
        filmsCollected(75),
        levelEnd(),
    )
})

set.addAchievement({
    title: "Have You Seen the Children?",
    description: "Save all baby apes in the jungle and unlock Waterfall Plunge",
    points: 1,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x00956424),
    )
})

set.addAchievement({
    title: "Hello Child!",
    description: "Save all baby apes in the swamp and unlock Over the Edge",
    points: 2,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x0095de04),
    )
})

set.addAchievement({
    title: "Thank Goodness",
    description: "Save all baby apes in the caves and unlock Cavern Drop",
    points: 3,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x009569e4),
    )
})

set.addAchievement({
    title: "The Gorillas' Challenge",
    description: "Complete the gorillas' bungee jump challenge",
    points: 1,
    conditions: $(
        activeLevel(levels.bungee1),
        bungeeComplete(),
        levelEnd(),
    )
})

set.addAchievement({
    title: "The Young Gorillas' Challenge",
    description: "Complete the young gorillas' bungee jump challenge",
    points: 2,
    conditions: $(
        activeLevel(levels.bungee2),
        bungeeComplete(),
        levelEnd(),
    )
})

set.addAchievement({
    title: "The Baboons' Challenge",
    description: "Complete the baboons' bungee jump challenge",
    points: 4,
    conditions: $(
        activeLevel(levels.bungee3),
        bungeeComplete(),
        levelEnd(),
    )
})

set.addAchievement({
    title: "S-S-S-Stylish!!!",
    description: "Collect 15000 points in a single trick during Jungle Exploration",
    points: 10,
    conditions: $(
        ['OrNext', 'Mem', '32bit', 0x009116b4, '=', 'Value', '', levels.level1],
        ['OrNext', 'Mem', '32bit', 0x009116b4, '=', 'Value', '', levels.level4],
        ['OrNext', 'Mem', '32bit', 0x009116b4, '=', 'Value', '', levels.level6],
        ['OrNext', 'Mem', '32bit', 0x009116b4, '=', 'Value', '', levels.level7],
        ['', 'Mem', '32bit', 0x009116b4, '=', 'Value', '', levels.level9],
        gameplayMode(),
        ['', 'Mem', '8bit', 0x004c5b18, '=', 'Value', '', 0],
        ['', 'Delta', '32bit', 0x008dca68, '<', 'Value', '', 15000],
        ['', 'Mem', '32bit', 0x008dca68, '>=', 'Value', '', 15000],
    )
})

set.addAchievement({
    title: "A Peaceful Stroll Through the Jungle",
    description: "Finish Free the Young in Story Mode without getting hit or dying",
    points: 10,
    conditions: $(
        activeLevel(levels.level1),
        previousMode(0),
        once(activeMode(1)),
        pointerMaker(0x004c5b98),
        ['ResetIf', 'Mem', '8bit', 0x160, '<', 'Delta', '8bit', 0x160],
        ['ResetIf', 'Mem', '8bit', 0x8da488, '<', 'Delta', '8bit', 0x8da488],
        resetIf(activeMode(0)),
        trigger(levelEnd()),
    )
})

set.addAchievement({
    title: "Disgusting, Soggy Bananas!",
    description: "Finish Surf for Terk without collecting any bananas (quit level to retry)",
    points: 10,
    conditions: $(
        activeLevel(levels.level2),
        gameplayMode(),
        notBanana("/"),
        notBanana("4400"),
        notBanana("0400"),
        notBanana("0444"),
        notBanana("4000"),
        notBanana("404"),
        notBanana("4044"),
        notBanana("4"),
        notBanana("44000"),
        notBanana("400"),
        notBanana("4004"),
        notBanana("044"),
        notBanana("0440"),
        notBanana("04"),
        notBanana("0404"),
        notBanana("40"),
        notBanana("4040"),
        notBanana("040"),
        trigger(levelEnd()),
    )
})

set.addAchievement({
    title: "Time to Look Back",
    description: "Finish Hang-Sliding in Story Mode without looking forward for more than 50 seconds",
    points: 10,
    conditions: { core:
    $(
        activeLevel(levels.level3),
        ['AndNext', 'Delta', '8bit', 0x00fbac48, '=', 'Value', '', 0x12],
        ['OrNext', 'Mem', '8bit', 0xfbac48, '!=', 'Value', '', 0x12, 1],
        ['AndNext', 'Delta', '8bit', 0x00f7c904, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 1, 1],
        resetIf(activeMode(0)),
        resetIf(skiMove(0x12)),
        ['AndNext', 'Delta', '8bit', 0x004c5b38, '=', 'Value', '', 0],
        ['Trigger', 'Mem', '8bit', 0x004c5b38, '=', 'Value', '', 1],
    ),
    alt1: $(
        pauseIf(skiMove(0x7)),
        pauseIf(skiMove(0xe)),
        graceperiod(),
        andNext(check30fps()),
        addHits(timer()),
        ['ResetIf', 'Delta', '32bit', 0x4c541c, '!=', 'Mem', '32bit', 0x4c541c, 3000],
    ),
    alt2: $(
        istrue(),
    ),
}
})

set.addAchievement({
    title: "Getting Some Bananas for Tantor",
    description: "Finish Hang-Sliding with all 30 bananas collected in one run (quit level to retry)",
    points: 5,
    conditions: $(
        measuredIf(activeLevel(levels.level3)),
        ['AndNext', 'Delta', '8bit', 0x00f7c904, '=', 'Value', '', 0],
        ['MeasuredIf', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 1, 1],
        resetIf(skiMove(0x12)),
        addBananabunch("0444"),
        addBananabunch("/"),
        addBananabunch("4004"),
        addBanana("4"),
        addBanana("0"),
        addBanana("0400"),
        addBanana("4044"),
        addBanana("040"),
        addBanana("04"),
        addBanana("0404"),
        addBanana("0440"),
        addBanana("044"),
        addBanana("444004"),
        addBanana("404"),
        addBanana("4000"),
        addBanana("400"),
        addBanana("40"),
        finalBanana("4040", 30),
        levelEnd(),
    )
})

set.addAchievement({
    title: "Time to Research Those Masks",
    description: "Finish In Search of Porter in Story Mode with all 5 extra live masks collected in one run",
    points: 5,
    conditions: $(
        measuredIf(activeLevel(levels.level4)),
        measuredIf(activeMode(1)),
        addBanana("44044440"),
        addBanana("4404444"),
        addBanana("440444440"),
        addBanana("440444444"),
        finalBanana("440004", 5),
        levelEnd(),
    )
})

set.addAchievement({
    title: "Save These Bananas from the Swamp",
    description: "Finish Skiing the Swamp in Story Mode with all 17 bananas collected in one run (quit level to retry)",
    points: 5,
    conditions: $(
        measuredIf(activeLevel(levels.level5)),
        ['AndNext', 'Delta', '8bit', 0x00f7c904, '=', 'Value', '', 0],
        ['MeasuredIf', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 1, 1],
        resetIf(skiMove(0x12)),
        addBananabunch("0404"),
        addBanana("0"),
        addBanana("0400"),
        addBanana("4000"),
        addBanana("04"),
        addBanana("440400"),
        addBanana("0440"),
        addBanana("44040"),
        addBanana("044"),
        addBanana("0444"),
        addBanana("/"),
        addBanana("40"),
        finalBanana("4040", 17),
        levelEnd(),
    )
})

set.addAchievement({
    title: "What is That Smell?!",
    description: "Finish Skiing the Swamp in Story Mode without looking forward for more than 60 seconds",
    points: 10,
    conditions: { core:
    $(
        activeLevel(levels.level5),
        ['AndNext', 'Delta', '8bit', 0x00fbac48, '=', 'Value', '', 0x12],
        ['OrNext', 'Mem', '8bit', 0xfbac48, '!=', 'Value', '', 0x12, 1],
        ['AndNext', 'Delta', '8bit', 0x00f7c904, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x00f7c904, '=', 'Value', '', 1, 1],
        resetIf(activeMode(0)),
        resetIf(skiMove(0x12)),
        ['AndNext', 'Delta', '8bit', 0x004c5b38, '=', 'Value', '', 0],
        ['Trigger', 'Mem', '8bit', 0x004c5b38, '=', 'Value', '', 1],
    ),
    alt1: $(
        pauseIf(skiMove(0x7)),
        pauseIf(skiMove(0xe)),
        graceperiod(),
        andNext(check30fps()),
        addHits(timer()),
        ['ResetIf', 'Delta', '32bit', 0x4c541c, '!=', 'Mem', '32bit', 0x4c541c, 3600],
    ),
    alt2: $(
        istrue(),
    ),
}
})

set.addAchievement({
    title: "No Bananas for the Hunters",
    description: "Finish Hunter's Trail with all 40 bananas collected in one run",
    points: 5,
    conditions: $(
        measuredIf(activeLevel(levels.level6)),
        measuredIf(gameplayMode()),
        addBananabunch("/"),
        addBananabunch("4000"),
        addBananabunch("40404"),
        addBananabunch("4040"),
        addBanana("440400"),
        addBanana("440"),
        addBanana("440044"),
        addBanana("44004"),
        addBanana("4400"),
        addBanana("440040"),
        addBanana("440004"),
        addBanana("44000"),
        addBanana("440000"),
        addBanana("4"),
        addBanana("404"),
        addBanana("4044"),
        addBanana("40440"),
        addBanana("40444"),
        addBanana("40000"),
        addBanana("0444"),
        addBanana("044"),
        addBanana("44040"),
        addBanana("440404"),
        finalBanana("4404", 40),
        levelEnd(),
    )
})

set.addAchievement({
    title: "Sore Shoulder",
    description: "Finish Into the Caverns in Story Mode without throwing any spears",
    points: 5,
    conditions: $(
        activeLevel(levels.level7),
        previousMode(0),
        once(activeMode(1)),
        ['ResetIf', 'Mem', '8bit', 0x008dc428, '<', 'Delta', '8bit', 0x008dc428],
        resetIf(activeMode(0)),
        trigger(levelEnd()),
    )
})

set.addAchievement({
    title: "Many Masks in This Cave",
    description: "Finish Into the Caverns in Story Mode with all 5 masks collected in one run",
    points: 5,
    conditions: $(
        measuredIf(activeLevel(levels.level7)),
        measuredIf(activeMode(1)),
        addBanana("4404404"),
        addBanana("4000"),
        addBanana("44044"),
        addBanana("4404440"),
        finalBanana("44044400", 5),
        levelEnd(),
    )
})

set.addAchievement({
    title: "Underground Bananas Don't Grow Well",
    description: "Finish Underground Rapids without collecting any bananas (quit level to restart)",
    points: 10,
    conditions: $(
        activeLevel(levels.level8),
        gameplayMode(),
        notBanana("0400"),
        notBanana("40040"),
        notBanana("4000"),
        notBanana("40004"),
        notBanana("0404"),
        notBanana("400"),
        notBanana("40044"),
        notBanana("44004400"),
        notBanana("4400"),
        notBanana("40404"),
        notBanana("4400400"),
        notBanana("440040"),
        notBanana("0"),
        notBanana("044"),
        notBanana("04"),
        notBanana("0044"),
        notBanana("440004"),
        notBanana("4400404"),
        notBanana("44004"),
        notBanana("040"),
        notBanana("0444"),
        notBanana("40000"),
        trigger(levelEnd()),
    )
})

set.addAchievement({
    title: "No Pro Wrestling Career for Tarzan",
    description: "Finish the long path of Subterranean Search in Story Mode without struggling with enemies or webs more than twice",
    points: 5,
    conditions: $(
        activeLevel(levels.level9),
        previousMode(0),
        once(activeMode(1)),
        ['AndNext', 'Delta', '8bit', 0x008dc428, '!=', 'Value', '', 0x17],
        ['AddHits', 'Mem', '8bit', 0x008dc428, '=', 'Value', '', 0x17],
        ['AndNext', 'Delta', '8bit', 0x008dc428, '!=', 'Value', '', 0x25],
        ['ResetIf', 'Mem', '8bit', 0x008dc428, '=', 'Value', '', 0x25, 2],
        resetIf(activeMode(0)),
        ['Trigger', 'Mem', '8bit', 0x004ecc70, '=', 'Value', '', 0x28],
        trigger(levelEnd()),
    )
})

set.addAchievement({
    title: "Better be Prepared for the Graveyard",
    description: "Finish Subterranean Search in Story Mode with all 5 masks collected in one run",
    points: 5,
    conditions: $(
        measuredIf(activeLevel(levels.level9)),
        measuredIf(activeMode(1)),
        addBanana("40444"),
        addBanana("44000"),
        addBanana("404"),
        addBanana("4"),
        finalBanana("440000", 5),
        levelEnd(),
    )
})

set.addAchievement({
    title: "Triple Jump!",
    description: "Unlock the Ground Tumble trick move",
    points: 2,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x008220e4),
    )
})

set.addAchievement({
    title: "Scaring off the Competition",
    description: "Unlock the Scarecrow trick move",
    points: 2,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x0096cea4),
    )
})

set.addAchievement({
    title: "Let's Uncork this Trick",
    description: "Unlock the Corkscrew trick move",
    points: 2,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x00966064),
    )
})

set.addAchievement({
    title: "Lady Greystroke",
    description: "Unlock Jane",
    points: 3,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x008229e4),
    )
})

set.addAchievement({
    title: "Professor Archimedes Q. Porter",
    description: "Unlock Professor Porter",
    points: 3,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x008229a4),
    )
})

set.addAchievement({
    title: "Time for Terk's Tale",
    description: "Unlock Terk",
    points: 3,
    conditions: $(
        loadProtect(),
        unlockProtect(),
        unlockCheck(0x00822be4),
    )
})

set.addAchievement({
    title: "Saving the Children, in Style!",
    description: "Finish the Free the Young Super Challenge with 35000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level1, 35000),
    )
})

set.addAchievement({
    title: "Showing Terk a Real Surfer",
    description: "Finish the Surf for Terk Super Challenge with 15000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level2, 15000),
    )
})

set.addAchievement({
    title: "Super Lake Crossing",
    description: "Finish the Hang-Sliding Super Challenge with 15000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level3, 15000),
    )
})

set.addAchievement({
    title: "Time to Research These Moves",
    description: "Finish the In Search for Porter Super Challenge with 40000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level4, 40000),
    )
})

set.addAchievement({
    title: "Can't Wait to Get Out of This Place",
    description: "Finish the Skiing the Swamp Super Challenge with 35000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level5, 15000),
    )
})

set.addAchievement({
    title: "Outrunning the Bullets",
    description: "Finish the Hunter's Trail Super Challenge with 35000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level6, 35000),
    )
})

set.addAchievement({
    title: "I'm Ape-Man!",
    description: "Finish the Into the Caverns Super Challenge with 40000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level7, 40000),
    )
})

set.addAchievement({
    title: "The Underground Waterslide",
    description: "Finish the Underground Rapids Super Challenge with 15000 points or more",
    points: 10,
    conditions: $(
        superChallenge(levels.level8, 15000),
    )
})

set.addAchievement({
    title: "Showing the Real Tarzan",
    description: "Finish the Subterranean Search Super Challenge with 35000 points or more",
    points: 25,
    conditions: $(
        superChallenge(levels.level9, 35000),
    )
})


set.addLeaderboard({
    title: 'Hang-Sliding Minimal Forward Skiing Challenge',
    description: 'Finish Hang-Sliding in Story Mode while looking forward as little as possible',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: {core: $(
            activeLevel(levels.level3),
        ),
        alt1: $(
            previousMode(0),
            activeMode(1),
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x00fbac48, '=', 'Value', '', 0x12],
            ['', 'Mem', '8bit', 0xfbac48, '!=', 'Value', '', 0x12],
        )
        },
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0xfbac48, '=', 'Value', '', 0x12],
            activeMode(0),
        ),
        submit: $(
            levelEnd()
        ),
        value: $(
            pauseIf(skiMove(0x7)),
            pauseIf(skiMove(0xe)),
            graceperiod(),
            andNext(check30fps()),
            addHits(timer()),
            ['Measured', 'Delta', '32bit', 0x4c541c, '!=', 'Mem', '32bit', 0x4c541c],
        ),
    }
})

set.addLeaderboard({
    title: 'Skiing the Swamp Minimal Forward Skiing Challenge',
    description: 'Finish Skiing the Swamp in Story Mode while looking forward as little as possible',
    lowerIsBetter: true,
    type: 'FRAMES',
    conditions: {
        start: {core: $(
            activeLevel(levels.level5),
        ),
        alt1: $(
            previousMode(0),
            activeMode(1),
        ),
        alt2: $(
            ['', 'Delta', '8bit', 0x00fbac48, '=', 'Value', '', 0x12],
            ['', 'Mem', '8bit', 0xfbac48, '!=', 'Value', '', 0x12],
        )
        },
        cancel: $(
            ['OrNext', 'Mem', '8bit', 0xfbac48, '=', 'Value', '', 0x12],
            activeMode(0),
        ),
        submit: $(
            levelEnd()
        ),
        value: $(
            pauseIf(skiMove(0x7)),
            pauseIf(skiMove(0xe)),
            graceperiod(),
            andNext(check30fps()),
            addHits(timer()),
            ['Measured', 'Delta', '32bit', 0x4c541c, '!=', 'Mem', '32bit', 0x4c541c],
        ),
    }
})

set.addLeaderboard({
  title: 'Free the Young Trick Score Challenge High Score',
  description:
    'Get the highest score in the Free the Young Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 190],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139329,
})

set.addLeaderboard({
  title: 'Free the Young Speed Challenge Fastest Time',
  description: 'Finish the Free the Young Speed Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 190],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139330,
})

set.addLeaderboard({
  title: 'Free the Young Super Challenge High Score',
  description: 'Get the highest score in the Free the Young Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 190],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139331,
})

set.addLeaderboard({
  title: 'Surf for Terk Trick Score Challenge High Score',
  description:
    'Get the highest score in the Surf for Terk Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 191],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139332,
})

set.addLeaderboard({
  title: 'Surf for Terk Stop Clock Challenge Fastest Time',
  description:
    'Finish the Surf for Terk Stop Clock Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 191],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        pausetimer(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139333,
})

set.addLeaderboard({
  title: 'Surf for Terk Super Challenge High Score',
  description: 'Get the highest score in the Surf for Terk Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 191],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139334,
})

set.addLeaderboard({
  title: 'Hang-Sliding Trick Score Challenge High Score',
  description:
    'Get the highest score in the Hang-Sliding Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 192],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139335,
})

set.addLeaderboard({
  title: 'Hang-Sliding Stop Clock Challenge Fastest Time',
  description:
    'Finish the Hang-Sliding Stop Clock Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 192],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
        alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        pausetimer(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139336,
})

set.addLeaderboard({
  title: 'Hang-Sliding Super Challenge High Score',
  description: 'Get the highest score in the Hang-Sliding Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 192],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139337,
})

set.addLeaderboard({
  title: 'In Search of Porter Trick Score Challenge High Score',
  description:
    'Get the highest score in the In Search of Porter Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139338,
})

set.addLeaderboard({
  title: 'In Search of Porter Speed Challenge Fastest Time',
  description:
    'Finish the In Search of Porter Speed Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 195],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139339,
})

set.addLeaderboard({
  title: 'In Search of Porter Super Challenge High Score',
  description:
    'Get the highest score in the In Search of Porter Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 195],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139340,
})

set.addLeaderboard({
  title: 'Skiing the Swamp Trick Score Challenge High Score',
  description:
    'Get the highest score in the Skiing the Swamp Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 196],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139341,
})

set.addLeaderboard({
  title: 'Skiing the Swamp Stop Clock Challenge Fastest Time',
  description:
    'Finish the Skiing the Swamp Stop Clock Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 196],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        pausetimer(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139342,
})

set.addLeaderboard({
  title: 'Skiing the Swamp Super Challenge High Score',
  description: 'Get the highest score in the Skiing the Swamp Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 196],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139343,
})

set.addLeaderboard({
  title: `Hunter's Trail Trick Score Challenge High Score`,
  description: `Get the highest score in the Hunter's Trail Trick Score Challenge`,
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 197],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139344,
})

set.addLeaderboard({
  title: `Hunter's Trail Speed Challenge Fastest Time`,
  description: `Finish the Hunter's Trail Speed Challenge as fast as possible`,
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 197],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139345,
})

set.addLeaderboard({
  title: `Hunter's Trail Super Challenge High Score`,
  description: `Get the highest score in the Hunter's Trail Super Challenge`,
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 197],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139346,
})

set.addLeaderboard({
  title: 'Into the Caverns Trick Score Challenge High Score',
  description:
    'Get the highest score in the Into the Caverns Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 200],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139347,
})

set.addLeaderboard({
  title: 'Into the Caverns Speed Challenge Fastest Time',
  description:
    'Finish the Into the Caverns Speed Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 200],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139348,
})

set.addLeaderboard({
  title: 'Into the Caverns Super Challenge High Score',
  description: 'Get the highest score in the Into the Caverns Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 200],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139349,
})

set.addLeaderboard({
  title: 'Underground Rapids Trick Score Challenge High Score',
  description:
    'Get the highest score in the Underground Rapids Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 201],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139350,
})

set.addLeaderboard({
  title: 'Underground Rapids Stop Clock Challenge Fastest Time',
  description:
    'Finish the Underground Rapids Stop Clock Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 201],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        pausetimer(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139351,
})

set.addLeaderboard({
  title: 'Underground Rapids Super Challenge High Score',
  description:
    'Get the highest score in the Underground Rapids Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 201],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139352,
})

set.addLeaderboard({
  title: 'Subterranean Search Trick Score Challenge High Score',
  description:
    'Get the highest score in the Subterranean Search Trick Score Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 202],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 2],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139353,
})

set.addLeaderboard({
  title: 'Subterranean Search Speed Challenge Fastest Time',
  description:
    'Finish the Subterranean Search Speed Challenge as fast as possible',
  lowerIsBetter: false,
  type: 'FRAMES',
  conditions: {
    start: {
      core: $(
        ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 202],
        ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 3],
      ),
      alt1: $(['', 'Delta', '8bit', 0xf7c904, '=', 'Value', '', 0]),
      alt2: $(
        ['', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 0],
        ['', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ),
      alt3: $(retry()),
    },
    cancel: $(
      ['AndNext', 'Delta', '8bit', 0x49fd40, '=', 'Value', '', 1],
      ['OrNext', 'Mem', '8bit', 0x49fd40, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0],
    ),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(
        graceperiod(),
        andNext(check30fps()),
        addHits(timer()),
        measured(timer()),
    )
  },
  id: 139354,
})

set.addLeaderboard({
  title: 'Subterranean Search Super Challenge High Score',
  description:
    'Get the highest score in the Subterranean Search Super Challenge',
  lowerIsBetter: false,
  type: 'SCORE',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x9116b4, '=', 'Value', '', 202],
      ['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 4],
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    cancel: $(['', 'Mem', '8bit', 0xf7c904, '=', 'Value', '', 0]),
    submit: $(
      ['', 'Delta', '8bit', 0x4c5b38, '=', 'Value', '', 0],
      ['', 'Mem', '8bit', 0x4c5b38, '=', 'Value', '', 1],
    ),
    value: $(['Measured', 'Mem', '32bit', 0xfbabec]),
  },
  id: 139355,
})

export default set
