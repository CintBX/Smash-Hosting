import React, { Component } from 'react';

export default class UserProfile extends Component {
	render() {
		return (
			<div>
				<h1 className="text-center">User Profile Page</h1>
				<p>
					Things to display later:
					<ul>
						<li>username</li>
						<li>member since</li>
						<li>edit button</li>
						<li>tournaments participating in (toggle button displaying them as colorful card components)</li>
						<li>tournament wins</li>
						<li>match wins</li>
						<li>match losses</li>
					</ul>
				</p>
			</div>
		)
	}
};