(function($)
{
	//https://api.github.com/repos/flocks/Cornelien/commits
	var baseUrl  = 'https://api.github.com/repos/';

	$.fn.githubCommits = function(user, repo, nb_commits) {

		var that = this;
		$.ajax({url: "https://api.github.com/repos/"+user+"/"+repo+"/commits"}).done(function(data) {
			$(that).append("salut");
 		});
  
		
	}
})(jQuery);