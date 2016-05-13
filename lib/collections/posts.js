// no var so it can be accessed globally
Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function(userId, doc) {
		// verify user prior to posting ability
		return !! userId;
	}
})