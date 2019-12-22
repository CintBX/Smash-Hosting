# Smash-Hosting

### Future Tasks:
- Character most used (?)
- Win/Loss calculation (refer to screenshots of convo wth Chris)
- "View Rulsets" possibly a Nested Modal within the Host Tourney modal



### Tasks:
X User Sidebar name/characters/code/edit

<!-- 
- Edit User modal (May be complex.. it will have to edit the State of the actual User object that isAuthenticated)
	X Modal created
	X Modal rendered in Profile Sidebar
	X Modal form is for main/secondary/friendcode
	X CRUD User routes:
		X INDEX
		X SHOW
		X *EDIT/UPDATE*
			- ISSUE: It's not updating with the component mount.  You need to use ComponentDidMount somehow.  Otherwise tho it works.
	- Types/Reducer/Action to use with new Routes (beginning with Edit, for EditUserModal) 
-->


*******************************************************************************
* Make Main/Secondary/friendCode part of REGISTRATION, mandatory              *
* Involves: model, user route, auth reducer, auth action, registerModal.js    *
*******************************************************************************




- IMAGES/IMG directory containing a shitload of images
- Generic Image, that also checks the user.main data (user, isAuthenticated)
- List of images, each of which will render according to the user.main (image files will be named accordingly)

- User Profile page

- Images database (Every character, one Question Mark for random, and one Generic pic for default/guests/users without a 'main')

- Rendering the right img on a person's profile sidebar depending on their Main

- Hide password with stars*


### CREATING A TOURNEY
	-hostedBy user.id
	-description: (Long conditional logic somewhere, perhaps in it's own component, that you import and use in creation so that it knows to apply a certain status given the type of tournament selected.  Lots of hard-coding required, but so be it)
	-status: set default to "Open" in the model.  "Closed" and "Complete" will be buttons the Host will press as tourney progresses
	-entrants: [] an array that you will add to.  Once a user clicks "Sign Up" make a function that will add that user's Username to the state collection array.  Hmm.. perhaps a Quit button would be good also, but leave that out for now



### Redux
- Tournament Edit form(modal?)
- Components
	- Profile sidebar
	- Tournaments Main
	- Fighter Directory
	- User Profile



### Finishing Touches
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

- User Profile: Toggle buttons for displaying tourneys participating in (card/background varients)

- How to stop people from typing random URL paths

- Darken <CardHeader> of "View Rulesets"


### Tournament Show Page
- the big cahuna

## Routes
/users/register
/users/login
/users/user (DOUBLE CHECK THIS: It may just be for Token validation/session tracking, but it may also be used for show)
NOTE: If /users/user GETS the user's data... then there's no reason that shouldn't be usable for SHOW
Still needs:
	- /users/all (for INDEX of users) or just /users
	- /users/:id (for EDIT and DELETE and SHOW[?]) or maybe /users/user will suffice

/tournaments
/tournaments/new
/tournaments/:id (for DELETE)
Still needs:
	-/tournaments/:id (for EDIT and SHOW)




	### Late Stage
	Messaging/inbox
	User agreement
	Rules & regulations (code of conduct, no racial slurs, etc)
	with Ticket system



	#### TASK RIGHT NOW!!!!
	- Making FriendCode a required field (register)
	- Making Main/Secondary a part of the registration field (register)
	- Add the input on the RegisterModal
	- Adjust the routes.  Gotta include "friendCode" with username and password
	- Shit, might have to include main/secondary also.. somehow.. though it isn't required..