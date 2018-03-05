// Must track current question
// Must track current score
// Must show immediate feedback/correct answer after user submission
// Must use function to populate the questions page with a form containing the quiz

let userScore = 0;
let userScorePercent = 0;
let questionCount = 0;


function updateScore() {
	userScore++;
	userScorePercent = (userScore/10) * 100;
	$('.currentScore').text(userScorePercent);
}

function updateQuestionCount() {
	questionCount++;
	$('.currentQuestion').text(questionCount);
}
// when start button is pressed, then update the page/DOM to show the question page/begin quiz
function start() {
	$('.startButton').on('click', '.pikaButton', function(event) {
		//$('.titleBox').remove();
		$('.intro').remove();
		$('.startButton').remove();
		$('.quizFormContain').css('display', 'block');
		$('.pokePNG').css('display', 'block');
		console.log('pikachu pressed');
	});
}

// this function will contain the HTML that's needed to populate the form with the quiz questions,
// it must access the objects from answerKey.js and use it to generate the questions one at a time until
// it reaches the end of the questions. 
function addQuestions() {
	if(questionCount < answerKey.length) {
		return `
			<div class="questionNum${questionCount}">
				<h2 class="quizQuestion">${answerKey[questionCount].question}</h2>
				<form class="questionForm">
					<fieldset id="fieldset" name="answerOptions">
					<legend id="legend">Answers</legend>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${answerKey[questionCount].choices[0]}" name="answer" tabindex="0" required>
								<span>${answerKey[questionCount].choices[0]}</span>
							</label>
							<div class="pokePNG">
 								<img class="pokeImgChoice" src=${answerKey[questionCount].choiceImgs[0]} alt="${answerKey[questionCount].imgAlt[0]}">
							</div>
						</div>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${answerKey[questionCount].choices[1]}" name="answer" tabindex="1" required>
								<span>${answerKey[questionCount].choices[1]}</span>
							</label>
							<div class="pokePNG">
 								<img class="pokeImgChoice" src=${answerKey[questionCount].choiceImgs[1]} alt="${answerKey[questionCount].imgAlt[1]}">
							</div>
						</div>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${answerKey[questionCount].choices[2]}" name="answer" tabindex="2" required>
								<span>${answerKey[questionCount].choices[2]}</span>
							</label>
							<div class="pokePNG">
 								<img class="pokeImgChoice" src=${answerKey[questionCount].choiceImgs[2]} alt="${answerKey[questionCount].imgAlt[2]}">
							</div>
						</div>
						<div class='answerBox col-6'>
							<label class="answerOption">
								<input type="radio" value="${answerKey[questionCount].choices[3]}" name="answer" tabindex="3" required>
								<span>${answerKey[questionCount].choices[3]}</span>
							</label>
							<div class="pokePNG">
 								<img class="pokeImgChoice" src=${answerKey[questionCount].choiceImgs[3]} alt="${answerKey[questionCount].imgAlt[3]}">
							</div>
						</div>
						<div class="submitAnswerButtonContain col-12"><button type="submit" class="submitAnswerButton" tabindex="4">Submit</button></div>

					</fieldset>
				</form>
			</div>`;
	}
	else {
		showResults();
		restart();
	}
}

// this function will handle answer submission and checking to see if the selected choice is correct
function checkUserAnswer() {
	$('.questionForm').on('submit', function(event) {
		console.log('submit pressed');
		event.preventDefault();
		let userAnswer = $('input[name=answer]:checked').val();
		console.log(userAnswer);
		let correctAnswer = `${answerKey[questionCount].answer}`;
		console.log(correctAnswer);

		// If answer is right, then update DOM to provide feedback that user was CORRECT
		if(userAnswer === correctAnswer){
			$('.quizFormContain').html(`
				<div class="questionFeedback_Correct col-12">
					<div class="feedbackImgContain">
						<img class="feedbackImg" src="https://cdn.vox-cdn.com/thumbor/GevroG0K-ohtv0j5xJA4u3EO1y4=/79x0:943x576/1200x800/filters:focal(79x0:943x576)/cdn.vox-cdn.com/uploads/chorus_image/image/48741387/But_2Bbut_2Bpokemon_2Bare_2Bour_2Bfriends_2B_db0d38a978c44a347da7804495ba8e71.0.0.jpg" alt="A group of joyous POKéMON">
					</div>
					<h2 id="correct">CORRECT!</h2>
					<div class="nextQuestionContain"><button type="button" class="nextQuestion">Next</button></div>
				</div>
				`);
			updateScore();
			updateQuestionCount();
		}
		else{
			$('.quizFormContain').html(`
				<div class="questionFeedback_Wrong col-12">
					<div class="feedbackImgContain">
						<img class="feedbackImg" src="http://otaku-w9pxf76zfsktmx3e.stackpathdns.com/wp-content/uploads/2016/10/pokemon-go-crash-fix-guide-2016.jpg" alt="A defeated Pikachu smashed into the dirt">
					</div>
					<h2 id="wrong">WRONG!</h2>
					<h2 id="wrong">The correct answer is: ${answerKey[questionCount].answer}</h2>
					<div class="nextQuestionContain"><button class="nextQuestion">Next</button></div>
				</div>
				`);
			updateQuestionCount();
		}

	});
}

// this function handles the nextQuestion button, makes the page display the next question
function nextQuestion() {
	$('main').on('click', '.nextQuestion', function(event){
		renderForm();
		checkUserAnswer();
		console.log('next pressed');
	});
}

// this function will update the page with HTML for the user's results and the button to restart the quiz
function showResults() {
	if(userScore < 5){
		$('.quizFormContain').html(`
			<div class="finalResults">
				<h2>Your Final Results</h2>
				<h2>You were correct on ${userScore} out of 10 questions</h2>
				<h2>You scored ${userScorePercent}% out of 100%</h2>
				<h2>Unfortunately, you are just a POKéMON Novice!</h2>
				<div class="restartQuizButtonContain"><button class="restartQuizButton">Restart</button></div>
			</div>
		`);
		console.log(userScore);
	}
	if(userScore > 4 && userScore < 8){
		$('.quizFormContain').html(`
			<div class="finalResults">
				<h2>Your Final Results</h2>
				<h2>You were correct on ${userScore} out of 10 questions</h2>
				<h2>You scored ${userScorePercent}% out of 100%</h2>
				<h2>You qualify for the rank of POKéMON Trainer!</h2>
				<div class="restartQuizButtonContain"><button class="restartQuizButton">Restart</button></div>
			</div>
		`);
		console.log(userScore);
	}
	if(userScore > 7){
		$('.quizFormContain').html(`
			<div class="finalResults">
				<h2>Your Final Results</h2>
				<h2>You were correct on ${userScore} out of 10 questions</h2>
				<h2>You scored ${userScorePercent}% out of 100%</h2>
				<h2>You have earned the title of POKéMON Master!</h2>
				<div class="restartQuizButtonContain"><button class="restartQuizButton">Restart</button></div>
			</div>
		`);
		console.log(userScore);
	}

	
}
// this function will handle the restart button click event
function restart() {
	$('main').on('click', '.restartQuizButton', function(event){
		console.log('restart pressed');
		location.reload();
	});
}

function renderForm() {
	$('.quizFormContain').html(addQuestions());

}


function generateNewQuiz() {
	start();
	renderForm();
	checkUserAnswer();
	nextQuestion();
	
}

$(generateNewQuiz);