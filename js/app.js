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
 // show hadouken and animate it to the right of the screen
 		$('.hadouken').show().animate(
			{'left':'1020px'},
			500,
			function () {
				$(this).hide();
				$(this).css('left',"550px");
			}
		);
    // play hadouken sound
    playHadouken();
    })
  .mouseup(function() {
    ('mouseup');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
    // ryu goes back to his ready position
  });
  


 $(document).keydown(function(event) {
 	if(event.which==88){
 		$(".ryu-cool").show();
 		$(".ryu-throwing").hide();
 		$(".ryu-ready").hide();
 		$(".ryu-still").hide();
 		playSax();
 	}
 })
 .keyup( function(event) {
 	if(event.which==88){
 		$(".ryu-cool").hide();
 		$(".ryu-throwing").hide();
 		$(".ryu-ready").hide();
 		$(".ryu-still").show();
 		 pauseSax();
 	}
 });

 $(document).keypress(function(event) {
 	if(event.which==88){
 	}
 });


});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playSax () {
  $('#cool-sax')[0].volume = 0.5;
  // $('#cool-sax')[0].load();
  $('#cool-sax')[0].play();
}

function pauseSax () {

  $('#cool-sax')[0].pause();

}