# Smash-Hosting

### Future Tasks:
- Character most used (?)
- Win/Loss calculation (refer to screenshots of convo wth Chris)
- "View Rulsets" possibly a Nested Modal within the Host Tourney modal


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

- User Profile: Toggle buttons for displaying tourneys participating in (card/background varients)

- How to stop people from typing random URL paths

- Darken <CardHeader> of "View Rulesets"

##### Late Stage
Messaging/inbox
User agreement
Rules & regulations (code of conduct, no racial slurs, etc)
with Ticket system
Change Character form pre-set to have all the characters listed so that it autocorrects typos



-----



### Tasks:
X __ERROR: When you Login, the State only returns User's ID and Username (seen in Redux DevTools)__
X Figure out why, and make it so when you Login, the loaded user state contains everything (main, secondary, f-code)
X Test Register (Register a new user, fill in ALL fields, see which of it renders upon register completion) - WORKS
X Character Modal doesn't close when you submit (easy fix)
X __ERROR: Seems your Login route fix caused a bug.  When you use character modal, nothing happens, refresh, AUTH_ERROR__

- UPDATE_SUCCESS charactermodal change doesn't work right away because it turns your state from:
	user: { allUserData } 
	to
	"Updated Successfully"

##### First Theory
routes/api/users.js
	In your POST /users/user/:id route (which is what you made to perform this character update),
	change the res.json("Updated Successfully!")
	to res.json({ token, user: { allUserData } })		<~ just like in your /login route

##### Second Theory
client/src/reducers/authReducer
	Do some shit with that file.  Perhaps the data set you chose UPDATE_SUCCESS to return is causing the issue.
	(Like the payload, or the TYPE returns)


- IMAGES/IMG directory containing a shitload of images
- Generic Image, that also checks the user.main data (user, isAuthenticated)
- List of images, each of which will render according to the user.main (image files will be named accordingly)
- Images database (Every character, one Question Mark for random, and one Generic pic for default/guests/users without a 'main')
- Rendering the right img on a person's profile sidebar depending on their Main

- User Profile page

- Hide password with stars*

- __Redux__
- Tournament Edit form(modal?)
- Components
	X Profile sidebar
	X Tournaments Main
	- Fighter Directory
	- User Profile


##### Tournament Show Page
- the big cahuna



-----



### CREATING A TOURNEY
-hostedBy user.id
-description: (Long conditional logic somewhere, perhaps in it's own component, that you import and use in creation so that it knows to apply a certain status given the type of tournament selected.  Lots of hard-coding required, but so be it)
-status: set default to "Open" in the model.  "Closed" and "Complete" will be buttons the Host will press as tourney progresses
-entrants: [] an array that you will add to.  Once a user clicks "Sign Up" make a function that will add that user's Username to the state collection array.  Hmm.. perhaps a Quit button would be good also, but leave that out for now


 
### Routes
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