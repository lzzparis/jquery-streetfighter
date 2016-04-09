$(document).ready(function(){

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
  .mousedown(function() {
		$('.ryu-throwing').show();
		$('.ryu-ready').hide();
		$('.hadouken').show();
    // play hadouken sound
    // show hadouken and animate it to the right of the screen
  })
  .mouseup(function() {
    ('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
    // ryu goes back to his ready position
  });

});