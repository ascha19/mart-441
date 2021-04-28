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

    myStory.innerHTML = "<p>Quickly, though, your minor inconvenience is forgotten,<br>to the point where you actually toss the cigarette butt aside.<br>What overpowers the rain now is the bustle of police<br>and the sight of the crime scene.<br>Standing off to the side are two people, one familiar and one not.<br>The familiar one is your partner in crime-solving, John Watson,<br>who waves slightly when you catch his eye;<br>the unfamiliar person next to him, a random police officer,<br>probably the one who found the body.<br><br>You can either talk to your coworkers, or examine the crime scene.<br></p>";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type 'Talk' or 'Examine' to continue.";
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

    myStory.innerHTML = "<p>You choose to talk to your partner and the officer first.<br>You walk over. Despite the circumstances, John smiles cheerfully at you as you approach.<br>'Hello, Sherly!' he chirps.<br>John is a heavier set gentleman with curly sand-colored hair,<br>and you've know him since the two of you met while at university.<br>The officer he's standing with glances between you and John with wide eyes.<br>He clearly recognizes you, as famous a detective as you are,<br>and seems surprised that John has called you by such a name.<br>You simply snort. 'You know I hate that name, John.'<br><br>Typie 'Next' to continue.<br></p>";
  }

  else if (myOption3 === "Examine") {
    document.getElementById("option3").style.display="none";
    document.getElementById("submit3").style.display="none";

    document.getElementById("option5").style.display="block";
    document.getElementById("submit5").style.display="block";

    myStory.innerHTML = "<p>You choose to examine the crime scene first.<br>It takes some shuffling around cars and police officers<br>but you were soon at the scene of the crime.<br>Much to your irritation, the body has already been removed,<br>but the scene appears otherwise untouched.<br>There is an outline of the body sketched out in white chalk and the body itself<br>had been found in an alleyway off a main road in Whitechapel.<br>The alleyway was hidden in shadow, even during the day, which would have made for easy disposal of the body.<br>The alleyway was filthy with trash and sewage and the from the shape of the body's outline,<br>you determined that the victim was left behind without much care.<br>These were commonalities in the string of murders thus far.<br><br>Type 'Next' to continue.<br></p>";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Examine' or 'Talk' to continue.";
  }
}

//Talk continued
function getOption4() {
  var myOption4 = document.getElementById("option4").value;
  var myStory = document.getElementById("story");

  if (myOption4 === "Next") {
    document.getElementById("option4").style.display="none";
    document.getElementById("submit4").style.display="none";

    document.getElementById("option6").style.display="block";
    document.getElementById("submit6").style.display="block";

    myStory.innerHTML = "<p>John, realizing how he'd acted was unprofessional, became flustered.<br>He puffed out his cheeks and flapped his hands in the air briefly,<br>then cleared his throat and waved an introductory arm in your direction.<br>Glancing between you and the starstruck officer, John said, 'Officer Taylor, the renowned Sherlock Holmes!'<br>As if on cue, the officer stuck out a clammy hand. 'It's an honor, sir!'<br>You had been watching all this with an amused expression but now you took Officer Taylor's hand in a firm shake. 'Pleasure.'<br>Getting down to business, your partner sobered up next to you. 'Officer Taylor here found the body.'<br>You gave the men a sour nod. 'Tell me about it?'<br>'What do you wanna know?' the officer replied. <br><br>>'Who was the victim?'<br>>'How were they murdered?'<br>>'Is there anything unusual about the murder?'<br>>Ask John out to lunch<br><br>To be continued.<br></p>";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Next' to continue.";
  }
}

//Examine continued
function getOption5() {
  var myOption5 = document.getElementById("option5").value;
  var myStory = document.getElementById("story");

  if (myOption5 === "Next") {
    document.getElementById("option5").style.display="none";
    document.getElementById("submit5").style.display="none";

    document.getElementById("option7").style.display="block";
    document.getElementById("submit7").style.display="block";

    myStory.innerHTML = "<p>'Doctor J-- I mean, Detective Holmes!'<br>You did a double-take at the sudden appearance of Dina Williams, a crime scene investigator and another friend of yours.<br><br>To be continued.<br></p>";
  }

  else {
    myStory.innerHTML = "Invalid answer. Type either 'Next' to continue.";
  }
}
