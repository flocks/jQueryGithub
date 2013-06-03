(function($)
{
	var baseUrl  = 'https://api.github.com/repos/';

	$.fn.githubCommits = function(user, repo, nb_commits, title) {
		if (typeof title == 'undefined') {
			var title = 'Terminal';
		}
		if (typeof nb_commits == 'undefined') {
			var nb_commits = 5;
		}
		if (typeof repo == 'undefined' || typeof user == 'undefined') {
			return this;
		}
		var that = this;
		
		$.ajax({url: "https://api.github.com/repos/"+user+"/"+repo+"/commits"}).done(function(data) {
			$(that).append('<ul class="jg-plugin">');
			$(that).append('<li class="header">'+title+'</li>');
			var i =0;
			while(typeof data[i] != 'undefined' && i < nb_commits) {
				$(that).append('<li class="jg-commit">By ' + data[i]['commit']['author']['name'] + ' with message '+data[i]['commit']['message']+' on '+repo+' '+data[i]['commit']['author']['date']+'</li>');
				i++;
			}

			$(that).append('</ul>');
 		});
  
		
	}
})(jQuery);