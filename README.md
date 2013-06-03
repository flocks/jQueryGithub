jQueryGithub
============


Just a little plugin for displaying your last commits on your website.

`````javascript
<html>
  <head>
		<script type="text/javascript" src="jquery.js"></script>
		<script type="text/javascript" src="jquery-github.js"></script>
		<script type="text/javascript">
			$('document').ready(function() {
				$('#jquery-github').githubCommits("flocks", "Cornelien", 7, 'My Commits');
			});
		</script>

		<link href="style.css" rel="stylesheet" media="all" type="text/css"> 


	</head>
	<body>
		
		<div id="jquery-github">
		</div>

		
	</body>
</html>
`````
And the result :
![Alt text](/screen.png "screenshot")

Todo : 
Make the script AMD compatible
