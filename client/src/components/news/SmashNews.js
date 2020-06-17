import React from 'react';
import '../../css/smashNewsStyles.css';
import SmashMain from '../../img/smashNews/SmashMain.png';
import DLCnews from '../../img/smashNews/DLCnews.png';
import PatchNotes from '../../img/smashNews/PatchNotes.png';

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
		// return (
		// 	<div>
		// 		<h1 classNameName="text-center">Smash News</h1>
		// 		<ul>
		// 			<li>
		// 				<a href="https://www.smashbros.com/en_US/index.html" target="_blank">
		// 					Smash Main Site
		// 				</a>
		// 			</li>
		// 			<li>
		// 				<a href="https://smashbros.nintendo.com/buy/dlc/" target="_blank">
		// 					DLC News
		// 				</a>
		// 			</li>
		// 			<li>
		// 				<a href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/48674/~/super-smash-bros.-ultimate-update-ver.-7.0.0---fighter-adjustments" target="_blank">
		// 					Latest Patch Notes
		// 				</a>
		// 			</li>
		// 			<li>
		// 				<a href="https://www.proguides.com/super-smash-bros-ultimate/characters/" target="_blank">
		// 					Tier List
		// 				</a>
		// 			</li>
		// 			<li>
		// 				<a href="https://smash.gg/tournaments?filter=%7B%22published%22%3Atrue%2C%22hasBannerImages%22%3Atrue%2C%22regOpen%22%3Atrue%2C%22topGames%22%3A%7B%22gameNums%22%3A%5B1%5D%7D%2C%22upcoming%22%3Atrue%7D" target="_blank">
		// 					ESports Schedule
		// 				</a>
		// 			</li>
		// 			<li>
		// 				Professional Smash<br/>
		// 				<a href="https://www.youtube.com/user/VideoGameBootCamp/videos" target="_blank">
		// 					VGBootCamp
		// 				</a><br/>
		// 				<a href="https://www.youtube.com/channel/UC_dkX2_MJZeiYZImFN8AOvg" target="_blank">
		// 					MostValuableGaming
		// 				</a>
		// 			</li>
		// 		</ul>
		// 	</div>
		// )
		return (
			<div>
				<body>
					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
						<div className="bg-danger mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
							<div className="my-3 py-3">
								<h2 className="display-5">Smash Ultimate Main</h2>
								<p className="lead">The official website for Super Smash Bros. Ultimate</p>
							</div>
							<div className="bg-light shadow-sm mx-auto" style={{width: '90%', height: '300px', borderRadius: '21px 21px 0 0'}}>
								<img src={ SmashMain } style={{width: '100%', height: '100%'}}/>
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
								<img src={ DLCnews } style={{width: '100%', height: '100%'}}/>
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
								<img src={ PatchNotes } style={{width: '100%', height: '100%'}}/>
							</div>
						</div>
					</div>

					{/* <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
							<div className="my-3 p-3">
								<h2 className="display-5">Another headline</h2>
								<p className="lead">And an even wittier subheading.</p>
							</div>
							<div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
						</div>
						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
							<div className="my-3 py-3">
								<h2 className="display-5">Another headline</h2>
								<p className="lead">And an even wittier subheading.</p>
							</div>
							<div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
						</div>
					</div> */}

					{/* <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
							<div className="my-3 p-3">
								<h2 className="display-5">Another headline</h2>
								<p className="lead">And an even wittier subheading.</p>
							</div>
							<div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
						</div>
						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
							<div className="my-3 py-3">
								<h2 className="display-5">Another headline</h2>
								<p className="lead">And an even wittier subheading.</p>
							</div>
							<div className="bg-white shadow-sm mx-auto" style={{width: '80%', height: '300px', borderRadius: '21px 21px 0 0'}}></div>
						</div>
					</div> */}

				</body>
			</div>
		)
	}
};

// className BootstrapExample extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<body>
// 					<div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
// 						<div className="col-md-5 p-lg-5 mx-auto my-5">
// 							<h1 className="display-4 font-weight-normal">Punny headline</h1>
// 							<p className="lead font-weight-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
// 							<a className="btn btn-outline-secondary" href="#">Coming soon</a>
// 						</div>
// 						<div className="product-device shadow-sm d-none d-md-block"></div>
// 						<div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
// 					</div>

// 					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
// 						<div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
// 							<div className="my-3 py-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
// 							<div className="my-3 p-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 					</div>

// 					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
// 						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
// 							<div className="my-3 p-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-dark shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 						<div className="bg-primary mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
// 							<div className="my-3 py-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-light shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 					</div>

// 					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
// 						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
// 							<div className="my-3 p-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-white shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
// 							<div className="my-3 py-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-white shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 					</div>

// 					<div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
// 						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
// 							<div className="my-3 p-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-white shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 						<div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
// 							<div className="my-3 py-3">
// 								<h2 className="display-5">Another headline</h2>
// 								<p className="lead">And an even wittier subheading.</p>
// 							</div>
// 							<div className="bg-white shadow-sm mx-auto" style="width: 80%; height: 300px; border-radius: 21px 21px 0 0;"></div>
// 						</div>
// 					</div>
// 				</body>
// 			</div>
// 		)
// 	}
// }