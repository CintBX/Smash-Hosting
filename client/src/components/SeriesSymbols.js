// Strategy
// Each src will import the series symbol, all 36 of them
// Each name will NOT be the name of the series, but instead will be the name of each character that belongs to it
// Then I can map it the same way I did Characters, to check player.main === seriesSymbol.name

// OPTIONAL
// Hmm.. might be more efficient to store each `name` as an Array containing the names of all the characters belonging
// to that series...
// For now, just do a bunch of requires per character even if it looks like shit

const seriesSymbols = [
  { src: require('../img/symbols/AnimalCrossing.png'), name: 'Isabelle' },
  { src: require('../img/symbols/AnimalCrossing.png'), name: 'Villager' },
	{ src: require('../img/symbols/BanjoKazooie.png'), name: 'Banjo-Kazooie' },
	{ src: require('../img/symbols/Bayonetta.png'), name: 'Bayonetta' },
	{ src: require('../img/symbols/Castlevania.png'), name: 'Richter' },
	{ src: require('../img/symbols/Castlevania.png'), name: 'Simon' },
	{ src: require('../img/symbols/DonkeyKong.png'), name: 'Diddy Kong' },
	{ src: require('../img/symbols/DonkeyKong.png'), name: 'Donkey Kong' },
	{ src: require('../img/symbols/DonkeyKong.png'), name: 'King K. Rool' },
  { src: require('../img/symbols/DragonQuest.png'), name: 'Hero' },
  
	{ src: require('../img/symbols/DuckHunt.png'), name: 'Duck Hunt' },
	{ src: require('../img/symbols/Earthbound.png'), name: 'Lucas' },
  { src: require('../img/symbols/Earthbound.png'), name: 'Ness' },
  { src: require('../img/symbols/FatalFury.png'), name: 'Terry' },
	{ src: require('../img/symbols/FinalFantasy.png'), name: 'Cloud' },
	{ src: require('../img/symbols/FireEmblem.png'), name: 'Byleth' },
	{ src: require('../img/symbols/FireEmblem.png'), name: 'Chrom' },
	{ src: require('../img/symbols/FireEmblem.png'), name: 'Corrin' },
	{ src: require('../img/symbols/FireEmblem.png'), name: 'Ike' },
  { src: require('../img/symbols/FireEmblem.png'), name: 'Lucina' },
  
	{ src: require('../img/symbols/FireEmblem.png'), name: 'Marth' },
  { src: require('../img/symbols/FireEmblem.png'), name: 'Robin' },  
	{ src: require('../img/symbols/FireEmblem.png'), name: 'Roy' },
	{ src: require('../img/symbols/FZero.png'), name: 'Captain Falcon' },
	{ src: require('../img/symbols/Game_Watch.png'), name: 'Mr. Game & Watch' },
	{ src: require('../img/symbols/IceClimbers.png'), name: 'Ice Climbers' },
	{ src: require('../img/symbols/KidIcarus.png'), name: 'Dark Pit' },
	{ src: require('../img/symbols/KidIcarus.png'), name: 'Palutena' },
	{ src: require('../img/symbols/KidIcarus.png'), name: 'Pit' },
  { src: require('../img/symbols/KirbyStar.png'), name: 'King Dedede' },
  
	{ src: require('../img/symbols/KirbyStar.png'), name: 'Kirby' },
  { src: require('../img/symbols/KirbyStar.png'), name: 'Meta Knight' },  
	{ src: require('../img/symbols/LegendOfZelda.png'), name: 'Ganondorf' },
	{ src: require('../img/symbols/LegendOfZelda.png'), name: 'Link' },
	{ src: require('../img/symbols/LegendOfZelda.png'), name: 'Sheik' },
	{ src: require('../img/symbols/LegendOfZelda.png'), name: 'Toon Link' },
	{ src: require('../img/symbols/LegendOfZelda.png'), name: 'Young Link' },
	{ src: require('../img/symbols/LegendOfZelda.png'), name: 'Zelda' },
	{ src: require('../img/symbols/MegaMan.png'), name: 'Mega Man' },
  { src: require('../img/symbols/MetalGear.png'), name: 'Snake' },
  
	{ src: require('../img/symbols/Metroid.png'), name: 'Dark Samus' },
	{ src: require('../img/symbols/Metroid.png'), name: 'Ridley' },  
  { src: require('../img/symbols/Metroid.png'), name: 'Samus' },
	{ src: require('../img/symbols/Metroid.png'), name: 'Zero Suit Samus' },
	{ src: require('../img/symbols/PacMan.png'), name: 'Pac-Man' },
	{ src: require('../img/symbols/Persona.png'), name: 'Joker' },
	{ src: require('../img/symbols/Pikmin.png'), name: 'Olimar' },
	{ src: require('../img/symbols/Pokemon.png'), name: 'Greninja' },
	{ src: require('../img/symbols/Pokemon.png'), name: 'Incineroar' },
  { src: require('../img/symbols/Pokemon.png'), name: 'Jigglypuff' },
  
	{ src: require('../img/symbols/Pokemon.png'), name: 'Lucario' },
  { src: require('../img/symbols/Pokemon.png'), name: 'Mewtwo' },  
	{ src: require('../img/symbols/Pokemon.png'), name: 'Pichu' },
	{ src: require('../img/symbols/Pokemon.png'), name: 'Pikachu' },
	{ src: require('../img/symbols/Pokemon.png'), name: 'Pokemon Trainer' },
	{ src: require('../img/symbols/PunchOut.png'), name: 'Little Mac' },
	{ src: require('../img/symbols/ROB.png'), name: 'R.O.B.' },
	{ src: require('../img/symbols/Sonic.png'), name: 'Sonic' },
	{ src: require('../img/symbols/Splatoon.png'), name: 'Inkling' },
  { src: require('../img/symbols/SSB.png'), name: '' }, // default
  
	{ src: require('../img/symbols/StarFox.png'), name: 'Falco' },
  { src: require('../img/symbols/StarFox.png'), name: 'Fox' },  
	{ src: require('../img/symbols/StarFox.png'), name: 'Wolf' },
	{ src: require('../img/symbols/StreetFighter.png'), name: 'Ken' },
	{ src: require('../img/symbols/StreetFighter.png'), name: 'Ryu' },
	{ src: require('../img/symbols/SuperMario.png'), name: 'Bowser' },
	{ src: require('../img/symbols/SuperMario.png'), name: 'Bowser Jr.' },
	{ src: require('../img/symbols/SuperMario.png'), name: 'Daisy' },
	{ src: require('../img/symbols/SuperMario.png'), name: 'Dr. Mario' },
  { src: require('../img/symbols/SuperMario.png'), name: 'Luigi' },
  
	{ src: require('../img/symbols/SuperMario.png'), name: 'Mario' },
  { src: require('../img/symbols/SuperMario.png'), name: 'Peach' },  
	{ src: require('../img/symbols/SuperMario.png'), name: 'Piranha Plant' },
	{ src: require('../img/symbols/SuperMario.png'), name: 'Rosalina' },
	{ src: require('../img/symbols/WarioWorld.png'), name: 'Wario' },
	{ src: require('../img/symbols/WiiFit.png'), name: 'Wii Fit Trainer' },
  { src: require('../img/symbols/Xenoblade.png'), name: 'Shulk' },
	{ src: require('../img/symbols/Yoshi.png'), name: 'Yoshi' },
];

export default seriesSymbols;