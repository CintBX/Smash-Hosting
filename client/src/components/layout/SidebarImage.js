import React from 'react';
import { fullRoster } from '../Characters';

function SidebarImage(props) {
		return fullRoster.map(({ src, name }) => {
		if(name === props.main) {			
			return <img width="100%" height="400px" src={src} name={name} alt="main character" />
		};
	});
};

export default SidebarImage;