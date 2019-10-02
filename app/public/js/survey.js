console.log("connected");

// reset inputs on form submission
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

// submit button for survey
$("#submit").click(e => {
  // validates survey is fille dout
  if ($(".input").val() === "" || $(".user-input").val() === "") {
    // display error modal
    $("#error-modal").fadeIn("slow");
    // close error modal after timeout
    setTimeout(() => closeModal(), 1500);
  } else {
    //  empty array to collect input values
    let ratings = [];

    // push survey values to array
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

    // construct objuct from survey submission
    let submission = new Friend(
      $("#user-name-input").val(),
      $("#user-image-input").val(),
      ratings
    );

    // ajax request to post constructed object
    postData(submission);
    resetInputs();
  }
});

// constructor to create desired object format for new user
function Friend(name, photo, scores) {
  this.name = name;
  this.photo = photo;
  this.scores = scores;
}

// post data to server
function postData(object) {
  $.post("/api/friends", object, data => {
    // display modal with server data
    openModal(data);
  });
}

// close modal on clicked x
$(".close-btn").click(closeModal);
// close modal if clicked outside of modal
$(window).click(outsideClick);

// modal displays content returned from server/api
function openModal(match) {
  $("#match-modal").fadeIn("slow");
  $("#match-name").text(match.name);
  $("#match-img").attr("src", match.image);
}

function closeModal() {
  $(".modal").fadeOut("slow");
}

// close modal when clicked outside
function outsideClick(e) {
  if (e.target.id === "match-modal" || e.target.id === "error-modal") {
    closeModal();
  }
}
