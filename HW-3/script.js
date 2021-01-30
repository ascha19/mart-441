console.log(document.title);
console.log(document.URL);
console.dir(document);

function closeWindow() {
  window.close();
}

function storyInitiate(option) {
  var continue1 = document.getElementById("option1").innerHTML;
  var continue2 = document.getElementById("option2").innerHTML;
  var continue3 = document.getElementById("option3").innerHTML;

//First set of options
  if (option == 1 && continue1 == "Pig") {
    document.getElementById("story").innerHTML = "Ah, the pig. You must protect yourself.";
    document.getElementById("option1").innerHTML = "Run";
    document.getElementById("option2").innerHTML = "Hide";
    document.getElementById("option3").innerHTML = "Why?";
  }
  else if (option == 2 && continue2 == "Wolf") {
    document.getElementById("story").innerHTML = "Ah, the wolf. Get hunting.";
    document.getElementById("option1").innerHTML = "Chase";
    document.getElementById("option2").innerHTML = "Sniff";
    document.getElementById("option3").innerHTML = "Why should I?";
  }
  else if (option == 3 && continue3 == "Neither") {
    document.getElementById("story").innerHTML = "Oh, are you sure? Then leave.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }

//Second set of options
  else if (option == 1 && continue1 == "Run") {
    document.getElementById("story").innerHTML = "Smart piggie. You take refuge in a village but you only have so much time. Build a shelter.";
    document.getElementById("option1").innerHTML = "Use straw";
    document.getElementById("option2").innerHTML = "Use sticks";
    document.getElementById("option3").innerHTML = "Use bricks";
  }
  else if (option == 2 && continue2 == "Hide") {
    document.getElementById("story").innerHTML = "Unfortunately, you can only hide for so long before you're sniffed out by the wolf. You perish.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 3 && continue3 == "Why?") {
    document.getElementById("story").innerHTML = "Because you're being hunted, of course.";
    document.getElementById("option1").innerHTML = "Run";
    document.getElementById("option2").innerHTML = "Hide";
    document.getElementById("option3").innerHTML = "You already asked this.";
  }
  else if (option == 1 && continue1 == "Chase") {
    document.getElementById("story").innerHTML = "Unfortunately, you didn't properly prepare. You run until exhaustion hits but to no avail. You drag yourself home without dinner.";
    document.getElementById("option1").innerHTML = "Go home";
    document.getElementById("option2").innerHTML = "Go home";
    document.getElementById("option3").innerHTML = "Go home";
  }
  else if (option == 2 && continue2 == "Sniff") {
    document.getElementById("story").innerHTML = "Clever dog. You put your tracking skills to use and follow your prey's scent to a village. There are three odd houses. Which do you choose?";
    document.getElementById("option1").innerHTML = "Bricks";
    document.getElementById("option2").innerHTML = "Sticks";
    document.getElementById("option3").innerHTML = "Straw";
  }
  else if (option == 3 && continue3 == "Why should I?") {
    document.getElementById("story").innerHTML = "You need nourishment and prey is nearby, of course.";
    document.getElementById("option1").innerHTML = "Chase";
    document.getElementById("option2").innerHTML = "Sniff";
    document.getElementById("option3").innerHTML = "You already asked this.";
  }

//Third set of options
else if (option == 1 && continue1 == "Use staw") {
  document.getElementById("story").innerHTML = "Interesting choice, a flimsy house but a solid decoy. You use this home to entice the animal chasing you inside, then you set the house on fire. You survived but unfortunately, the fire spread to other houses in the village. Not long after, you're arrested, tried for arson, and forced to live out your days in prison.";
  document.getElementById("option1").innerHTML = "Serve your sentence";
  document.getElementById("option2").innerHTML = "Serve your sentence";
  document.getElementById("option3").innerHTML = "Serve your sentence";
}
else if (option == 2 && continue2 == "Use sticks") {
    document.getElementById("story").innerHTML = "The neutral choice, both a decent house and decoy. When the animal chasing you enters, you knock out a support and the house collapses on top of it; it easily looks like an accident caused by flimsy building structure. Congratulations, you've survived.";
    document.getElementById("option1").innerHTML = "Congrats";
    document.getElementById("option2").innerHTML = "Congrats";
    document.getElementById("option3").innerHTML = "Congrats";
  }
  else if (option == 3 && continue3 == "Use bricks") {
    document.getElementById("story").innerHTML = "Wise choice, pig, as was the addition of a gun. It's easy to take down and dispose of your assailant. Congratulations, you've survived and even acquired a new fur rug from your encounter.";
    document.getElementById("option1").innerHTML = "Congrats";
    document.getElementById("option2").innerHTML = "Congrats";
    document.getElementById("option3").innerHTML = "Congrats";
  }
  else if (option == 1 && continue1 == "Return") {
    document.getElementById("story").innerHTML = "Hello again, being. Are you a pig or wolf?";
    document.getElementById("option1").innerHTML = "Pig";
    document.getElementById("option2").innerHTML = "Wolf";
    document.getElementById("option3").innerHTML = "Neither";
  }
  else if (option == 2 && continue2 == "Leave") {
    closeWindow();
  }
  else if (option == 3 && continue3 == "Return") {
    document.getElementById("story").innerHTML = "Hello again, being. Are you a pig or wolf?";
    document.getElementById("option1").innerHTML = "Pig";
    document.getElementById("option2").innerHTML = "Wolf";
    document.getElementById("option3").innerHTML = "Neither";
  }
  else if (option == 1 && continue1 == "Go home") {
    document.getElementById("story").innerHTML = "You went back to your den tired, hungry, and irritated.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 2 && continue2 == "Go home") {
    document.getElementById("story").innerHTML = "You went back to your den tired, hungry, and irritated.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 3 && continue3 == "Go home") {
      document.getElementById("story").innerHTML = "You went back to your den tired, hungry, and irritated.";
      document.getElementById("option1").innerHTML = "Return";
      document.getElementById("option2").innerHTML = "Leave";
      document.getElementById("option3").innerHTML = "Return";
    }
  else if (option == 1 && continue1 == "Bricks") {
    document.getElementById("story").innerHTML = "How unfortunate. The smart prey not only built a sturdy house but also purchased a sturdy gun. You've failed.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 2 && continue2 == "Sticks") {
    document.getElementById("story").innerHTML = "Both reasonably built and reasonably breached. Unfortunately, it collapses on you once you're inside. You've failed.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 3 && continue3 == "Straw") {
    document.getElementById("story").innerHTML = "An easy house to get into. Unfortunately, it's lit on fire soon after and the fire spreads too fast for you to escape. You've failed.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 1 && continue1 == "Congrats") {
    document.getElementById("story").innerHTML = "You live to see another day.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 2 && continue2 == "Congrats") {
    document.getElementById("story").innerHTML = "You live to see another day.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
  else if (option == 3 && continue3 == "Congrats") {
    document.getElementById("story").innerHTML = "You live to see another day.";
    document.getElementById("option1").innerHTML = "Return";
    document.getElementById("option2").innerHTML = "Leave";
    document.getElementById("option3").innerHTML = "Return";
  }
}
