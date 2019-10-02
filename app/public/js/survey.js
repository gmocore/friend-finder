console.log("connected");

function resetInputs() {
  $("#user-name-input").val(""),
    $("#user-image-input").val(""),
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
  $("#question-eleven").val("");
  $("#question-twelve").val("");
}

$("#submit").click(e => {
  if ($(".input").val() === "" || $(".user-input").val() === "") {
    $("#error-modal").fadeIn("slow");
    setTimeout(() => closeModal(), 1500);
  } else {
    let ratings = [];
    //   ratings.push(q1.value, q2.value, q3.value);
    ratings.push(
      $("#question-one").val(),
      $("#question-two").val(),
      $("#question-three").val(),
      $("#question-four").val(),
      $("#question-five").val(),
      $("#question-six").val(),
      $("#question-seven").val(),
      $("#question-eight").val(),
      $("#question-nine").val(),
      $("#question-ten").val(),
      $("#question-eleven").val(),
      $("#question-twelve").val()
    );

    let submission = new Friend(
      $("#user-name-input").val(),
      $("#user-image-input").val(),
      ratings
    );

    postData(submission);
    resetInputs();
  }
});

function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

function postData(object) {
  $.post("/api/friends", object, data => {
    console.log("data: ", data);
    openModal(data);
  });
}

$(".close-btn").click(closeModal);
$(window).click(outsideClick);

function openModal(match) {
  $("#match-modal").fadeIn("slow");
  $("#match-name").text(match.name);
  $("#match-img").attr("src", match.image);
}

function closeModal() {
  $(".modal").fadeOut("slow");
}

function outsideClick(e) {
  if (e.target.id === "match-modal" || e.target.id === "error-modal") {
    closeModal();
  }
}
