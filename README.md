Getting back to work 3/11
- It's not auto-selecting the Username field in login/register forms
- See if you can fix that thing that happens where you change character, and you have to restart the app to fix it
- Fix User Routes in users.js
- You may not need tournament.description anymore, as you turned the descriptions into a Component
- change instances of `autofocus` to `autoFocus`
- Jesus.  Okay, change Buttons format.. You can have em all in one file.  Make it a const with props, or a function with props, and the button will change inside the component the button is rendered in, and you will put tournament.status inside the prop, which will tell the component which button to render.
With that said, however, Sign Up is special because it needs logic to add the player to tournament.participants array.
Perhaps all it needs is an onClick={} prop, and in the parent component you can have the logic for adding user to tournament.participants, and <SignUp> will simply take care of it without you having to necessarily do anything in the button component.


# Smash-Hosting

## Prototype completion
X View all Pages
X Log in/Register
X Log out
X Edit characters
X Fighter Directory 
X View tournaments
X Host tournament
X Images
	X Default image
	X Store all images in a directory (in the backend? Front end? In Mongo???)
	X Image will change when a user selects/changes their characters*
X Character names main/secondary validation
X Clean Login/Register Modals
X Friend Code validation
- Users can join
- STEPS:
	* Single Elim rules only at first:
	X Tournament Created
	- While Open, users "join"
	- Host decides when to Close it, (and joins it if he wants)
	- Users get randomized
	- If even # of users, they get paired up; If odd # of users, pair up except last user
	- Tournament Show page shows the paired up users (plus the By if applicable)
	- Tournament Show: Round 1, lists all pairs/bys in Format (basic for now)
	- Tournament Show: Directs users to add their opponent via f-code
		(Means of coordination is needed.  For now, they'll just talk on whatsapp)
	- Players fight and report to Host
	- Host selects Winners (click of a button)
	- Winners move to Round 2; Losers drop out
	- Tournament Show page shows updated bracket (only updates upon prevRound completion)
	- Players fight and report to Host
	- Host selects Winners
	- Winners advance; Losers drop out
	- Tournament Show page shows updated bracket
	- Rinse and repeat until the end
	- If 4 players left, Semi-finals will be the Title (Round 1, Round 2, etc... SemiFinals)
	- If 2 players left, Finals



--------------------------------------------------------------------------------------------------------------

## Above Steps
USER CAN JOIN
I see the issue here.. my current setup is for a group of tournaments.  Separate reducer for single tournaments?7
Something like.. the initialState = {tournament: null} which, when the thing occurs, the tournament becomes action.payload
which will be the selected/shown tournament.
Then, in that same file, you can have this USER_JOINS_TOURNAMENT case do tournament: tournament.push(action.payload)
where the action.payload is the user who clicks Sign Up (or, at first, goes to the right route)

Alright.. step 1.  Create a Route for Tournament Show.  This way, you can select a tournament individually and show it. (hoping
to then be able to alter it)

X 1) Create a backend route ~tournaments.js
2) Wire up Redux
	-CHALLENGE: The type/reducer/action are configured.  The Action is questionable, but is coherent enough.  You need to do two things:
	1) Make sure the Action is impeccable and correct.  Still needs some work
	2) Refactor the Tournament Index, so your addParticipant() function will work.  Refactor by:
		a) Creating a new file, perhaps called TournamentCard.js, and place the reactstrap jumbotron code there
		b) Then, in tournaments/Index.js, simply render <TournamentCard key={tournament._id}> and whatever other value.
			 The idea is, that right now your cards are listed but your Sign Up button might not know exactly which tournamet is targeted.
			 So.. when rendered this way, you're assigning an actual Key={} value.
			NOTE: Issues that may arise.. is the fact that you had to iterate through your tournaments data, and for each one, you
						called this <Jumbotron>.  Make sure you can smoothly transition that in your refactor.
						Ahh.. but if you can't, you can just.. yes, i got it.  
						You are still iterating over the tournaments in Index.js, but now you are simply rendering
						<TournamentCard> and pass, as props, all the stuff you're passing now directly.  Looks like:
						<TournamentCard key={} title={} hostedBy={} status={} etc>
			Then of course make sure you can code onClick somehow, now that you'll be rendering this separately.



## Task Breakdown:
*BUG ALERT*
The Main/Secondary forms still allow incorrect entries.
The Form is not actually looking at the selection choice.. it's only watching your text input
-FIXED-

*BUG ALERT*
Main/Secondary now properly selects whoever you click on in the combobox whether you type it or select it
THE BUG: Main/Secondary aren't working.  They are both updating Main.
-FIXED-

*BUG ALERT*
Main/Secondary Modal character modal works perfectly. But, a user can still mispell a character if they type something and just hit enter.

__Users can join__
-Tournaments on the page, a user looks at them, picks one he wants to join, and clicks "Sign Up"
-The tournament object, in the backend, must be updated with the this.props.user.username added to the tournaments.participants array.
OPTIONS:
	1) Sign Up button will then be changed to View Tournament or Enter (Tournament only visible to participants)
	2) Sign Up will be disabled with a Thank You message, and instead, View Tournament will either be:
		2a) A clickable  button, probably under Sign Up
		2b) The modal itself will be clickable (though that can lead to accidental clicks - not good user experience)
-




##### User Profile
- Route
- Type
- Reducer
- Action
- In Component: PropTypes, connect, action, mapStateToProps
- Render
	- Username, 
	- Main, 
	- Secondary, 
	- FriendCode, 
	- Date(member since:), 
	- Edit username/password (Later)
	- Tournaments participating in
	- Wins
	- Losses



##### Tournament Show Page
- the big cahuna



##### User Show Page
- the secondest big cahuna
- User Profile page
- Toggle buttons for displaying tourneys participating in (card/background varients)



---------------------------------------------------------------------------------------------------------------



## Future Tasks:

- Find/create the perfect default image, and then remove the ability to select character in Registration
- .... ORRRRR!!!! Put that abiliyt back in RegistrationModal
- Character most used (?)
- Win/Loss calculation (refer to screenshots of convo wth Chris)
- "View Rulsets" possibly a Nested Modal within the Host Tourney modal
- Means for opponents to coordinate their matches



##### Finishing Touches
- Smash News 
	-Gather links
	-Carousel
	-Display links (and perhaps images) in Carousel OR a series of images
		-Options:
			-Carousel
			-List-group/Custom content
			-Card/Image Overlays or Background Varients

- Background
	-Invert it.  Dark background/Light foreground
	-Find and choose a consistent colorscheme
	-Background images

- How to stop people from typing random URL paths

- Darken <CardHeader> of "View Rulesets"

- Active Tab

- Friend Code validation (1111-1111-1111 format)

- Edit User form (jesus.  This one lets you edit Username Password)

- User Profile



##### Late Stage
Entrance fees (paypal API or venmo API or something similar)
Messaging/inbox
User agreement
Rules & regulations (code of conduct, no racial slurs, etc)
with Ticket system
Change Character form pre-set to have all the characters listed so that it autocorrects typos



-------------------------------------------------------------------------------------------------------------



### Advanced Issue:
Deleting a User while there are tournament objects active in his/her name



### Routes
__Users__
/users
/users/register
/users/login
/users/user/:id (Show, Update)
/users/user (Validate user via token)

__Tournaments__
/tournaments
/tournaments/new
/tournaments/:id (for DELETE)
Still needs:
	-/tournaments/:id (for EDIT and SHOW)