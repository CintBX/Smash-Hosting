// Strategy
// Each src will import the series symbol, all 36 of them
// Each name will NOT be the name of the series, but instead will be the name of each character that belongs to it
// Then I can map it the same way I did Characters, to check player.main === seriesSymbol.name

// OPTIONAL
// Hmm.. might be more efficient to store each `name` as an Array containing the names of all the characters belonging
// to that series...
// For now, just do a bunch of requires per character even if it looks like shit

const seriesSymbols = [
  { id: 1, src: require('../img/symbols/AnimalCrossing.png'), name: 'Isabelle' },
  { id: 2, src: require('../img/symbols/AnimalCrossing.png'), name: 'Villager' },
	{ id: 3, src: require('../img/symbols/BanjoKazooie.png'), name: 'Banjo-Kazooie' },
	{ id: 4, src: require('../img/symbols/Bayonetta.png'), name: 'Bayonetta' },
	{ id: 5, src: require('../img/symbols/Castlevania.png'), name: 'Richter' },
	{ id: 6, src: require('../img/symbols/Castlevania.png'), name: 'Simon' },
	{ id: 7, src: require('../img/symbols/DonkeyKong.png'), name: 'Diddy Kong' },
	{ id: 8, src: require('../img/symbols/DonkeyKong.png'), name: 'Donkey Kong' },
	{ id: 9, src: require('../img/symbols/DonkeyKong.png'), name: 'King K. Rool' },
  { id: 10, src: require('../img/symbols/DragonQuest.png'), name: 'Hero' },
  
	{ id: 11, src: require('../img/symbols/DuckHunt.png'), name: 'Duck Hunt' },
	{ id: 12, src: require('../img/symbols/Earthbound.png'), name: 'Lucas' },
  { id: 13, src: require('../img/symbols/Earthbound.png'), name: 'Ness' },
  { id: 14, src: require('../img/symbols/FatalFury.png'), name: 'Terry' },
	{ id: 15, src: require('../img/symbols/FinalFantasy.png'), name: 'Cloud' },
	{ id: 16, src: require('../img/symbols/FireEmblem.png'), name: 'Byleth' },
	{ id: 17, src: require('../img/symbols/FireEmblem.png'), name: 'Chrom' },
	{ id: 18, src: require('../img/symbols/FireEmblem.png'), name: 'Corrin' },
	{ id: 19, src: require('../img/symbols/FireEmblem.png'), name: 'Ike' },
  { id: 20, src: require('../img/symbols/FireEmblem.png'), name: 'Lucina' },
  
	{ id: 21, src: require('../img/symbols/FireEmblem.png'), name: 'Marth' },
  { id: 22, src: require('../img/symbols/FireEmblem.png'), name: 'Robin' },  
	{ id: 23, src: require('../img/symbols/FireEmblem.png'), name: 'Roy' },
	{ id: 24, src: require('../img/symbols/FZero.png'), name: 'Captain Falcon' },
	{ id: 25, src: require('../img/symbols/Game_Watch.png'), name: 'Mr. Game & Watch' },
	{ id: 26, src: require('../img/symbols/IceClimbers.png'), name: 'Ice Climbers' },
	{ id: 27, src: require('../img/symbols/KidIcarus.png'), name: 'Dark Pit' },
	{ id: 28, src: require('../img/symbols/KidIcarus.png'), name: 'Palutena' },
	{ id: 29, src: require('../img/symbols/KidIcarus.png'), name: 'Pit' },
  { id: 30, src: require('../img/symbols/KirbyStar.png'), name: 'King Dedede' },
  
	{ id: 31, src: require('../img/symbols/KirbyStar.png'), name: 'Kirby' },
  { id: 32, src: require('../img/symbols/KirbyStar.png'), name: 'Meta Knight' },  
	{ id: 33, src: require('../img/symbols/LegendOfZelda.png'), name: 'Ganondorf' },
	{ id: 34, src: require('../img/symbols/LegendOfZelda.png'), name: 'Link' },
	{ id: 35, src: require('../img/symbols/LegendOfZelda.png'), name: 'Sheik' },
	{ id: 36, src: require('../img/symbols/LegendOfZelda.png'), name: 'Toon Link' },
	{ id: 37, src: require('../img/symbols/LegendOfZelda.png'), name: 'Young Link' },
	{ id: 38, src: require('../img/symbols/LegendOfZelda.png'), name: 'Zelda' },
	{ id: 39, src: require('../img/symbols/MegaMan.png'), name: 'Mega Man' },
  { id: 40, src: require('../img/symbols/MetalGear.png'), name: 'Snake' },
  
	{ id: 41, src: require('../img/symbols/Metroid.png'), name: 'Dark Samus' },
	{ id: 42, src: require('../img/symbols/Metroid.png'), name: 'Ridley' },  
  { id: 43, src: require('../img/symbols/Metroid.png'), name: 'Samus' },
	{ id: 44, src: require('../img/symbols/Metroid.png'), name: 'Zero Suit Samus' },
	{ id: 45, src: require('../img/symbols/PacMan.png'), name: 'Pac-Man' },
	{ id: 46, src: require('../img/symbols/Persona.png'), name: 'Joker' },
	{ id: 47, src: require('../img/symbols/Pikmin.png'), name: 'Olimar' },
	{ id: 48, src: require('../img/symbols/Pokemon.png'), name: 'Greninja' },
	{ id: 49, src: require('../img/symbols/Pokemon.png'), name: 'Incineroar' },
  { id: 50, src: require('../img/symbols/Pokemon.png'), name: 'Jigglypuff' },
  
	{ id: 51, src: require('../img/symbols/Pokemon.png'), name: 'Lucario' },
  { id: 52, src: require('../img/symbols/Pokemon.png'), name: 'Mewtwo' },  
	{ id: 53, src: require('../img/symbols/Pokemon.png'), name: 'Pichu' },
	{ id: 54, src: require('../img/symbols/Pokemon.png'), name: 'Pikachu' },
	{ id: 55, src: require('../img/symbols/Pokemon.png'), name: 'Pokemon Trainer' },
	{ id: 56, src: require('../img/symbols/PunchOut.png'), name: 'Little Mac' },
	{ id: 57, src: require('../img/symbols/ROB.png'), name: 'R.O.B.' },
	{ id: 58, src: require('../img/symbols/Sonic.png'), name: 'Sonic' },
	{ id: 59, src: require('../img/symbols/Splatoon.png'), name: 'Inkling' },
  { id: 60, src: require('../img/symbols/SSB.png'), name: '' }, // default
  
	{ id: 61, src: require('../img/symbols/StarFox.png'), name: 'Falco' },
  { id: 62, src: require('../img/symbols/StarFox.png'), name: 'Fox' },  
	{ id: 63, src: require('../img/symbols/StarFox.png'), name: 'Wolf' },
	{ id: 64, src: require('../img/symbols/StreetFighter.png'), name: 'Ken' },
	{ id: 65, src: require('../img/symbols/StreetFighter.png'), name: 'Ryu' },
	{ id: 66, src: require('../img/symbols/SuperMario.png'), name: 'Bowser' },
	{ id: 67, src: require('../img/symbols/SuperMario.png'), name: 'Bowser Jr.' },
	{ id: 68, src: require('../img/symbols/SuperMario.png'), name: 'Daisy' },
	{ id: 69, src: require('../img/symbols/SuperMario.png'), name: 'Dr. Mario' },
  { id: 70, src: require('../img/symbols/SuperMario.png'), name: 'Luigi' },
  
	{ id: 71, src: require('../img/symbols/SuperMario.png'), name: 'Mario' },
  { id: 72, src: require('../img/symbols/SuperMario.png'), name: 'Peach' },  
	{ id: 73, src: require('../img/symbols/SuperMario.png'), name: 'Piranha Plant' },
	{ id: 74, src: require('../img/symbols/SuperMario.png'), name: 'Rosalina' },
	{ id: 75, src: require('../img/symbols/WarioWorld.png'), name: 'Wario' },
	{ id: 76, src: require('../img/symbols/WiiFit.png'), name: 'Wii Fit Trainer' },
  { id: 77, src: require('../img/symbols/Xenoblade.png'), name: 'Shulk' },
	{ id: 78, src: require('../img/symbols/Yoshi.png'), name: 'Yoshi' },
];

export default seriesSymbols;