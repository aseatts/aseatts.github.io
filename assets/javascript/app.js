// display questions with timer. 
// Ideally dial progressbar for time 
// Surface progress bar for points earned toward acceptance into Infernal Regions Gehenna
// Show answer choices
// display correct or incorrect tabulation 
// Show Game ending result 
// Try again 
// Study first 

$.fn.quiz = function (){
var ctrl = this;
ctrl.plrSelction
ctrl.choices = {right:0, wrong:0}
ctrl.response = 
ctrl.timer = 30
ctrl.images = null;
};


// json data  questions

crtl.questions = [ {
    question: "if select to go to Gehenna, what would you want near your cave? ",
    choices: ["Furnace", "Sauna", "On a human", "With a view of the Lava Springs."],
    right: 0},
    {  // object for questions - target 10 questions ..
        question: "How many puppys should creaulla devil make into a coat?",
        choices: ["None", "101", "7", "Buy curelty free"],
        images: ["../images/"], // add a image if it feels like 
        correct: 0} ,  ];
