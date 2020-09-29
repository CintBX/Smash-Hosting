import React from 'react';
import { fullRoster } from '../Characters';

function SidebarImage(props) {
		return fullRoster.map(({ id, src, name }) => {
		if(name === props.main) {			
			return <img width="100%" height="300px" id={id} src={src} name={name} alt="main character" />
		};
	});
};

export default SidebarImage;