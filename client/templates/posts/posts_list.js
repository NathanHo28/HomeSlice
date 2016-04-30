var postsData = [ {
    title: '2 Bedroom - Beautiful Balcony - Sandy Hill',
    price: 1400,
    url: 'http://www.kijiji.ca/b-real-estate/ottawa/2-bedroom-sandy-hill/k0c34l1700185'
  },
  {
    title: '1 Bedroom - close to transit - Glebe',
    price: 1000,
    url: 'http://www.kijiji.ca/b-real-estate/ottawa/2-bedroom-glebe/k0c34l1700185'
	}, 
	{
    title: 'Bachelor - Westboro',
    price: 850,
    url: 'http://www.kijiji.ca/b-real-estate/ottawa/bachelor-westboro/k0c34l1700185'
  }
];

Template.postsList.helpers({
  posts: postsData
});