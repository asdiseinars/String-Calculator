function add (numbers) {
  var numberArray = splitNumbers(numbers);

  //Allow the Add method to handle a different delimiter
  if(numberArray[0].includes("//")) {
    var tmpString = numbers.slice(2);
    var	delimeter = numbers[2];
    var numberArray = tmpString.replace(/\n/g, delimeter).split(delimeter);
  }

  //Filtering out numbers larger then 1000 and negative numbers
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

//Split the array by delimiters "," and "\n"
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
