
var charLookup = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15, "g": 16}

var baseConverter = function(input, base) {
  input = input.toLowerCase()
  var baseArray = input.split("").reverse();
  var decimalNum = 0;
  for(var i = 0; i < baseArray.length; i++) {
    decimalNum += Math.pow(base, i) * charLookup[baseArray[i]];
  }
  return decimalNum;
}

var decimalToBinary = function(decimalNum) {

  var i = 0;

  while(Math.pow(2, i + 1) - 1 < decimalNum) {
    i++;
  }
  var binaryString = "";

  while(i >= 0) {
    if(decimalNum >= Math.pow(2, i)) {
      binaryString = binaryString.concat("1");
      decimalNum -= Math.pow(2, i);
    } else {
      binaryString = binaryString.concat("0");
    }
      i--;
  }
  return binaryString;
}




// the functions below still work, but are made redundant by baseConverter

var binaryConverter = function(binaryString) {
  var binaryArray = binaryString.split("").reverse();
  var decimalNum = 0;
  for(var i = 0; i < binaryArray.length; i++) {
    decimalNum += Math.pow(2, i) * parseInt(binaryArray[i]);
  }
  return decimalNum;
}

var trinaryConverter = function(trinaryString) {
  var trinaryArray = trinaryString.split("").reverse();
  var decimalNum = 0;
  for(var i = 0; i < trinaryArray.length; i++) {
    decimalNum += Math.pow(3, i) * parseInt(trinaryArray[i]);
  }
  return decimalNum;
}

var hexadecimalConverter = function(input) {
  var hexArray = input.split("").reverse();
  var decimalNum = 0;
  for(var i = 0; i < hexArray.length; i++) {
    decimalNum += Math.pow(16, i) * charLookup[hexArray[i]];
  }
  return decimalNum;
}


$(document).ready(function() {

  $("#base-converter").submit(function(event) {
    var number = $("input#input-number").val();
    var base = parseInt($("#input-base").val());
    var output = baseConverter(number, base);
    $(".output").text(output);
    $("#result").slideDown("slow");
    $(".panel").fadeIn("slow");
    event.preventDefault();
  });

});
