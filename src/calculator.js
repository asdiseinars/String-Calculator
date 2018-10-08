function add (numbers) {
  if(numbers == "") {
    return 0;
  }
	else {
    var numberArray = numbers.replace(/\n/g, ",").split(",");
    return sum(numberArray);
  }
}

function sum(numberArray){
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++){
        sum += parseInt(numberArray[i]);
    }
    return sum;
}
module.exports = add;
