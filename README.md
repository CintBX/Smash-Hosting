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
- Character names main/secondary validation
- Friend Code validation
- Users can join
- Single Elim rules only at first:
- STEPS:
	- Tournament Created
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



## Tasks:
__Images__
You asked two communities, but for now just set a folder in... client/public/imgs
X Create imgs folder in client/public
X Place default image inside client/public/img
- Set your placeholder sidebar img to this default image
_Note_ Image can be it's own component.  You can remove the <CardImage> from SideBar and replace it with a new component you'll call SidebarImage which will contain the logic that will look for the user.main and render the corresponding img
_Note_ "encode images in base64 and store them in my mongo instance"
_Note_ Research image storage/use, Mongo or otherwise.
_Note_ Microservice? Perhaps another backend? Axios? More routes/redux actions?

__Character Name Validation__

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



##### Images
- IMAGES/IMG directory containing a shitload of images
- Generic Image, that also checks the user.main data (user, isAuthenticated)
- List of images, each of which will render according to the user.main (image files will be named accordingly)
- Images database (Every character, one Question Mark for random, and one Generic pic for default/guests/users without a 'main')
- Rendering the right img on a person's profile sidebar depending on their Main



##### Tournament Show Page
- the big cahuna



##### User Show Page
- the secondest big cahuna
- User Profile page
- Toggle buttons for displaying tourneys participating in (card/background varients)



---------------------------------------------------------------------------------------------------------------



## Future Tasks:

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