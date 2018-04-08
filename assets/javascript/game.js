collect = {
	goal: Math.floor(Math.random() * 120) + 19,  
	red: Math.floor(Math.random() * 12) + 1,
	yellow: Math.floor(Math.random() * 12) + 1,
	green: Math.floor(Math.random() * 12) + 1,
	blue: Math.floor(Math.random() * 12) + 1,
	score: 0
};
	wins = 0;
	losses = 0;

	statusDisplay = $("#status");
	winDisplay = $("#wins");
	lossDisplay = $("#losses");
	scoreDisplay = $("#score");
	goalDisplay = $("#goal");
	that = $(this);
		

function render() {
	statusDisplay.html("CLICK ON A CRYSTAL TO START");
	goalDisplay.html(collect.goal);
	scoreDisplay.html(collect.score);
	winDisplay.html(wins);
	lossDisplay.html(losses);
};

function reset(){
	collect.goal = Math.floor(Math.random() * 120) + 19;  
	collect.score = 0;
	collect.red = Math.floor(Math.random() * 12) + 1;
	collect.yellow = Math.floor(Math.random() * 12) + 1;
	collect.green = Math.floor(Math.random() * 12) + 1;
	collect.blue = Math.floor(Math.random() * 12) + 1;

	statusDisplay.html("CLICK ON A CRYSTAL TO START");
	goalDisplay.html(collect.goal);
	scoreDisplay.html(collect.score);
	winDisplay.html(wins);
	lossDisplay.html(losses);
}

render();


$(".crystal").click(function(event) {
	var crystalID = event.target.id;
	console.log("You clicked the " + event.target.id + " crystal.");
	
	if(event.target.id == "red"){
		collect.score+=collect.red;
	} else if(event.target.id == "yellow"){
		collect.score+=collect.yellow;
	} else if(event.target.id == "green"){
		collect.score+=collect.green;
	} else if(event.target.id == "blue"){
		collect.score+=collect.blue;
	};

	scoreDisplay.html(collect.score);

	if(collect.score == collect.goal){

	statusDisplay.html("<span class='text-dark'>You win! " + collect.goal + " is the exact amount of crystals!</span>");
		wins++;
		winDisplay.html("<span class='text-dark'>" + wins + "</span>");

		setTimeout(reset,3000);

	} else if(collect.score > collect.goal){
		statusDisplay.html("<span class='text-dark'>You Lose! You went over " + collect.goal + ". Try Again!</span>");
		losses++;
		lossDisplay.html("<span class='text-dark'>" + losses + "</span>");

		setTimeout(reset,3000);

	} else {
		if (collect.goal - collect.score < 21){
			statusDisplay.html("<span class='text-dark'>Warning! You are getting close to "+collect.goal + "...</span>");
		} else {
		statusDisplay.html("<span class='text-dark'>Keep Going! "+collect.goal + " is far from reach</span>");
		}
	}
});

