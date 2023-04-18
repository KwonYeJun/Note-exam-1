let basicData = {
  count: 3,
  min: 1,
  max: 10,
  divideNumber: 5,
};

function exampleOne(count, min, max) {
  let exampleArr = [];
  for (let i = 0; i < count; i++) {
    const randomNumber = Math.random() * (max - min) + min;
    exampleArr[i] = randomNumber.toFixed(2);
    // * 난수를 발생 시켜 toFixed() 메서드를 사용하여 소수자리를 2째자리까지 출력 하게 하였다.
  }
  return exampleArr;
}

function exampleTwo(array, divideNumber) {
  let exampleJObject = {
    a: [],
    b: [],
  };

  for(let i =0; i< array.length; i++){
    if(array[i] > divideNumber){
      exampleJObject.a = array[i];
    }
    else{
      exampleJObject.b = array[i];

    }
  }

  return  exampleJObject;
}
function exampleFour(array) {
  let value = 0;
  for (let key in array) {
    if (typeof array[key] === "number") {
      value += array[key];
    }
  }
  return value;
}
function exampleFive(objectOne, objectTwo) {
  let value;

  let One = exampleFour(objectOne);
  let Two = exampleFour(objectTwo);

  return Two;
}

const { count, min, max } = basicData; // 객체 디스트럭처링
const result = exampleOne(count, min, max);
// console.log(result);

// console.log(basicData.basicDataKeys[1]);
// console.log(exampleFive(basicData, exampleTwo(result, basicData.divideNumber)));
// console.log(exampleFive(basicData, exampleTwo(result, basicData.divideNumber)));

console.log(exampleTwo(result,basicData.divideNumber))