console.log(document.title);
console.log(document.URL);
console.dir(document);

//Storyline: Wake up and find phone. Storyline 1: Phone rings, you answer, investigate, and get your soul sucked into phone. Storyline 2: You ignore the creepy shit and go back to sleep, dream, and die. Storyline 3: You try to go home, turn left, and get hit by a car. Storyline 4: You try to go home, turn right, and sucked into a portal to hell.

//First set of options - Split to Storyline 1 or Storyline 3/4.
function getOption1() {
  var myOption = document.getElementById("option").value;
  var myStory = document.getElementById("story");

  if(myOption === "Pick up cellphone") {
    document.getElementById("option").style.display="none";
    document.getElementById("submit").style.display="none";

    document.getElementById("option2").style.display="block";
    document.getElementById("submit2").style.display="block";

    myStory.innerHTML = "You pick up the phone and examine it. <br>The screen is smashed but it is otherwise in tact. <br>There is a piece of paper with a number on it behind the clear phone case: <br>0396 <br>Suddenly, the cellphone rings. <br><br>You can: <br>>Answer <br>>Leave it alone";
  }

  else if(myOption === "Get up and leave") {

    document.getElementById("option").style.display="none";
    document.getElementById("submit").style.display="none";

    document.getElementById("option6").style.display="block";
    document.getElementById("submit6").style.display="block";

    myStory.innerHTML = "You stand and make your way into the street. <br>You're now standing in the middle of a cracked, asphalt road. <br><br>You can: <br>>Go left <br>>Go right";
  }

  else {
    myStory.innerHTML = "Invalid answer. <br>Type either 'Pick up cellphone' or 'Get up and leave'.";
  }
}

//Second set of options - Split to Storyline 1 or Storyline 2.
function getOption2() {
  var myOption2 = document.getElementById("option2").value;
  var myStory = document.getElementById("story");

  if (myOption2 === "Answer") {

    document.getElementById("option2").style.display="none";
    document.getElementById("submit2").style.display="none";

    document.getElementById("option3").style.display="block";
    document.getElementById("submit3").style.display="block";

    myStory.innerHTML = "You answer the phone. <br>Before you can say a word, a blood-curdling scream erupts. <br>Then the line goes dead. <br><br>You can <br>>Investigate <br>>Ignore it";
  }

  else if (myOption2 === "Leave it alone") {
    myStory.innerHTML = "Instead of answering, you silence the phone and place it back on the bench. <br>You lay back down and prepare to sleep again. <br>You can: <br>>Dream <br>>Not dream.";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Answer' or 'Leave it alone'.";
  }
}

//Third set of options - split to Storyline 1 or Storyline 2
function getOption3() {
  var myOption3 = document.getElementById("option3").value;
  var myStory = document.getElementById("story");

  if (myOption3 === "Investigate") {

    document.getElementById("option3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("option4").style.display="block";
    document.getElementById("submit4").style.display="block";

    myStory.innerHTML = "You decide to investigate more. <br>You go to access the rest of the phone. <br>It's locked with a four-digit passcode. <br><br>You can: <br>>[insert the code] <br>>Give up";
  }

  else if (myOption3 === "Ignore it") {

    document.getElementById("option3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("option7").style.display="block";
    document.getElementById("submit7").style.display="block";

    myStory.innerHTML = "You decide to pursue ignorant bliss. <br>Shuddering, you place the phone back where you found it. <br><br>You can: <br>>Get up and leave <br>>Lie back down";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Investigate' or 'Ignore it'.";
  }
}

//Fourth - Storyline 1 ends or splits to Storyline 2
function getOption4() {
  var myOption4 = document.getElementById("option4").value;
  var myStory = document.getElementById("story");

  if (myOption4 === "0396") {

    document.getElementById("image").src = "./imgs/phone-screen-red.jpg"

    document.getElementById("option4").style.display="none";
    document.getElementById("submit4").style.display="none";

    document.getElementById("option5").style.display="block";
    document.getElementById("submit5").style.display="block";

    myStory.innerHTML = "You enter the four-digit number you found on the back of the phone. <br>You immediately regret it as you're greeted with a warped and glitching background photo of a woman's face. <br>Before you can continue your investigation, you hear a soft cackle in your ear and swear you see the woman in the photo grin. <br>Before you can search the phone any further, blinding red light pours from the cracks in the screen. <br>You feel the air being sucked from your lungs and the last thing you hear as the world goes dark is the phone hitting the pavement.";
  }

  else if (myOption4 === "Give up") {

    document.getElementById("option4").style.display="none";
    document.getElementById("submit4").style.display="none";

    document.getElementById("option7").style.display="block";
    document.getElementById("submit7").style.display="block";

    myStory.innerHTML = "This is too much effort and too much weird. <br>You put the phone back where you got it and consider your options. <br><br>You can: <br>>Get up and leave <br>Lie back down";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type in the four-digit code or 'Give up'.";
  }
}

//Fifth/Final option - game restart after death
function restartGame() {
  var myOption5 = document.getElementById("option5").value;
  var myStory = document.getElementById("story");

  if (myOption5 === "Restart") {

    document.getElementById("image").src = "./imgs/spooky-bench.jpg"

    document.getElementById("option5").style.display="none";
    document.getElementById("submit5").style.display="none";

    document.getElementById("option").style.display="block";
    document.getElementById("submit").style.display="block";

    myStory.innerHTML = "";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type 'Restart'.";
  }
}

//Sixth set of options - Split to Storyline 3 and 4 and both endings
function getOption6() {
  var myOption6 = document.getElementById("option6").value;
  var myStory = document.getElementById("story");

  if (myOption6 === "Go left") {

    document.getElementById("image").src = "./imgs/car-headlights.jpg"

    document.getElementById("option6").style.display="none";
    document.getElementById("submit6").style.display="none";

    document.getElementById("option5").style.display="block";
    document.getElementById("submit5").style.display="block";

    myStory.innerHTML = "You turn to go left. <br>Before you can start walking, a car comes barreling down the dark street. <br>The lights blind before the world turns black. <br>The last thing you hear the sickening crunch of your own bones.";
  }

  else if (myOption6 === "Go right") {

    document.getElementById("image").src = "./imgs/vortex-light.jpg"

    document.getElementById("option6").style.display="none";
    document.getElementById("submit6").style.display="none";

    document.getElementById("option5").style.display="block";
    document.getElementById("submit5").style.display="block";

    myStory.innerHTML = "You turn to go right. <br>You barely take two steps before the fabric of reality tears open to reveal a doorway of light. <br>Before you can decide differently, you feel yourself pulled through the vortex. <br>There is burning brightness, then nothing.";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Go left' or 'Go right'.";
  }
}

//Seventh - Splits to Storyline 2 or Storyline 3/4
function getOption7() {
  var myOption7 = document.getElementById("option7").value;
  var myStory = document.getElementById("story");

  if (myOption7 === "Get up and leave") {
    document.getElementById("option7").style.display="none";
    document.getElementById("submit7").style.display="none";

    document.getElementById("option6").style.display="block";
    document.getElementById("submit6").style.display="block";

    myStory.innerHTML = "You stand and make your way into the street. <br>You're now standing in the middle of a cracked, asphalt road. <br><br>You can: <br>>Go left <br>>Go right";
    }

  else if (myOption7 === "Lie back down") {

    document.getElementById("option7").style.display="none";
    document.getElementById("submit7").style.display="none";

    document.getElementById("option8").style.display="block";
    document.getElementById("submit8").style.display="block";

    myStory.innerHTML = "You get comfortable on the bench you're sitting on and lay down. <br><br>You can: <br>>Dream <br>>Not dream";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Get up and leave' or 'Lie back down'.";
  }
}

//Eighth - Storyline 2 continues and ends
function getOption8() {
  var myOption8 = document.getElementById("option8").value;
  var myStory = document.getElementById("story");

  if (myOption8 === "Dream") {

    document.getElementById("image").src = "./imgs/creepy-figure.jpg"

    document.getElementById("option8").style.display="none";
    document.getElementById("submit8").style.display="none";

    document.getElementById("option5").style.display="block";
    document.getElementById("submit5").style.display="block";

      myStory.innerHTML = "You close your eyes and slip into a peaceful sleep. <br>You were hoping it would be peaceful, at least, but it wasn't. <br>You are in a realm of only darkness when a misty figure appears. <br>They grasp your shoulder and the final sound you hear is your own blood-curdling cry.";
    }

  else if (myOption8 === "Not dream") {

    document.getElementById("option8").style.display="block";
    document.getElementById("submit8").style.display="block";

    myStory.innerHTML = "You must dream. <br><br>>Dream <br>>D̷̤̅r̴͍̋e̸̡̐a̷͝ͅm̵̠̏ <br>>D̷̡̘̪̤̹̹͔̈́̽͗͝r̶̯̃e̶̠͉̓̈́̄͑̾̌̓̓å̴̩̗m̷̥͛͒̀͊́̀̕ <br>>D̵̛̲̪͆̾͘r̷̡̪̙͎͍̥͍̳̦̪̗̐͛͐͜ͅe̴̡̳͓̯̤̫̲̜̯͈̳̳̼̘̘͌̋͊͐̍̈́̈́͌̚͝͝͠a̶̧̨̟͈͇͚̦̼̱̹͇̒̀͘m̵̢̨̨̧̬̖̺̤̺͙̩̹͊̾͜ͅ";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Dream' or 'Not dream'.";
  }
}
