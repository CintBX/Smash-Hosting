import React, { Component } from 'react';

export default class ProfileSidebar extends Component {
	render() {
		return (
			<div>
				<img src="https://via.placeholder.com/300x250" className="mb-3" alt="Character" />
				<p>username</p>
				<p>main / secondary</p>
				<p>friendCode</p>
				<p>Edit Profile</p>
				<p>Host a Tourney!</p>
			</div>
		)
	}
};