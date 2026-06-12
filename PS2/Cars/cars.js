import { AchievementSet, define as $, measured, andNext, once, trigger, resetIf, orNext, measuredIf, resetNextIf, pauseIf } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 20525, title: 'Cars' })

const RadiatorSpringsGrandPrix = 0x315f3100
const RadiatorCapCircuit = 0x315f3200
const DocsLessonPowerslide = 0x315f3400
const DocsChallenge = 0x315f3500
const TractorTipping = 0x315f3600
const PalmMileSpeedway = 0x315f3800
const SallysSunshineCircuit = 0x325f3000
const BoostinwithFillmore = 0x325f3300
const LuigitotheRescue = 0x325f3400
const NorthDesertDash = 0x325f3500
const SargesBootCamp = 0x325f3600
const SargesOffRoadChallenge = 0x325f3700
const MotorSpeedwayoftheSouth = 0x325f3131
const MatersBackwardsLesson = 0x335f3200
const SheriffsChase = 0x335f3400
const SheriffsHotPursuit = 0x335f3500
const OrnamentValleyCircuit = 0x335f3600
const RustbucketRaceoRama = 0x335f3700
const SunValleyInternationalRaceway = 0x335f3800
const SallysWheelWellSprint = 0x345f3200
const TailfinPassCircuit = 0x345f3300
const DocsCheckUp = 0x345f3700
const SmashervilleInternationalSpeedway = 0x345f3800
const MonsterTruckMayhem = 0x355f3200
const ChicksChallenge = 0x355f3300
const DelinquentRoadHazards = 0x355f3400
const HighSpeedHeist = 0x355f3600
const LightningStrikesBack = 0x355f3700
const RadiatorSpringsGP = 0x365f3100
const TailfinPassGP = 0x365f3200
const OrnamentValleyGP = 0x365f3300
const LosAngelesInternationalSpeedway = 0x365f3500
const logo = 0x6c6f676f

const McQueen = [0x4d435100, 0x4d635100, 0x4d637100, 0x6d637100]
const Mater = [0x4d617400, 0x6d617400]
const Sally = [0x53616c00, 0x73616c00]
const Doc = [0x68756400]
const Ramone = [0x72616d00]
const Flo = [0x666c6f00]
const Sheriff = [0x53686572, 0x73686572]
const Chick = [0x63686900]
const Wingo = [0x77696e00]
const Darrell = [0x64617200]
const King = [0x6b696e67]
const MonsterMcQueen = [0x4d63514d, 0x6d63716d]
const Spatula = [0x63737061]

const mipsBase = 0x00458380
const artPacks = [0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d]
const envPacks = [0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30, 0x31, 0x32, 0x33]
const delScenes = [0x00, 0x01, 0x02, 0x03, 0x04, 0x05]
const movScenes = [0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, 0x0e]
const charPack = [0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41]
const mcqPaint = [0x42, 0x43, 0x44, 0x46, 0x47, 0x48, 0x49, 0x4a, 0x4d, 0x50, 0x51, 0x52, 0xba]
const matPaint = [0x75, 0x76, 0x77, 0x78, 0x79, 0x7a]
const salPaint = [0x8b, 0x8e, 0x90]
const docPaint = [0x5e, 0x5f, 0x60, 0x61, 0x62, 0xab, 0xbc]
const ramPaint = [0xa6, 0xa7, 0xa8, 0xa9, 0xaa, 0xbb]
const floPaint = [0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b]
const sherPaint = [0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74]
const chickPaint = [0x53, 0x54, 0x55, 0x56]
const wingPaint = [0x99, 0x9a, 0x9b, 0x9c, 0x9d, 0x9e, 0x9f, 0xa0]
const darPaint = [0xa1, 0xa2, 0xa3, 0xa4, 0xa5]
const kingPaint = [0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d]
const mmcqPaint = [0xac, 0xad, 0xae, 0xb0, 0xb1, 0xb2, 0xb3, 0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9]
const cntPaint = [0x93, 0x94, 0x95, 0x96, 0x97, 0x98]

const Backwards = 0x4241434b
const BigAir = 0x42494720
const FastStart = 0x46415354
const LapLeader = 0x4c415020
const Powerslide = 0x504f5745
const SafeDriver = 0x53414645
const Shortcut = 0x53484f52
const Tilt = 0x54494c54

const Boot = 0x426f
const Menu = 0x4672
const Cutscene = 0x4353
const gameCutscene = 0x5351
const Exploration = 0x4558
const Minigame = 0x4d47
const Minigame2 = 0x534b
const Race = 0x5252

const TT1 = 0x54543132
const TT2 = 0x54543135
const TT3 = 0x54543600
const TT4 = 0x54543133
const TT5 = 0x54543900
const TT6 = 0x54543400
const TT7 = 0x54543131
const TT8 = 0x54543134

const lttr1 = 0x34484831
const lttr2 = 0x34484832
const lttr3 = 0x34484833
const lttr4 = 0x34484834
const lttr5 = 0x34484835
const lttr6 = 0x34484836
const lttr7 = 0x34484837
const lttr8 = 0x34484838

const bootcamp1 = 0x5f365f41
const bootcamp2 = 0x5f365f42
const bootcamp3 = 0x5f365f43

const DocsPowerslide = 0x5f315f34

const HP1 = 0x48503100
const HP2 = 0x48503200
const HP3 = 0x48503300
const HP4 = 0x48503400
const HP5 = 0x48503500

function pointer(offset) {
    return($(
        ['AddAddress', 'Mem', '32bit', offset],
    ))
}

function recallpointer() {
  return($(
    ['AddAddress', 'Recall', '', 0],
  ))
}

function loadprotect() {
  return($(
    ['', 'Mem', '32bit', 0x005185a8, '!=', 'Value', '', 0],
    ['', 'Mem', '32bit', 0x005185a8, '!=', 'Value', '', 0x49],
  ))
}

function buyProtect() {
  return($(
    ['', 'Mem', '32bit', 0x005185a8, '!=', 'Value', '', 0],
  ))
}

function cheatprotect() {
  return($(
    ['', 'Mem', 'Bit1', 0x52beb0, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit3', 0x52beb0, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit7', 0x52beb1, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit7', 0x52beb2, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit0', 0x52beb3, '=', 'Value', '', 0],
    ['', 'Mem', 'Bit1', 0x52beb3, '=', 'Value', '', 0],
  ))
}

function cheatsactive() {
  return($(
    ['AddSource', 'Mem', 'Bit1', 0x52beb0, '*', 'Value', '', 8], //All Cars
    ['AddSource', 'Mem', 'Bit2', 0x52beb0, '*', 'Value', '', 64], //Super fast start
    ['AddSource', 'Mem', 'Bit3', 0x52beb0, '*', 'Value', '', 16], //All races
    ['AddSource', 'Mem', 'Bit7', 0x52beb1, '*', 'Value', '', 32], //All tracks and minigames
    ['AddSource', 'Mem', 'Bit5', 0x52beb2, '*', 'Value', '', 128], //Unlimited boost
    ['AddSource', 'Mem', 'Bit7', 0x52beb2, '*', 'Value', '', 2], //All concept art
    ['AddSource', 'Mem', 'Bit0', 0x52beb3, '*', 'Value', '', 1], //All movies
    ['Measured', 'Mem', 'Bit1', 0x52beb3, '*', 'Value', '', 4], //All paint jobs
  ))
}

function startHit() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Delta', '32bit', 0x28, '=', 'Value', '', 0x0],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['', 'Mem', '32bit', 0x28, '!=', 'Value', '', 0x0, 1],
  ))
}

function glitchProtectPlus() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['', 'Mem', '32bit', 0x38, '=', 'Value', '', 113, 1],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['', 'Mem', '32bit', 0x38, '=', 'Value', '', 141, 1],
  ))
}

function resetHit() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['ResetIf', 'Mem', '32bit', 0x28, '=', 'Value', '', 0x0],
    ['ResetIf', 'Delta', '32bitBE', 0x0052bc7c, '!=', 'Mem', '32bitBE', 0x0052bc7c],
  ))
}

function glitchProtectStrict(reset = 'ResetIf', and = 'AndNext') {
  return($(
    ['AddSource', 'Value', '', 0x2],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [and, 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    ['AddSource', 'Value', '', 0x1],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [and, 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [and, 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [reset, 'Mem', '32bit', 0x38, '!=', 'Value', '', 0x0],
  ))
}

function glitchProtect(reset = 'ResetIf', and = 'AndNext') {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [and, 'Delta', '32bit', 0x70, '=', 'Value', '', 0x1],
    ['AddSource', 'Value', '', 0x2],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [and, 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    ['AddSource', 'Value', '', 0x1],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [and, 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [and, 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [reset, 'Mem', '32bit', 0x38, '!=', 'Value', '', 0x0],
  ))
}

function glitchProtectSheriffChase(reset = 'ResetIf') {
  return($(
    ['AddSource', 'Value', '', 0x2],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    ['AddSource', 'Value', '', 0x1],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Delta', '32bit', 0x38, '!=', 'Mem', '32bit', 0x38],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Delta', '32bit', 0x38, '!=', 'Value', '', 113],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Mem', '32bit', 0x38, '!=', 'Value', '', 113],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Delta', '32bit', 0x38, '!=', 'Value', '', 141],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['AndNext', 'Mem', '32bit', 0x38, '!=', 'Value', '', 141],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    [reset, 'Mem', '32bit', 0x38, '!=', 'Value', '', 0x0],
  ))
}

function timer(time) {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['', 'Mem', 'Float', 0x28, '<', 'Value', '', time],
  ))
}

function raceTimer() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
  ))
}

function lead(time) {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x4),
    ['', 'Mem', 'Float', 0x2c, '>', 'Value', '', time],
  ))
}

function level(levelid) {
  return($(
    ['', 'Mem', '32bitBE', 0x0052bc7c, '=', 'Value', '', levelid],
  ))
}

function levelQuit() {
  return($(
    ['', 'Delta', '32bitBE', 0x0052bc7c, '!=', 'Mem', '32bitBE', 0x0052bc7c],
  ))
}

function finish() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['', 'Mem', '32bit', 0x40, '<=', 'Value', '', 3],
  ))
}

function win() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    ['', 'Mem', '32bit', 0x40, '=', 'Value', '', 1],
  ))
}

function difficulty(diff) {
  return($(
    pointer(0x0048d990),
    pointer(0x31c),
    ['', 'Mem', '32bit', 0x18, '=', 'Value', '', diff],
  ))
}

function noPractice() {
  return($(
    pointer(0x0048d990),
    pointer(0x31c),
    ['', 'Mem', '32bit', 0x18, '!=', 'Value', '', 3],
  ))
}

function lap(hits = 0) {
  return($(
    ['AddSource', 'Value', '', 1],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    pointer(0xc),
    pointer(0x80),
    ['', 'Delta', '32bit', 0x3c, '=', 'Mem', '32bit', 0x3c, hits],
  ))
}

function finishRace(laps) {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    pointer(0xc),
    pointer(0x80),
    ['', 'Delta', '32bit', 0x3c, '=', 'Value', '', laps - 1],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    pointer(0xc44),
    pointer(0x54),
    pointer(0x0),
    pointer(0xc),
    pointer(0x80),
    ['', 'Mem', '32bit', 0x3c, '=', 'Value', '', laps],
  ))
}

function pitstopEnd() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Delta', '32bit', 0xc74, '=', 'Value', '', 0],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Mem', '32bit', 0xc74, '=', 'Value', '', 2],
  ))
}

function character(characterID) {
  let logic = []
  characterID.forEach((ID, index) => {
  const isLast = index === characterID.length - 1;
  if (!isLast) {
    logic.push($(['OrNext', 'Mem', '32bitBE', 0x007ed864, '=', 'Value', '', ID],))
  } else {
    logic.push($(['', 'Mem', '32bitBE', 0x007ed864, '=', 'Value', '', ID],))
  }
});
  return(logic)
}

function postcards(count) {
  let logic = []
  let upper
  let lower
  let upperminus
  let lowerminus
  let chain = $(
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x8398),
  )
  if (count.toString().length == 1) {
    upper = count.toString().charCodeAt(0)
    lower = 0x2f
  }
  else if (count.toString().length == 2) {
    upper = count.toString().charCodeAt(0)
    lower = count.toString().charCodeAt(1)
  }
  if (upper == 0x31) {
    upperminus = 0x39
  }
  else {
    upperminus = upper - 1
  }
  return($(
    chain,
    ['OrNext', 'Delta', '8bit', 0x0, '=', 'Value', '', 0x58],
    chain,
    ['', 'Delta', '8bit', 0x0, '=', 'Value', '', upperminus],
    chain,
    ['', 'Mem', '8bit', 0x1, '=', 'Value', '', lower],
    chain,
    ['', 'Mem', '8bit', 0x0, '=', 'Value', '', upper],
  ))
}

function levelscore(score) {
  return($(
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['', 'Mem', '32bit', 0x0, '=', 'Value', '', score],
  ))
}

function trickscore(score) {
  return($(
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a54),
    ['', 'Mem', '32bitBE', 0x0, '=', 'Value', '', score],
  ))
}

function trick(move, hits = 0) {
  return($(
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a70),
    ['AndNext', 'Mem', '32bitBE', 0x0, '=', 'Value', '', move],
    pointer(0x04f7140),
    pointer(0x50),
    pointer(0x34),
    pointer(0x1c),
    pointer(0x98),
    pointer(0x110),
    ['', 'Delta', '32bit', 0x158, '<', 'Mem', '32bit', 0x158, hits],
  ))
}

function advancedTrick(move, hits = 0) {
  return($(
    pointer(0x04f7140),
    pointer(0x50),
    pointer(0x34),
    pointer(0x1c),
    pointer(0x98),
    pointer(0x110),
    ['Remember', 'Mem', '32bit', 0x158],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a70),
    ['AndNext', 'Mem', '32bitBE', 0x0, '=', 'Value', '', move],
    ['AndNext', 'Recall', '', 0x0, '<', 'Value', '', 10000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x0, '*', 'Value', '', 1000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x1, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x2, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AndNext', 'Delta', 'Lower4', 0x3, '!=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 1000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x1, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x2, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddHits', 'Mem', 'Lower4', 0x3, '=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a70),
    ['AndNext', 'Mem', '32bitBE', 0x0, '=', 'Value', '', move],
    ['AndNext', 'Recall', '', 0x0, '<', 'Value', '', 1000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x0, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x1, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AndNext', 'Delta', 'Lower4', 0x2, '!=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x1, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddHits', 'Mem', 'Lower4', 0x2, '=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a70),
    ['AndNext', 'Mem', '32bitBE', 0x0, '=', 'Value', '', move],
    ['AndNext', 'Recall', '', 0x0, '<', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x0, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AndNext', 'Delta', 'Lower4', 0x1, '!=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['', 'Mem', 'Lower4', 0x1, '=', 'Recall', '', 0, hits],
  ))
}

function advancedTrickCup(move, hits = 0) {
  return($(
    pointer(0x0048d990),
    pointer(0x320),
    pointer(0x2c),
    pointer(0x458),
    pointer(0x74),
    ['Remember', 'Mem', '32bit', 0x158],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a70),
    ['AndNext', 'Mem', '32bitBE', 0x0, '=', 'Value', '', move],
    ['AndNext', 'Recall', '', 0x0, '<', 'Value', '', 10000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x0, '*', 'Value', '', 1000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x1, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x2, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AndNext', 'Delta', 'Lower4', 0x3, '!=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 1000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x1, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x2, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddHits', 'Mem', 'Lower4', 0x3, '=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a70),
    ['AndNext', 'Mem', '32bitBE', 0x0, '=', 'Value', '', move],
    ['AndNext', 'Recall', '', 0x0, '<', 'Value', '', 1000],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x0, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x1, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AndNext', 'Delta', 'Lower4', 0x2, '!=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x1, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddHits', 'Mem', 'Lower4', 0x2, '=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x6a70),
    ['AndNext', 'Mem', '32bitBE', 0x0, '=', 'Value', '', move],
    ['AndNext', 'Recall', '', 0x0, '<', 'Value', '', 100],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Delta', 'Lower4', 0x0, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AndNext', 'Delta', 'Lower4', 0x1, '!=', 'Recall', '', 0],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 10],
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34), 
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    pointer(0x4540),
    ['', 'Mem', 'Lower4', 0x1, '=', 'Recall', '', 0, hits],
  ))
}

function drivingForwards() {
  return($(
    pointer(0x0048d990),
    pointer(0x304),
    pointer(0x38),
    pointer(0x28),
    pointer(0x2c),
    pointer(0x14),
    ['', 'Mem', 'Float', 0xeec, '=', 'Value', '', 0],
  ))  
}

function drivingBackwards() {
  return($(
    pointer(0x004ee5d0),
    pointer(0x384),
    pointer(0x30),
    pointer(0x10),
    ['', 'Mem', '32bit', 0x90, '=', 'Value', '', 1],
  ))
}

function powersliding() {
  return($(
    pointer(0x004ee5d0),
    pointer(0x384),
    pointer(0x30),
    pointer(0x10),
    ['', 'Mem', '32bit', 0x80, '=', 'Value', '', 1],
  ))
}

function tilting() {
  return($(
    pointer(0x004ee5d0),
    pointer(0x384),
    pointer(0x30),
    pointer(0x10),
    ['', 'Mem', '32bit', 0x8c, '=', 'Value', '', 1],
  ))
}

function pistonCupCharacter(characterID) {
  let logic = []
  characterID.forEach((ID, index) => {
  logic.push($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x10),
    pointer(0xc50),
  ))
  const isLast = index === characterID.length - 1;
  if (!isLast) {
    logic.push($(['OrNext', 'Mem', '32bitBE', 0x60, '=', 'Value', '', ID],))
  } else {
    logic.push($(['', 'Mem', '32bitBE', 0x60, '=', 'Value', '', ID],))
  }
});
  return(logic)
}

function boostUsed() {
  return($(
    pointer(0x004ee5d0),
    pointer(0x498),
    pointer(0x2d0),
    ['', 'Mem', 'Float', 0xc, '<', 'Delta', 'Float', 0xc],
  ))
}

function story() {
  return($(
    ['', 'Mem', '32bit', 0x007ed780, '=', 'Value', '', 0x0],
  ))
}

function shop(items, total = items.length) {
  let logic = []
  logic.push($(
    pointer(0x0048d990),
    pointer(0x310),
    ['Remember', 'Mem', '32bit', 0x40],
    ['Remember', 'Mem', '32bit', 0x00493ab4, '%', 'Recall', '', 0],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 4],
    pointer(0x0048d990),
    pointer(0x310),
    ['Remember', 'Mem', '32bit', 0x48, '+', 'Recall'],
  ))
  for (const item of items) {
    logic.push($(
      ['AddAddress', 'Recall', '', 0],
      ['AddHits', 'Mem', '32bit', 0, '=', 'Value', '', item, 1],
    ))
  }
  logic.push($(['', 'Value', '', 0x0, '=', 'Value', '', 0x1, total - 1]))
  return(logic)
}

function buy(items) {
  let logic = []
  logic.push($(
    pointer(0x0048d990),
    pointer(0x310),
    ['', 'Delta', '32bit', 0x40, '<', 'Mem', '32bit', 0x40],
    pointer(0x0048d990),
    pointer(0x310),
    ['Remember', 'Mem', '32bit', 0x40, '-', 'Value', '', 1],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 4],
    pointer(0x0048d990),
    pointer(0x310),
    ['Remember', 'Mem', '32bit', 0x48, '+', 'Recall', '', 0],
  ))
  items.forEach((item, index) => {
  const isLast = index === items.length - 1;
  if (isLast) {
    logic.push($(
      ['AddAddress', 'Recall', '', 0],
      ['', 'Mem', '32bit', 0x0, '=', 'Value', '', item],
    ));
  } else {
    logic.push($(
      ['AddAddress', 'Recall', '', 0],
      ['OrNext', 'Mem', '32bit', 0x0, '=', 'Value', '', item],
    ));
  }
});
  return(logic)
}

function measure(items, total = items.length) {
  let logic = []
  logic.push($(
    ['', 'Value', '', 0x0, '=', 'Value', '', 0x1],
    pointer(0x0048d990),
    pointer(0x310),
    ['Remember', 'Mem', '32bit', 0x40],
    ['Remember', 'Mem', '32bit', 0x00493ab4, '%', 'Recall', '', 0],
    ['Remember', 'Recall', '', 0, '*', 'Value', '', 4],
    pointer(0x0048d990),
    pointer(0x310),
    ['Remember', 'Mem', '32bit', 0x48, '+', 'Recall'],
  ))
  for (const item of items) {
    logic.push($(
      ['AddAddress', 'Recall', '', 0],
      ['AddHits', 'Mem', '32bit', 0, '=', 'Value', '', item, 1],
    ))
  }
  logic.push($(['Measured', 'Value', '', 0x0, '=', 'Value', '', 0x1, total]))
  return(logic)
}

function shop2(items, total = items.length) {
  let logic = []
  items.forEach((item, index) => {
  const isLast = index === items.length - 1;
  if (!isLast) {
    logic.push($(
      ['AddSource', 'Delta', '8bit', mipsBase + item],
    ));
  } else {
    logic.push($(
      ['', 'Delta', '8bit', mipsBase + item, '=', 'Value', '', total - 1],
    ));
  }
});
  items.forEach((item, index) => {
    const isLast = index === items.length - 1;
    if (!isLast) {
      logic.push($(
        ['AddSource', 'Mem', '8bit', mipsBase + item],
      ));
    } else {
      logic.push($(
        ['Measured', 'Mem', '8bit', mipsBase + item, '=', 'Value', '', total],
      ));
    }
  });
  return(logic)
}

function firstperson() {
  return($(
    pointer(0x0048d990),
    pointer(0x304),
    pointer(0x30),
    ['', 'Delta', '32bit', 0x68, '=', 'Value', '', 0x7],
  ))
}

function notFirstPerson() {
  return($(
    pointer(0x0048d990),
    pointer(0x304),
    pointer(0x30),
    ['', 'Delta', '32bit', 0x68, '!=', 'Value', '', 0x7],
  ))
}

function levelType(type) {
  return($(
    pointer(0x0082b0e8),
    pointer(0x0),
    ['', 'Mem', '16bitBE', 0x0, '=', 'Value', '', type]
  ))
}

function TractorTip(level) {
  return($(
    pointer(0x0082b0e8),
    pointer(0x0),
    ['', 'Mem', '32bitBE', 0x6, '=', 'Value', '', level]
  ))
}

function tractorstipped(count) {
  return($(
    pointer(0x48d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Delta', '32bit', 0xd8c, '=', 'Value', '', count - 1],
    pointer(0x48d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Mem', '32bit', 0xd8c, '=', 'Value', '', count],
  ))
}

function LuigiRescue(level) {
  return($(
    pointer(0x0082b0e8),
    pointer(0x0),
    ['', 'Mem', '32bitBE', 0x5, '=', 'Value', '', level]
  ))
}

function tiresSaved() {
  return($(
    pointer(0x48d990),
    pointer(0x300),
    pointer(0x4c),
    ['AddSource', 'Mem', '32bit', 0xc6c],
    pointer(0x48d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Value', '', 0x0, '=', 'Mem', '32bit', 0xc70],
    pointer(0x48d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Delta', '32bit', 0xc78, '=', 'Value', '', 0],
    pointer(0x48d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Mem', '32bit', 0xc78, '=', 'Value', '', 1],
  ))
}

function bootcamp(level) {
  return($(
    pointer(0x0082b0e8),
    pointer(0x0),
    ['', 'Mem', '32bitBE', 0x4, '=', 'Value', '', level]
  ))
}

function HotPursuit(level) {
  return($(
    pointer(0x0082b0e8),
    pointer(0x0),
    ['', 'Mem', '32bitBE', 0x6, '=', 'Value', '', level]
  ))
}

function SpeedersCaught() {
  return($(
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Delta', '32bit', 0xe28, '=', 'Value', '', 2],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Mem', '32bit', 0xe28, '=', 'Value', '', 3],
  ))
}

function asciitopointsthousand(score) {
  return($(
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    ['Remember', 'Mem', '32bit', 0x4540],
    recallpointer(),
    ['', 'Mem', '8bit', 0x4, '=', 'Value', '', 0],
    recallpointer(),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 1000],
    recallpointer(),
    ['AddSource', 'Mem', 'Lower4', 0x1, '*', 'Value', '', 100],
    recallpointer(),
    ['AddSource', 'Mem', 'Lower4', 0x2, '*', 'Value', '', 10],
    recallpointer(),
    ['', 'Mem', 'Lower4', 0x3, '>=', 'Value', '', score],
  ))
}

function asciitopointshundred(score) {
  return($(
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    ['Remember', 'Mem', '32bit', 0x4540],
    recallpointer(),
    ['AndNext', 'Mem', '8bit', 0x3, '=', 'Value', '', 0],
    recallpointer(),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 100],
    recallpointer(),
    ['AddSource', 'Mem', 'Lower4', 0x1, '*', 'Value', '', 10],
    recallpointer(),
    ['', 'Mem', 'Lower4', 0x2, '>=', 'Value', '', score],
  ))
}

function asciitopointsten(score) {
  return($(
    pointer(0x0052c590),
    pointer(0x40),
    pointer(0x34),
    pointer(0x4),
    pointer(0x0),
    pointer(0x1c),
    ['Remember', 'Mem', '32bit', 0x4540],
    recallpointer(),
    ['AndNext', 'Mem', '8bit', 0x2, '=', 'Value', '', 0],
    recallpointer(),
    ['AddSource', 'Mem', 'Lower4', 0x0, '*', 'Value', '', 10],
    recallpointer(),
    ['', 'Mem', 'Lower4', 0x1, '>=', 'Value', '', score],
  ))
}

set.addAchievement({
  title: "I Am Speed",
  description: 'Finish "Radiator Springs Grand Prix" in Story Mode (Off-Track Reset glitch not allowed for entire set)',
  type: 'progression',
  points: 1,
  conditions: $(
    cheatprotect(),
    level(RadiatorSpringsGrandPrix),
    story(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606706,
})

set.addAchievement({
  title: "First Stop, First Win",
  description: 'Finish "Palm Mile Speedway" in Story Mode in 3rd place or higher',
  type: 'progression',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(PalmMileSpeedway),
    story(),
    finish(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606707,
})

set.addAchievement({
  title: "Full Throttle Down South",
  description: 'Finish "Motor Speedway of the South" in Story Mode in 3rd place or higher',
  type: 'progression',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(MotorSpeedwayoftheSouth),
    story(),
    finish(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606708,
})

set.addAchievement({
  title: "High Noon, High Speed",
  description: 'Finish "Sun Valley International Raceway" in Story Mode in 3rd place or higher',
  type: 'progression',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(SunValleyInternationalRaceway),
    story(),
    finish(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606709,
})

set.addAchievement({
  title: "The Smasherville Slugger",
  description: 'Win "Smasherville International Raceway" in Story Mode',
  type: 'progression',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(SmashervilleInternationalSpeedway),
    story(),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606710,
})

set.addAchievement({
  title: "Thunder Always Comes After Lightning",
  description: 'Win "Los Angeles International Speedway" in Story Mode',
  type: 'win_condition',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(LosAngelesInternationalSpeedway),
    story(),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606711
})

set.addAchievement({
  title: "Time for a Little Competitive Excursion",
  description: 'Finish "Radiator Cap Circuit" in 3rd place or higher',
  points: 2,
  conditions: $(
    cheatprotect(),
    level(RadiatorCapCircuit),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606666,
})

set.addAchievement({
  title: "Winner Takes the Drive",
  description: 'Finish "Sally\'s Sunshine Circuit" in 3rd place or higher',
  points: 2,
  conditions: $(
    cheatprotect(),
    level(SallysSunshineCircuit),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606667,
})

set.addAchievement({
  title: "Not Going Into the Cactus This Time",
  description: 'Win "Doc\'s Challenge" in Story Mode',
  points: 2,
  conditions: $(
    cheatprotect(),
    level(DocsChallenge),
    story(),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606668,
})

set.addAchievement({
  title: "Just Some Special Brew",
  description: 'Finish "Boostin\' with Fillmore" in 3rd place or higher',
  points: 3,
  conditions: $(
    cheatprotect(),
    level(BoostinwithFillmore),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606669,
})

set.addAchievement({
  title: "You have to Look the Part",
  description: 'Finish "North Desert Dash" in 3rd place or higher',
  points: 3,
  conditions: $(
    cheatprotect(),
    level(NorthDesertDash),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606670,
})

set.addAchievement({
  title: "We're Gonna Go for a Little Drive",
  description: 'Finish "Sarge\'s Off-Road Challenge" in 3rd place or higher',
  points: 3,
  conditions: $(
    cheatprotect(),
    level(SargesOffRoadChallenge),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606671,
})

set.addAchievement({
  title: "No Jail Time for You, If You Win",
  description: 'Win "Sheriff\'s Chase" in Story Mode',
  points: 3,
  conditions: $(
    cheatprotect(),
    level(SheriffsChase),
    story(),
    win(),
    finishRace(1),
    startHit(),
    glitchProtectPlus(),
    resetHit(),
    glitchProtectSheriffChase(),
  ),
  id: 606672,
})

set.addAchievement({
  title: "Hey McQueen, We're from Queens!",
  description: 'Finish "Ornament Valley Circuit" in 3rd place or higher',
  points: 3,
  conditions: $(
    cheatprotect(),
    level(OrnamentValleyCircuit),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606673,
})

set.addAchievement({
  title: "Wow, Mater, That Race Looked Rough",
  description: 'Finish "Rustbucket Race-O-Rama" in 3rd place or higher',
  points: 3,
  conditions: $(
    cheatprotect(),
    level(RustbucketRaceoRama),
    noPractice(),
    finish(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606674,
})

set.addAchievement({
  title: "Time for That Drive You Owe Me",
  description: 'Finish "Sally\'s Wheel Well Sprint" in 3rd place or higher',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(SallysWheelWellSprint),
    noPractice(),
    finish(),
    finishRace(1),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606675,
})

set.addAchievement({
  title: "Time to Show the Crazy Old Grandpa Car What We've Got",
  description: 'Finish "Doc\'s Check-Up" in 3rd place or higher',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(DocsCheckUp),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606676,
})

set.addAchievement({
  title: "Let's Race, Fellow Racing Aficionados",
  description: 'Finish "Tailfin Pass Circuit" in 3rd place or higher',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(TailfinPassCircuit),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606677,
})

set.addAchievement({
  title: "I'm Gonna Need Something a Little Bigger",
  description: 'Finish "Monster Truck Mayhem" in 3rd place or higher',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(MonsterTruckMayhem),
    noPractice(),
    finish(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606678,
})

set.addAchievement({
  title: "Road's Open Again",
  description: 'Finish "Delinquent Road Hazard" in 3rd place or higher',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(DelinquentRoadHazards),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606679,
})

set.addAchievement({
  title: "The Roads Out Here Got Something Called Right Turns",
  description: 'Finish "Chick\'s Challenge" in 3rd place or higher',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(ChicksChallenge),
    noPractice(),
    finish(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606680,
})

set.addAchievement({
  title: "The Rivalry Between McQueen and Chick Is Heating Up",
  description: 'Finish "Radiator Springs GP" in 3rd place or higher',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(RadiatorSpringsGP),
    noPractice(),
    finish(),
    finishRace(2),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606681,
})

set.addAchievement({
  title: "No One Has Fall Offa These Roads in a Long Time, I Think",
  description: 'Finish "Tailfin Pass GP" in 3rd place or higher',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(TailfinPassGP),
    noPractice(),
    finish(),
    finishRace(1),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606682,
})

set.addAchievement({
  title: "You's Got to Train with a Real Professional Racer",
  description: 'Finish "Ornament Valley GP" in 3rd place or higher',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(OrnamentValleyGP),
    noPractice(),
    finish(),
    finishRace(2),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606683,
})

set.addAchievement({
  title: "Look Me Go!",
  description: 'Finish "Mater\'s Speedy Circuit" in 3rd place or higher (Use code TRGTEXC)',
  points: 5,
  conditions: $(
    cheatprotect(),
    level(logo),
    ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x52525f54],
    noPractice(),
    finish(),
    finishRace(6),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606735,
})

set.addAchievement({
  title: "Tractors Is So Stupid!",
  description: 'Complete Level 3 of "Tractor Tipping"',
  points: 3,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    TractorTip(TT3),
    tractorstipped(7),
  ),
  id: 606769,
})

set.addAchievement({
  title: "Now That's Some Good Tippin'!",
  description: 'Complete Level 6 of "Tractor Tipping"',
  points: 5,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    TractorTip(TT6),
    tractorstipped(13),
  ),
  id: 606770,
})

set.addAchievement({
  title: "We Done Tipped Every Last One of 'em Tractors!",
  description: 'Complete Level 8 of "Tractor Tipping"',
  points: 10,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    TractorTip(TT8),
    tractorstipped(10),
  ),
  id: 606771,
})

set.addAchievement({
  title: "Mama Mia, We Save-a the Day!",
  description: 'Complete Level 3 of "Luigi to the Rescue"',
  points: 3,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    LuigiRescue(lttr3),
    tiresSaved(8),
  ),
  id: 606772,
})

set.addAchievement({
  title: "Look Out Ferrari, Here Comme Luigi!",
  description: 'Complete Level 6 of "Luigi to the Rescue"',
  points: 5,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    LuigiRescue(lttr6),
    tiresSaved(12),
  ),
  id: 606773,
})

set.addAchievement({
  title: "You Saved Them All! Bellissimo!",
  description: 'Complete Level 8 of "Luigi to the Rescue"',
  points: 10,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    LuigiRescue(lttr8),
    tiresSaved(12),
  ),
  id: 606774,
})

set.addAchievement({
  title: "That's Just Basic Training, Soldier!",
  description: 'Complete Level 1 of "Sarge\'s Boot Camp"',
  points: 1,
  conditions: $(
    cheatprotect(),
    levelType(Minigame2),
    bootcamp(bootcamp1),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606775,
})

set.addAchievement({
  title: "You Call That Discipline? Try Again!",
  description: 'Complete Level 2 of "Sarge\'s Boot Camp"',
  points: 3,
  conditions: $(
    cheatprotect(),
    levelType(Minigame2),
    bootcamp(bootcamp2),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606776,
})

set.addAchievement({
  title: "Now That's What I Call Precision Driving!",
  description: 'Complete Level 3 of "Sarge\'s Boot Camp"',
  points: 5,
  conditions: $(
    cheatprotect(),
    levelType(Minigame2),
    bootcamp(bootcamp3),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606777,
})

set.addAchievement({
  title: "You're Speedin', and I'm Catchin'!",
  description: 'Catch the Speeders in "Sheriff\'s Hot Pursuit"',
  points: 1,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    HotPursuit(HP1),
    SpeedersCaught(),
  ),
  id: 609443,
})

set.addAchievement({
  title: "Not in My Town, You Don't!",
  description: 'Catch the Hooligans in "Sheriff\'s Hot Pursuit"',
  points: 3,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    HotPursuit(HP2),
    SpeedersCaught(),
  ),
  id: 609444,
})

set.addAchievement({
  title: "Clearin' the Roads, One Troublemaker at a Time!",
  description: 'Catch the Road Hazards in "Sheriff\'s Hot Pursuit"',
  points: 5,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    HotPursuit(HP3),
    SpeedersCaught(),
  ),
  id: 609445,
})

set.addAchievement({
  title: "Radiator Springs Don't Tolerate That Nonsense!",
  description: 'Catch the Delinquents in "Sheriff\'s Hot Pursuit"',
  points: 5,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    HotPursuit(HP4),
    SpeedersCaught(),
  ),
  id: 609446,
})

set.addAchievement({
  title: "I Got My Eye on You, Son!",
  description: 'Catch the Hot-Rodders in "Sheriff\'s Hot Pursuit"',
  points: 5,
  conditions: $(
    cheatprotect(),
    levelType(Minigame),
    HotPursuit(HP5),
    SpeedersCaught(),
  ),
  id: 609447,
})

set.addAchievement({
  title: "Turn Right to Go Left",
  description: 'Complete "Doc\'s Lesson: Powerslide"',
  points: 1,
  conditions: $(
    cheatprotect(),
    levelType(Minigame2),
    pointer(0x0082b0e8),
    pointer(0x0),
    ['', 'Mem', '32bitBE', 0x2, '=', 'Value', '', DocsPowerslide],
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606803,
})

set.addAchievement({
  title: "Right to Go Left, Where Have I Heard That Before?",
  description: 'Complete "Mater\'s Backwards Lesson"',
  points: 1,
  conditions: $(
    cheatprotect(),
    levelType(Minigame2),
    pointer(0x0082b0e8),
    pointer(0x0),
    ['', 'Mem', '32bitBE', 0x2, '=', 'Value', '', 0x5f335f32],
    finishRace(2),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606804,
})

set.addAchievement({
  title: "Got The Goods, I'm Ghost",
  description: 'Complete "High Speed Heist"',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(HighSpeedHeist),
    pointer(0x00490ef0),
    pointer(0x950),
    ['', 'Delta', '32bit', 0xd18, '<', 'Value', '', 5],
    pointer(0x00490ef0),
    pointer(0x950),
    ['', 'Mem', '32bit', 0xd18, '=', 'Value', '', 5],
  ),
  id: 609440,
})

set.addAchievement({
  title: "You Don't Mess with My Friends",
  description: 'Complete "Lightning Strikes Back"',
  points: 4,
  conditions: $(
    cheatprotect(),
    level(LightningStrikesBack),
    pointer(0x00490a60),
    pointer(0x2b0),
    pointer(0x34c),
    pointer(0x8),
    ['', 'Mem', '32bit', 0xd4, '=', 'Value', '', 3],
    pointer(0x00490a60),
    pointer(0x2b0),
    pointer(0x34c),
    pointer(0x8),
    ['', 'Mem', '32bit', 0xd8, '=', 'Value', '', 3],
    pointer(0x00490a60),
    pointer(0x2b0),
    pointer(0x34c),
    pointer(0x8),
    ['', 'Mem', '32bit', 0xdc, '=', 'Value', '', 3],
    pointer(0x00490a60),
    pointer(0x2b0),
    pointer(0x34c),
    pointer(0x8),
    ['', 'Delta', '32bit', 0xe0, '=', 'Value', '', 2],
    pointer(0x00490a60),
    pointer(0x2b0),
    pointer(0x34c),
    pointer(0x8),
    ['', 'Mem', '32bit', 0xe0, '=', 'Value', '', 3],
  ),
  id: 609441,
})

set.addAchievement({
  title: "Mater's Cleanup Crew",
  description: 'Complete "Mater\'s Countdown Cleanup" (Use code TRGTEXC)',
  points: 5,
  conditions: $(
    cheatprotect(),
    ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x4d475f54],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Delta', '32bit', 0xc74, '<', 'Value', '', 100],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Mem', '32bit', 0xc74, '=', 'Value', '', 100],
  ),
  id: 609442,
})

set.addAchievement({
  title: "Back When This Was a Town Worth Stoppin' In",
  description: "Collect 5 of Lizzie's postcards",
  points: 3,
  conditions: $(
    cheatprotect(),
    story(),
    postcards(5),
  ),
  id: 606750,
})

set.addAchievement({
  title: "Stanley Would've Loved This",
  description: "Collect 10 of Lizzie's postcards",
  points: 5,
  conditions: $(
    cheatprotect(),
    story(),
    postcards(10),
  ),
  id: 606751,
})

set.addAchievement({
  title: "Keeping Stanley's Dream Alive",
  description: "Collect all 20 of Lizzie's postcards",
  points: 10,
  conditions: $(
    cheatprotect(),
    story(),
    postcards(20),
  ),
  id: 606752,
})

set.addAchievement({
  title: "Rookie on the Circuit",
  description: "Collect 50 trophies",
  points: 5,
  conditions: $(
    cheatprotect(),
    loadprotect(),
    ['', 'Mem', '32bit', 0x007ed780, '=', 'Value', '', 0],
    pointer(0x0048d990),
    pointer(0x2f0),
    ['', 'Delta', '32bit', 0x28, '<', 'Value', '', 50],
    pointer(0x0048d990),
    pointer(0x2f0),
    ['', 'Mem', '32bit', 0x28, '>=', 'Value', '', 50],
  ),
  id: 606703,
})

set.addAchievement({
  title: "Radiator Springs Champion",
  description: "Collect 150 trophies",
  points: 10,
  conditions: $(
    cheatprotect(),
    loadprotect(),
    ['', 'Mem', '32bit', 0x007ed780, '=', 'Value', '', 0],
    pointer(0x0048d990),
    pointer(0x2f0),
    ['', 'Delta', '32bit', 0x28, '<', 'Value', '', 150],
    pointer(0x0048d990),
    pointer(0x2f0),
    ['', 'Mem', '32bit', 0x28, '>=', 'Value', '', 150],
  ),
  id: 606704,
})

set.addAchievement({
  title: "Piston Cup Legend",
  description: "Collect all 250 trophies",
  points: 25,
  conditions: $(
    cheatprotect(),
    loadprotect(),
    ['', 'Mem', '32bit', 0x007ed780, '=', 'Value', '', 0],
    pointer(0x0048d990),
    pointer(0x2f0),
    ['', 'Delta', '32bit', 0x28, '<', 'Value', '', 250],
    pointer(0x0048d990),
    pointer(0x2f0),
    ['', 'Mem', '32bit', 0x28, '=', 'Value', '', 250],
  ),
  id: 606705,
})

set.addAchievement({
  title: "Race of Your Dreams",
  description: 'Win "Radiator Springs Grand Prix" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(RadiatorSpringsGrandPrix),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606684,
})

set.addAchievement({
  title: "Esteemed American Racer, Lightning McQueen",
  description: 'Win "Radiator Cap Circuit" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(RadiatorCapCircuit),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606685,
})

set.addAchievement({
  title: "Groupies Are No Match for the Real Thing",
  description: 'Win "Sally\'s Sunshine Circuit" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(SallysSunshineCircuit),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606686,
})

set.addAchievement({
  title: "Won from the Fabulous Hudson Hornet",
  description: 'Win "Doc\'s Challenge" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(DocsChallenge),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606687,
})

set.addAchievement({
  title: "Super Octane Boost Juist for the Win",
  description: 'Win "Boostin\' with Fillmore" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(BoostinwithFillmore),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606688,
})

set.addAchievement({
  title: "Gold Beats Silver Every Time",
  description: 'Win "North Desert Dash" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(NorthDesertDash),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606689,
})

set.addAchievement({
  title: "Time for a Hot Car Wash and a Cool Ration",
  description: 'Win "Sarge\'s Off-Road Challenge" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(SargesOffRoadChallenge),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606690,
})

set.addAchievement({
  title: "Last Time You Had Help",
  description: 'Win "Sheriff\'s Chase" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(SheriffsChase),
    difficulty(2),
    win(),
    finishRace(1),
    startHit(),
    glitchProtectPlus(),
    resetHit(),
    glitchProtectSheriffChase(),
  ),
  id: 606691,
})

set.addAchievement({
  title: "Gotta Beat the Best to Be the Best",
  description: 'Win "Ornament Valley Circuit" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(OrnamentValleyCircuit),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606692,
})

set.addAchievement({
  title: "I'm a Real Racin' Car Now!",
  description: 'Win "Rustbucket Race-O-Rama" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(RustbucketRaceoRama),
    difficulty(2),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606693,
})

set.addAchievement({
  title: "Didn't Even Hit Third Gear",
  description: 'Win "Sally\'s Wheel Well Sprint" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(SallysWheelWellSprint),
    difficulty(2),
    win(),
    finishRace(1),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606694,
})

set.addAchievement({
  title: "This New Upgrade Feels Great!",
  description: 'Win "Doc\'s Check-Up" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(DocsCheckUp),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606695,
})

set.addAchievement({
  title: "The American Landscape is Myriad in Its Challenges",
  description: 'Win "Tailfin Pass Circuit" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(TailfinPassCircuit),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606696,
})

set.addAchievement({
  title: "WHAT DID YOU SAY, PUNY TOW TRUCK?!",
  description: 'Win "Monster Truck Mayhem" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(MonsterTruckMayhem),
    difficulty(2),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606697,
})

set.addAchievement({
  title: "Cheer Up Guys, Relax a Little",
  description: 'Win "Delinquent Road Hazard" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(DelinquentRoadHazards),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606698,
})

set.addAchievement({
  title: "Right, You Like Losing in Front of a Crowd",
  description: 'Win "Chick\'s Challenge" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(ChicksChallenge),
    difficulty(2),
    win(),
    finishRace(3),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606699,
})

set.addAchievement({
  title: "Beaten the Ugly Green Car with the Mustache",
  description: 'Win "Radiator Springs GP" on Champion difficulty',
  points: 25,
  conditions: $(
    cheatprotect(),
    level(RadiatorSpringsGP),
    difficulty(2),
    win(),
    finishRace(2),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606700,
})

set.addAchievement({
  title: "You Doing Okay, Chick?",
  description: 'Win "Tailfin Pass GP" on Champion difficulty',
  points: 25,
  conditions: $(
    cheatprotect(),
    level(TailfinPassGP),
    difficulty(2),
    win(),
    finishRace(1),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606701,
})

set.addAchievement({
  title: "Should Have Trained with Lightning",
  description: 'Win "Ornament Valley GP" on Champion difficulty',
  points: 25,
  conditions: $(
    cheatprotect(),
    level(OrnamentValleyGP),
    difficulty(2),
    win(),
    finishRace(2),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606702,
})

set.addAchievement({
  title: "Quickest Tow in the West",
  description: 'Win "Mater\'s Speedy Circuit" on Champion difficulty (Use code TRGTEXC)',
  points: 25,
  conditions: $(
    cheatprotect(),
    level(logo),
    ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x52525f54],
    difficulty(2),
    win(),
    finishRace(6),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606736,
})

set.addAchievement({
  title: "I'm Faster than Fast, Quicker than Quick",
  description: 'Win "Palm Mile Speedway" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(PalmMileSpeedway),
    difficulty(2),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606712,
})

set.addAchievement({
  title: "Float like a Cadillac, Sting like a Beemer",
  description: 'Win "Motor Speedway of the South" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(MotorSpeedwayoftheSouth),
    difficulty(2),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606713,
})

set.addAchievement({
  title: "I Eat Winners for Breakfast",
  description: 'Win "Sun Valley International Raceway" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(SunValleyInternationalRaceway),
    difficulty(2),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606714,
})

set.addAchievement({
  title: "One Winner. Nineteen Losers.",
  description: 'Win "Smasherville International Raceway" on Champion difficulty',
  points: 10,
  conditions: $(
    cheatprotect(),
    level(SmashervilleInternationalSpeedway),
    difficulty(2),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606715,
})

set.addAchievement({
  title: "Ka-Chow! Piston Cup Champion",
  description: 'Win "Los Angeles International Speedway" on Champion difficulty',
  points: 25,
  conditions: $(
    cheatprotect(),
    level(LosAngelesInternationalSpeedway),
    difficulty(2),
    win(),
    finishRace(12),
    startHit(),
    resetHit(),
    glitchProtect(),
  ),
  id: 606716,
})

set.addAchievement({
  title: "A Car's Gotta Have Style",
  description: "Purchase all 13 Character Art packs",
  points: 4,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(artPacks),
  ),
  id: 606717,
})

set.addAchievement({
  title: "Sights Worth Slowin' For",
  description: "Purchase 11 Environment Art packs",
  points: 5,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(envPacks, 11),
  ),
  id: 606718,
})

set.addAchievement({
  title: "See the Country, Feel the Ride",
  description: "Purchase all 22 Environment Art packs",
  points: 5,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(envPacks),
  ),
  id: 606734,
})

set.addAchievement({
  title: "Hidden Under the Hood",
  description: "Purchase all 6 Deleted Scenes",
  points: 4,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(delScenes),
  ),
  id: 606719,
})

set.addAchievement({
  title: "Lights, Camera, Ka-Chow!",
  description: "Purchase all 9 Movie Clips",
  points: 3,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(movScenes),
  ),
  id: 606720,
})

set.addAchievement({
  title: "All Revved Up, All Accounted For",
  description: "Purchase all characters",
  points: 10,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(charPack),
  ),
  id: 606721,
})

set.addAchievement({
  title: "Ka-Chow! Best Look in Town",
  description: "Purchase all of Lightning McQueen's paintjobs",
  points: 3,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(mcqPaint),
  ),
  id: 606665,
})

set.addAchievement({
  title: "Towin' in Style, Dadgum!",
  description: "Purchase all of Mater's paintjobs",
  points: 2,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(matPaint),
  ),
  id: 606722,
})

set.addAchievement({
  title: "Porsche-ly Perfect",
  description: "Purchase all of Sally's paintjobs",
  points: 1,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(salPaint),
  ),
  id: 606723,
})

set.addAchievement({
  title: "The Fabulous Hudson Hornet",
  description: "Purchase all of Doc's paintjobs",
  points: 2,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(docPaint),
  ),
  id: 606724,
})

set.addAchievement({
  title: "Oh Honey, Look... Von Dutch",
  description: "Purchase all of Ramone's paintjobs",
  points: 2,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(ramPaint),
  ),
  id: 606725,
})

set.addAchievement({
  title: "V8 Café Chic",
  description: "Purchase all of Flo's paintjobs",
  points: 3,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(floPaint),
  ),
  id: 606726,
})

set.addAchievement({
  title: "Law and Order in Every Finish",
  description: "Purchase all of Sheriff's paintjobs",
  points: 3,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(sherPaint),
  ),
  id: 606727,
})

set.addAchievement({
  title: "Kachigga!",
  description: "Purchase all of Chick Hicks's paintsjobs",
  points: 1,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(chickPaint),
  ),
  id: 606728,
})

set.addAchievement({
  title: "Boosted and Customized",
  description: "Purchase all of Wingo's paintjobs",
  points: 3,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(wingPaint),
  ),
  id: 606729,
})

set.addAchievement({
  title: "Boogity Boogity Boogity Styles!",
  description: "Purchase all of Darrell Cartrip's paintjobs",
  points: 1,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(darPaint),
  ),
  id: 606730,
})

set.addAchievement({
  title: "The King's Full Livery",
  description: "Purchase all of The King's paintjobs",
  points: 2,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(kingPaint),
  ),
  id: 606731,
})

set.addAchievement({
  title: "Ka-Chow Goes Ka-Pow!",
  description: "Purchase all of Monster Truck Lightning's paintjobs",
  points: 3,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(mmcqPaint),
  ),
  id: 606732,
})

set.addAchievement({
  title: "Terror of the Tarmac",
  description: "Purchase all of Count Spatula's paintjobs",
  points: 2,
  conditions: $(
    cheatprotect(),
    measuredIf(buyProtect()),
    ...shop2(cntPaint),
  ),
  id: 606733,
})

set.addAchievement({
  title: "With a Little Rust-eze, You Too Can Drive like Me!",
  description: 'As Lightning McQueen, win "Rustbucket Race-o-Rama" on Champion difficulty with a lead of 5 seconds or more',
  points: 25,
  conditions: $(
    cheatprotect(),
    glitchProtect(),
    ...character(McQueen),
    level(RustbucketRaceoRama),
    difficulty(2),
    startHit(),
    trigger(win()),
    trigger(lead(5)),
    trigger(finishRace(12)),
    resetHit(),
  ),
  id: 606737,
})

//10 points per second
set.addAchievement({
  title: "I'm the World's Best Backwards Driver!",
  description: 'As Mater, win "Boostin\' with Fillmore" on Champion difficulty in 1 minute, stopping the clock by driving backwards',
  points: 25,
  conditions: {
    core: $(
      cheatprotect(),
      ...character(Mater),
      level(BoostinwithFillmore),
      difficulty(2),
      startHit(),
      trigger(win()),
      trigger(finishRace(3)),
      resetHit(),
      glitchProtect(),
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x001b1ee4, '=', 'Value', '', 0x2],
      ['AddHits', 'Value', '', 1, '=', 'Value', '', 1],
      ['ResetIf', 'Value', '', 1, '=', 'Value', '', 1, 3600],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['PauseIf', 'Delta', '32bit', 0x28, '=', 'Mem', '32bit', 0x28],
      pauseIf(drivingBackwards()),
    ),
    alt2: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1]
    ),
  },
  id: 606738,
})

set.addAchievement({
  title: "All Natural, Stickers",
  description: 'As Sally, win "Sally\'s Wheel Well Sprint" on Champion difficulty without boosting or taking shortcuts',
  points: 25,
  conditions: $(
    cheatprotect(),
    ...character(Sally),
    level(SallysWheelWellSprint),
    difficulty(2),
    startHit(),
    trigger(win()),
    trigger(finishRace(3)),
    resetHit(),
    glitchProtect(),
    resetIf(boostUsed()),
    resetIf(trick(Shortcut)),
  ),
  id: 606739,
})

//20 points per second
set.addAchievement({
  title: "Let Me Show You How It's Done",
  description: 'As Doc Hudson, win "Doc\'s Challenge" on Champion difficulty in 1 minute and 30 seconds, stopping the clock by powersliding',
  points: 25,
  conditions: {
    core: $(
      cheatprotect(),
      ...character(Doc),
      level(DocsChallenge),
      difficulty(2),
      startHit(),
      trigger(win()),
      trigger(finishRace(3)),
      resetHit(),
      glitchProtect(),
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x001b1ee4, '=', 'Value', '', 0x2],
      ['AddHits', 'Value', '', 1, '=', 'Value', '', 1],
      ['ResetIf', 'Value', '', 1, '=', 'Value', '', 1, 5400],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['PauseIf', 'Delta', '32bit', 0x28, '=', 'Mem', '32bit', 0x28],
      pauseIf(powersliding()),
    ),
    alt2: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1]
    ),
  },
  id: 606740,
})

//Need a fix...
set.addAchievement({
  title: "Low 'n Slow",
  description: 'As Ramone, win "Delinquent Road Hazards" on Champion difficulty while earning the Safe Driver bonus 14 times',
  points: 25,
  conditions: $(
    measuredIf(cheatprotect()),
    measuredIf(...character(Ramone)),
    measuredIf(level(DelinquentRoadHazards)),
    measuredIf(difficulty(2)),
    startHit(),
    measured(advancedTrick(SafeDriver, 14)),
    trigger(win()),
    trigger(finishRace(3)),
    resetHit(),
    glitchProtect(),
  ),
  id: 606741,
})

set.addAchievement({
  title: "Showgirl, Even Off-Road",
  description: 'As Flo, win "Sarge\'s Off-Road Challenge" on Champion difficulty with at least 4,200 points or more',
  points: 25,
  conditions: $(
      cheatprotect(),
      ...character(Flo),
      level(SargesOffRoadChallenge),
      difficulty(2),
      startHit(),
      asciitopointsthousand(4200),
      trigger(win()),
      trigger(finishRace(3)),
      resetHit(),
      glitchProtect(),
    ),
  id: 606742,
})

set.addAchievement({
  title: "Through the Eyes of the Law",
  description: 'As Sheriff, win "Sheriff\'s Chase" on Champion difficulty in the first person view',
  points: 25,
  conditions: $(
    cheatprotect(),
    ...character(Sheriff),
    level(SheriffsChase),
    difficulty(2),
    startHit(),
    trigger(glitchProtectPlus()),
    trigger(win()),
    trigger(finishRace(1)),
    resetHit(),
    resetIf(notFirstPerson()),
    glitchProtectSheriffChase(),
  ),
  id: 606743,
})

set.addAchievement({
  title: "Who Needs Drifting?! Kachigga!",
  description: 'As Chick Hicks, win "Ornament Valley GP" on Champion difficulty without powersliding',
  points: 25,
  conditions: $(
    cheatprotect(),
    ...character(Chick),
    level(OrnamentValleyGP),
    difficulty(2),
    startHit(),
    trigger(win()),
    trigger(finishRace(2)),
    resetHit(),
    pointer(0x004ee5d0),
    pointer(0x384),
    pointer(0x30),
    pointer(0x10),
    ['ResetIf', 'Mem', '32bit', 0x80, '=', 'Value', '', 1],
    glitchProtect(),
  ),
  id: 606744,
})

set.addAchievement({
  title: "So Much for Downforce",
  description: 'As Wingo, win "Chick\'s Challenge" on Champion difficulty while attaining a Big Air bonus 7 times',
  points: 25,
  conditions: $(
    measuredIf(cheatprotect()),
    measuredIf(...character(Wingo)),
    measuredIf(level(ChicksChallenge)),
    measuredIf(difficulty(2)),
    startHit(),
    measured(trick(BigAir, 7)),
    trigger(win()),
    trigger(finishRace(3)),
    resetHit(),
    glitchProtect(),
  ),
  id: 606745,
})

//10 points per second
set.addAchievement({
  title: "You See That Speed Boost?",
  description: 'As Darrell Cartrip, win "Motor Speedway of the South" on Champion difficulty in 2 minutes, stopping the clock by tilting,',
  points: 25,
  conditions: {
    core: $(
      cheatprotect(),
      ...pistonCupCharacter(Darrell),
      level(MotorSpeedwayoftheSouth),
      difficulty(2),
      startHit(),
      trigger(win()),
      trigger(finishRace(12)),
      resetHit(),
      glitchProtect(),
    ),
    alt1: $(
      ['AndNext', 'Mem', '8bit', 0x001b1ee4, '=', 'Value', '', 0x2],
      ['AddHits', 'Value', '', 1, '=', 'Value', '', 1],
      ['ResetIf', 'Value', '', 1, '=', 'Value', '', 1, 7200],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['PauseIf', 'Delta', '32bit', 0x28, '=', 'Mem', '32bit', 0x28],
      pauseIf(tilting()),
    ),
    alt2: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1]
    ),
  },
  id: 606746,
})

set.addAchievement({
  title: "Return of Dinoco's Legend",
  description: 'As The King, win "Smasherville International Speedway" on Champion difficulty, earning 1800 points from Lap Leader bonuses, without tilting or driving backwards',
  points: 25,
  conditions: $(
      cheatprotect(),
      ...pistonCupCharacter(King),
      level(SmashervilleInternationalSpeedway),
      difficulty(2),
      startHit(),
      asciitopointsthousand(1800),
      trigger(win()),
      trigger(finishRace(12)),
      resetHit(),
      resetIf(tilting()),
      resetIf(drivingBackwards()),
       glitchProtect(),
  ),
  id: 606747,
})

set.addAchievement({
  title: "PUNY CIRCUIT, TOW TRUCK!",
  description: 'As Monster McQueen, win "Mater\'s Speedy Circuit" on Champion Difficulty (Use code TRGTEXC)',
  points: 25,
  conditions: $(
    cheatprotect(),
    ...character(MonsterMcQueen),
    level(logo),
    ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x52525f54],
    difficulty(2),
    startHit(),
    trigger(win()),
    trigger(finishRace(6)),
    resetHit(),
    glitchProtect(),
  ),
  id: 606753,
})

set.addAchievement({
  title: "Small Town Bringdown",
  description: 'As Count Spatula, win "Radiator Springs GP" on Champion difficulty',
  points: 25,
  conditions: $(
    cheatprotect(),
    ...character(Spatula),
    level(RadiatorSpringsGP),
    difficulty(2),
    startHit(),
    trigger(win()),
    trigger(finishRace(2)),
    resetHit(),
    glitchProtect(),
  ),
  id: 606748,
})

//Needs other trigger event
set.addAchievement({
  title: "Pit Stop!",
  description: "Finish a pitstop in 16 seconds or less",
  points: 5,
  conditions: $(
    orNext(level(PalmMileSpeedway), level(MotorSpeedwayoftheSouth), level(SunValleyInternationalRaceway), level(SmashervilleInternationalSpeedway), level(LosAngelesInternationalSpeedway)),
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Mem', 'Float', 0xc6c, '<=', 'Value', '', 16],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['', 'Delta', '32bit', 0xc74, '=', 'Value', '', 0],
    pointer(0x0048d990),
    pointer(0x300),
    pointer(0x4c),
    ['Trigger', 'Mem', '32bit', 0xc74, '=', 'Value', '', 2],
  ),
  id: 606749,
})

set.addLeaderboard({
  title: 'Time Trial - Radiator Springs Grand Prix',
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RadiatorSpringsGrandPrix),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(RadiatorSpringsGrandPrix),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160918,
})

set.addLeaderboard({
  title: 'Time Trial - Radiator Cap Circuit',
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RadiatorCapCircuit),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(RadiatorCapCircuit),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160919,
})

set.addLeaderboard({
  title: `Time Trial - Sally's Sunshine Circuit`,
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SallysSunshineCircuit),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(SallysSunshineCircuit),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160920,
})

set.addLeaderboard({
  title: `Time Trial - Doc's Challenge`,
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DocsChallenge),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(DocsChallenge),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160921,
})

set.addLeaderboard({
  title: `Time Trial - Boostin' with Fillmore`,
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(BoostinwithFillmore),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(BoostinwithFillmore),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160922,
})

set.addLeaderboard({
  title: 'Time Trial - North Desert Dash',
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(NorthDesertDash),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(NorthDesertDash),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160923,
})

set.addLeaderboard({
  title: `Time Trial - Sarge's Off-Road Challenge`,
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SargesOffRoadChallenge),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(SargesOffRoadChallenge),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160924,
})

set.addLeaderboard({
  title: `Time Trial - Sheriff's Chase`,
  description:
    'Complete the race in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SheriffsChase),
      finishRace(1),
      startHit(),
      glitchProtectPlus(),
      resetHit(),
      glitchProtectSheriffChase(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(SheriffsChase),
      finishRace(1),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160925,
})

set.addLeaderboard({
  title: 'Time Trial - Ornament Valley Circuit',
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(OrnamentValleyCircuit),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(OrnamentValleyCircuit),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160926,
})

set.addLeaderboard({
  title: 'Time Trial - Rustbucket Race-O-Rama',
  description:
    'Complete all twelve laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RustbucketRaceoRama),
      finishRace(12),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(RustbucketRaceoRama),
      finishRace(12),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160927,
})

set.addLeaderboard({
  title: `Time Trial - Sally's Wheel Well Sprint`,
  description:
    'Complete the race in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SallysWheelWellSprint),
      finishRace(1),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(SallysWheelWellSprint),
      finishRace(1),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160928,
})

set.addLeaderboard({
  title: `Time Trial - Doc's Check-Up`,
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DocsCheckUp),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(DocsCheckUp),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160929,
})

set.addLeaderboard({
  title: 'Time Trial - Tailfin Pass Circuit',
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(TailfinPassCircuit),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(TailfinPassCircuit),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160930,
})

set.addLeaderboard({
  title: 'Time Trial - Monster Truck Mayhem',
  description:
    'Complete all twelve laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(MonsterTruckMayhem),
      finishRace(12),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(MonsterTruckMayhem),
      finishRace(12),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160931,
})

set.addLeaderboard({
  title: 'Time Trial - Delinquent Road Hazards',
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DelinquentRoadHazards),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(DelinquentRoadHazards),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160932,
})

set.addLeaderboard({
  title: `Time Trial - Chick's Challenge`,
  description:
    'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(ChicksChallenge),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(ChicksChallenge),
      finishRace(3),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160933,
})

set.addLeaderboard({
  title: 'Time Trial - Radiator Springs GP',
  description:
    'Complete both laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RadiatorSpringsGP),
      finishRace(2),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(RadiatorSpringsGP),
      finishRace(2),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160934,
})

set.addLeaderboard({
  title: 'Time Trial - Tailfin Pass GP',
  description:
    'Complete the race in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(TailfinPassGP),
      finishRace(1),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(TailfinPassGP),
      finishRace(1),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160935,
})

set.addLeaderboard({
  title: 'Time Trial - Ornament Valley GP',
  description:
    'Complete both laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(OrnamentValleyGP),
      finishRace(2),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(OrnamentValleyGP),
      finishRace(2),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160936,
})

set.addLeaderboard({
  title: `Time Trial - Mater's Speedy Circuit`,
  description:
    'Complete all six laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(logo),
      ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x52525f54],
      finishRace(6),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(logo),
      ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x52525f54],
      finishRace(6),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160942,
})

set.addLeaderboard({
  title: 'Time Trial - Palm Mile Speedway',
  description:
    'Complete all twelve laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(PalmMileSpeedway),
      finishRace(12),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(PalmMileSpeedway),
      finishRace(12),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160937,
})

set.addLeaderboard({
  title: 'Time Trial - Motor Speedway of the South',
  description:
    'Complete all twelve laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(MotorSpeedwayoftheSouth),
      finishRace(12),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(MotorSpeedwayoftheSouth),
      finishRace(12),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160938,
})

set.addLeaderboard({
  title: 'Time Trial - Sun Valley International Raceway',
  description:
    'Complete all twelve laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SunValleyInternationalRaceway),
      finishRace(12),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(SunValleyInternationalRaceway),
      finishRace(12),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160939,
})

set.addLeaderboard({
  title: 'Time Trial - Smasherville International Speedway',
  description:
    'Complete all twelve laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SmashervilleInternationalSpeedway),
      finishRace(12),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(SmashervilleInternationalSpeedway),
      finishRace(12),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160940,
})

set.addLeaderboard({
  title: 'Time Trial - Los Angeles International Speedway',
  description:
    'Complete all twelve laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(LosAngelesInternationalSpeedway),
      finishRace(12),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(LosAngelesInternationalSpeedway),
      finishRace(12),
    ),
    value: $(
      raceTimer(),
    ),
  },
  id: 160941,
})

set.addLeaderboard({
  title: 'Time Trial - Pit Stop',
  description:
    'Finish McQueen\'s pitstop in the fastest time you can!',
    lowerIsBetter: true,
    type: 'MILLISECS',
    conditions: {
      start: $(
        cheatprotect(),
        orNext(level(PalmMileSpeedway), level(MotorSpeedwayoftheSouth), level(SunValleyInternationalRaceway), level(SmashervilleInternationalSpeedway), level(LosAngelesInternationalSpeedway)),
        pitstopEnd(),
      ),
      cancel: $(
        levelQuit(),
      ),
      submit: $(
        cheatprotect(),
        orNext(level(PalmMileSpeedway), level(MotorSpeedwayoftheSouth), level(SunValleyInternationalRaceway), level(SmashervilleInternationalSpeedway), level(LosAngelesInternationalSpeedway)),
        pitstopEnd(),
      ),
      value: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        ['Measured', 'Mem', 'Float', 0xc6c, '*', 'Value', '', 100],
      )
    },
    id: 163446,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 1',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT1),
      tractorstipped(7),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT1),
      tractorstipped(7),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163447,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 2',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT2),
      tractorstipped(8),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT2),
      tractorstipped(8),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163448,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 3',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT3),
      tractorstipped(7),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT3),
      tractorstipped(7),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163449,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 4',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT4),
      tractorstipped(7),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT4),
      tractorstipped(7),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163450,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 5',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT5),
      tractorstipped(6),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT5),
      tractorstipped(6),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163451,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 6',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT6),
      tractorstipped(13),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT6),
      tractorstipped(13),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163452,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 7',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT7),
      tractorstipped(8),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT7),
      tractorstipped(8),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163453,
})

set.addLeaderboard({
  title: 'Time Trial - Tractor Tipping - Level 8',
  description: 'Tip all tractors as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT8),
      tractorstipped(10),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      TractorTip(TT8),
      tractorstipped(10),
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xd9c, '*', 'Value', '', 100],
    ),
  },
  id: 163454,
})

set.addLeaderboard({
  title: "Time Trial - Doc's Lesson: Powerslide",
  description: 'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DocsLessonPowerslide),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(DocsLessonPowerslide),
      finishRace(3),
    ),
    value: $(
        raceTimer(),
      ),
  },
  id: 163455,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 1',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr1),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr1),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163456,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 2',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr2),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr2),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163457,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 3',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr3),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr3),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163458,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 4',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr4),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr4),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163459,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 5',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr5),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr5),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163460,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 6',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr6),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr6),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163461,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 7',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr7),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr7),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163462,
})

set.addLeaderboard({
  title: 'Time Trial - Luigi to the Rescue - Level 8',
  description: 'Save all tires as fast as you can!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr8),
      tiresSaved(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      LuigiRescue(lttr8),
      tiresSaved(),
    ),
    value: $(
      pointer(0x48d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163463,
})

set.addLeaderboard({
  title: "Time Trial - Sarge's Boot Camp - Level 1",
  description: 'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame2),
      bootcamp(bootcamp1),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame2),
      bootcamp(bootcamp1),
      finishRace(3),
    ),
    value: $(
        raceTimer(),
      ),
  },
  id: 163464,
})

set.addLeaderboard({
  title: "Time Trial - Sarge's Boot Camp - Level 2",
  description: 'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame2),
      bootcamp(bootcamp2),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame2),
      bootcamp(bootcamp2),
      finishRace(3),
    ),
    value: $(
        raceTimer(),
      ),
  },
  id: 163465,
})

set.addLeaderboard({
  title: "Time Trial - Sarge's Boot Camp - Level 3",
  description: 'Complete all three laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame2),
      bootcamp(bootcamp3),
      finishRace(3),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame2),
      bootcamp(bootcamp3),
      finishRace(3),
    ),
    value: $(
        raceTimer(),
      ),
  },
  id: 163466,
})

set.addLeaderboard({
  title: "Time Trial - Mater's Backwards Lesson",
  description: 'Complete both laps in the fastest time you can glitchless!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(MatersBackwardsLesson),
      finishRace(2),
      startHit(),
      resetHit(),
      glitchProtect(),
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(MatersBackwardsLesson),
      finishRace(2),
    ),
    value: $(
        raceTimer(),
      ),
  },
  id: 163467,
})

set.addLeaderboard({
  title: "Time Trial - Sheriff's Hot Pursuit - Speeders",
  description: 'Catch a Speeder in the fastest time you can!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP1),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP1),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    value: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        ['Measured', 'Mem', 'Float', 0xe5c, '*', 'Value', '', 100],
      ),
  },
  id: 163468,
})

set.addLeaderboard({
  title: "Time Trial - Sheriff's Hot Pursuit - Hooligans",
  description: 'Catch a Hooligan in the fastest time you can!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP2),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP2),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    value: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        ['Measured', 'Mem', 'Float', 0xe5c, '*', 'Value', '', 100],
      ),
  },
  id: 163469,
})

set.addLeaderboard({
  title: "Time Trial - Sheriff's Hot Pursuit - Road Hazards",
  description: 'Catch a Road Hazard in the fastest time you can!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP3),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP3),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    value: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        ['Measured', 'Mem', 'Float', 0xe5c, '*', 'Value', '', 100],
      ),
  },
  id: 163470,
})

set.addLeaderboard({
  title: "Time Trial - Sheriff's Hot Pursuit - Delinquents",
  description: 'Catch a Delinquent in the fastest time you can!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP4),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP4),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    value: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        ['Measured', 'Mem', 'Float', 0xe5c, '*', 'Value', '', 100],
      ),
  },
  id: 163471,
})

set.addLeaderboard({
  title: "Time Trial - Sheriff's Hot Pursuit - Hot Rodders",
  description: 'Catch a Hot Rodder in the fastest time you can!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP5),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      levelType(Minigame),
      HotPursuit(HP5),
      ['AddSource', 'Value', '', 0x1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xe28, '=', 'Mem', '32bit', 0xe28],
    ),
    value: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        ['Measured', 'Mem', 'Float', 0xe5c, '*', 'Value', '', 100],
      ),
  },
  id: 163472,
})

set.addLeaderboard({
  title: 'Time Trial - High Speed Heist',
  description: 'Rob Mack in the fastest time you can!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(HighSpeedHeist),
      pointer(0x00490ef0),
      pointer(0x950),
      ['', 'Delta', '32bit', 0xd18, '<', 'Value', '', 5],
      pointer(0x00490ef0),
      pointer(0x950),
      ['', 'Mem', '32bit', 0xd18, '=', 'Value', '', 5],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(HighSpeedHeist),
      pointer(0x00490ef0),
      pointer(0x950),
      ['', 'Delta', '32bit', 0xd18, '<', 'Value', '', 5],
      pointer(0x00490ef0),
      pointer(0x950),
      ['', 'Mem', '32bit', 0xd18, '=', 'Value', '', 5],
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['AddSource', 'Mem', 'Float', 0xc6c, '*', 'Value', '', 100],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['AddSource', 'Mem', 'Float', 0xc74, '*', 'Value', '', 100],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc7c, '*', 'Value', '', 100],
    ),
  },
  id: 163473,
})

set.addLeaderboard({
  title: 'Time Trial - Lightning Strikes Back',
  description: 'Recover your stuff in the fastest time you can!',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(LightningStrikesBack),
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xd4, '=', 'Value', '', 3],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xd8, '=', 'Value', '', 3],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xdc, '=', 'Value', '', 3],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Delta', '32bit', 0xe0, '=', 'Value', '', 2],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xe0, '=', 'Value', '', 3],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      level(LightningStrikesBack),
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xd4, '=', 'Value', '', 3],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xd8, '=', 'Value', '', 3],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xdc, '=', 'Value', '', 3],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Delta', '32bit', 0xe0, '=', 'Value', '', 2],
      pointer(0x00490a60),
      pointer(0x2b0),
      pointer(0x34c),
      pointer(0x8),
      ['', 'Mem', '32bit', 0xe0, '=', 'Value', '', 3],
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc68, '*', 'Value', '', 100],
    ),
  },
  id: 163474,
})

set.addLeaderboard({
  title: "Time Trial - Mater's Countdown Clean-Up",
  description: 'Collect all 100 junk with the most time remaining!',
  lowerIsBetter: false,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x4d475f54],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xc74, '<', 'Value', '', 100],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Mem', '32bit', 0xc74, '=', 'Value', '', 100],
    ),
    cancel: $(
      levelQuit(),
    ),
    submit: $(
      cheatprotect(),
      ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x4d475f54],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Delta', '32bit', 0xc74, '<', 'Value', '', 100],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['', 'Mem', '32bit', 0xc74, '=', 'Value', '', 100],
    ),
    value: $(
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      ['Measured', 'Mem', 'Float', 0xc6c, '*', 'Value', '', 100],
    ),
  },
  id: 163475,
})

set.addLeaderboard({
  title: "Stop Clock Challenge - Boostin' with Fillmore - Backwards Driving",
  description: 'Stop the clock by driving backwards. Beat the race in as little time as possible!',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      cheatprotect(),
      level(BoostinwithFillmore),
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['', 'Delta', '32bit', 0x28, '=', 'Value', '', 0],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['', 'Mem', '32bit', 0x28, '!=', 'Value', '', 0],
    ),
    cancel: {
      core: $(
        ['', 'Value', '', 1, '=', 'Value', '', 1],
      ),
      alt1: $(
        levelQuit(),
      ),
      alt2: $(
        glitchProtect('', ''),
      ),
      alt3: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        pointer(0xc44),
        pointer(0x54),
        pointer(0x0),
        ['', 'Mem', '32bit', 0x28, '=', 'Value', '', 0],
      )
    },
    submit: $(
      finishRace(3),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x001b1ee4, '=', 'Value', '', 0x2],
      ['AddHits', 'Value', '', 1, '=', 'Value', '', 1],
      ['Measured', 'Value', '', 1, '=', 'Value', '', 1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['PauseIf', 'Delta', '32bit', 0x28, '=', 'Mem', '32bit', 0x28],
      pauseIf(drivingBackwards()),
    ),
  },
  id: 164620,
})

set.addLeaderboard({
  title: "Stop Clock Challenge - Doc's Challenge - Powersliding",
  description: 'Stop the clock by powersliding. Beat the race in as little time as possible!',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      cheatprotect(),
      level(DocsChallenge),
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['', 'Delta', '32bit', 0x28, '=', 'Value', '', 0],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['', 'Mem', '32bit', 0x28, '!=', 'Value', '', 0],
    ),
    cancel: {
      core: $(
        ['', 'Value', '', 1, '=', 'Value', '', 1],
      ),
      alt1: $(
        levelQuit(),
      ),
      alt2: $(
        glitchProtect('', ''),
      ),
      alt3: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        pointer(0xc44),
        pointer(0x54),
        pointer(0x0),
        ['', 'Mem', '32bit', 0x28, '=', 'Value', '', 0],
      )
    },
    submit: $(
      finishRace(3),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x001b1ee4, '=', 'Value', '', 0x2],
      ['AddHits', 'Value', '', 1, '=', 'Value', '', 1],
      ['Measured', 'Value', '', 1, '=', 'Value', '', 1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['PauseIf', 'Delta', '32bit', 0x28, '=', 'Mem', '32bit', 0x28],
      pauseIf(powersliding()),
    ),
  },
  id: 164621,
})

set.addLeaderboard({
  title: "Stop Clock Challenge - Motor Speedway of the South - Tilting",
  description: 'Stop the clock by tilting. Beat the race in as little time as possible!',
  lowerIsBetter: true,
  type: 'FRAMES',
  conditions: {
    start: $(
      cheatprotect(),
      level(MotorSpeedwayoftheSouth),
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['', 'Delta', '32bit', 0x28, '=', 'Value', '', 0],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['', 'Mem', '32bit', 0x28, '!=', 'Value', '', 0],
    ),
    cancel: {
      core: $(
        ['', 'Value', '', 1, '=', 'Value', '', 1],
      ),
      alt1: $(
        levelQuit(),
      ),
      alt2: $(
        glitchProtect('', ''),
      ),
      alt3: $(
        pointer(0x0048d990),
        pointer(0x300),
        pointer(0x4c),
        pointer(0xc44),
        pointer(0x54),
        pointer(0x0),
        ['', 'Mem', '32bit', 0x28, '=', 'Value', '', 0],
      )
    },
    submit: $(
      finishRace(12),
    ),
    value: $(
      ['AndNext', 'Mem', '8bit', 0x001b1ee4, '=', 'Value', '', 0x2],
      ['AddHits', 'Value', '', 1, '=', 'Value', '', 1],
      ['Measured', 'Value', '', 1, '=', 'Value', '', 1],
      pointer(0x0048d990),
      pointer(0x300),
      pointer(0x4c),
      pointer(0xc44),
      pointer(0x54),
      pointer(0x0),
      ['PauseIf', 'Delta', '32bit', 0x28, '=', 'Mem', '32bit', 0x28],
      pauseIf(tilting()),
    ),
  },
  id: 164622,
})

set.addLeaderboard({
  title: "Cheat protection",
  description: "You entered an unautorized cheat code! All achievements are locked for the remainder of this session",
  lowerIsBetter: false,
  type: 'UNSIGNED',
  conditions: {
    start: {
      core: $(
        ['', 'Value', '', 1, '=', 'Value', '', 1],
      ),
      alt1: $(
        ['', 'Delta', 'Bit1', 0x52beb0, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit1', 0x52beb0, '=', 'Value', '', 1],
      ),
      alt2: $(
        ['', 'Delta', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 1],
      ),
      alt3: $(
        ['', 'Delta', 'Bit3', 0x52beb0, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit3', 0x52beb0, '=', 'Value', '', 1],
      ),
      alt4: $(
        ['', 'Delta', 'Bit7', 0x52beb1, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit7', 0x52beb1, '=', 'Value', '', 1],
      ),
      alt5: $(
        ['', 'Delta', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 1],
      ),
      alt6: $(
        ['', 'Delta', 'Bit7', 0x52beb2, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit7', 0x52beb2, '=', 'Value', '', 1],
      ),
      alt7: $(
        ['', 'Delta', 'Bit0', 0x52beb3, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit0', 0x52beb3, '=', 'Value', '', 1],
      ),
      alt8: $(
        ['', 'Delta', 'Bit1', 0x52beb3, '=', 'Value', '', 0],
        ['', 'Mem', 'Bit1', 0x52beb3, '=', 'Value', '', 1],
      ),
    },
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      cheatsactive(),
    )
  }
})

set.addLeaderboard({
  title: "Radiator Springs Grand Prix - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RadiatorSpringsGrandPrix),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Radiator Cap Circuit - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RadiatorCapCircuit),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Sally's Sunshine Circuit - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SallysSunshineCircuit),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Doc's Lesson: Powerslide - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DocsLessonPowerslide),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Doc's Challenge - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DocsChallenge),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Palm Mile Speedway - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(PalmMileSpeedway),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Boostin' with Fillmore - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(BoostinwithFillmore),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "North Desert Dash - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(NorthDesertDash),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Sarge's Off-Road Challenge - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SargesOffRoadChallenge),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Motor Speedway of the South - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(MotorSpeedwayoftheSouth),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Mater's Backwards Lesson - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(MatersBackwardsLesson),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Sheriff's Chase - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SheriffsChase),
      glitchProtectSheriffChase(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Rustbucket Race-O-Rama - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RustbucketRaceoRama),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Ornament Valley Circuit - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(OrnamentValleyCircuit),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Sun Valley International Raceway - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SunValleyInternationalRaceway),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Sally's Wheel Well Sprint - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SallysWheelWellSprint),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Doc's Check-Up - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DocsCheckUp),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Tailfin Pass Circuit - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(TailfinPassCircuit),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Delinquent Road Hazard - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(DelinquentRoadHazards),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Monster Truck Mayhem - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(MonsterTruckMayhem),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Chick's Challenge - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(ChicksChallenge),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Smasherville International Raceway - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(SmashervilleInternationalSpeedway),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Radiator Springs GP - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(RadiatorSpringsGP),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Tailfin Pass GP - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(TailfinPassGP),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Ornament Valley GP - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(OrnamentValleyGP),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Los Angeles International Speedway - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(LosAngelesInternationalSpeedway),
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

set.addLeaderboard({
  title: "Mater's Speedy Circuit - Glitch Protection",
  description: "You triggered the glitch protection, all achievements are locked for this race",
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      cheatprotect(),
      level(logo),
      ['', 'Mem', '32bitBE', 0x004ecba4, '=', 'Value', '', 0x52525f54],
      glitchProtect(''),
    ),
    cancel: $(
      ['', 'Value', '', 0, '=', 'Value', '', 1],
    ),
    submit: $(
      ['', 'Value', '', 1, '=', 'Value', '', 1],
    ),
    value: $(
      raceTimer(),
    ),
  },
})

export default set
