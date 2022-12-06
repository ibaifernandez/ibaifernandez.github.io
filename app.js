(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();

/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/

function checkmail(input) {
  var pattern1 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (pattern1.test(input)) {
    return true;
  } else {
    return false;
  }
}
function proceed() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  var subject = document.getElementById("subject");
  var msg = document.getElementById("message");
  var errors = "";
  if (name.value == "") {
    name.className = "error";
    return false;
  } else if (email.value == "") {
    email.className = "error";
    return false;
  } else if (checkmail(email.value) == false) {
    alert("Please, provide a valid email address.");
    return false;
  }
  // else if(phone.value == ""){
  // phone.className = 'error';
  // return false;}
  else if (subject.value == "") {
    subject.className = "error";
    return false;
  } else if (msg.value == "") {
    msg.className = "error";
    return false;
  } else {
    $.ajax({
      type: "POST",
      url: "./submit.php",
      data: $("#contact_form").serialize(),
      success: function (msg) {
        alert(msg);
        if (msg) {
          $("#contact_form").fadeOut(1000);
          $("#contact_message").fadeIn(1000);
          var element = document.getElementById("contact_message");
          element.html("Thanks! :) The message was succesfully sent!");
          return true;
        }
      },
    });
  }
}
