function validatePin(pin) {

    if (checkIfSequential(pin)===true){
        return true
    }
    if(check(pin)===true){
        return true
    }

    return false;
}

 var numberGiven = 1224;
 console.log(validatePin(numberGiven))
function checkIfSequential(num) {
 var newNum = num + ''
newNum = newNum.split('');
 return newNum.every((num, i) => i === newNum.length - 1 || num < newNum[i + 1]);
  }


  function check(pin){
 var newtext=pin+''
    var text = newtext.split('');
    return text.some(function(v,i,a){return a.lastIndexOf(v)!=i;}) ;      
}

