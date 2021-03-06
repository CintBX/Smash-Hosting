import React from 'react';
import { fullRoster } from '../Characters';

function SidebarImage(props) {
	return fullRoster.map(({ src, name }) => {
		if(name === props.main) {			
			return <img width="100%" height="350px" src={src} name={name} alt="main character" />
		} else {
			return null;
		};
	});
};

export default SidebarImage;