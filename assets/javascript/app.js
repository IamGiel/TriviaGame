
var stopwatch = {

  time: 60,
  lap: 1,

  
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
  },
  
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};

stopwatch.start();


setTimeout(function(){ $("#body").replaceWith("<body><h1>" + 
						"correct answers: " + score + "<br>" + 
						"wrong answers: "  + wrong + "<br>" + 
						"unanswered: " + unanswered + "</h1></body>"); 
				
						if (!$("#one option:selected").length) {
							$("#one option[value=jupiter]").attr('selected', 'selected');
						}
}, 60*1000);

// var number = 180;

//     var intervalId;
    
//     function run() {
//       intervalId = setInterval(decrement, 1000);
//     }

//     function decrement() {

//       number--;

//       $("#timer").html("<h2>" + "You Have: " + number + " seconds left to choose the right answer" + "</h2>");

//       if (number === 0) {

//         stop();

//         console.log("timestop");
//       }

//    }

//     function stop() {

//       clearInterval(intervalId);
//     }

//     run();




	var correct;
	var wrong = 10;
	var score = 0;
	var unanswered = 10;
	var clicked = false;

	var theme = ["planets", "sciElements", "superBowl", "team", "question5", "question6", "question7", "question8", "question9", "question10"];
	var answerTo = ["jupiter", "coppertin", "deionSanders", "patriots", "GlenDanzig", "rapGod", "Fuel", "Philosopher", "Luxembourg", "Leonardo"];
	
	for (var j = 0; j < answerTo.length; j++) {
		answerTo[j];

		for (var i = 0; i < theme.length; i++) {
			theme[i];
		
			$("input[name=" + theme[i] + "]").change(function(){
				$("input[name=" + theme[i] + "]").prop('disabled', true);
		    	
					console.log("this is clicked ");
			});

			$("input[name=" + theme[i] + "][value=" + answerTo[j] + "]").on("click", function() {
				score++;
				wrong--;
				console.log("you scored! = " + score);
				console.log("wrong  = " + wrong);
				});		
		}
	}
	//we dont want this to be part of the loop because it will affect the scores
	$("input[name=planets]").change(function(){
			$("input[name=planets]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=sciElements]").change(function(){
			$("input[name=sciElements]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=superBowl]").change(function(){
			$("input[name=superBowl]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=team]").change(function(){
			$("input[name=team]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question5]").change(function(){
			$("input[name=question5]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question6]").change(function(){
			$("input[name=question6]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question7]").change(function(){
			$("input[name=question7]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question8]").change(function(){
			$("input[name=question8]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question9]").change(function(){
			$("input[name=question9]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question10]").change(function(){
			$("input[name=sciElements]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});


	//just in case the user finsished quickly - they can submit.
	$(".btn").on("click", function (){
		$("#body").replaceWith("<body><h1>" + 
			"correct answers: " + score + "<br>" + 
			"wrong answers: "  + wrong + "<br>" + 
			"unanswered: " + unanswered + "</h1></body>")
	});




































