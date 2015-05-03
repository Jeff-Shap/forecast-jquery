var main = function() {
	
	$('.day').click(function () {
		console.log("day clicked");
		// $('.hourly').toggle();
		$(this).next().toggle();
		$(this).find('span').toggleClass('glyphicon-minus');
	});


};

$(document).ready(main);