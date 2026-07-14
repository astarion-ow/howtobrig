const questions = [
    {

        title:
        "Did Soldier:76 receive Inspire healing?",

        video:
        "https://pub-5f8351c31ed146c89ce2f770db6fb9c4.r2.dev/placeholder.mp4",

        correct:
        "no",

        success:
        "Correct. Soldier: 76 is outside of Brigitte's line-of-sight.",

        explanation:
        "Soldier: 76 is outside of Brigitte's line-of-sight. As such, he does not receive any healing when Brigitte damages the Bastion."

    },

    {

        title:
        "Did Ana receive Inspire healing?",

        video:
        "https://pub-5f8351c31ed146c89ce2f770db6fb9c4.r2.dev/placeholder.mp4",

        correct:
        "yes",

        success:
        "Correct.",

        explanation:
        "Wrong."

    },

    {

        title:
        "Did Wrecking Ball receive Inspire healing?",

        video:
        "https://pub-5f8351c31ed146c89ce2f770db6fb9c4.r2.dev/placeholder.mp4",

        correct:
        "no",

        success:
        "Correct. Although Wrecking Ball is technically within Brigitte's line-of-sight, he is outside of Inspire's 20m range.",

        explanation:
        "Although Wrecking Ball is technically within Brigitte's line-of-sight, he is outside of Inspire's 20m range, and thus cannot receive Inspire."

    }

];

let current = 0;
let score = 0;

const title =
document.getElementById("question-title");

const video =
document.getElementById("question-video");

const progress =
document.getElementById("quiz-progress");

const feedback =
document.getElementById("feedback");

const submit =
document.getElementById("submit-btn");

const next =
document.getElementById("next-btn");

function loadQuestion(){

const q =
questions[current];

title.textContent =
q.title;

video.src =
q.video;

progress.textContent =
`Question ${current+1} / ${questions.length}`;

feedback.style.display =
"none";

feedback.className =
"quiz-feedback";

document
.querySelectorAll("input[name='answer']")
.forEach(r=>r.checked=false);

submit.disabled =
false;

next.style.display =
"none";

if(current===questions.length-1){

next.textContent =
"Complete Exercise";

}

else{

next.textContent =
"Next Question →";

}

}

submit.addEventListener("click",()=>{

const selected =
document.querySelector(
"input[name='answer']:checked"
);

if(!selected){

feedback.style.display =
"block";

feedback.textContent =
"Select an answer before submitting.";

return;

}

const q =
questions[current];

feedback.style.display =
"block";

if(selected.value===q.correct){
    score++;

    feedback.className =
    "quiz-feedback correct";

    feedback.innerHTML =
    `<strong>Correct.</strong><br>${q.success}`;

}

else{

feedback.className =
"quiz-feedback incorrect";

feedback.innerHTML =
`<strong>Incorrect.</strong><br>${q.explanation}`;

}

submit.disabled =
true;

next.style.display =
"inline-block";

});

next.addEventListener("click",()=>{

current++;

if(current>=questions.length){

document.querySelector(".quiz-card").innerHTML=`
<h4>Evaluation Complete</h4>
<p>You answered <strong>${score}</strong> of <strong>${questions.length}</strong> questions correctly.</p>
`;

return;

}

loadQuestion();

});

loadQuestion();