import React, { Component } from 'react';
import { Media } from 'reactstrap';
import uuid from 'uuid';

const Fighter = props => (
	<div>
		<Media className="media-element">
			<Media left href="#">
				<Media object src="https://via.placeholder.com/50x50" />
			</Media>
			<Media body>
				<Media heading className="ml-2">
					<b>{ props.user.username }</b>
				</Media>
				<i style={{fontSize:"0.9rem"}}>
					<Media className="ml-2">{ props.user.main } / { props.user.secondary } </Media>
					<Media className="ml-2">{ props.user.friendCode }</Media>
				</i>
			</Media>
		</Media><br/>
	</div>
)

export default class FighterDirectory extends Component {
	constructor(props) {
		super(props);
		this.userMedia = this.userMedia.bind(this);
		this.state = {
			users: [
				{
					id: uuid(),
					username: "Cin",
					main: "Samus",
					secondary: "Belmont",
					friendCode: "111-222-333"
				},
				{
					id: uuid(),
					username: "Virtuoso",
					main: "Pit",
					secondary: "Ridley",
					friendCode: "111-222-333"
				},
				{
					id: uuid(),
					username: "Sille",
					main: "Link",
					secondary: "Bowser",
					friendCode: "111-222-333"
				},
				{
					id: uuid(),
					username: "GucciRob",
					main: "Lil Mac",
					secondary: "Ganon",
					friendCode: "111-222-333"
				},
				{
					id: uuid(),
					username: "Apollo",
					main: "Zero Suit Samus",
					secondary: "Mega Man",
					friendCode: "111-222-333"
				},
				{
					id: uuid(),
					username: "Ian",
					main: "Young Link",
					secondary: "Greninja",
					friendCode: "111-222-333"
				},
				{
					id: uuid(),
					username: "JT",
					main: "Terry Bogard",
					secondary: "Hero",
					friendCode: "111-222-333"
				},
				{
					id: uuid(),
					username: "Kronos",
					main: "Young Link",
					secondary: "Rob",
					friendCode: "111-222-333"
				}
			]
		}
	}

	userMedia() {
		return this.state.users.map(userObject => {
			return (
				<Fighter key={userObject.id} user={userObject} />
			)
		})
	}

	render() {
		return (
			<div>
				<h1 className="mb-5 text-center">
					Registered Fighters ({ this.state.users.length })
				</h1>
				{ this.userMedia() }
			</div>
		)
	}
};