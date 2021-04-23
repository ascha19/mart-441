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

    myStory.innerHTML = "This is a thing.";
  }

  else if(myOption === "No") {
    closeWindow();
  }

  else {
    myStory.innerHTML = "Invalid answer. Type 'Yes' or 'No' and click the button to continue.";
  }
}
