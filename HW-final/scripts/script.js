//Function to close window
function closeWindow() {
  window.close();
}

//Story begin
function getOption1() {
  var myOption = document.getElementById("option").value;
  var myStory = document.getElementById("story");

  if(myOption === "Yes") {
    document.getElementById("option").style.display="none";
    document.getElementById("submit").style.display="none";

    document.getElementById("option2").style.display="block";
    document.getElementById("submit2").style.display="block";

    myStory.innerHTML = "<p>You're walking down the rainy streets of London to a crime scene.<br>It's supposed to be your day off but, as everyone knows, crime stops for no one,<br>and this specific crime--a murder--is one of many in a string of many that you've been investigating for months now.<br>The smell of smoke and rubbish overpowers the smell of rain.<br>A strong breeze blows smoke from your cigarette into your eyes,<br>making you scowl and your eyes sting.<br><br>Type 'Next' to continue.<br></p>";
  }

  else if(myOption === "No") {
    closeWindow();
  }

  else {
    myStory.innerHTML = "Invalid answer. Type 'Yes' or 'No' and click the button to continue.";
  }
}

//Story begin pt. 2 - first choice
function getOption2() {
  var myOption2 = document.getElementById("option2").value;
  var myStory = document.getElementById("story");

  if (myOption2 === "Next") {
    document.getElementById("option2").style.display="none";
    document.getElementById("submit2").style.display="none";

    document.getElementById("option3").style.display="block";
    document.getElementById("submit3").style.display="block";

    myStory.innerHTML = "<p>Quickly, though, your minor inconvenience is forgotten,<br>to the point where you actually toss the cigarette butt aside.<br>What overpowers the rain now is the smell of blood<br>and the sight of the crime scene.<br>Standing off to the side are two people, one familiar and one not.<br>The familiar one is your partner in crime-solving, John Watson,<br>who waves slightly when you catch his eye;<br>the unfamiliar person next to him, a random police officer,<br>probably the one who found the body.<br><br>You can either talk to your coworkers, or examine the crime scene.<br></p>";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type 'Next' to continue.";
  }
}

//Examine/Talk
function getOption3() {
  var myOption3 = document.getElementById("option3").value;
  var myStory = document.getElementById("story");

  if (myOption3 === "Talk") {
    document.getElementById("option3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("option4").style.display="block";
    document.getElementById("submit4").style.display="block";

    myStory.innerHTML = "<p>You choose to talk to your partner and the officer first.<br></p>";
  }

  else if (myOption3 === "Examine") {
    document.getElementById("option3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("option5").style.display="block";
    document.getElementById("submit5").style.display="block";

    myStory.innerHTML = "<p>You choose to examine the crime scene first.<br></p>";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Examine' or 'Talk' to continue.";
  }
}
