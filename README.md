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





