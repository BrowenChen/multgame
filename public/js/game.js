// function press(){
// 	if (confirm("Do you want to delete this app?") == true) {
// 		console.log('cool');
// 	}
// }

// document.getElementById('attack_input').onkeypress = function(e){
// 	if(!e) e = window.event;
// 	var keyCode = e.keyCode || e.which;

// 	if(keyCode == '13'){
// 		alert('enter pressed');
// 	}
// }

var questions = ['4 * 3', '5 * 2', '2 * 9', '2 * 0', '4 * 6', '3 * 5', '3 + 4', '12 / 4', '12 + 34', '7*3'];
var solutions = ['12', '10', '18', '0', '24', '15', '7', '3', '46', '21'];
var q_select= 0;
var score = 0;

var start = false;
var startTime = 0;

$(document).keypress(function(e){
	console.log(e.timeStamp);

	//var target = $('#target_input').text();
	var input = $('#attack_input').val();

	if(e.keyCode == '13') {

		if(q_select < (questions.length - 1)){
			console.log('enter hit');
			console.log('solution' + solutions[q_select]);

			if(solutions[q_select] == input && start == true ){
				console.log(score);

				score++;
				q_select++;

				$('#target_input').text(questions[q_select]);
				$('#score').text(score);

				$('#attack_input').val("");	

			} 
			else if(start == true) {
				score--;
				$('#attack_input').val("");	
				$('#score').text(score);
			}

			else if(input == 'start'){
				startTime = e.timeStamp;
				start = true;

				$('#target_input').text(questions[q_select]);
				$('#attack_input').val("");
			}

			if(input == "restart"){
				score = 0;
				q_select = 0;

				alert(q_select);

				startTime = e.timeStamp;
				start = true;

				$('#target_input').text(questions[q_select]);
				$('#attack_input').val("");
			}
		} else {
			var finalTime = e.timeStamp - startTime;
			alert('END' + finalTime);
		}

	}


});