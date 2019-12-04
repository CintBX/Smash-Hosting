import React, { Component } from 'react';
import { Button } from 'reactstrap';
import uuid from 'uuid';

export default class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: [
				{
					id: uuid(),
					username: 'Cin',
					main: 'Samus',
					secondary: 'Belmont',
					friendCode: '111-222-333',
					date: Date.today,
					tournaments: ['list of tournaments this user is in (when a user signs up, update user.state to add that tournament to user.tournaments[])'],
					tourneyWins: 0,
					matchWins: 0,
					matchLoss: 0
				}
			]
		}
	}
	render() {
		const { username, date, tourneyWins, matchWins, matchLoss } = this.state.user;
		return (
			<div>
				<h1 className="text-center">User Profile Page</h1>
				<p>
					Things to display later:
					<ul>
						<li>{ username }</li>
						<li>member since: { date }</li>
						<li>
							<Button color="warning">Edit</Button>
						</li>
						<li>tournaments participating in (toggle button displaying them as colorful card components)</li>
						<li>Tournaments won: { tourneyWins }</li>
						<li>Matches won: { matchWins }</li>
						<li>Matches lost: { matchLoss }</li>
					</ul>
				</p>
			</div>
		)
	}
};