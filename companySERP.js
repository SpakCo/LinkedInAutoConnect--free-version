function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var randRoll = getRandomInt(4000);

async function addPeople() {
  // Outer Card Container
  var div = $('ul.search-results__list')[0];

  // Each Section Card Component
  var firstDiv = div.querySelector('li.search-result');
  var searchEntity = firstDiv.querySelector('.search-entity');
  var searchResultWrapper = searchEntity.querySelector('.search-result__wrapper');
  var buttonToClick = searchResultWrapper.querySelector("button[data-control-name=srp_profile_actions]");

  var count = 0; // How many people you've added so far

  while(firstDiv && count < 40){ // stop after adding xx people    
    // Exception handling - no button
    if (buttonToClick == null) {
      console.log("Connection Option Not Available; Skipping ...");
      div.removeChild(firstDiv);
      addPeople();
    }
    // make sure that this button contains the text "Connect"
    if (buttonToClick.innerText.includes("Connect")){
      buttonToClick.click();

      // Each "Send Now" PopUp Modal Component
      var doesModalExist = $('.modal-wormhole-content')[0];
      var modalConentWapper = doesModalExist.querySelector('.modal-content-wrapper');
      var modalSection = modalConentWapper.querySelector('section.modal');
      var modalDocument = modalSection.querySelector("div[role=document]");
      var modalInviteDiv = modalDocument.querySelector(".send-invite__actions");
      var modalInviteButton = modalInviteDiv.querySelector("button.button-primary-large");

      // make sure that this button contains the text "Send Now"
      if (modalInviteButton.innerText.includes("Send now")) {
        modalInviteButton.click();

        count += 1;
        console.log("Your have added " + count + " people so far.");
        div.removeChild(firstDiv);
        await delay(randRoll); // Pause this function for 1 - 20 seconds.
        addPeople();
      }
    }
  }
}
addPeople();