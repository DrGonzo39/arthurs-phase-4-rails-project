puts "seeding..."

art = User.create(username: "Art", password: "gobuffalo")

anne = User.create(username: "Anne", password: "gardenlove")

chuck = User.create(username: "Chuck", password: "wilhelt")

woodland_rites = Album.create(title: "Woodland Rites", artist: "Green Lung", genre: "Heavy Metal", tracks: "Templar Dawn, Call of the Coven", cover_image: "https://www.normanrecords.com/artwork/medium/96/181846-green-lung-woodland-rites.jpg")

speaking_in_tongues = Album.create(title: "Speaking in Tongues", artist: "Talking Heads", genre: "Alternative", tracks: "Burning Down the House, Girlfriend is Better", cover_image: "http://www.progarchives.com/progressive_rock_discography_covers/5826/cover_3045151292017_r.jpg")

pauls_boutique = Album.create(title: "Paul's Boutique", artist: "Beastie Boys", genre: "Hip-hop/Rap", tracks: "Johnny Ryall, Egg man", cover_image: "https://www.udiscovermusic.com/wp-content/uploads/2017/07/Beastie-Boys-Pauls-Boutique-album-cover-web-optimised-820.jpg")

ill_communication = Album.create(title: "Ill Communication", artist: "Beastie Boys", genre: "Hip-hop/Rap", tracks: "Sabotage, Get it together", cover_image: "https://data.opus3a.com/product_photo/9d/9d4f1f83f8cbad736abdb383b60ea90c/MAX/5cbad1b5ddd5417a656a6af508080c69.jpg")

rev_1 = Review.create(user_id: art.id, album_id: pauls_boutique.id, content: "obviously amazing" )

rev_2 = art.reviews.create( album_id: ill_communication.id, content: "obviously dope" )

rev_3 = chuck.reviews.create( album_id: woodland_rites.id, content: "Shredtastic, and the lore is very deep")

rev_4 = anne.reviews.create( album_id: speaking_in_tongues.id, content: "My favorite, David Byrne is a genius!")


puts "Donezo!"