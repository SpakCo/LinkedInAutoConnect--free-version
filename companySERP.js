var resultsContainer = document.querySelector("ul.search-results__list");
var firstCard = resultsContainer.querySelector("li.search-result");
var connectButton = firstCard.querySelector("button[data-control-name=srp_profile_actions]");
var messageUpSell = firstCard.querySelector("div.message-anywhere-button");
var inviteSent = firstCard.innerText.includes("Invite Sent");
var connectionCount = 0;

function removeCard() {
  resultsContainer.removeChild(firstCard);
}

function nextCard() {
  var firstCard = resultsContainer.querySelector("li.search-result");
  return firstCard;
}

// Connection Button?
function noButton() {
  console.log("NOPE! Next ...");
  removeCard();
  nextCard();
  addPeople();
}

function clickConnect() {
  connectButton.click();
  sendInvite();
}

function sendInvite() {
  // Popup Modal Vars
  var popupModal = document.querySelector("div.modal-wormhole-content");
  var sendInviteButton = popupModal.querySelector("button.button-primary-large");
  // Button Contains Text "Send Now"
  if (sendInviteButton.innerText.includes("Send now")) {
    sendInviteButton.click();
    reportCount();
    removeCard();
    nextCard();
    checkCount();
  }
}

function reportCount() {
  connectionCount += 1;
  console.log("Your have added " + connectionCount + " people so far.");
  return connectionCount;
}

function checkCount() {
  if (connectionCount < 100) {
    addPeople();
  }
  else {
    break;
  }
}

function addPeople() {
  // No button?
  if (connectButton == null) {
    noButton();
  }
  // make sure that this button contains the text "Connect"
  else if (connectButton.innerText.includes("Connect")) {
    clickConnect();
  }
  else if (messageUpSell != null) {
    noButton();
  }
  else if (inviteSent == true) {
    noButton();
  }
}

addPeople();