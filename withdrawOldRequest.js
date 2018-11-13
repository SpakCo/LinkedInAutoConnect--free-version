function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var randRoll = getRandomInt(4000);

async function removePeople() {
  var ul = $("ul.mn-invitation-list")[0];
  var firstLi = ul.querySelector("li.invitation-card");
  var count = 0; // How many people you've added so far
  while(firstLi && count < 40){ // stop after adding xx people
    var buttonToClick = firstLi.querySelector("button.invitation-card__action-btn");
    var timeStamp = firstLi.querySelector("time.time-badge");
    var checkDateString = (timeStamp.innerText.includes("months ago") || timeStamp.innerText.includes("month ago"));
    if (checkDateString == false) {
      console.log("Connection Too New; Skipping ...");
      ul.removeChild(firstLi);
      var firstLi = ul.querySelector("li.invitation-card");
      await delay(randRoll); // Pause this function for 1 - 20 seconds.
      removePeople();
    }
    if (checkDateString == true) {
      buttonToClick.click();
      count += 1;
      console.log("Your have withdrew " + count + " requests so far.");
      await delay(randRoll); // Pause this function for 1 - 20 seconds.
      var firstLi = ul.querySelector("li.invitation-card");
      removePeople();
    }
    
  }
}

removePeople();

/*
// Outer Container
ul.mn-invitation-list
  // Each Card
  li.invitation-card
    // Container Details
    .js-invitation-card__invite-details-container
      .invitation-card__info-wrapper
        .invitation-card__details
          // Actual Date / Time
          time.time-badge
            // Contains
              // month 
              // months

// Outer Container
ul.mn-invitation-list
  // Each Card
  li.invitation-card
    // Container Details
    .js-invitation-card__invite-details-container
      // Button Container
      .invitation-card__action-container
        // Button
        button.invitation-card__action-btn
*/