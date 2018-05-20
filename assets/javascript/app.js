var quiz = [
{
    question: "What is the name for the offspring of a male lion and a female tiger?",
    answer: ["tigon", "dfef", "Paul", "ham"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "ham"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},
{
    question: "What is your name?",
    answer: ["John", "Henry", "Paul", "shawn"],
    correct: "Paul"
},

];

var correctCount;
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

function run() {
    intervalId = setInterval(decrement, 1000);
    displayGameBox();
    correctAnswer();
    }
  
    function decrement() { // decrement start
        number--;
        $("#clockBox").html("<h1>" + number + "</h1>");
        if (number === 0) {
            stop();
            $("#clockBox").html("<p>"+"TIME'S UP!"+"</p>")
            a++;
            myDelay();
            decrementb();
            
            console.log('wait: '+ myWait);
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
            myDelay();       
        }   
    } // decrement end


// function myDelay(){
//         myInterval = setInterval(decrementb, 1000);     
//     }
//     function decrementb() { //myWait delay before going to next question
//         myWait--;
//         if (myWait === 0) {
//         number = 30;
//         myWait = 7;
//         myStop();
//         run();
//         console.log('i waited');
//         console.log('quiz: '+quiz[a].question);
//         console.log('a count: '+a);
//         }



    function stop() {
        clearInterval(intervalId);
      }
    function myStop(){
        clearInterval(myInterval);
    }
    
    // load question to gameBox
    function displayGameBox(){
        if (a <= quiz.length) {
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
        
        $(document).on("click", ".userChoice", function (){
            // console.log('hello');
            choice = $(this).attr('data-name');
            if (choice === correct) {
                correctCount++;
            
                stop();
                console.log("YAY!");
            } else {
                console.log("NOO!!");
            };
            a++;
            console.log($(".userChoice"));
            console.log('my choice: '+ choice);
            console.log('correct answer: '+ correct);
            
        });
    }

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
