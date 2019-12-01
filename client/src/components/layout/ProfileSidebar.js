import React, { Component } from 'react';

export default class ProfileSidebar extends Component {
	render() {
		return (
			<div>
				<img src="https://via.placeholder.com/300x250" className="mb-3" />
				<p>username</p>
				<p>main</p>
				<p>secondary</p>
				<p>friendCode</p>
				<p>Edit Profile</p>
			</div>
		)
	}
};