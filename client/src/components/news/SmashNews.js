import React, { Component } from 'react';
import '../../css/smashNewsStyles.css';
import SmashMain from '../../img/smashNews/SmashMain.png';
import DLCnews from '../../img/smashNews/DLCnews.png';
import PatchNotes from '../../img/smashNews/PatchNotes.png';
import TierList from '../../img/smashNews/TierList.png';

export default class SmashNews extends Component {
	render() {
		return (
			<div>
				<body className="smash-news">
					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
						<div className="bg-danger mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
							<div className="my-3 py-3">
								<h2 className="display-5">Smash Ultimate Main</h2>
								<p className="lead">The official website for Super Smash Bros. Ultimate</p>
							</div>
							<div className="bg-light shadow-sm mx-auto" style={{width: '90%', height: '300px', borderRadius: '21px 21px 0 0'}}>
								<a href="https://www.smashbros.com/en_US/index.html" target="_blank" rel="noopener noreferrer">
									<img src={ SmashMain } style={{ width: '100%', height: '100%' }} alt="smash ultimate main page" />
								</a>
							</div>
						</div>
					</div>

					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
						<div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
							<div className="my-3 py-3">
								<h2 className="display-5">Downloadable Content</h2>
								<p className="lead">Click here for news on the latest DLC</p>
							</div>
							<div className="bg-light shadow-sm mx-auto" style={{width: '90%', height: '300px', borderRadius: '21px 21px 0 0'}}>
								<a href="https://smashbros.nintendo.com/buy/dlc/" target="_blank" rel="noopener noreferrer">
									<img src={ DLCnews } style={{ width: '100%', height: '100%' }} alt="DLC news" />
								</a>
							</div>
						</div>
					</div>

					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
						<div className="bg-success mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
							<div className="my-3 py-3">
								<h2 className="display-5">Patch Notes</h2>
								<p className="lead">All changes to your favorite characters and more</p>
							</div>
							<div className="bg-light shadow-sm mx-auto" style={{width: '90%', height: '300px', borderRadius: '21px 21px 0 0'}}>
								<a href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/49877" target="_blank" rel="noopener noreferrer">
									<img src={ PatchNotes } style={{ width: '100%', height: '100%' }} alt="latest patch notes" />
								</a>
							</div>
						</div>
					</div>

					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
						<div className="bg-secondary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
							<div className="my-3 py-3">
								<h2 className="display-5">Current Tier List</h2>
								<p className="lead">Character rankings based on performance in professional competition</p>
							</div>
							<div className="bg-light shadow-sm mx-auto" style={{width: '90%', height: '300px', borderRadius: '21px 21px 0 0'}}>
								<a href="https://www.proguides.com/super-smash-bros-ultimate/characters/" target="_blank" rel="noopener noreferrer">
									<img src={ TierList } style={{ width: '100%', height: '100%' }} alt="current tier list" />
								</a>
							</div>
						</div>
					</div>
				</body>
			</div>
		)
	}
};

// Links
// Smash Main: https://www.smashbros.com/en_US/index.html
// DLC News: https://smashbros.nintendo.com/buy/dlc/
// Patch Notes: https://en-americas-support.nintendo.com/app/answers/detail/a_id/48674/~/super-smash-bros.-ultimate-update-ver.-7.0.0---fighter-adjustments
// Tier List: https://www.proguides.com/super-smash-bros-ultimate/characters/
// Tournament Schedule/Esports: https://smash.gg/tournaments?filter=%7B%22published%22%3Atrue%2C%22hasBannerImages%22%3Atrue%2C%22regOpen%22%3Atrue%2C%22topGames%22%3A%7B%22gameNums%22%3A%5B1%5D%7D%2C%22upcoming%22%3Atrue%7D
// VGBootcamp: https://www.youtube.com/user/VideoGameBootCamp/videos
// MostValuableGaming: https://www.youtube.com/channel/UC_dkX2_MJZeiYZImFN8AOvg