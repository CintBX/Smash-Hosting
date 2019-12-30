# Smash-Hosting

### Future Tasks:
- Character most used (?)
- Win/Loss calculation (refer to screenshots of convo wth Chris)
- "View Rulsets" possibly a Nested Modal within the Host Tourney modal
- Means for opponents to coordinate their matches



##### Prototype completion
- View all Pages
- Log in/Register
- Log out
- Edit characters
- Friend Code validation (1111-1111-1111 format)
- User Profile
- Fighter Directory 
- View/join tournaments
- Host tournament
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
Also, this similar thing happened if you log in, edit user and check Fighters tab
This all may be due to shitty internet connection.




-- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- 

- Active Tab

-- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- -- RIGHT NOW -- 







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



-----



### Advanced Issue:
Deleting a User while there are tournament objects active in his/her name



### CREATING A TOURNEY
-hostedBy user.id
-description: (Long conditional logic somewhere, perhaps in it's own component, that you import and use in creation so that it knows to apply a certain status given the type of tournament selected.  Lots of hard-coding required, but so be it)
-status: set default to "Open" in the model.  "Closed" and "Complete" will be buttons the Host will press as tourney progresses
-entrants: [] an array that you will add to.  Once a user clicks "Sign Up" make a function that will add that user's Username to the state collection array.  Hmm.. perhaps a Quit button would be good also, but leave that out for now


 
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