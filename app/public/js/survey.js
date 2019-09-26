console.log("hey");

const nameInput = document.getElementById("user-name-input");
const imgInput = document.getElementById("user-image-input");
const q1 = document.getElementById("question-one");
const q2 = document.getElementById("question-two");
const q3 = document.getElementById("question-three");
const q4 = document.getElementById("question-four");
const q5 = document.getElementById("question-five");
const q6 = document.getElementById("question-six");
const q7 = document.getElementById("question-seven");
const q8 = document.getElementById("question-eight");
const q9 = document.getElementById("question-nine");
const q10 = document.getElementById("question-ten");
const submit = document.getElementById("submit");

submit.addEventListener("click", e => {
  let ratings = [];
  ratings.push(q1.value, q2.value, q3.value);

  let submission = new Friend(nameInput.value, imgInput.value, ratings);

  console.log(submission);
});

function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}
