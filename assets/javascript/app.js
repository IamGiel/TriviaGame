


$(document).ready(function() {
     



var stopwatch = {

  time: 60,
  lap: 1,

  // reset: function() {
  // 	stopwatch.time = "00:00";
  // 	clearInterval(intervalId);


  // },
  start: function() {

    // DONE: Use setInterval to start the count here and set the clock to running.
    
    intervalId = setInterval(stopwatch.count, 1000);
    clockRunning = true;
  },
  
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time--;
    clockRunning=false
    if (stopwatch.time === 0) {
		clearInterval(intervalId);

    }

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

	$("#results").hide();
	
	setTimeout(function(){  
			$("#correct").html(score);
			$("#wrong").html(wrong);
			$("#unanswered").html(unanswered);
			$("#wholeContent").hide();
			$("#headerDisplay").hide();
			$("#results").show();
			// $("#giphy").show();
			// $("#giphy").html(data[1].images.fixed_height_still.url.html(response).hide());
			dataType = "you+did+it";
			var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ dataType + "&api_key=dc6zaTOxFJmzC";

	    	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			//url stored

			//add new element contianing gif
			gifUrl = response.data[0].embed_url;//url
			gif = $("<img>").attr("src", gifUrl);//var that has url and e
			$("#giphy").prepend(gif);
			console.log(gifUrl);

			});
		

	 }, 60*1000);



	var correct;
	var wrong = 0;
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
				console.log("you scored! = " + score);
				console.log("wrong  = " + wrong);
				});		
		}
	}

	

	//we dont want this to be part of the loop because it will affect the #scores and #unanswered  - - - any advise here??? DRY - im repeating here.
	$("input[name=planets]").change(function(){
			$("input[name=planets]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=planets]").on("click", function(){
			if ($('input[name=planets]:checked').val() != "jupiter") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=sciElements]").change(function(){
			$("input[name=sciElements]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=sciElements]").on("click", function(){
			if ($('input[name=sciElements]:checked').val() != "coppertin") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=superBowl]").change(function(){
			$("input[name=superBowl]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=superBowl]").on("click", function(){
			if ($('input[name=superBowl]:checked').val() != "deionSanders") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=team]").change(function(){
			$("input[name=team]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=team]").on("click", function(){
			if ($('input[name=team]:checked').val() != "patriots") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=question5]").change(function(){
			$("input[name=question5]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=question5]").on("click", function(){
			if ($('input[name=question5]:checked').val() != "GlenDanzig") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=question6]").change(function(){
			$("input[name=question6]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=question6]").on("click", function(){
			if ($('input[name=question6]:checked').val() != "rapGod") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=question7]").change(function(){
			$("input[name=question7]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=question7]").on("click", function(){
			if ($('input[name=question7]:checked').val() != "Fuel") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=question8]").change(function(){
			$("input[name=question8]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=question8]").on("click", function(){
			if ($('input[name=question8]:checked').val() != "Philosopher") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=question9]").change(function(){
			$("input[name=question9]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=question9]").on("click", function(){
			if ($('input[name=question9]:checked').val() != "Luxembourg") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});
	$("input[name=question10]").change(function(){
			$("input[name=sciElements]").prop('disabled', false);
			unanswered--;
			console.log("not answered: " + unanswered);
	});
		$("input[name=question10]").on("click", function(){
			if ($('input[name=question10]:checked').val() != "Leonardo") {
		            wrong++;
		            console.log("wrong " + wrong);
		         }
		});

		//play again
	$("#reset").on("click", function() {
		location.reload('body2');
	});
	

	//just in case the user finsished quickly - they can submit.
	$("#submit").on("click", function (){
		$("#correct").html(score);
		$("#wrong").html(wrong);
		$("#unanswered").html(unanswered);
		$("#wholeContent").hide();
		$("#headerDisplay").hide();
		$("#results").show();
		// $("#giphy").show();

		dataType = "you+did+it";
		var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ dataType + "&api_key=dc6zaTOxFJmzC";

    	$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
		//url stored
		gifUrl = response.data[0].embed_url;//url
		gif = $("<img>").attr("src", gifUrl);//var that has url and e
		$("#giphy").html(gif);
		console.log(gifUrl);
});
		

	});

	


});





























