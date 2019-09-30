console.log("connected");

// const nameInput = document.getElementById("user-name-input");
// const imgInput = document.getElementById("user-image-input");
// const q1 = document.getElementById("question-one");
// const q2 = document.getElementById("question-two");
// const q3 = document.getElementById("question-three");
// const q4 = document.getElementById("question-four");
// const q5 = document.getElementById("question-five");
// const q6 = document.getElementById("question-six");
// const q7 = document.getElementById("question-seven");
// const q8 = document.getElementById("question-eight");
// const q9 = document.getElementById("question-nine");
// const q10 = document.getElementById("question-ten");
// const submit = document.getElementById("submit");
// const inputs = document.querySelector(".input");

function resetInputs() {
  $("#question-one").val("");
  $("#question-two").val("");
  $("#question-three").val("");
  $("#question-four").val("");
  $("#question-five").val("");
  $("#question-six").val("");
  $("#question-seven").val("");
  $("#question-eight").val("");
  $("#question-nine").val("");
  $("#question-ten").val("");
}

$("#submit").click(e => {
  let ratings = [];
  //   ratings.push(q1.value, q2.value, q3.value);
  ratings.push(
    $("#question-one").val(),
    $("#question-two").val(),
    $("#question-three").val()
  );

  let submission = new Friend(
    $("#user-name-input").val(),
    $("#user-image-input").val(),
    ratings
  );

  resetInputs();
  postData(submission);
});

function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

function postData(object) {
  $.post("/api/friends", object, data => {
    console.log(object);
    console.log(data);
  });
}
