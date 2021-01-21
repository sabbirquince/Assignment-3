//first problem

function kilometerToMeter(number) {
  if (number < 0) {
    var output = "unexpected input!";
  } else {
    var output = number * 1000;
  }
  return output;
}

console.log(kilometerToMeter(4));

//second problem

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

console.log(budgetCalculator(2, -2, 1));

//third problem

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

console.log(hotelCost(5));

//fourth problem

function megaFriend(list) {
  var largest = list[0];

  for (var i = 0; i < list.length; i++) {
    var element = list[i];

    if (typeof element !== "string") {
      largest = "input an array of string only!";
      break;
    } else if (element.length > largest.length) {
      largest = element;
    }
  }
  return largest;
}

// var names = [15, 21, 0, 0, 58, 61, 27];
var names = ["sabbir", "afsana", 25, "plabon"];
console.log(megaFriend(names));

console.log(typeof names[0]);
