Template.postSubmit.events({
	'submit form': function(e) {
		e.preventDefault();

		var post = {
			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val(),
			price: $(e.target).find('[name=price]').val()
		};

		// post._id = Posts.insert(post);
		// Router.go('postPage', post);
		Meteor.call('postInsert', post, function(error, result) {
			// show error message and exit
			if (error)
				return throwError(error.reason);

			// show the existing post and display warning
			if (result.postExists)
				throwError('This home has already been listed');

			Router.go('postPage', {_id: result._id});
		});
	}
});