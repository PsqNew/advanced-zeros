module.exports = function getZerosCount(number, base) {
  let minIndex = 2;
  let systemBaseFind = 1;
  let baseInTwoSystem = 0;
  let finalResult = 0;
  let resultZerosInBase = 0;
  let resultZerozInBaseTwo = 0;
  let xBase = findBaseSystem(base);
// Find the base of the system in which the search for the solution will be found.       
  function findBaseSystem (base) {
      if (base <= minIndex+1) {
          if (base%2 == 0) {
              baseInTwoSystem++;
          }
        return base;
      }
      if (base%2 == 0) {
          baseInTwoSystem++;
          return findBaseSystem(base/2);
      } else if(base%(minIndex+1) == 0) {
          systemBaseFind++;
          return findBaseSystem(base/(minIndex+1));
      }	else {
          minIndex++;
          systemBaseFind = 1;
          return findBaseSystem(base);
      }
  }
//Calculate Zeros in specified Base system.
  function calculateZerosInBase(numberForFactorial,inputBase) {
      if (numberForFactorial >= inputBase) {
        return Math.floor(numberForFactorial/inputBase) + calculateZerosInBase(Math.floor(numberForFactorial/inputBase),inputBase);
      }
      else {
          return 0;
      }
  }
//Calculate Factorial
  function calculateFactorial(inputNumber) {
      resultZerosInBase    += calculateZerosInBase(inputNumber,xBase);
      resultZerozInBaseTwo += calculateZerosInBase(inputNumber,2);
  }
//The process of finding a solution.
  calculateFactorial(number);  
  if (baseInTwoSystem == 0) {
      baseInTwoSystem++;
  }
  finalResult = Math.min(Math.floor(resultZerosInBase/systemBaseFind,10),Math.floor(resultZerozInBaseTwo/baseInTwoSystem,10));
  return finalResult;
} 