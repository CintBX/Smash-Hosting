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
						<a href="https://smashbros.nintendo.com/buy/dlc/" target="_blank">
							DLC News
						</a>
					</li>
					<li>
						<a href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/48674/~/super-smash-bros.-ultimate-update-ver.-7.0.0---fighter-adjustments" target="_blank">
							Latest Patch Notes
						</a>
					</li>
					<li>
						<a href="https://www.proguides.com/super-smash-bros-ultimate/characters/" target="_blank">
							Tier List
						</a>
					</li>
					<li>
						<a href="https://smash.gg/tournaments?filter=%7B%22published%22%3Atrue%2C%22hasBannerImages%22%3Atrue%2C%22regOpen%22%3Atrue%2C%22topGames%22%3A%7B%22gameNums%22%3A%5B1%5D%7D%2C%22upcoming%22%3Atrue%7D" target="_blank">
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