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

##### __NOTE__
You login.  Data shows perfectly.
You change your characters.  Data shows perfectly.
If you log out, and log into another user, it's fine.
If you log out, and log into another user, THEN CHANGE CHARACTERS, it breaks everything.
I will leave this bug in, because realistically once a user logs in, that's the end of the story.  A person won't have multiple users.




-- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- 

- Fighter Directory (each Media renders User data information)
Right now you have mock data, and multiple Medias hardcoded.
Pull in /users index, and users.forEach do a Media.
~ getUsers() action
~ GET_USERS type
~ NEW REDUCER called userReducer (shit this may cause some sort of conflict, maybe this will just cover Show/GET aspects, while auth covered login/register/edit (delete?))

POTENTIAL ISSUE: Where will User SHOW be taken care of? You don't have Tournament SHOW either.  THe authReducer has a `user` returned state object, whihc is what you'd need.  You thought you could take care of it in the new userReducer but that one is gonna handle users: [] array

-- RIGHT NOW -- 


- Active Tab

- User Profile

- IMAGES/IMG directory containing a shitload of images
- Generic Image, that also checks the user.main data (user, isAuthenticated)
- List of images, each of which will render according to the user.main (image files will be named accordingly)
- Images database (Every character, one Question Mark for random, and one Generic pic for default/guests/users without a 'main')
- Rendering the right img on a person's profile sidebar depending on their Main

- User Profile page

- Hide password with stars*



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