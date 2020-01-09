import React from 'react';
import banjokazooie from '../../img/roster/banjokazooie.jpg';
import bayonetta from '../../img/roster/bayonetta.jpg';
import bowser from '../../img/roster/bowser.jpg';
import bowserjr from '../../img/roster/bowserjr.jpg';
import captainfalcon from '../../img/roster/captainfalcon.jpg';
import chrom from '../../img/roster/chrom.jpg';
import cloud from '../../img/roster/cloud.jpg';
import corrin from '../../img/roster/corrin.jpg';
import daisy from '../../img/roster/daisy.jpg';
import darkpit from '../../img/roster/darkpit.jpg';
import darksamus from '../../img/roster/darksamus.jpg';
import diddykong from '../../img/roster/diddykong.jpg';
import donkeykong from '../../img/roster/donkeykong.jpg';
import drmario from '../../img/roster/drmario.jpg';
import duckhunt from '../../img/roster/duckhunt.jpg';
import falco from '../../img/roster/falco.jpg';
import fox from '../../img/roster/fox.jpg';
import gameandwatch from '../../img/roster/gameandwatch.jpg';
import ganondorf from '../../img/roster/ganondorf.jpg';
import greninja from '../../img/roster/greninja.jpg';
import hero from '../../img/roster/hero.jpg';
import iceclimbers from '../../img/roster/iceclimbers.jpg';
import ike from '../../img/roster/ike.jpg';
import incineroar from '../../img/roster/incineroar.jpg';
import inkling from '../../img/roster/inkling.jpg';
import isabelle from '../../img/roster/isabelle.jpg';
import jigglypuff from '../../img/roster/jigglypuff.jpg';
import joker from '../../img/roster/joker.jpg';
import ken from '../../img/roster/ken.jpg';
import kingdedede from '../../img/roster/kingdedede.jpg';
import kingkrool from '../../img/roster/kingkrool.jpg';
import kirby from '../../img/roster/kirby.jpg';
import link from '../../img/roster/link.jpg';
import littlemac from '../../img/roster/littlemac.jpg';
import lucario from '../../img/roster/lucario.jpg';
import lucas from '../../img/roster/lucas.jpg';
import lucina from '../../img/roster/lucina.jpg';
import luigi from '../../img/roster/luigi.jpg';
import mario from '../../img/roster/mario.jpg';
import marth from '../../img/roster/marth.jpg';
import megaman from '../../img/roster/megaman.jpg';
import metaknight from '../../img/roster/metaknight.jpg';
import mewtwo from '../../img/roster/mewtwo.jpg';
import miifighter from '../../img/roster/miifighter.jpg';
import ness from '../../img/roster/ness.jpg';
import olimar from '../../img/roster/olimar.jpg';
import pacman from '../../img/roster/pacman.jpg';
import palutena from '../../img/roster/palutena.jpg';
import peach from '../../img/roster/peach.jpg';
import pichu from '../../img/roster/pichu.jpg';
import pikachu from '../../img/roster/pikachu.jpg';
import piranhaplant from '../../img/roster/piranhaplant.jpg';
import pit from '../../img/roster/pit.jpg';
import pokemontrainer from '../../img/roster/pokemontrainer.jpg';
import richter from '../../img/roster/richter.jpg';
import ridley from '../../img/roster/ridley.jpg';
import ROB from '../../img/roster/ROB.jpg';
import robin from '../../img/roster/robin.jpg';
import rosalina from '../../img/roster/rosalina.jpg';
import roy from '../../img/roster/roy.jpg';
import ryu from '../../img/roster/ryu.jpg';
import samus from '../../img/roster/samus.jpg';
import sheik from '../../img/roster/sheik.jpg';
import shulk from '../../img/roster/shulk.jpg';
import simon from '../../img/roster/simon.jpg';
import snake from '../../img/roster/snake.jpg';
import sonic from '../../img/roster/sonic.jpg';
import terry from '../../img/roster/terry.jpg';
import toonlink from '../../img/roster/toonlink.jpg';
import villager from '../../img/roster/villager.jpg';
import wario from '../../img/roster/wario.jpg';
import wiifittrainer from '../../img/roster/wiifittrainer.jpg';
import wolf from '../../img/roster/wolf.jpg';
import yoshi from '../../img/roster/yoshi.jpg';
import younglink from '../../img/roster/younglink.jpg';
import zelda from '../../img/roster/zelda.jpg';
import zerosuit from '../../img/roster/zerosuit.jpg';

function SidebarImage(props) {
	const images = [
		{ id: 1, src: banjokazooie, name: 'Banjo-Kazooie' },
		{ id: 2, src: bayonetta, name: 'Bayonetta' },
		{ id: 3, src: bowser, name: 'Bowser' },
		{ id: 4, src: bowserjr, name: 'Bowser Jr.' },
		{ id: 5, src: captainfalcon, name: 'Captain Falcon' },
		{ id: 6, src: chrom, name: 'Chrom' },
		{ id: 7, src: cloud, name: 'Cloud' },
		{ id: 8, src: corrin, name: 'Corrin' },
		{ id: 9, src: daisy, name: 'Daisy' },
		{ id: 10, src: darkpit, name: 'Dark Pit' },
		{ id: 11, src: darksamus, name: 'Dark Samus' },
		{ id: 12, src: diddykong, name: 'Diddy Kong' },
		{ id: 13, src: donkeykong, name: 'Donkey Kong' },
		{ id: 14, src: drmario, name: 'Dr. Mario' },
		{ id: 15, src: duckhunt, name: 'Duck Hunt' },
		{ id: 16, src: falco, name: 'Falco' },
		{ id: 17, src: fox, name: 'Fox' },
		{ id: 18, src: gameandwatch, name: 'Mr. Game & Watch' },
		{ id: 19, src: ganondorf, name: 'Ganondorf' },
		{ id: 20, src: greninja, name: 'Greninja' },

		{ id: 21, src: hero, name: 'Hero' },
		{ id: 22, src: iceclimbers, name: 'Ice Climbers' },
		{ id: 23, src: ike, name: 'Ike' },
		{ id: 24, src: incineroar, name: 'Incineroar' },
		{ id: 25, src: inkling, name: 'Inkling' },
		{ id: 26, src: isabelle, name: 'Isabelle' },
		{ id: 27, src: jigglypuff, name: 'Jigglypuff' },
		{ id: 28, src: joker, name: 'Joker' },
		{ id: 29, src: ken, name: 'Ken' },
		{ id: 30, src: kingdedede, name: 'King Dedede' },

		{ id: 31, src: kingkrool, name: 'King K. Rool' },
		{ id: 32, src: kirby, name: 'Kirby' },
		{ id: 33, src: link, name: 'Link' },
		{ id: 34, src: littlemac, name: 'Little Mac' },
		{ id: 35, src: lucario, name: 'Lucario' },
		{ id: 36, src: lucas, name: 'Lucas' },
		{ id: 37, src: lucina, name: 'Lucina' },
		{ id: 38, src: luigi, name: 'Luigi' },
		{ id: 39, src: mario, name: 'Mario' },
		{ id: 40, src: marth, name: 'Marth' },

		{ id: 41, src: megaman, name: 'Mega Man' },
		{ id: 42, src: metaknight, name: 'Meta Knight' },
		{ id: 43, src: mewtwo, name: 'Mewtwo' },
		{ id: 44, src: miifighter, name: 'Mii Fighter' },
		{ id: 45, src: ness, name: 'Ness' },
		{ id: 46, src: olimar, name: 'Olimar' },
		{ id: 47, src: pacman, name: 'Pac-Man' },
		{ id: 48, src: palutena, name: 'Palutena' },
		{ id: 49, src: peach, name: 'Peach' },
		{ id: 50, src: pichu, name: 'Pichu' },

		{ id: 51, src: pikachu, name: 'Pikachu' },
		{ id: 52, src: piranhaplant, name: 'Piranha Plant' },
		{ id: 53, src: pit, name: 'Pit' },
		{ id: 54, src: pokemontrainer, name: 'Pokemon Trainer' },
		{ id: 55, src: richter, name: 'Richter' },
		{ id: 56, src: ridley, name: 'Ridley' },
		{ id: 57, src: ROB, name: 'R.O.B.' },
		{ id: 58, src: robin, name: 'Robin' },
		{ id: 59, src: rosalina, name: 'Rosalina' },
		{ id: 60, src: roy, name: 'Roy' },

		{ id: 61, src: ryu, name: 'Ryu' },
		{ id: 62, src: samus, name: 'Samus' },
		{ id: 63, src: sheik, name: 'Sheik' },
		{ id: 64, src: shulk, name: 'Shulk' },
		{ id: 65, src: simon, name: 'Simon' },
		{ id: 66, src: snake, name: 'Snake' },
		{ id: 67, src: sonic, name: 'Sonic' },
		{ id: 68, src: terry, name: 'Terry' },
		{ id: 69, src: toonlink, name: 'Toon Link' },
		{ id: 70, src: villager, name: 'Villager' },

		{ id: 71, src: wario, name: 'Wario' },
		{ id: 72, src: wiifittrainer, name: 'Wii Fit Trainer' },
		{ id: 73, src: wolf, name: 'Wolf' },
		{ id: 74, src: yoshi, name: 'Yoshi' },
		{ id: 75, src: younglink, name: 'Young Link' },
		{ id: 76, src: zelda, name: 'Zelda' },
		{ id: 77, src: zerosuit, name: 'Zero Suit Samus' }
	];

	return images.map(({ id, src, name }) => {
		if(name === props.main) {			
			return <img width="100%" id={id} src={src} name={name} alt="main character" />
		};
	});
};

export default SidebarImage;