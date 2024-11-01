let close_open = document.getElementById("close_open");
let answer = document.querySelector(".answer");
let question_content = document.querySelectorAll(".question_content");
let answer_content = document.querySelectorAll(".answer_content");
let f_display = document.getElementById("f_display");
let form = document.getElementById("form");
let create_button = document.getElementById("create_button");

close_open.addEventListener("click", function(){

    answer.classList.toggle("hidden");
    
})

const questions_answers = [
    {
        question:"1. Could you tell me about yourself?",
        answer:"Interviewers like to hear stories about candidates. "
    },
    {
        question:"2. How did you hear about this position?",
        answer:"Employers want to know whether you are actively seeking out their"
    },
    {
        question:"3. What type of work environment do you prefer?",
        answer:"Be sure to do your homework on the organization and its culture before"
    },
    {
        question:"4. How do you deal with pressure or stressful situations?",
        answer:"The employer wants to know: Do you hold down the fort or crumble under pressure?"
    },
]



for (let i = 0; i < questions_answers.length; i++) {
    
    question_content[i].innerHTML = questions_answers[i].question;
    answer_content[i].innerHTML = questions_answers[i].answer;
    
}

create_button.addEventListener("click", function(){
    f_display.classList.toggle("hidden");
    form.classList.add("flex");
    form.classList.remove("hidden");
})







