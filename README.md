# Smash-Hosting

### Future Tasks:
- JWT User Auth
X Tournaments Component (this before User auth, to practice State use/distribution)
- Character most used (?)
- Win/Loss calculation (refer to screenshots of convo wth Chris)



### Current Task:
User Auth
- User Model
	-Username(required) / Password(required) / Main / Secondary / FriendCode




### Redux
- Tournament Edit/Delete
- User Modals (register, login, logout, edit)
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
	- /users (for INDEX of users)
	- /users/:id (for EDIT and DELETE and SHOW[?])

/tournaments
/tournaments/new
/tournaments/:id (for DELETE)
Still needs:
	-/tournaments/:id (for EDIT and SHOW)