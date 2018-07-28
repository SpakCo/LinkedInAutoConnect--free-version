function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  let randRoll = getRandomInt(20);

  async function addPeople() {
    var ul = $('ul.mn-pymk-list__cards')[0];
    var firstLi = ul.querySelector('li');
    var count = 0; // How many people you've added so far
    while(firstLi && count < 40){ // stop after adding xx people
      var buttonToClick = firstLi.querySelector("button[data-control-name=invite]");
      // make sure that this button contains the text "Connect"
      if (buttonToClick.innerText.includes("Connect")){
        buttonToClick.click();
        count += 1;
        console.log("Your have added " + count + " people so far.");
      }
      ul.removeChild(firstLi);
      await delay(randRoll); // Pause this function for 1 - 20 seconds.
      var firstLi = ul.querySelector('li');
    }
  }

  addPeople();