let basicData = {
  count: 3,
  min: 1,
  max: 10,

};

function exampleOne(count, min, max) {
  let exampleArr = [];
for(let i=0; i< count; i++){
  const randomNumber = Math.floor(Math.random() * max) + min;
exampleArr[i] = randomNumber;
}
  return exampleArr;
}

function exampleTwo(array, divideNumber){
  let exampleJObject ={
    a: [],
    b: []
  }
  return exampleJObject;
}
function exampleFour(array){
  let value;
  return value;
}
function exampleFive(objectOne, objectTwo){
  let value;
  return value;
}

const { count, min, max } = basicData; // 객체 디스트럭처링
const result = exampleOne(count, min, max);
console.log(result);

// console.log(basicData.basicDataKeys[1]);
console.log(exampleFive(basicData, exampleTwo()));