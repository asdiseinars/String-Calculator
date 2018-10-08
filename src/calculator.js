function add (numbers) {
  if(numbers == "") {
    return 0;
  }
  var numberArray = splitNumbers(numbers);
  numberArray = filterLargeNumbers(numberArray);
  negativeNumbers(numberArray);
  return sum(numberArray);
}

//Opperator that sums an array of numbers
function sum (numberArray) {
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++){
        sum += parseInt(numberArray[i]);
    }
    return sum;
}

//Splits given string by numbers
function splitNumbers (numbers) {
  return numbers.replace(/\n/g, ",").split(",");
}

//Throws an error if a negative number is in the string
function negativeNumbers (numberArray) {
  var negativeArray = [];
  for(var i = 0; i < numberArray.length; i++) {
    if(parseInt(numberArray[i]) < 0) {
      negativeArray.push(numberArray[i]);
    }
  }
  if(negativeArray.length > 0) {
    throw new Error("Negatives not allowed: " + negativeArray.join(','));
  }
}

//Filters out any number larger than 1000
function filterLargeNumbers (numberArray) {
  var filteredArray = [];
  for(var i = 0; i < numberArray.length; i++) {
    if(parseInt(numberArray[i]) < 1000) {
      filteredArray.push(numberArray[i]);
    }
  }
  return filteredArray;
}

module.exports = add;
