// The tip calculator should have 1 function that takes2 parameters
var meal = 149;
var tip = 6;
// calculate tip percentage
function yourRating(tip, meal) {
  var percent = (tip / meal) * 100;
  console.log(percent); //returns tip percent 4.026845637583892
  // add conditionals to yourRating function
  if (percent <= 5) {
    return "You are an awful tipper!";
  } else if (percent > 5 && percent <= 10) {
    return "You are a ok tipper!";
  } else if (percent > 10 && percent <= 19) {
    return "You are a good tipper!";
  } else if (percent >= 20) {
    return "You are a great tipper!";
  }
}
console.log(yourRating(tip, meal)); //returns You are an awful tipper!
