var quiz = [
{
    question: "Frodo is a ______",
    answer: ["Dwarf", "Ent", "Elf", "Hobbit"],
    correct: "Hobbit"
},
{
    question: "What is Gollum's real name?",
    answer: ["Bilbo", "Smeagol", "Gandalf", "Bungo"],
    correct: "Smeagol"
},
{
    question: "How many rings are there in LOTR?",
    answer: ["One", "Three", "Twenty", "Seven"],
    correct: "Twenty"
},
{
    question: "How many rings were given to the Elven Kings?",
    answer: ["Three", "Seven", "Eleven", "One"],
    correct: "Three"
},
{
    question: "How many rings were given to Mortal Men",
    answer: ["Seven", "Nine", "Three", "Eleven"],
    correct: "Nine"
},
{
    question: "The One Ring to rule them all was made by Sauron, where was it made?",
    answer: ["Minhiriath", "Iron Hills", "Enedwaith", "Mount-Doom"],
    correct: "Mount-Doom"
},


];

var correctCount =0;
var choice;
var number = 30;
var intervalId;
var a = 0;
var myWait = 7;
var myInterval;

function startGame() { //start game

$("#clockBox").css("display", "grid");
$("#gameBox").css("display", "grid");    
$("#startBtn").css("display", "none");
correctCount = 0;

function run() {
    if (a < quiz.length) {
    intervalId = setInterval(decrement, 1000);
    $("#gameBox").css({"pointer-events": "auto"});
    displayGameBox();
    correctAnswer();
    } else {
    $("#gameBox").html("<h2>" + "GAME OVER"+"<br>"+"YOUR SCORE IS "+ correctCount + " OUT OF "+ quiz.length +"</h2>");
    $("#clockBox").css("display", "none");
    }

}
  
    function decrement() { // decrement start
        number--;
        $("#clockBox").html("<h1>" + number + "</h1>");
        if (number === 0) {
            stop();
            $("#clockBox").html("<p>"+"TIME'S UP!"+"</p>")
            a++;
            myDelay();
            // decrementb();       
            console.log('wait: '+ myWait);                
        }   
    } // decrement end

function myDelay(){
    myInterval = setInterval(decrementb, 1000);  
}
function decrementb() { //myWait delay before going to next question
    myWait--;
    if (myWait === 0) {
    number = 30;
    myWait = 7;
    myStop();
    run();
    console.log('i waited');
    console.log('quiz: '+quiz[a].question);
    console.log('a count: '+a);
    }
}

    function stop() { // stop main counter
        clearInterval(intervalId);
      }

    function myStop(){ // stop secondary counter
        clearInterval(myInterval);
    }
    
    // load question to gameBox
    function displayGameBox(){
        console.log('quiz length: '+quiz.length);
        console.log('value of a: '+a);
        if (a < quiz.length) {
            var zero = quiz[a].answer[0];
            var one = quiz[a].answer[1];
            var two = quiz[a].answer[2];
            var three = quiz[a].answer[3];
        $("#gameBox").html("<h1>" + quiz[a].question + "</h1>");
        $("#gameBox").append("<div class='userChoice' data-name="+ zero+ ">" + quiz[a].answer[0] + "</div>");
        $("#gameBox").append("<div class='userChoice' data-name=" + one + ">" + quiz[a].answer[1] + "</div>");
        $("#gameBox").append("<div class='userChoice' data-name=" + two + ">" + quiz[a].answer[2] + "</div>");
        $("#gameBox").append("<div class='userChoice' data-name=" + three + ">" + quiz[a].answer[3] + "</div>");

        }


      
    }
    $(document).on("click", ".userChoice", function (){
        choice = $(this).attr('data-name');
        if (choice === correct) {
            a++;
            correctCount++;
            $("#gameBox").css({"pointer-events": "none"});
            $("#gameBox").html("<h2>" + "YOU'RE RIGHT!!"+"</h2><br><img src='../TriviaGame/assets/images/correct.gif'>");
            stop();
            myDelay();
            // decrementb();   
        
            console.log("YAY!");
        } 
        if (choice !== correct) {
            a++;
            $("#gameBox").css({"pointer-events": "none"});
            $("#gameBox").html("<h2>" + "INCORRECT</h2>"+"<br>" + "<h2>The correct answer is - "+ correct +"</h2><br><img src='../TriviaGame/assets/images/wrong.gif'>");
            stop();
            myDelay();
            // decrementb();
            console.log("NOO!!");
        };
        console.log($(".userChoice"));
        console.log('my choice: '+ choice);
        console.log('correct answer: '+ correct);
        console.log('correctCoutn: '+ correctCount);
        
    });


    function correctAnswer() {
        if (a <= quiz.length){
            correct = quiz[a].correct;
            
        }
    }

    // function userChoice(){
    //     choice = $(this).attr("data-name");
    // }
   
    run();


};
