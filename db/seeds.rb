
art = User.create(username: "Art", password: "gobuffalo")

pauls_boutique = Album.create(title: "Paul's Boutique", artist: "Beastie Boys", genre: "Hip-hop/Rap", tracks: "Johnny Ryall, Egg man")

ill_communication = Album.create(title: "Ill Communication", artist: "Beastie Boys", genre: "Hip-hop/Rap", tracks: "Sabotage, Get it together")

rev_1 = Review.create(user_id: art.id, album_id: pauls_boutique.id, content: "obviously amazing" )

rev_1 = art.reviews.create( album_id: ill_communication.id, content: "obviously dope" )


