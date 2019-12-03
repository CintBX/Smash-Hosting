import React, { Component } from 'react';
import { Media } from 'reactstrap';

export default class FighterDirectory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: []
		}
	}

	render() {
		return (
			<div>
				<h2>Registered Fighters</h2>
				<Media className="media-element">
					<Media left href="#">
						<Media object src="https://via.placeholder.com/50x50" />
					</Media>
					<Media body>
						<Media heading className="ml-2">
							<b>Cin</b>
						</Media>
						<i style={{fontSize:"0.9rem"}}>
							<Media className="ml-2">Samus / Belmont</Media>
							<Media className="ml-2">111-222-333</Media>
						</i>
					</Media>
				</Media><br/>

				<Media className="media-element">
					<Media left href="#">
						<Media object src="https://via.placeholder.com/50x50" />
					</Media>
					<Media body>
						<Media heading className="ml-2">
							<b>Vagalume</b>
						</Media>
						<i style={{fontSize:"0.9rem"}}>
							<Media className="ml-2">Pit / Ridley</Media>
							<Media className="ml-2">111-222-333</Media>
						</i>
					</Media>
				</Media><br/>

				<Media className="media-element">
					<Media left href="#">
						<Media object src="https://via.placeholder.com/50x50" />
					</Media>
					<Media body>
						<Media heading className="ml-2">
							<b>Sille</b>
						</Media>
						<i style={{fontSize:"0.9rem"}}>
							<Media className="ml-2">Link / Bowser</Media>
							<Media className="ml-2">111-222-333</Media>
						</i>
					</Media>
				</Media><br/>

				<Media className="media-element">
					<Media left href="#">
						<Media object src="https://via.placeholder.com/50x50" />
					</Media>
					<Media body>
						<Media heading className="ml-2">
							<b>GucciRob</b>
						</Media>
						<i style={{fontSize:"0.9rem"}}>
							<Media className="ml-2">Lil Mac / Ganon</Media>
							<Media className="ml-2">111-222-333</Media>
						</i>
					</Media>
				</Media><br/>

				<Media className="media-element">
					<Media left href="#">
						<Media object src="https://via.placeholder.com/50x50" />
					</Media>
					<Media body>
						<Media heading className="ml-2">
							<b>Apollo</b>
						</Media>
						<i style={{fontSize:"0.9rem"}}>
							<Media className="ml-2">Zero Suit Samus / Mega Man</Media>
							<Media className="ml-2">111-222-333</Media>
						</i>
					</Media>
				</Media><br/>

				<Media className="media-element">
					<Media left href="#">
						<Media object src="https://via.placeholder.com/50x50" />
					</Media>
					<Media body>
						<Media heading className="ml-2">
							<b>Ian</b>
						</Media>
						<i style={{fontSize:"0.9rem"}}>
							<Media className="ml-2">Young Link / Greninja</Media>
							<Media className="ml-2">111-222-333</Media>
						</i>
					</Media>
				</Media><br/>

				<Media className="media-element">
					<Media left href="#">
						<Media object src="https://via.placeholder.com/50x50" />
					</Media>
					<Media body>
						<Media heading className="ml-2">
							<b>JT</b>
						</Media>
						<i style={{fontSize:"0.9rem"}}>
							<Media className="ml-2">Terry Bogard / Hero</Media>
							<Media className="ml-2">111-222-333</Media>
						</i>
					</Media>
				</Media><br/>
			</div>
		)
	}
};