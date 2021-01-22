///////////////// FIRST PROBLEM

function kilometerToMeter(number) {
  if (number < 0) {
    var output = "unexpected input!";
  } else {
    var output = number * 1000;
  }
  return output;
}

//////////////// SECOND PROBLEM

function budgetCalculator(watch, phone, laptop) {
  var eachWatch = 50;
  var eachPhone = 100;
  var eachLaptop = 500;

  if (watch < 0 || phone < 0 || laptop < 0) {
    var output = "unexpected input!";
  } else {
    var costWatch = eachWatch * watch;
    var costPhone = eachPhone * phone;
    var costLaptop = eachLaptop * laptop;

    var output = costWatch + costPhone + costLaptop;
  }
  return output;
}

////////////////// THIRD PROBLEM

function hotelCost(days) {
  if (days < 0) {
    var output = "unexpected input!";
  } else if (days <= 10) {
    var output = days * 100;
  } else if (days > 10 && days <= 20) {
    var first10DaysCost = 100 * 10;
    var remainingDaysCost = (days - 10) * 80;
    var output = first10DaysCost + remainingDaysCost;
  } else {
    var first10DaysCost = 10 * 100;
    var next10DaysCost = 10 * 80;
    var remainingDaysCost = (days - 20) * 50;
    var output = first10DaysCost + next10DaysCost + remainingDaysCost;
  }
  return output;
}

///////////////// FOURTH PROBLEM

function megaFriend(list) {
  var output = list[0];

  for (var i = 0; i < list.length; i++) {
    var element = list[i];

    if (typeof element !== "string") {
      output = "input an array of string only!";
      break;
    } else if (element.length > output.length) {
      output = element;
    }
  }
  return output;
}
