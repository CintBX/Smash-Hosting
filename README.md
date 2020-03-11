Getting back to work 3/11
1) See if you can fix that thing that happens where you change character, and you have to restart the app to fix it
2) It's not auto-selecting the Username field in login/register forms


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