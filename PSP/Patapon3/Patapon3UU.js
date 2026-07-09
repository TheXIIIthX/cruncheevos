import { AchievementSet, define as $ } from '@cruncheevos/core'
const set = new AchievementSet({ gameId: 3507, id: 38681, title: 'Patapon 3' })

let Yarida = 0x9644
let Taterazay = 0x96c8
let Yumiyacha = 0x974c
let Kibadda = 0x97d0
let Destrobo = 0x99dc
let Piekron = 0x9b6c
let Wooyari = 0x9bf0
let Pyokorider = 0x9c74
let Cannassault = 0x9cf8
let Charibasa = 0x9d7c
let Guardira = 0x9e00
let Tondenga = 0x9e84
let Myamsar = 0x9f08
let Bowmunk = 0x9f8c
let Grenburr = 0xa010
let Alosson = 0xa094
let Wondabarappa = 0xa118
let Jamsch = 0xa19c
let Oohoroc = 0xa220
let Pingrek = 0xa2a4
let Cannogabang = 0xa328

let YaridaSkill = [0x9688, 0xaca8] 
let TaterazaySkill = [0x970c, 0xc34c] 
let YumiyachaSkill = [0x9790, 0xd9f0] 
let KibaddaSkill = [0x9814, 0xae34] 
let DestroboSkill = [0x9a24, 0xc664] 
let PiekronSkill = [0x9bb0, 0xb1d0] 
let WooyariSkill = [0x9c34, 0xb254] 
let PyokoriderSkill = [0x9cb8, 0xb2d8] 
let CannassaultSkill = [0x9d3c, 0xb35c] 
let CharibasaSkill = [0x9dc0, 0xb3e0] 
let GuardiraSkill = [0x9e44, 0xca84] 
let TondengaSkill = [0x9ec8, 0xcb08] 
let MyamsarSkill = [0x9f4c, 0xcb8c] 
let BowmunkSkill = [0x9fd0, 0xcc10] 
let GrenburrSkill = [0xa054, 0xcc94] 
let AlossonSkill = [0xa0d8, 0xe338] 
let WondabarappaSkill = [0xa15c, 0xe3bc] 
let JamschSkill = [0xa1e0, 0xe440] 
let SingeSkill = [0xa264, 0xe4c4] 
let VolcanoSkill = [0xa268, 0xe4c8] 
let FlashSkill = [0xa26c, 0xe4cc] 
let ThunderSkill = [0xa270, 0xe4d0] 
let HellfireSkill = [0xa274, 0xe4d4] 
let NovaSkill = [0xa278, 0xe4d8] 
let VenomSkill = [0xa27c, 0xe4dc] 
let PingrekSkill = [0xa2e8, 0xe548] 
let CannogabangSkill = [0xa36c, 0xe5cc] 

let peerless = [
  ['Maximum Overdrive', 'Yarida', 'Spear', Yarida],
  ['Shield of Legends', 'Taterazay', 'Shield', Taterazay],
  ['Death Before Dishonor', 'Yumiyacha', 'Bow', Yumiyacha],
  ['Top Gun', 'Kibadda', 'Fang', Kibadda],
  ['Retribution', 'Tondenga', 'Pig', Tondenga],
  ['Pack Leader', 'Wondabarappa', 'Dog', Wondabarappa],
  ['Untainted', 'Cannassault', 'Deer', Cannassault],
  ['Nothing Shall Stand', 'Destrobo', 'Robo', Destrobo],
  ['Happy Feet', 'Pingrek', 'Penguin', Pingrek],
  ['Smoke Eater', 'Piekron', 'Frog', Piekron],
  ['Divine Protection', 'Guardira', 'Sheep', Guardira],
  ['Soul Reaper', 'Alosson', 'Hedgehog', Alosson],
  ['Flawless Rhythm', 'Pyokorider', 'Rabbit', Pyokorider],
  ["Executioner's Touch", 'Myamsar', 'Cat', Myamsar],
  ['Survivalist', 'Jamsch', 'Mushroom', Jamsch],
  ['Monsoon Might', 'Wooyari', 'Fish', Wooyari],
  ['Roots of Life', 'Bowmunk', 'Tree', Bowmunk],
  ['Monkey See, Monkey Do', 'Oohoroc','Monkey', Oohoroc],
  ['Fatal Blow', 'Charibasa', 'Bird', Charibasa],
  ['All or Nothing', 'Grenburr', 'Bovine', Grenburr],
  ['Death is Only the Beginning', 'Cannogabang', 'Dragon', Cannogabang],
]

let classSkill = [
  ['Double Impact', 'Two Spear', 1, 2, YaridaSkill],
  ['Triple Threat', 'Three Spear', 2, 3, YaridaSkill],
  ['Quadruple Cataclysm', 'Four Spear', 3, 4, YaridaSkill],
  ['Quintuple Doom', 'Five Spear', 4, 5, YaridaSkill],
  ['First Line of Defence', 'Energy Field 10%', 1, 1, TaterazaySkill],
  ['Shieldwall', 'Energy Field 20%', 2, 2, TaterazaySkill],
  ['Unbroken Line', 'Energy Field 30%', 3, 3, TaterazaySkill],
  ['Living Fortress', 'Energy Field 40%', 4, 5, TaterazaySkill],
  ['The Last Bastion', 'Energy Field 50%', 5, 10, TaterazaySkill],
  ['Twin Feathers', 'Quickshot 2', 1, 1, YumiyachaSkill],
  ['Trick Shot', 'Quickshot 3', 2, 2, YumiyachaSkill],
  ['Master Marksman', 'Quickshot 4', 3, 4, YumiyachaSkill],
  ['Deadeye', 'Quickshot 5', 4, 5, YumiyachaSkill],
  ['Zenith Archer', 'Quickshot 6', 5, 10, YumiyachaSkill],
  ['Trampling Force', 'Assault Hits 1', 1, 2, KibaddaSkill],
  ['Iron Stampede', 'Assault Hits 2', 2, 3, KibaddaSkill],
  ['Avalanche of Hooves', 'Assault Hits 3', 3, 5, KibaddaSkill],
  ['Cataclysmic Stampede', 'Assault Hits 4', 4, 10, KibaddaSkill],
  ['Hidden Potential', 'Set Skills 1', 1, 2, TondengaSkill],
  ['Untapped Power', 'Set Skills 2', 2, 3, TondengaSkill],
  ['Endless Possibilities', 'Set Skills 3', 3, 5, TondengaSkill],
  ['Limitbreak', 'Set Skills 4', 4, 10, TondengaSkill],
  ['Sound the Drums', 'Heave Ho 1', 1, 3, WondabarappaSkill],
  ['Raise the Banner', 'Heave Ho 2', 2, 5, WondabarappaSkill],
  ['Hold Formation', 'Heave Ho 3', 3, 10, WondabarappaSkill],
  ['Victory March', 'Heave Ho 4', 4, 25, WondabarappaSkill],
  ['Unshaken Spirit', 'Backbone 1', 1, 5, CannassaultSkill],
  ['Steadfast Will', 'Backbone 2', 2, 5, CannassaultSkill],
  ['Cold Defiance', 'Backbone 3', 3, 10, CannassaultSkill],
  ['Inferno Walker', 'Backbone 4', 4, 25, CannassaultSkill],
  ['Lumberjack', 'Wood Smasher', 1, 1, DestroboSkill],
  ['Rock Crusher', 'Stone Smasher', 2, 3, DestroboSkill],
  ['Iron Breaker', 'Metal Smasher', 3, 5, DestroboSkill],
  ['World Breaker', 'Everything Smasher', 4, 5, DestroboSkill],
  ['Glacial Barrier', 'Ice Wall', 1, 2, PingrekSkill],
  ['Cold Snap', 'Freeze Trap', 2, 4, PingrekSkill],
  ['Frozen Foundation', 'Ice Buttress', 3, 5, PingrekSkill],
  ['Miracle of Ice', 'Health Recovery', 4, 50, PingrekSkill],
  ['Arctic Vengeance', 'Frost Guard', 5, 5, PingrekSkill],
  ['Sky Piercer', 'Leaping Spear', 1, 1, PiekronSkill],
  ['Thunderstruck', 'Spear BOOM', 2, 3, PiekronSkill],
  ['Eye of the Storm', 'Spear BA-BOOM', 3, 5, PiekronSkill],
  ["Heaven's Judgement", 'Spear BA-BA-BOOM', 4, 10, PiekronSkill],
  ['Never Falter', 'Anti-Stagger', 1, 5, GuardiraSkill],
  ['Anchored In', 'Anti-Knockback', 2, 10, GuardiraSkill],
  ['Sleepless Sentinel', 'Anti-Sleep', 3, 25, GuardiraSkill],
  ['Pureblood', 'Anti-Poison', 4, 10, GuardiraSkill],
  ['Quick Draw', 'Attack Speed 1', 1, 2, AlossonSkill],
  ['Rapid Fire', 'Attack Speed 2', 2, 3, AlossonSkill],
  ['Mach Shot', 'Attack Speed 3', 3, 5, AlossonSkill],
  ['Afterimage', 'Attack Speed 4', 4, 10, AlossonSkill],
  ['Full Gallop', 'Giddy Up 1', 1, 2, PyokoriderSkill],
  ['Breakneck Pace', 'Giddy Up 2', 2, 3, PyokoriderSkill],
  ['Lightning Charge', 'Giddy Up 3', 3, 5, PyokoriderSkill],
  ['Mach Rider', 'Giddy Up 4', 4, 10, PyokoriderSkill],
  ['Do Not Touch', 'Poison Hide', 1, 2, MyamsarSkill],
  ['Master of Disguise', 'Doppelganger', 2, 5, MyamsarSkill],
  ['Toxic Demise', 'Poison Bomb', 3, 3, MyamsarSkill],
  ["Predator's Instinct", 'Natural Enemy', 4, 10, MyamsarSkill],
  ['Lights Out', 'Catnap', 1, 3, JamschSkill],
  ['Pyromaniac', 'Flame On', 2, 3, JamschSkill],
  ['Toxic Behaviour', 'Poison Panic', 3, 5, JamschSkill],
  ['Death Cap', 'Doom Shroom', 4, 10, JamschSkill],
  ['Twofold Assault', 'Two Strike', 1, 1, WooyariSkill],
  ['Threefold Combo', 'Three Strike', 2, 2, WooyariSkill],
  ['Fourfold Fury', 'Four Strike', 3, 3, WooyariSkill],
  ['Fivefold Finale', 'Five Strike', 4, 5, WooyariSkill],
  ['Sixfold Slaughter', 'Six Strike', 5, 10, WooyariSkill],
  ['Breaking Ground', 'Tiny Base', 1, 2, BowmunkSkill],
  ['Laying Foundations', 'Mid Base', 2, 5, BowmunkSkill],
  ['Raising the Walls', 'Big Base', 3, 10, BowmunkSkill],
  ['Castle Doctrine', 'Super Fortress', 4, 25, BowmunkSkill],
  ['Ignition', 'Singe 1', 1, 1, SingeSkill],
  ['Combustion', 'Singe 2', 2, 2, SingeSkill],
  ['Conflagration', 'Singe 3', 3, 3, SingeSkill],
  ['Hellfire', 'Singe 4', 4, 5, SingeSkill],
  ['Armageddon', 'Singe 5', 5, 10, SingeSkill],
  ['Heatwave', 'Volcano 1', 1, 1, VolcanoSkill],
  ['Lava Surge', 'Volcano 2', 2, 2, VolcanoSkill],
  ['White Hot', 'Volcano 3', 3, 3, VolcanoSkill],
  ['Meltdown', 'Volcano 4', 4, 5, VolcanoSkill],
  ['Hell Unleashed', 'Volcano 5', 5, 10, VolcanoSkill],
  ["Zeus' Whisper", 'Flash Crack Boom 1', 1, 1, FlashSkill],
  ["Heaven's Bolt", 'Flash Crack Boom 2', 2, 2, FlashSkill],
  ["Electric Tempest", 'Flash Crack Boom 3', 3, 3, FlashSkill],
  ["Wrath of Olympus", 'Flash Crack Boom 4', 4, 5, FlashSkill],
  ["Bolt from the Blue", 'Flash Crack Boom 5', 5, 10, FlashSkill],
  ['Ride the Lightning', 'Thunderific', 1, 5, ThunderSkill],
  ['Hell on Earth', 'Darkfire', 1, 5, HellfireSkill],
  ['Plaguebringer', 'Venomist', 1, 5, VenomSkill],
  ['Judgement Day', 'Nova Nova', 1, 5, NovaSkill],
  ["Rider's Legacy", 'Pyokora Spirit', 1, 2, CharibasaSkill],
  ["Spearmaster's Legacy", 'Yaripon Spirit', 2, 3, CharibasaSkill],
  ["Wheel of Destruction", 'Chariot Attack', 3, 5, CharibasaSkill],
  ["Unbreakable Spirit", 'Kanokyon Spirit', 4, 25, CharibasaSkill],
  ['First Tremor', 'Zapper 1', 1, 2, GrenburrSkill],
  ['Fault Line', 'Zapper 2', 2, 4, GrenburrSkill],
  ['Continental Drift', 'Zapper 3', 3, 5, GrenburrSkill],
  ['Megaquake', 'Zapper 4', 4, 10, GrenburrSkill],
  ['The Big One', 'Zapper 5', 5, 25, GrenburrSkill],
  ['Big Bertha', 'Cannon Skillz', 1, 1, CannogabangSkill],
  ['Shock and Awe', 'Scattershot Skillz', 2, 3, CannogabangSkill],
  ['Death Ray', 'Laser Skillz', 3, 5, CannogabangSkill],
  ['Heavy Ordnance', 'Artillery Skillz', 4, 5, CannogabangSkill],
  ['Some Men Just Want to Watch the World Burn', 'Incendiary Skillz', 5, 10, CannogabangSkill],
]

let weapons = [
    ["Dragon's Bane", "Drigonlay", 3, 0x008e],
    ["Demon's Downfall", "Flangil", 3, 0x008d],
    ["Twin Slash", "Castram", 5, 0x0090],
    ["Unyielding Steel", "Fendus", 5, 0x008f],
    ["Colossal Cleaver", "The Butcher", 5, 0x0091],
    ["Raincutter", "Tsuyugiri", 3, 0x00a4],
    ["The Blade Hungers", "Murapata", 3, 0x00a5],
    ["Crowned in Steel", "Blade of Astria", 5, 0x00a6],
    ["Record Breaker", "Deathwringer", 3, 0x0114],
    ["The Golem's Fist", "Great Golem Arm", 3, 0x0115],
    ["Riot Breaker", "Piringar Zingar", 5, 0x0116],
    ["The Strong Arm of the Law", "Chosan's Arm", 5, 0x0117],
    ["Healing Hands", "Natura's Touch", 5, 0x0118],
    ["Cioking's Carapace", "Crablessa", 3, 0x012b],
    ["Featherstep", "Feisho", 5, 0x012c],
    ["Kiss of Death", "Heltopay's Kiss", 3, 0x0137],
    ["Shadowforged", "Goliamon's Shiv", 5, 0x0138],
    ["Sacred Sting", "Holymadda Shiv", 5, 0x0139],
    ["Crushing Blow", "Quagar", 3, 0x014d],
    ["Rightful King", "Excalipon", 3, 0x014c],
    ["Unchained Fury", "Serberker", 5, 0x014e],
    ["Featherweight Giant", "Mono Hoshibo", 3, 0x0161],
    ["Frozen Judgement", "Onigiri's Greatblade", 3, 0x0162],
    ["The Sacrificial Blade", "Murasamune", 5, 0x0163],
    ["Frozen Solid", "Hilkinga's Chillaxe", 3, 0x0176],
    ["Untouchable", "Susurapon", 3, 0x0177],
    ["Exquisite Brutality", "Axe of Hanboon", 5, 0x0178],
    ["Wrecking Crew", "Genmaru", 3, 0x018b],
    ["Giantbreaker", "Mjollnir", 3, 0x018c],
    ["Harbinger of Chaos", "Thor", 5, 0x018d],
    ["Nightmare Spear", "Gesundbeit", 3, 0x00c1],
    ["Dream Weaver", "Yumspar", 3, 0x00c2],
    ["Through and Through", "Dokaknel's Fang", 5, 0x00c4],
    ["Flawless Flight", "Palkyria's Flight", 5, 0x00c3],
    ["Frozen Tide", "Poseipon's Trident", 5, 0x00c5],
    ["Untarnished by Time", "Goldora", 3, 0x00d8],
    ["Unstoppable Thrust", "Pointidon", 3, 0x00d9],
    ["Timber!", "Super Cedar Log", 5, 0x00da],
    ["One Thrust, One Giant", "Romulus' Halberd", 3, 0x00f5],
    ["Scorched Earth", "Incensar", 3, 0x00f6],
    ["Godly Precision", "Gugnir", 5, 0x00f7],
    ["Undefeated", "Battachin", 5, 0x00f8],
    ["Flash of Divinity", "Murakumon", 5, 0x00f9],
    ["Gift of the Sun", "Bow of Apollopon", 3, 0x01a0],
    ["Death from the Shadows", "Yamibashiri", 3, 0x01a1],
    ["Lightning in Flight", "Raijinpon's Bow", 5, 0x01a2],
    ["Giants' Lullaby", "Crossbow of Faible", 3, 0x01b5],
    ["Slow, but Devastating", "Krakabom Crossbow", 5, 0x01b6],
    ["Pierce the Impossible", "Yoichiro", 5, 0x01b7],
    ["The Perfect Formula", "The Machinator", 3, 0x01ca],
    ["Death's Opening Act", "Illiamtel's Overture", 5, 0x01cb],
    ["Curse in Flight", "Teskatori Shooter", 5, 0x01cc],
    ["Immortal Resonance", "Healixer Horn", 3, 0x01df],
    ["Draconic Slumber", "Dragonap Horn", 3, 0x01e0],
    ["The Devil's Frequency", "Sonic Demonslayer", 5, 0x01e1],
    ["False Courage", "Horn of Homugai", 3, 0x01f4],
    ["Roar of the Colossus", "Megaslayer", 5, 0x01f5],
    ["Howl of the Hunt", "Great Howl", 5, 0x01f6],
    ["Craving Sleep", "Horns of Hamlin", 3, 0x0209],
    ["An Eerie Melody", "Siren's Song", 5, 0x020a],
    ["Torrential Sound", "Spriggan's Song", 5, 0x020b],
    ["Heaven's Tempest", "Thunderstorm Staff", 3, 0x0226],
    ["Holy Radiance", "Holymist Staff", 5, 0x0228],
    ["Infernal Tide", "Flamesea Staff", 5, 0x0227],
    ["Breath of Venom", "Darkvenom Staff", 5, 0x0229],
    ["Dance of the Blades", "Jewelsword Staff", 5, 0x022a],
    ["Untouched by Fire", "Firefighter Scepter", 3, 0x0245],
    ["Untouched by Ice", "Defrost Scepter", 3, 0x0246],
    ["Out Cold", "Maelstrom Scepter", 5, 0x0249],
    ["Wide Awake", "Sleepless Scepter", 5, 0x0248],
    ["Iron Flesh", "Antivenom Scepter", 5, 0x0247],
    ["Reinforced Impact", "Bonkadonk Cannon", 3, 0x0254],
    ["Sleep Rounds", "Lullablight", 5, 0x0255],
    ["Critical Calculations", "Euryalus", 3, 0x0260],
    ["Poisoned Dreams", "Dreadmare", 5, 0x0261],
    ["Demonic Ray", "Hoirenho", 3, 0x026c],
    ["One Shot Special", "Ichigeki", 5, 0x026d],
    ["Beauty in Battle", "Tahla Helm", 3, 0x0288],
    ["Bunnypon's Legacy", "Bunny Hood", 3, 0x0289],
    ["Jagged Power", "Tebenos Helm", 5, 0x028a],
    ["Way of the Warrior", "Samurai Helm", 5, 0x028b],
    ["Ready for Anything", "Marumenko Helm", 5, 0x028c],
    ["Fangs of Fenrir", "Stinger Shield", 3, 0x02a7],
    ["Ten Thousand Years Strong", "Galapagos Shield", 3, 0x02a8],
    ["Immovable Object", "Octagon Shield", 5, 0x02a9],
    ["Too Hot to Burn", "Fireblessed Shield", 5, 0x02ab],
    ["Ruinous Protection", "Alldemonium Shield", 5, 0x02aa],
    ["Polished to Perfection", "Aegis", 3, 0x02be],
    ["Ancient Perfection", "Tokoyomamori", 3, 0x02bf],
    ["Microbial Might", "Bacteon Greatshield", 5, 0x02c0],
    ["Flow Like Water", "Frayola's Spaulders", 3, 0x02d3],
    ["Get the Point", "Lonestars", 3, 0x02d4],
    ["Frog Would Approve", "Crono Riggers", 5, 0x02d5],
    ["Disaster Averted", "Cape of Ulysses", 3, 0x02e8],
    ["Charm Offensive", "Freja's Cape", 3, 0x02e9],
    ["Sidestep Fate", "Vamp Cloak", 5, 0x02ea],
    ["Just Beat It", "Moonwalkers", 3, 0x02fe],
    ["Stand Your Ground", "Alarium Stompers", 3, 0x02fd],
    ["Feathers of the Demon", "Lilith Shoes", 5, 0x02ff],
    ["Absolute Zero", "Sibericus the Frosty", 3, 0x0312],
    ["An Old Warhorse", "Bullgam the Bully", 3, 0x0313],
    ["Born to Run", "Ponbiscuit", 5, 0x0314],
    ["Critical Charge", "Deep Impact", 3, 0x0327],
    ["Only the Worthy", "Kotenho the King", 5, 0x0328],
    ["Born Victorious", "Ponteo the Victorious", 5, 0x0329],
    ["Built Like a Tank", "The Silencer", 3, 0x0344],
    ["Greased Lightning", "Ruemelter", 3, 0x0345],
    ["Silver Lining", "Silver Murzephone", 5, 0x0346],
    ["Lightspeed Charge", "Chariot of Light", 5, 0x0347],
    ["The Engine Never Sleeps", "Deedsarus Darktank", 5, 0x0348]
];

let ultimateIDs = [
  0x0092,
  0x00a7,
  0x00c6,
  0x00db,
  0x00fa,
  0x0119,
  0x012d,
  0x013a,
  0x014f,
  0x0164,
  0x0179,
  0x018e,
  0x01a3,
  0x01b8,
  0x01cd,
  0x01e2,
  0x01f7,
  0x020c,
  0x022b,
  0x024a,
  0x0256,
  0x0262,
  0x026e,
  0x028d,
  0x02ac,
  0x02c1,
  0x02d6,
  0x02eb,
  0x0300,
  0x0315,
  0x032a,
  0x0349,
]

function pointer(offset) {
  return($(['AddAddress', 'Mem', '32bit', offset, '&', 'Value', '', 0x1ffffff],))
}

function weaponCheck(weaponID, index = 0) {
  let base = 0x2
  let offset = 0x28
  return($(
    pointer(0x00aabd94),
    pointer(0x78),
    pointer(0x34),
    pointer(0x1958),
    ['', 'Delta', '16bit', base + offset * index, '=', 'Value', '', 0xffff],
    pointer(0x00aabd94),
    pointer(0x78),
    pointer(0x34),
    pointer(0x1958),
    ['', 'Mem', '16bit', base + offset * index, '=', 'Value', '', weaponID],
  ))
}

function ultimateCheck(weaponIDs, slotIndex = 0) {
  const base = 0x2
  const offset = 0x28
  const logic = []

  logic.push(
    pointer(0x00aabd94),
    pointer(0x78),
    pointer(0x34),
    pointer(0x1958),
    ['', 'Delta', '16bit', base + offset * slotIndex, '=', 'Value', '', 0xffff],
  )

  for (const [weaponIndex, ID] of weaponIDs.entries()) {
    logic.push(
      pointer(0x00aabd94),
      pointer(0x78),
      pointer(0x34),
      pointer(0x1958),
      [
        weaponIndex !== weaponIDs.length - 1 ? 'OrNext' : '',
        'Mem',
        '16bit',
        base + offset * slotIndex,
        '=',
        'Value',
        '',
        ID,
      ],
    )
  }

  return $(...logic)
}

for(const [ID, character] of peerless.entries()) {
  set.addAchievement({
    title: character[0],
    description: ["Learn ", character[1], "'s ultimate skill, Peerless ", character[2]].join(''),
    points: 10,
    conditions: $(
      ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
      ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
      ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
      ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
      ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
      ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
      ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
      ['', 'Delta', '32bit', character[3], '<', 'Value', '', 32],
      ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
      ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
      ['', 'Mem', '32bit', character[3], '>=', 'Value', '', 32],
    )
  })
}

for(const [ID, skill] of classSkill.entries()) {
  set.addAchievement({
    title: skill[0],
    description: ["Master ", skill[1]].join(''),
    points: skill[3],
    conditions: {
      core: $(
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
        ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
        ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
        ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
        ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
      ),
      alt1: $(
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
        ['', 'Delta', 'Float', skill[4][0], '<', 'Float', '', skill[2]],
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
        ['', 'Mem', 'Float', skill[4][0], '>=', 'Float', '', skill[2]],
      ),
      alt2: $(
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
        ['', 'Delta', 'Float', skill[4][1], '<', 'Float', '', skill[2]],
        ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
        ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
        ['', 'Mem', 'Float', skill[4][1], '>=', 'Float', '', skill[2]],
      ),
    }
  })
}

function weaponBuilder(weaponID) {
  let logic = {}
  logic['core'] = $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
  )
  for (let i = 0; i < 20; i++) {
    logic['alt' + (i + 1)] = weaponCheck(weaponID, i)
  }
  return(logic)
}

for(const [ID, weapon] of weapons.entries()) {
  let rarity
  if(weapon[2] == 3) {
    rarity = "Unique"
  }
  else if(weapon[2] == 5) {
    rarity = "Super Unique"
  }
  else {
    rarity = "???"
  }
  set.addAchievement({
    title: weapon[0],
    description: ["Collect the ", rarity, " equipment, ", weapon[1]].join(''),
    points: weapon[2],
    conditions: weaponBuilder(weapon[3])
  })
}

function ultimateBuilder(UltimateWeapons) {
  let logic = {}
  logic['core'] = $(
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xaabd94, '&', 'Value', '', 0x1ffffff],
    ['AddAddress', 'Mem', '32bit', 0x50, '&', 'Value', '', 0x1ffffff],
    ['', 'Mem', '32bit', 0x9520, '<=', 'Value', '', 34],
    ['AddAddress', 'Mem', '32bit', 0xab9020, '&', 'Value', '', 0x1ffffff],
    ['', 'Delta', '32bit', 0x2310, '!=', 'Value', '', 0],
  )
  for (let i = 0; i < 20; i++) {
    logic['alt' + (i + 1)] = ultimateCheck(UltimateWeapons, i)
  }
  return(logic)
}

set.addAchievement({
  title: 'Fit for a Uberhero',
  description: 'Collect a piece of Ultimate equipment',
  points: 100,
  conditions: ultimateBuilder(ultimateIDs)
})

export default set
