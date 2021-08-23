let age = 38;
console.log(`I am ${age} years old.`);

  let firstName = prompt("please enter your first name");
  let lastName = prompt("please enter your last name");

  let fullName = firstName + " " + lastName;

  console.log(fullName);

  let fahrenheit = 11;
  let celcius = ((fahrenheit - 32) * 5/9);
  console.log(`"This is C tempertuere" ${celcius}` + "FF degrees is CC degress Celsius");



// let drivingAge = 16;
//
// let userAge = prompt("what is your legal age");

  let legalAge = 16;
  let userAge = prompt("what is your  age?")

  if (userAge < 16) {
    console.log("you are not allowed to drive");
  }
  else if (userAge > 15) {
    console.log("you are legal to drive");
  }


let randomNumber = Math.random() * 5;

  if (randomNumber < 3){
    console.log("0 or 1 or 2")
  }
  else if (randomNumber > 2 && randomNumber < 6) {
    console.log("3 or 4 or 5");
  }
  else if (randomNumber > 5 && randomNumber < 9) {
    console.log("6 or 7 or 8");
  }
  else if(randomNumber > 8) {
    console.log("9 or 10");
}

  let goodFootBallTeam = "Packers";

  switch (goodFootBallTeam){
    case "Bears":
      console.log("Quarterback much?");
      break;

    case "Vikings":
      console.log("Loud noises");
      break;

    case "Lions":
      console.log("LOL! THEY BAD!");
      break;

    case "Packers":
      console.log("Best team in the world if not the univers");
      break;

      let goodFootBallTeam = "Foozball";

  }




