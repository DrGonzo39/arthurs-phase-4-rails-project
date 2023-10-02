#Phase 4: Arthur's Album Forum

  -This project was designed as a sort of music discussion forum
  -The many-to-many relationship being that interacting users have many albums through the reviews they post, and albums have users through the 
    reviews that are posted to them
  
#Rails Back-end/API 

  -You'll find the required three models on the backend app, User, Review, and Album
  -The many-to-many as stated in the above section
  -In my routes file, I have full CRUD for reviews, and read and create for albums
  -User-wise, I have a route that creates a user, and I used the '/me' for the auto-login function on the front-end
  -The routes going to the sessions controller are the user login/logout functions
  -I used serializers to organize my json data for the frontend
  -I chose to do Error handling code and user-authorization code in application controller so I didn't have to repeat code in each controller
    authorizations in each controller are done via my @current_user variable and the associated authorize function

#React Front-end

  -All routes and API calls on the front end are routed to the corresponding back end controller actions
  -I implemeted my user object and state throughout the app via the useContext hook as required
  -Font-end nested state is all updated in the correct fashion
  -One aspect of note; there is a seperate albums state connected to album page, this is on purpose since I want all albums in the database to 
    render regardless of which user is logged in, that way a user can review any of them! 
    -both states are updated appropriately 




