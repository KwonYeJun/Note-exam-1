let basicData = {
  count: 10,
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
  // ! exampleTwo()에 array값을 넣어 줄때 사용 한다.
}

function exampleTwo(array, divideNumber) {
  // ! exampleOne()에서 리턴된 값이 array로 들어 온다.

  let exampleJObject = {
    a: [],
    b: [],
  };
  if (divideNumber % 1 === 0) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > divideNumber) {
        exampleJObject.a = Number(array[i]);
        // ! 값을 넘겼을 때 스트링인걸 확인 하였다.
        // ! Four()함수 로직에 맞게 타입을 넘버로 바꾸어 주었다.
      } else {
        exampleJObject.b = Number(array[i]);
      }
    }
    return exampleJObject;
  } else {
    return console.log("정수가 아닙니다.");
  }
}

function exampleThree(array) {
  let value = 0;
  for (let key in array) {
    value += array[key];
  }
  return value;
}
let test = {
  a:[1,2,3],
  b:[3,4]
}

// function exampleFour(object) {
//   let value = true;
//   for (let key in object) {
//     // ! 숫자인지 확인 하는 로직
//     if (typeof object[key] === "object") {
//       for (let i = 0; i < object[key].length; i++) {
//         if (typeof object[key][i] === "number") {
//           value = exampleThree(object);
//         }
//       }
//     }
//   }
//   return value; // 블린 타입으로 변환
//   // return value;
// }

function exampleFour(object) {
  let value;
  if (typeof object === "object") {

  for (let key in object) {
    // ! 숫자인지 확인 하는 로직
        if (typeof object[key] === "number") {
          value = exampleThree(object);
        }
      }
    }
  return Boolean(value) ; // 블린 타입으로 변환
  // return value;
}

function exampleFive(objectOne, objectTwo) {
  let value;

  let One = exampleFour(objectOne);
  let Two = exampleFour(objectTwo);
  value = One + Two;
  return   value;
}

const { count, min, max } = basicData; // 객체 디스트럭처링
const result = exampleOne(count, min, max);
// console.log(result);
// console.log(exampleTwo(result,basicData.divideNumber))
// // console.log(basicData.basicDataKeys[1]);

// console.log(exampleFour(exampleTwo(result,basicData.divideNumber)));
// console.log(exampleFour(basicData));
// ? 타입이 뭔지 확인
// let aaa = [];
// for (let key in basicData) {
//   console.log(typeof exampleTwo(result, basicData.divideNumber));
// }

// console.log(exampleThree(exampleTwo(result, basicData.divideNumber)));
console.log(exampleFive(basicData, exampleTwo(result, basicData.divideNumber)));

// console.log(exampleTwo(result,basicData.divideNumber))
