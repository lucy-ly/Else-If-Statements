// Else Statement
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  
  }else {
    result = "5 or Smaller";
  }
  
  return result;
}

testElse(4);

// When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? Normally nothing would happen. With an else statement, an alternate block of code can be executed.

//Else If Statement
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }
  
  else if (val < 5) {
    return "Smaller than 5";
  }
  
  else {
  return "Between 5 and 10";
  }
}

testElseIf(7);

// If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements.