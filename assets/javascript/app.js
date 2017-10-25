

		setTimeout(function(){ $("#body").replaceWith("<body><h1>" + 
						"correct answers: " + score + "<br>" + 
						"wrong answers: "  + wrong + "<br>" + 
						"unanswered: " + unanswered + "</h1></body>"); 
						
						if (!$("#one option:selected").length) {
							    	$("#one option[value=jupiter]").attr('selected', 'selected');
							}
		}, 30*1000);

var number = 60;

    var intervalId;
    
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#timer").html("<h2>" + "You Have: " + number + " seconds left to choose the right answer" + "</h2>");

      if (number === 0) {

        stop();

        console.log("timestop");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();




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

	$("input[name=planets]").change(function(){
			$("input[name=planets]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=sciElements]").change(function(){
			$("input[name=sciElements]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=superBowl]").change(function(){
			$("input[name=superBowl]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=team]").change(function(){
			$("input[name=team]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question5]").change(function(){
			$("input[name=question5]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question6]").change(function(){
			$("input[name=question6]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question7]").change(function(){
			$("input[name=question7]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question8]").change(function(){
			$("input[name=question8]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question9]").change(function(){
			$("input[name=question9]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
	$("input[name=question10]").change(function(){
			$("input[name=sciElements]").prop('disabled', true);
			unanswered--;
			console.log("not answered: " + unanswered);
	});


	
	$(".btn").on("click", function (){
		$("#body").replaceWith("<body><h1>" + 
			"correct answers: " + score + "<br>" + 
			"wrong answers: "  + wrong + "<br>" + 
			"unanswered: " + unanswered + "</h1></body>")
	});




































