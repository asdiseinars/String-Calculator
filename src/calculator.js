function add (numbers) {
  if(numbers == "") {
    return 0;
  }
  var numberArray = splitNumbers(numbers);
  numberArray = filterLargeNumbers(numberArray);
  negativeNumbers(numberArray);
  return sum(numberArray);
}

function sum (numberArray) {
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++){
        sum += parseInt(numberArray[i]);
    }
    return sum;
}

function splitNumbers (numbers) {
  return numbers.replace(/\n/g, ",").split(",");
}

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
