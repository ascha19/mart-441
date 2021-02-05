console.log(document.title);
console.log(document.URL);
console.dir(document);

function getOption1() {
  var myOption = document.getElementById("option").value;
  var myStory = document.getElementById("story");
  console.log(myOption);
  console.log(myStory);

  if(myOption === "Pick up cellphone") {
    document.getElementById("option").style.display="none";
    document.getElementById("submit").style.display="none";

    document.getElementById("option2").style.display="block";
    document.getElementById("submit2").style.display="block";

    myStory.innerHTML = "You pick up the phone and examine it. The screen is smashed but it is otherwise in tact and there is a piece of paper with a number on it behind the clear phone case: 0396. Suddenly, it rings. You can: >Answer or >Leave it alone.";
  }

  else if(myOption === "Get up and leave") {
    myStory.innerHTML = "You stand and make your way into the street. You're now standing in the middle of the road. You can >Go left or >Go right.";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Pick up cellphone' or 'Get up and leave'.";
  }
}

function getOption2() {
  var myOption2 = document.getElementById("option2").value;
  var myStory = document.getElementById("story");

  if (myOption2 === "Answer") {

    document.getElementById("option2").style.display="none";
    document.getElementById("submit2").style.display="none";

    document.getElementById("option3").style.display="block";
    document.getElementById("submit3").style.display="block";

    myStory.innerHTML = "You answer the phone. Before you can say a word, a terrified scream erupts from the speaker that makes you shudder; then the line goes dead. You can >Investigate or >Ignore it.";
  }

  else if (myOption2 === "Leave it alone") {
    myStory.innerHTML = "Instead of answering, you silence the phone and place it back on the bench. You lay back down and prepare to sleep again. You can >Dream or >Not dream.";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Answer' or 'Leave it alone'.";
  }

}
