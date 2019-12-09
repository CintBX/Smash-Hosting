import React from 'react';

// const items = [
// 	{
// 		src: '',
// 		altText: '',
// 		caption: ''
// 	},
// 	{
// 		src: '',
// 		altText: '',
// 		caption: ''
// 	},
// 	{
// 		src: '',
// 		altText: '',
// 		caption: ''
// 	},
// 	{
// 		src: '',
// 		altText: '',
// 		caption: ''
// 	},
// 	{
// 		src: '',
// 		altText: '',
// 		caption: ''
// 	},
// ]

export default class SmashNews extends React.Component {
	render() {
		return (
			<div>
				<h1 className="text-center">Smash News</h1>
				<ul>
					<li>
						<a href="https://www.smashbros.com/en_US/index.html">
							Smash Main Site
						</a>
					</li>
					<li>
						<a href="https://www.express.co.uk/entertainment/gaming/1212564/Nintendo-Switch-news-Super-Smash-Bros-update-Fighters-Pass-DLC-character-5">
							DLC News
						</a>
					</li>
					<li>
						<a href="https://www.newsweek.com/smash-ultimate-version-6-0-patch-notes-fighter-adjustments-1470128">
							Latest Patch Notes
						</a>
					</li>
					<li>
						<a href="https://www.proguides.com/super-smash-bros-ultimate/characters/">
							Tier List
						</a>
					</li>
					<li>
						<a href="https://smash.gg/tournament/esports-arena-smash-ultimate-tournament-sponsored-by-progressive/events">
							ESports Schedule
						</a>
					</li>
					<li>
						Professional Smash<br/>
						<a href="https://www.youtube.com/user/VideoGameBootCamp/videos">
							VGBootCamp
						</a><br/>
						<a href="https://www.youtube.com/channel/UC_dkX2_MJZeiYZImFN8AOvg">
							MostValuableGaming
						</a>
					</li>
				</ul>
			</div>
		)
	}
};