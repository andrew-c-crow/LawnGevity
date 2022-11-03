let gameState = {
  pushMowerTimer: null,
  rideMowerTimer: null,
  dragMowerTimer: null,
  yardsMowed: 0,
  day: 0,
  pushRatePerDay: 0,
  rideRatePerDay: 0,
  dragRatePerDay: 0,
  scythe: {
    quantity: 1,
    yards_Day: 0,
    cost: 10,
  },
  pushMower: {
    quantity: 0,
    yards_Day: 5,
    cost: 40,
  },
  ridingMower: {
    quantity: 0,
    yards_Day: 20,
    cost: 100,
  },
  dragsterMower: {
    quantity: 0,
    yards_Day: 100,
    cost: 400
  }
};

let yardCounter = document.getElementById('lawnNumber')

//this function will allow one yard to be mowed per click on the original scythe tool and will be connected to the "scythe-photo" ID.
function manualMow() {
gameState.yardsMowed += 1
yardCounter.innerText = gameState.yardsMowed
}


let dayCounter = document.getElementById('dayCounter')
//this function increases the amount of days passed and restarts the day count and yards mowed count if 30 days have passed.
function dayIncreaser(){
  if (gameState.day < 30) {
    gameState.day += 1
    dayCounter.innerText = gameState.day
    yardCounter.innerText = gameState.yardsMowed
    addPushMower()
    addRidingMower()
    dragsterMower()
  } else {
    gameState.pushRatePerDay = 0
    gameState.rideRatePerDay = 0
    gameState.dragRatePerDay = 0
    gameState.yardsMowed = 0
    gameState.day = 0
    pushMowerImg.remove()
    pushMowerButton.remove()
    pushMowerText.remove()
    ridingMowerImg.remove()
    ridingMowerButton.remove()
    ridingMowerText.remove()
    dragsterMowerImg.remove()
    dragsterMowerButton.remove()
    dragsterMowerText.remove()
    togglePushInterval()
    toggleRideInterval()
    togglePushInterval()
  }
}


setInterval(dayIncreaser, 2000)

//Below are my push mower DOM manipulations
let pushMowerImgLocation = document.getElementById("pushMowerImg")
let pushMowerImg = document.createElement("img")
pushMowerImg.src = "images/pushmower.jpeg";

let pushMowerButtonLocation = document.getElementById("pushMowerButton")
let pushMowerButton = document.createElement("button")
pushMowerButton.textContent = "Purchase"

let pushMowerTextLocation = document.getElementById("pushMowerText")
let pushMowerText = document.createElement("p")




//This function should add the push mower image, button and text to my html only after day 7 has passed
function addPushMower () {
 if (gameState.day > 6) {
    pushMowerImgLocation.append(pushMowerImg)
    pushMowerButtonLocation.append(pushMowerButton)
    pushMowerText.textContent = "Quantity: " + gameState.pushMower.quantity + "/Yards Per Day: " + gameState.pushMower.yards_Day + "/Cost: " + gameState.pushMower.cost + " Lawns"
    pushMowerTextLocation.append(pushMowerText)
  } else {
    gameState.pushMower.quantity = 0
  }
}


function togglePushInterval () {
  
  // if (start) {
    clearInterval(gameState.pushMowerTimer)
    gameState.pushMowerTimer = setInterval(incrementPushMower, 2000)
  
  // else {
  //   clearInterval(gameState.pushMowerTimer)
  // }
}

//This is the event listener for the pushMowerButton. It implements all of the necessary actions for when the button is clicked.
pushMowerButton.addEventListener ("click", (pushPurchaseClick) => {
  if (gameState.yardsMowed >= gameState.pushMower.cost) {
    gameState.yardsMowed -= gameState.pushMower.cost
    gameState.pushMower.quantity += 1
    gameState.pushRatePerDay += 5
    yardCounter.innerText = gameState.yardsMowed
    pushMowerText.textContent = "Quantity: " + gameState.pushMower.quantity + "/Yards Per Day: " + gameState.pushMower.yards_Day + "/Cost: " + gameState.pushMower.cost + " Lawns"
    togglePushInterval()
  }
  
})

//This function increments the the push mower total value by the amount of times it gets clicked.
function incrementPushMower() {
  gameState.yardsMowed += gameState.pushRatePerDay
}



//Below are my riding mower DOM manipulations
let ridingMowerImgLocation = document.getElementById("ridingMowerImg")
let ridingMowerImg = document.createElement("img")
ridingMowerImg.src = "images/cartoon-riding-lawnmower-tractor-jeff-hobrath.jpeg"

let ridingMowerButtonLocation = document.getElementById("ridingMowerButton")
let ridingMowerButton = document.createElement("button")
ridingMowerButton.textContent = "Purchase"

let ridingMowerTextLocation = document.getElementById("ridingMowerText")
let ridingMowerText = document.createElement("p")

//This function should add the riding mower image, button and text to my html only after day 14 has passed
function addRidingMower () {
  if (gameState.day > 12) {
     ridingMowerImgLocation.append(ridingMowerImg)
     ridingMowerButtonLocation.append(ridingMowerButton)
     ridingMowerText.textContent = "Quantity: " + gameState.ridingMower.quantity + "/Yards Per Day: " + gameState.ridingMower.yards_Day + "/Cost: " + gameState.ridingMower.cost + " Lawns"
     ridingMowerTextLocation.append(ridingMowerText)
   } else {
    gameState.ridingMower.quantity = 0
   }
 }

 function toggleRideInterval () {
  clearInterval(gameState.rideMowerTimer)
  gameState.rideMowerTimer = setInterval(incrementRideMower, 2000)
 }

ridingMowerButton.addEventListener ("click", (ridePurchaseClick) => {
  if (gameState.yardsMowed >= gameState.ridingMower.cost) {
    gameState.yardsMowed -= gameState.ridingMower.cost
    gameState.ridingMower.quantity += 1
    gameState.rideRatePerDay += 20
    yardCounter.innerText = gameState.yardsMowed
    ridingMowerText.textContent = "Quantity: " + gameState.ridingMower.quantity + "/Yards Per Day: " + gameState.ridingMower.yards_Day + "/Cost: " + gameState.ridingMower.cost + " Lawns"
    toggleRideInterval()
  }
})

function incrementRideMower () {
  gameState.yardsMowed += gameState.rideRatePerDay
}

 //Below are my dragster mower Dom manipulations
let dragsterMowerImgLocation = document.getElementById("dragsterMowerImg")
let dragsterMowerImg = document.createElement("img")
dragsterMowerImg.src = "images/v50dh3wa9pfy87ctz1c9.gif"

let dragsterMowerButtonLocation = document.getElementById("dragsterMowerButton")
let dragsterMowerButton = document.createElement("button")
dragsterMowerButton.textContent = "Purchase"

let dragsterMowerTextLocation = document.getElementById("dragsterMowerText")
let dragsterMowerText = document.createElement("p")

//This function should add the dragster mower image, button and text to my html only after day 21 has passed
function dragsterMower () {
  if (gameState.day > 18) {
    dragsterMowerImgLocation.append(dragsterMowerImg)
    dragsterMowerButtonLocation.append(dragsterMowerButton)
    dragsterMowerText.textContent = "Quantity: " + gameState.dragsterMower.quantity + "/Yards Per Day: " + gameState.dragsterMower.yards_Day + "/Cost: " + gameState.dragsterMower.cost + " Lawns"
    dragsterMowerTextLocation.append(dragsterMowerText)
  }
}

function toggleDragInterval() {
  clearInterval(gameState.dragMowerTimer)
  gameState.dragMowerTimer = setInterval(incrementDragMower, 2000)
}

dragsterMowerButton.addEventListener ("click", (dragPurchaseClick) => {
  if (gameState.yardsMowed >= gameState.dragsterMower.cost) {
    gameState.yardsMowed -= gameState.dragsterMower.cost
    gameState.dragsterMower.quantity += 1
    gameState.dragRatePerDay += 100
    yardCounter.innerText = gameState.yardsMowed
    dragsterMowerText.textContent = "Quantity: " + gameState.dragsterMower.quantity + "/Yards Per Day: " + gameState.dragsterMower.yards_Day + "/Cost: " + gameState.dragsterMower.cost + " Lawns"
    toggleDragInterval()
  }
})

function incrementDragMower () {
  gameState.yardsMowed += gameState.dragRatePerDay
}