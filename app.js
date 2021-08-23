let name = 'steve';

function salary() {
  let hours = prompt("please enter your hours worked");
  let wage = prompt("please enter your hourly wage");
  let payment;

  if (hours < 41) {

    payment = hours * wage;
  } else if (hours > 40) {
    payment = 40 * wage + ((hours - 40) * wage * 1.5);
  }

  console.log(payment)
  console.log(`your total pay is ${payment}`);
  document.getElementById("salary").innerHTML = `your total pay is ${payment}`;
}
