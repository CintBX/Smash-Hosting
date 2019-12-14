# Smash-Hosting

### Future Tasks:
- Character most used (?)
- Win/Loss calculation (refer to screenshots of convo wth Chris)



### Current Task:
- Only a User can Host tourneys, but only the owner of a tourney should have the option to delete it.  Make permission based on
the ID/Token of the logged on user, to delete or edit a tourney.

- When you open a modal, make it so that the cursor is already on the Username field



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