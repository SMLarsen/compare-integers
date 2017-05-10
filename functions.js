/*jshint esversion: 6 */
function compareIntegers(a, b) {
  if (a.length < b.length) {
      a = padValues(a,b.length);
  } else if (a.length > b.length){
    b = padValues(b,a.length);
  }
  return compareValues(a,b);
}

function padValues(value, length) {
  while (value.length < length) {
    value = '0' + value;
  }
  return value;
}

function compareValues(a,b) {
  if (a === b) {
    return "equal";
  } else if (a > b) {
    return "greater";
  } else {
    return "less";
  }
}

// compareIntegers("12","13");
console.log(compareIntegers("12","13"),"less");
console.log(compareIntegers("875","799"),"greater");
console.log(compareIntegers("1000","1000"),"equal");
console.log(compareIntegers("999","1000"),"less");
console.log(compareIntegers("123","122"),"greater");
console.log(compareIntegers( "1000000000000000000000000000000000","1000000000000000000000000000000001"),"less");
console.log(compareIntegers( "1000000000000000000000000000000002","1000000000000000000000000000000001"),"greater");
console.log(compareIntegers("10000000000000000000000000000000000","1000000000000000000000000000000001"),"greater");


/*
describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(compareIntegers("12","13"),"less")

Test.assertEquals(compareIntegers("875","799"),"greater")

Test.assertEquals(compareIntegers("1000","1000"),"equal")

Test.assertEquals(compareIntegers("999","1000"),"less")

Test.assertEquals(compareIntegers("123","122"),"greater")

Test.assertEquals(compareIntegers( "1000000000000000000000000000000000","1000000000000000000000000000000001"),"less")

Test.assertEquals(compareIntegers( "1000000000000000000000000000000002","1000000000000000000000000000000001"),"greater")

Test.assertEquals(compareIntegers("10000000000000000000000000000000000","1000000000000000000000000000000001"),"greater")

})})
*/
