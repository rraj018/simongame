var buttonColours = ["red", "blue", "green", "yellow"]
var gamePattern = []
var userClickedPattern = []
var level = 0
var started = false
var wrongSound = new Audio("sounds/wrong.mp3")

$(".btn").on("click", function() {
  var userChosenColour = this.id
  userClickedPattern.push(userChosenColour)
  console.log(userClickedPattern)
  playSound(userChosenColour)
  animatePress(userChosenColour)
  // if (gamePattern.length === userClickedPattern.length) {
  checkAnswer();
  // }
})

$(document).keypress(function() {
  if (!started) {
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
})

function checkAnswer() {
  var equality = true
  for (let i = 0; i < userClickedPattern.length; i++) {
    if (gamePattern[i] !== userClickedPattern[i]) {
      equality = false
    }
  }

  if(equality) {
    if(gamePattern.length === userClickedPattern.length) {
      setTimeout(function(){nextSequence()},1000);
      userClickedPattern = []
    }
  } else {
    $("h1").text("Game Over, Press Any Key to Restart")
    $("body").addClass("game-over")
    setTimeout(function(){$("body").removeClass("game-over")}, 20)
    wrongSound.play()
    started = false
    level =0
    userClickedPattern=[]
    gamePattern=[]
  }

  // if (equality) {
  //   setTimeout(function(){nextSequence()},1000);
  //   userClickedPattern = []
  // } else {
  //   $("h1").text("Game Over")
  // }
}

function nextSequence() {
  level += 1;
  $("h1").text("Level " + level)

  var randomNumber = Math.floor(Math.random() * 4)
  var randomChosenColour = buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100)
  playSound(randomChosenColour)
  animatePress(randomChosenColour)
}

function playSound(name) {
  var soundFile = new Audio("sounds/" + name + ".mp3")
  soundFile.play()
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed")
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed")
  }, 100)
}
