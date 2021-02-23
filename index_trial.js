function randomNumber() {
  var randomNumber = Math.floor(Math.random() * 4)
  return randomNumber
}

function flagsGenerator(number) {
  var finalColor;
  var finalSound;
  switch (number) {
    case 0:
      finalColor = "blue"
      finalSound = "sounds/blue.mp3"
      break;

    case 1:
      finalColor = "green"
      finalSound = "sounds/green.mp3"
      break;

    case 2:
      finalColor = "red"
      finalSound = "sounds/red.mp3"
      break;

    case 3:
      finalColor = "yellow"
      finalSound = "sounds/yellow.mp3"
      break;
    default:
  }
  return ([finalColor, finalSound])
}

function movementGenerator(finalVar) {
  var soundFile = new Audio(finalVar[1])
  soundFile.play()
  $("." + finalVar[0]).addClass("pressed")
  setTimeout(function() {
    $("." + finalVar[0]).removeClass("pressed")
  }, 300)
}

function colorToNumber(color) {
  var finalNumber
  switch (color) {
    case "blue":
      finalNumber = 0
      break;
    case "green":
      finalNumber = 1
      break;
    case "red":
      finalNumber = 2
      break;
    case "yellow":
      finalNumber = 3
      break;
    default:
  }
  return finalNumber
}

var playlist = []
for (let i = 0; i < 5; i++) {
  playlist.push(randomNumber())
}

var userStatus = true
var logArray = [];
var userArray = []

// for(let i=0; i<50; i++) {
  logArray.push(randomNumber())
  $(".btn").on("click", function(e) {
    console.log(this.id);
    userArray.push(colorToNumber(this.id))
  })
// }




// $(document).click(function() {
//   for (let j = 0; j < 5; j++) {
//     setTimeout(function() {
//       movementGenerator(flagsGenerator(playlist[j]));
//       // console.log(j)
//     }, 1000*j)
//   }
// })

// for (let i=0; i<5; i++) {
//   setTimeout(function(){ console.log(i)},100)
// }

// $(".red").on("click",function() {
//   $(".red").css({"background-color":"yellow"})
// })
