Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
  name: 'postPage',
	data: function() { return Posts.findOne(this.params._id); } 
 //  this.render('Post', {
 //    data: function () {
 //      return Posts.findOne({_id: this.params._id});
 //    }
 //  });
});