import React, { Component, Fragment } from 'react';
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	Button
} from 'reactstrap';
import NewTournament from '../tournaments/New';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SidebarImage from './SidebarImage';
import smashultimate3 from '../../img/smashultimate3.jpg';
import RuleSets from './RuleSets';


class ProfileSidebar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			user: [],
			isOpen: false
		};
	};

	static propTypes = {
		isAuthenticated: PropTypes.bool,
		user: PropTypes.object
	};

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render() {
		const { user, isAuthenticated } = this.props;
		return (
			<div>
				<Card className="mb-4" style={{ border:'none' }}>

					{
						isAuthenticated && user.main ?
						<SidebarImage main={ user.main } /> :
						<img width="100%" src={ smashultimate3 } alt="default" />
					}

					<CardBody>
						{
							user ?
							<Fragment>
								<CardTitle style={{fontSize: '1.5rem'}}>
									{ user.username }
								</CardTitle> 
								<CardText>
									{ 
										user.main && user.secondary ? 
										user.main + ", " + user.secondary : 
										user.main || user.secondary || "No characters selected" 
									}
								</CardText>
								<CardText>{ user.friendCode ? user.friendCode : "Friend Code not listed" }</CardText>
							</Fragment> :
							null							
						}
						
						{
							isAuthenticated ?
							<Button outline block color="info" style={{marginBottom: '1rem'}}>
								<b>Update Details</b>
							</Button> :
							null
						}
						<NewTournament/>
						<RuleSets/>
					</CardBody>
				</Card>
			</div>
		);
	};
};

const mapStateToProps = state => ({
	isAuthenticated: state.auth.isAuthenticated,
	user: state.auth.user
});

export default connect(mapStateToProps, null)(ProfileSidebar);