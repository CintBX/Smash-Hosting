import React, { Component } from 'react';
import { Media } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFighters } from '../../actions/fighterActions';


class FighterDirectory extends Component {
	componentDidMount() {
		this.props.getFighters();
	};

	static propTypes = {
		getFighters: PropTypes.func.isRequired,
		fighter: PropTypes.object.isRequired
	};

	render() {
		const { fighters } = this.props.fighter;
		return fighters.map(({ username, main, secondary, friendCode }) => {
			return (
				<div>
					<Media className="media-element">
						<Media left href="#">
							<Media object src="https://via.placeholder.com/50x50" />
						</Media>
						<Media body>
							<Media heading className="ml-2">
								<b>{ username }</b>
							</Media>
							<i style={{fontSize:"0.9rem"}}>
								<Media className="ml-2">{ main } / { secondary } </Media>
								<Media className="ml-2">{ friendCode }</Media>
							</i>
						</Media>
					</Media><br/>
				</div>
			)
		})
	}
};

const mapStateToProps = state => ({
	fighter: state.fighter
});

export default connect(mapStateToProps, { getFighters })(FighterDirectory);