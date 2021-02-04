console.log(document.title);
console.log(document.URL);
console.dir(document);

function getOption1() {
  var myOption = document.getElementById("option").value;
  var myStory = document.getElementById("story");
  console.log(myOption);
  console.log(myStory);

  if(myOption === "Pick up cellphone") {
    myStory.InnerHTML = "You pick up the phone and examine it. "
  }

  else if(myOption === "Get up and leave") {
    myStory.InnerHTML = "You stand and make your way into the street."
  }

  else {
    myStory.InnerHTML = "Invalid answer. Type either 'Pick up cellphone' or 'Get up and leave'."
  }
}
