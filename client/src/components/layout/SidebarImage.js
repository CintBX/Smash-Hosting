import React, { Component, Fragment } from 'react';
import smashultimate3 from '../../img/smashultimate3.jpg';

class SidebarImage extends Component {
	render() {
		return (
			<Fragment>
				<img width="100%" src={ smashultimate3 } alt="Character" />
			</Fragment>
		)
	}
}

export default SidebarImage;