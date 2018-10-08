function add (numbers) {
  if(numbers == "") {
    return 0;
  }

  var numberArray = splitNumbers(numbers);

  var negativeArray = [];
  for(var i = 0; i < numberArray.length; i++) {
    if(parseInt(numberArray[i]) < 0) {
      negativeArray.push(numberArray[i]);
    }
  }
  if(negativeArray.length > 0) {
    throw new Error("Negatives not allowed: " + negativeArray.join(','));
  }
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

module.exports = add;
