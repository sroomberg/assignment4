// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
	var datatags = [
		'all',
		'interests',
		'programming',
		'comics'
	];
	var mbapi = 'http://www.mattbowytz.com/simple_api.json';

	$('.flexsearch-input').keyup(function() {
		var currentdata = $(this).val();
		$.getJSON(mbapi, currentdata, function(data) {
			// console.log(currentdata);
			$('.search-results > ul').empty();

			// special case for empty string
			if (currentdata == '') return;
			
			var searchitems = [];
			$.each(datatags, function(index) {
				if (datatags[index].includes(currentdata)) {
					searchitems.push(
						'<li class="search-result-item"><a href="https://www.google.com/#q=matt+bowytz+'
						+ datatags[index] + '" target="_blank">' + datatags[index] + '</a></li>');
				}
			});
			$('.search-results > ul').append(searchitems);
		});
	});

	$('.flexsearch-submit').on('submit', function() {
		var currentdata = $('.flexsearch-input').val();
		location.search = currentdata;
		window.location.href += location.search;
	});

})();