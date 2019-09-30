console.log("connected");


function resetInputs() {
  
  $("#user-name-input").val(''),
  $("#user-image-input").val(''),
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
    $("#question-three").val(),
    $("#question-four").val()
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
    console.log(data);
  });
}
