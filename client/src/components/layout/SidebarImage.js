import React from 'react';
import samus from '../../img/roster/samus.jpg';
import richter from '../../img/roster/richter.jpg';
import miifighter from '../../img/roster/miifighter.jpg';

function SidebarImage(props) {
	const images = [
		{ id: 1, src: samus, name: 'Samus' },
		{ id: 2, src: richter, name: 'Richter' },
		{ id: 3, src: miifighter, name: 'Mii Fighter' }
	];

	return images.map(({ id, src, name }) => {
		if(name === props.main) {			
			return <img width="100%" id={id} src={src} name={name} alt="main character" />
		};
	});
};

export default SidebarImage;