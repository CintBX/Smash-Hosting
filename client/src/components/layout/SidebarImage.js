import React from 'react';

function SidebarImage(props) {
	const rosterImages = [
		{ id: 1, src: require('../../img/roster/banjokazooie.jpg'), name: 'Banjo-Kazooie' },
		{ id: 2, src: require('../../img/roster/bayonetta.jpg'), name: 'Bayonetta' },
		{ id: 3, src: require('../../img/roster/bowser.jpg'	), name: 'Bowser' },
		{ id: 4, src: require('../../img/roster/bowserjr.jpg'), name: 'Bowser Jr.' },
		{ id: 5, src: require('../../img/roster/captainfalcon.jpg'), name: 'Captain Falcon' },
		{ id: 6, src: require('../../img/roster/chrom.jpg'), name: 'Chrom' },
		{ id: 7, src: require('../../img/roster/cloud.jpg'), name: 'Cloud' },
		{ id: 8, src: require('../../img/roster/corrin.jpg'), name: 'Corrin' },
		{ id: 9, src: require('../../img/roster/daisy.jpg'), name: 'Daisy' },
		{ id: 10, src: require('../../img/roster/darkpit.jpg'), name: 'Dark Pit' },

		{ id: 11, src: require('../../img/roster/darksamus.jpg'), name: 'Dark Samus' },
		{ id: 12, src: require('../../img/roster/diddykong.jpg'), name: 'Diddy Kong' },
		{ id: 13, src: require('../../img/roster/donkeykong.jpg'), name: 'Donkey Kong' },
		{ id: 14, src: require('../../img/roster/drmario.jpg'), name: 'Dr. Mario' },
		{ id: 15, src: require('../../img/roster/duckhunt.jpg'), name: 'Duck Hunt' },
		{ id: 16, src: require('../../img/roster/falco.jpg'), name: 'Falco' },
		{ id: 17, src: require('../../img/roster/fox.jpg'), name: 'Fox' },
		{ id: 18, src: require('../../img/roster/gameandwatch.jpg'), name: 'Mr. Game & Watch' },
		{ id: 19, src: require('../../img/roster/ganondorf.jpg'), name: 'Ganondorf' },
		{ id: 20, src: require('../../img/roster/greninja.jpg'), name: 'Greninja' },

		{ id: 21, src: require('../../img/roster/hero.jpg'), name: 'Hero' },
		{ id: 22, src: require('../../img/roster/iceclimbers.jpg'), name: 'Ice Climbers' },
		{ id: 23, src: require('../../img/roster/ike.jpg'), name: 'Ike' },
		{ id: 24, src: require('../../img/roster/incineroar.jpg'), name: 'Incineroar' },
		{ id: 25, src: require('../../img/roster/inkling.jpg'), name: 'Inkling' },
		{ id: 26, src: require('../../img/roster/isabelle.jpg'), name: 'Isabelle' },
		{ id: 27, src: require('../../img/roster/jigglypuff.jpg'), name: 'Jigglypuff' },
		{ id: 28, src: require('../../img/roster/joker.jpg'), name: 'Joker' },
		{ id: 29, src: require('../../img/roster/ken.jpg'), name: 'Ken' },
		{ id: 30, src: require('../../img/roster/kingdedede.jpg'), name: 'King Dedede' },

		{ id: 31, src: require('../../img/roster/kingkrool.jpg'), name: 'King K. Rool' },
		{ id: 32, src: require('../../img/roster/kirby.jpg'), name: 'Kirby' },
		{ id: 33, src: require('../../img/roster/link.jpg'), name: 'Link' },
		{ id: 34, src: require('../../img/roster/littlemac.jpg'), name: 'Little Mac' },
		{ id: 35, src: require('../../img/roster/lucario.jpg'), name: 'Lucario' },
		{ id: 36, src: require('../../img/roster/lucas.jpg'), name: 'Lucas' },
		{ id: 37, src: require('../../img/roster/lucina.jpg'), name: 'Lucina' },
		{ id: 38, src: require('../../img/roster/luigi.jpg'), name: 'Luigi' },
		{ id: 39, src: require('../../img/roster/mario.jpg'), name: 'Mario' },
		{ id: 40, src: require('../../img/roster/marth.jpg'), name: 'Marth' },

		{ id: 41, src: require('../../img/roster/megaman.jpg'), name: 'Mega Man' },
		{ id: 42, src: require('../../img/roster/metaknight.jpg'), name: 'Meta Knight' },
		{ id: 43, src: require('../../img/roster/mewtwo.jpg'), name: 'Mewtwo' },
		{ id: 44, src: require('../../img/roster/miifighter.jpg'), name: 'Mii Fighter' },
		{ id: 45, src: require('../../img/roster/ness.jpg'), name: 'Ness' },
		{ id: 46, src: require('../../img/roster/olimar.jpg'), name: 'Olimar' },
		{ id: 47, src: require('../../img/roster/pacman.jpg'), name: 'Pac-Man' },
		{ id: 48, src: require('../../img/roster/palutena.jpg'), name: 'Palutena' },
		{ id: 49, src: require('../../img/roster/peach.jpg'), name: 'Peach' },
		{ id: 50, src: require('../../img/roster/pichu.jpg'), name: 'Pichu' },

		{ id: 51, src: require('../../img/roster/pikachu.jpg'), name: 'Pikachu' },
		{ id: 52, src: require('../../img/roster/piranhaplant.jpg'), name: 'Piranha Plant' },
		{ id: 53, src: require('../../img/roster/pit.jpg'), name: 'Pit' },
		{ id: 54, src: require('../../img/roster/pokemontrainer.jpg'), name: 'Pokemon Trainer' },
		{ id: 55, src: require('../../img/roster/richter.jpg'), name: 'Richter' },
		{ id: 56, src: require('../../img/roster/ridley.jpg'), name: 'Ridley' },
		{ id: 57, src: require('../../img/roster/ROB.jpg'), name: 'R.O.B.' },
		{ id: 58, src: require('../../img/roster/robin.jpg'), name: 'Robin' },
		{ id: 59, src: require('../../img/roster/rosalina.jpg'), name: 'Rosalina' },
		{ id: 60, src: require('../../img/roster/roy.jpg'), name: 'Roy' },

		{ id: 61, src: require('../../img/roster/ryu.jpg'), name: 'Ryu' },
		{ id: 62, src: require('../../img/roster/samus.jpg'), name: 'Samus' },
		{ id: 63, src: require('../../img/roster/sheik.jpg'), name: 'Sheik' },
		{ id: 64, src: require('../../img/roster/shulk.jpg'), name: 'Shulk' },
		{ id: 65, src: require('../../img/roster/simon.jpg'), name: 'Simon' },
		{ id: 66, src: require('../../img/roster/snake.jpg'), name: 'Snake' },
		{ id: 67, src: require('../../img/roster/sonic.jpg'), name: 'Sonic' },
		{ id: 68, src: require('../../img/roster/terry.jpg'), name: 'Terry' },
		{ id: 69, src: require('../../img/roster/toonlink.jpg'), name: 'Toon Link' },
		{ id: 70, src: require('../../img/roster/villager.jpg'), name: 'Villager' },

		{ id: 71, src: require('../../img/roster/wario.jpg'), name: 'Wario' },
		{ id: 72, src: require('../../img/roster/wiifittrainer.jpg'), name: 'Wii Fit Trainer' },
		{ id: 73, src: require('../../img/roster/wolf.jpg'), name: 'Wolf' },
		{ id: 74, src: require('../../img/roster/yoshi.jpg'), name: 'Yoshi' },
		{ id: 75, src: require('../../img/roster/younglink.jpg'), name: 'Young Link' },
		{ id: 76, src: require('../../img/roster/zelda.jpg'), name: 'Zelda' },
		{ id: 77, src: require('../../img/roster/zerosuit.jpg'), name: 'Zero Suit Samus' }
	];

	return rosterImages.map(({ id, src, name }) => {
		if(name === props.main) {			
			return <img width="100%" id={id} src={src} name={name} alt="main character" />
		};
	});
};

export default SidebarImage;