console.log("connected");

// constructor for user input object data
function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

// submit button for survey
$("#submit").click(e => {
  // validate if survey has been filled out
  if ($(".input").val() === "" || $(".user-input").val() === "") {
    // display error modal 
    $("#error-modal").fadeIn("slow");
    // fade out after timeout
    setTimeout(() => closeModal(), 1500);
  } else {

    let ratings = [];
    //   push input values to array
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

    // construct object from submission

    let submission = new Friend(
      $("#user-name-input").val(),
      $("#user-image-input").val(),
      ratings
    );
    // send data to server
    postData(submission);
    resetInputs();
  }
});

function postData(object) {
  $.post("/api/friends", object, data => {
    //  display api data in modal 
    openModal(data);
  });
}

// modal interactivity
$(".close-btn").click(closeModal);
// close modal if clicked outside of modal
$(window).click(outsideClick);

// display api data in modal
function openModal(match) {
  $("#match-modal").fadeIn("slow");
  $("#match-name").text(match.name);
  $("#match-img").attr("src", match.image);
}

function closeModal() {
  $(".modal").fadeOut("slow");
}

// close modal if clicked outside
function outsideClick(e) {
  if (e.target.id === "match-modal" || e.target.id === "error-modal") {
    closeModal();
  }
}

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
