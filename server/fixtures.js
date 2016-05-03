if (Posts.find().count() === 0) {
  Posts.insert({
    title: '2 Bedroom - Beautiful Balcony - Sandy Hill',
    price: 1400,
    url: 'http://www.kijiji.ca/b-real-estate/ottawa/2-bedroom-sandy-hill/k0c34l1700185'
  });

  Posts.insert({
    title: '1 Bedroom - close to transit - Glebe',
    price: 1000,
    url: 'http://www.kijiji.ca/b-real-estate/ottawa/2-bedroom-glebe/k0c34l1700185'
	}); 

	Posts.insert({
    title: 'Bachelor - Westboro',
    price: 850,
    url: 'http://www.kijiji.ca/b-real-estate/ottawa/bachelor-westboro/k0c34l1700185'
  });
}

// if (Posts.find().count() === 0) { 
//   Posts.insert({
//     title: 'Introducing Telescope',
//     url: 'http://sachagreif.com/introducing-telescope/'
//   });
//   Posts.insert({
//     title: 'Meteor',
//     url: 'http://meteor.com'
//   });
//   Posts.insert({
//     title: 'The Meteor Book',
//     url: 'http://themeteorbook.com'
//   }); 
// }