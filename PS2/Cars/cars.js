import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 20525, title: 'Cars' })

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

function pointer(offset) {
    return($(
        ['AddAddress', 'Mem', '32bit', offset],
    ))
}

function level(levelid) {
  return($(
    ['', 'Mem', '32bitBE', 0x0052bc7c, '=', 'Value', '', levelid],
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
  if (isLast) {
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
    if (isLast) {
      logic.push($(
        ['AddSource', 'Mem', '8bit', mipsBase + item],
      ));
    } else {
      logic.push($(
        ['Measured', 'Mem', '8bit', mipsBase + item, '=', 'Value', '', total],
      ));
    }
  });
}

set.addAchievement({
  title: "I Am Speed",
  description: "Finish Radiator Springs Grand Prix in Story Mode",
  type: 'progression',
  points: 0,
  conditions: $(
    level(0x315f3100),
    story(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "First Stop, First Win",
  description: "Finish Palm Mile Speedway in Story Mode in third place or higher",
  type: 'progression',
  points: 0,
  conditions: $(
    level(0x315f3800),
    story(),
    finish(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Full Throttle Down South",
  description: "Finish Motor Speedway of the South in Story Mode in third place or higher",
  type: 'progression',
  points: 0,
  conditions: $(
    level(0x325f3131),
    story(),
    finish(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "High Noon, High Speed",
  description: "Finish Sun Valley International Raceway in Story Mode in third place or higher",
  type: 'progression',
  points: 0,
  conditions: $(
    level(0x335f3800),
    story(),
    finish(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "The Smasherville Slugger",
  description: "Win Smasherville International Raceway in Story Mode",
  type: 'progression',
  points: 0,
  conditions: $(
    level(0x345f3800),
    story(),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Thunder Always Comes After Lightning",
  description: "Win Los Angeles International Speedway in Story Mode",
  type: 'win_condition',
  points: 0,
  conditions: $(
    level(0x365f3500),
    story(),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Time for a Little Competitive Excursion",
  description: "Finish Radiator Cap Circuit in third place or higher",
  points: 0,
  conditions: $(
    level(0x315f3200),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Winner Takes the Drive",
  description: "Finish Sally's Sunshine Circuit in third place or higher",
  points: 0,
  conditions: $(
    level(0x325f3000),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Not Going into the Cactus this Time",
  description: "Finish Doc's Challenge in third place or higher",
  points: 0,
  conditions: $(
    level(0x315f3500),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Just some Special Brew",
  description: "Finish Boostin' with Fillmore in third place or higher",
  points: 0,
  conditions: $(
    level(0x325f3300),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "You have to Look the Part",
  description: "Finish North Desert Dash in third place or higher",
  points: 0,
  conditions: $(
    level(0x325f3500),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "We're Gonna Go for a Little Drive",
  description: "Finish Sarge's Off-Road Challenge in third place or higher",
  points: 0,
  conditions: $(
    level(0x325f3700),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "No Jail Time for You, if You Win",
  description: "Finish Sheriff's Chase in third place or higher",
  points: 0,
  conditions: $(
    level(0x335f3400),
    noPractice(),
    finish(),
    finishRace(1),
  ),
})

set.addAchievement({
  title: "Hey McQueen, We're From Queens!",
  description: "Finish Ornament Valley Circuit in third place or higher",
  points: 0,
  conditions: $(
    level(0x335f3600),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Wow, Mater, That Race Looked Rough",
  description: "Finish Rustbucket Race-O-Rama in third place or higher",
  points: 0,
  conditions: $(
    level(0x335f3700),
    noPractice(),
    finish(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Time for That Drive You Owe",
  description: "Finish Sally's Wheel Well Sprint in third place or higher",
  points: 0,
  conditions: $(
    level(0x345f3200),
    noPractice(),
    finish(),
    finishRace(1),
  ),
})

set.addAchievement({
  title: "Time to Show the Crazy Old Grandpa Car what We've got",
  description: "Finish Doc's Check-Up in third place or higher",
  points: 0,
  conditions: $(
    level(0x345f3700),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Let's Race, Fellow Racing Aficionados",
  description: "Finish Tailfin Pass Circuit in third place or higher",
  points: 0,
  conditions: $(
    level(0x345f3300),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "I'm Gonna Need Something a Little Bigger",
  description: "Finish Monster Truck Mayhem in third place or higher",
  points: 0,
  conditions: $(
    level(0x355f3200),
    noPractice(),
    finish(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Road's Open Again",
  description: "Finish Delinquent Road Hazard in third place or higher",
  points: 0,
  conditions: $(
    level(0x355f3400),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "The Roads Out Here Got Something Called Right Turns",
  description: "Finish Chick's Challenge in third place or higher",
  points: 0,
  conditions: $(
    level(0x355f3300),
    noPractice(),
    finish(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "The Rivalry Between McQueen and Chick is Heating Up",
  description: "Finish Radiator Springs GP in third place or higher",
  points: 0,
  conditions: $(
    level(0x365f3100),
    noPractice(),
    finish(),
    finishRace(2),
  ),
})

set.addAchievement({
  title: "No One Has Fall Offa These Roads in a Long Time, I Think",
  description: "Finish Tailfin Pass GP in third place or higher",
  points: 0,
  conditions: $(
    level(0x365f3200),
    noPractice(),
    finish(),
    finishRace(1),
  ),
})

set.addAchievement({
  title: "You's Got To Train With a Real Professional Racer",
  description: "Finish Ornament Valley GP in third place or higher",
  points: 0,
  conditions: $(
    level(0x365f3300),
    noPractice(),
    finish(),
    finishRace(2),
  ),
})

//Still need save protect
set.addAchievement({
  title: "Rookie on the Circuit",
  description: "Collect 50 trophies",
  points: 0,
  conditions: $(
    ['', 'Mem', '32bit', 0x007ed780, '=', 'Value', '', 0],
    pointer(0x2ec),
    pointer(0x28),
    ['', 'Delta', '32bit', 0x008150a8, '<', 'Value', '', 50],
    pointer(0x2ec),
    pointer(0x28),
    ['', 'Mem', '32bit', 0x008150a8, '>=', 'Value', '', 50],
  ),
})

set.addAchievement({
  title: "Radiator Springs Champion",
  description: "Collect 150 trophies",
  points: 0,
  conditions: $(
    ['', 'Mem', '32bit', 0x007ed780, '=', 'Value', '', 0],
    pointer(0x2ec),
    pointer(0x28),
    ['', 'Delta', '32bit', 0x008150a8, '<', 'Value', '', 150],
    pointer(0x2ec),
    pointer(0x28),
    ['', 'Mem', '32bit', 0x008150a8, '>=', 'Value', '', 150],
  ),
})

set.addAchievement({
  title: "Piston Cup Legend",
  description: "Collect all 250 trophies",
  points: 0,
  conditions: $(
    ['', 'Mem', '32bit', 0x007ed780, '=', 'Value', '', 0],
    pointer(0x2ec),
    pointer(0x28),
    ['', 'Delta', '32bit', 0x008150a8, '<', 'Value', '', 250],
    pointer(0x2ec),
    pointer(0x28),
    ['', 'Mem', '32bit', 0x008150a8, '=', 'Value', '', 250],
  ),
})

set.addAchievement({
  title: "Race of your Dreams",
  description: "Win Radiator Springs Grand Prix on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x315f3100),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Esteemed American Racer, Lightning McQueen",
  description: "Win Radiator Cap Circuit on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x315f3200),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Groupies are no Match for the Real Thing",
  description: "Win Sally's Sunshine Circuit on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x325f3000),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Won from the Fabulous Hudson Hornet",
  description: "Win Doc's Challenge on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x315f3500),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Super Octane Boost Juist For the Win",
  description: "Win Boostin' with Fillmore on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x325f3300),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Gold beats Silver Every Time",
  description: "Win North Desert Dash on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x325f3500),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Time for a Hot Car Wash and a Cool Ration",
  description: "Win Sarge's Off-Road Challenge on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x325f3700),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Last Time You Had Help",
  description: "Win Sheriff's Chase on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x335f3400),
    difficulty(2),
    win(),
    finishRace(1),
  ),
})

set.addAchievement({
  title: "Gotta Beat the Best to Be the Best",
  description: "Win Ornament Valley Circuit on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x335f3600),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "I'm a Real Racin' Car Now!",
  description: "Win Rustbucket Race-O-Rama on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x335f3700),
    difficulty(2),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Didn't Even Hit Third Gear",
  description: "Win Sally's Wheel Well Sprint on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x345f3200),
    difficulty(2),
    win(),
    finishRace(1),
  ),
})

set.addAchievement({
  title: "This New Upgrade Feels Great!",
  description: "Win Doc's Check-Up on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x345f3700),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "The American Landscape is Myriad in its Challenges",
  description: "Win Tailfin Pass Circuit on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x345f3300),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "WHAT DID YOU SAY, PUNY TOW TRUCK?!",
  description: "Win Monster Truck Mayhem on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x355f3200),
    difficulty(2),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Cheer Up Guys, Relax a Little",
  description: "Win Delinquent Road Hazard on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x355f3400),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Right, You Like Losing in Front of a Crowd",
  description: "Win Chick's Challenge on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x355f3300),
    difficulty(2),
    win(),
    finishRace(3),
  ),
})

set.addAchievement({
  title: "Beaten the Ugly Green Car with the Mustache",
  description: "Win Radiator Springs GP on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x365f3100),
    difficulty(2),
    win(),
    finishRace(2),
  ),
})

set.addAchievement({
  title: "You Doing Okay, Chick?",
  description: "Win Tailfin Pass GP on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x365f3200),
    difficulty(2),
    win(),
    finishRace(1),
  ),
})

set.addAchievement({
  title: "Should Have Trained With Lightning",
  description: "Win Ornament Valley GP on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x365f3300),
    difficulty(2),
    win(),
    finishRace(2),
  ),
})

set.addAchievement({
  title: "I’m Faster Than Fast, Quicker Than Quick",
  description: "Win the Palm Mile Speedway on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x315f3800),
    difficulty(2),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Float Like a Cadillac, Sting Like a Beemer",
  description: "Win the Motor Speedway of the South on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x325f3131),
    difficulty(2),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "I Eat Winners for Breakfast",
  description: "Win the Sun Valley International Raceway on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x335f3800),
    difficulty(2),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "One Winner. Nineteen Losers",
  description: "Win the Smasherville International Raceway on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x345f3800),
    difficulty(2),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "Ka-Chow! Piston Cup Champion",
  description: "Win the Los Angeles International Speedway on Champion difficulty",
  points: 0,
  conditions: $(
    level(0x365f3500),
    difficulty(2),
    win(),
    finishRace(12),
  ),
})

set.addAchievement({
  title: "A Car's Gotta Have Style",
  description: "Buy all 13 Character Art packs",
  points: 0,
  conditions: {
    core: $(
      ...shop(artPacks)
    ),
    alt1: $(
      ...buy(artPacks)
    ),
    alt2: $(
      ...measure(artPacks)
    ),
  }
})

set.addAchievement({
  title: "Sights Worth Slowin' For",
  description: "Buy 11 Environment Art packs",
  points: 0,
  conditions: {
    core: $(
      ...shop(envPacks, 11)
    ),
    alt1: $(
      ...buy(envPacks)
    ),
    alt2: $(
      ...measure(envPacks, 11)
    ),
  }
})

set.addAchievement({
  title: "See the Country, Feel the Ride",
  description: "Buy all 22 Environment Art packs",
  points: 0,
  conditions: {
    core: $(
      ...shop(envPacks)
    ),
    alt1: $(
      ...buy(envPacks)
    ),
    alt2: $(
      ...measure(envPacks)
    ),
  }
})

set.addAchievement({
  title: "Hidden Under the Hood",
  description: "Buy all 6 Deleted Scenes",
  points: 0,
  conditions: {
    core: $(
      ...shop(delScenes)
    ),
    alt1: $(
      ...buy(delScenes)
    ),
    alt2: $(
      ...measure(delScenes)
    ),
  }
})

set.addAchievement({
  title: "Lights, Camera, Ka-Chow!",
  description: "Buy all 9 Movie Clips",
  points: 0,
  conditions: {
    core: $(
      ...shop(movScenes)
    ),
    alt1: $(
      ...buy(movScenes)
    ),
    alt2: $(
      ...measure(movScenes)
    ),
  }
})

set.addAchievement({
  title: "All Revved Up, All Accounted For",
  description: "Buy all characters",
  points: 0,
  conditions: {
    core: $(
      ...shop(charPack)
    ),
    alt1: $(
      ...buy(charPack)
    ),
    alt2: $(
      ...measure(charPack)
    ),
  }
})

set.addAchievement({
  title: "Ka-Chow! Best Look in Town",
  description: "Buy all of Lightning McQueens paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(mcqPaint)
    ),
    alt1: $(
      ...buy(mcqPaint)
    ),
    alt2: $(
      ...measure(mcqPaint)
    ),
  }
})

set.addAchievement({
  title: "Towin' in Style, Dadgum!",
  description: "Buy all of Maters paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(matPaint)
    ),
    alt1: $(
      ...buy(matPaint)
    ),
    alt2: $(
      ...measure(matPaint)
    ),
  }
})

set.addAchievement({
  title: "Porsche-ly Perfect",
  description: "Buy all of Sally's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(salPaint)
    ),
    alt1: $(
      ...buy(salPaint)
    ),
    alt2: $(
      ...measure(salPaint)
    ),
  }
})

set.addAchievement({
  title: "Fabulous Hudson Hornet",
  description: "Buy all of Doc's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(docPaint)
    ),
    alt1: $(
      ...buy(docPaint)
    ),
    alt2: $(
      ...measure(docPaint)
    ),
  }
})

set.addAchievement({
  title: "Low and Slow",
  description: "Buy all of Ramone's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(ramPaint)
    ),
    alt1: $(
      ...buy(ramPaint)
    ),
    alt2: $(
      ...measure(ramPaint)
    ),
  }
})

set.addAchievement({
  title: "V8 Café Chic",
  description: "Buy all of Flo's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(floPaint)
    ),
    alt1: $(
      ...buy(floPaint)
    ),
    alt2: $(
      ...measure(floPaint)
    ),
  }
})

set.addAchievement({
  title: "Law and Order in Every Finish",
  description: "Buy all of Sherrif's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(sherPaint)
    ),
    alt1: $(
      ...buy(sherPaint)
    ),
    alt2: $(
      ...measure(sherPaint)
    ),
  }
})

set.addAchievement({
  title: "Kachigga!",
  description: "Buy all of Chick Hicks paintsjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(chickPaint)
    ),
    alt1: $(
      ...buy(chickPaint)
    ),
    alt2: $(
      ...measure(chickPaint)
    ),
  }
})

set.addAchievement({
  title: "Boosted and Customized",
  description: "Buy all of Wingo's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(wingPaint)
    ),
    alt1: $(
      ...buy(wingPaint)
    ),
    alt2: $(
      ...measure(wingPaint)
    ),
  }
})

set.addAchievement({
  title: "Boogity Boogity Boogity Styles!",
  description: "Buy all of Darrell Cartrips paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(darPaint)
    ),
    alt1: $(
      ...buy(darPaint)
    ),
    alt2: $(
      ...measure(darPaint)
    ),
  }
})

set.addAchievement({
  title: "The King's Full Livery",
  description: "Buy all of the King's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(kingPaint)
    ),
    alt1: $(
      ...buy(kingPaint)
    ),
    alt2: $(
      ...measure(kingPaint)
    ),
  }
})

set.addAchievement({
  title: "Ka-Chow Goes Ka-Pow!",
  description: "Buy all of Monster Truck Lightnings paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(mmcqPaint)
    ),
    alt1: $(
      ...buy(mmcqPaint)
    ),
    alt2: $(
      ...measure(mmcqPaint)
    ),
  }
})

set.addAchievement({
  title: "Terror of the Tarmac",
  description: "Buy all of Count Spatula's paintjobs",
  points: 0,
  conditions: {
    core: $(
      ...shop(cntPaint)
    ),
    alt1: $(
      ...buy(cntPaint)
    ),
    alt2: $(
      ...measure(cntPaint)
    ),
  }
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Radiator Springs Grand Prix',
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x809840],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51610,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Radiator Cap Circuit',
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x809970],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51611,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Sally's Sunshine Circuit`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x809e30],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51612,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Doc's Challenge`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80a230],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51613,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Boostin' with Fillmore`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80b030],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51614,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - North Desert Dash',
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80b1b0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51615,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Sarge's Off-Road Challenge`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80b410],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51616,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Sheriff's Chase`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80b830],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51617,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Ornament Valley Circuit',
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80bbc0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51618,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Rustbucket Race-O-Rama',
  description:
    'Complete all twelve laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80ba90],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51619,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Sally's Wheel Well Sprint`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80c040],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51620,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Doc's Check-Up`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80c0e0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51621,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Tailfin Pass Circuit',
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80c260],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51622,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Monster Truck Mayhem',
  description:
    'Complete all twelve laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80c4c0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x160],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51623,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Delinquent Road Hazards',
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80c390],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51624,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Chick's Challenge`,
  description:
    'Complete all three laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80c5f0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf4],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51625,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Radiator Springs GP',
  description:
    'Complete all two laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80cb40],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xec],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xec],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xec],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xec],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xec],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xec],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xec],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51626,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Tailfin Pass GP',
  description:
    'Complete the race on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80cdf0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x15c],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x15c],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x15c],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x15c],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x15c],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x15c],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x15c],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51627,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Ornament Valley GP',
  description:
    'Complete all two laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80cc70],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xf0],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51628,
})

set.addLeaderboard({
  title: `⏱️ Time Trial - Mater's Speedy Circuit`,
  description:
    'Complete all six laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80ac70],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xe8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xe8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xe8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xe8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xe8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xe8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0xe8],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51629,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Palm Mile Speedway',
  description:
    'Complete all twelve laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80a310],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51630,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Motor Speedway of the South',
  description:
    'Complete all twelve laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80b540],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51631,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Sun Valley International Raceway',
  description:
    'Complete all twelve laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80bcf0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51632,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Smasherville International Speedway',
  description:
    'Complete all twelve laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80c830],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51633,
})

set.addLeaderboard({
  title: '⏱️ Time Trial - Los Angeles International Speedway',
  description:
    'Complete all twelve laps on Practice Mode in the fastest time you can! (No respawning).',
  lowerIsBetter: true,
  type: 'MILLISECS',
  conditions: {
    start: $(
      ['', 'Mem', '32bit', 0x7ed85c, '=', 'Value', '', 0x80ced0],
      ['', 'Mem', '32bit', 0x5185a8, '>', 'Value', '', 80],
      ['', 'Mem', '32bit', 0x553828, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7ed780, '=', 'Value', '', 1],
      ['', 'Mem', '32bit', 0x7ed788, '=', 'Value', '', 3],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '=', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Float', 0x28, '>', 'Float', '', 0],
      ['', 'Mem', 'Bit2', 0x52beb0, '=', 'Value', '', 0],
      ['', 'Mem', 'Bit5', 0x52beb2, '=', 'Value', '', 0],
    ),
    cancel: $(
      ['OrNext', 'Mem', '32bit', 0x553828, '!=', 'Value', '', 0],
      ['OrNext', 'Mem', '32bit', 0x5185a8, '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['AndNext', 'Delta', 'Float', 0x28, '>', 'Float', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['OrNext', 'Mem', 'Float', 0x28, '=', 'Float', '', 0],
      ['AndNext', 'Mem', '32bit', 0x7c8ce8, '=', 'Value', '', 0],
      ['', 'Mem', '32bit', 0x7c8a98, '=', 'Value', '', 1],
    ),
    submit: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['ResetNextIf', 'Mem', '32bit', 0x3c, '=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['', 'Mem', 'Lower4', 0x48, '=', 'Value', '', 3, 5],
    ),
    value: $(
      ['AddAddress', 'Mem', '32bit', 0x7eb56c],
      ['AddAddress', 'Mem', '32bit', 0x164],
      ['AddAddress', 'Mem', '32bit', 0x10],
      ['AddAddress', 'Mem', '32bit', 0x30],
      ['AddAddress', 'Mem', '32bit', 0x0],
      ['Measured', 'Mem', 'Float', 0x28, '*', 'Value', '', 100],
    ),
  },
  id: 51634,
})

export default set
