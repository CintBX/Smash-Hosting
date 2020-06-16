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
						<a href="https://www.smashbros.com/en_US/index.html" target="_blank">
							Smash Main Site
						</a>
					</li>
					<li>
						<a href="https://www.express.co.uk/entertainment/gaming/1212564/Nintendo-Switch-news-Super-Smash-Bros-update-Fighters-Pass-DLC-character-5" target="_blank">
							DLC News
						</a>
					</li>
					<li>
						<a href="https://www.newsweek.com/smash-ultimate-version-6-0-patch-notes-fighter-adjustments-1470128" target="_blank">
							Latest Patch Notes
						</a>
					</li>
					<li>
						<a href="https://www.proguides.com/super-smash-bros-ultimate/characters/" target="_blank">
							Tier List
						</a>
					</li>
					<li>
						<a href="https://smash.gg/tournament/esports-arena-smash-ultimate-tournament-sponsored-by-progressive/events" target="_blank">
							ESports Schedule
						</a>
					</li>
					<li>
						Professional Smash<br/>
						<a href="https://www.youtube.com/user/VideoGameBootCamp/videos" target="_blank">
							VGBootCamp
						</a><br/>
						<a href="https://www.youtube.com/channel/UC_dkX2_MJZeiYZImFN8AOvg" target="_blank">
							MostValuableGaming
						</a>
					</li>
				</ul>
			</div>
		)
	}
};