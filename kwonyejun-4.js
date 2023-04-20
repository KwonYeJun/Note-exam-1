// ! 타입을 확인 하는 모듈
function exampleOne(first, second, dataType) {
  if (typeof first !== dataType && typeof second !== dataType) {
    return new Error(
      `매개변수 first, second는 모두 ${dataType} 타입이어야 합니다.`
    );
  } else {
    return true;
  }
}

// ! 짝수인지 홀수인지 확인 하는 모듈
function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// ! 크기를 비교 하는 모듈
function isExampleTwo(first, second) {
  //Guide : exampleOne() 함수를 호출하여 타입검사를 따로 합니다.
  //Guide : 타입검사가 실패하면 에러를 발생시켜 함수가 실행되지 않도록 조칩합니다.

  exampleOne(first, second, "number");

  let booleanResult;
  if (first < second) {
    booleanResult = true;
  } else {
    booleanResult = false;
  }

  if (typeof booleanResult === "boolean") {
    return booleanResult;
  } else {
    return new Error("조건식이 boolean이 아니여서 리턴 하지 못했습니다.");
  }
}

let basicData = [3, 1, 52, 12, 5, 2, 44, 12];

function exampleTree(array, functionOne, functionTwo) {
  // 매개변수 인자로 들어오는 함수 두개는 데이터타입이 모두 함수 여야 한다
  // if (typeof functionOne === "function" && typeof functionTwo === "function") {
  // } else {
  //   console.log("function이 아닙니다.");
  // }
  // ! 그냥 만들어서 하는게 아니라 위에 있는 One 함수 모듈을 이용 하는 거구나를 만들어 보고 이해를 하였다.

  exampleOne(functionOne, functionTwo, "function");

  // 매개변수 array의 모든 원소는 숫자 정수여야 한다.
  //every() 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트합니다. Boolean 값을 반환합니다.

  //     if(array.every((test) => {Number.isInteger(test)}) === true){
  //       console.log('정수 말고 다른 숫자형이 들어가 있습니다.');
  //     }

  // console.log(array.every((test) => {Number.isInteger(test)}));

  // 매개변수 array의 배열 기일(length)는 짝수여야 하고 홀수라면 10을 추가하여 짝수로 만든다.

  // 매개변수 array는 배열의 순서 한장씩 값의 크기를 비교하고
  // 비교한 작은 값은 arrayResult의 원속배열의 0번째
  //큰 값은 arrayResult의 원소배열의 1번째에 넣어준다.

  let arryResult = [[,], [,], [,], [,]];
  let test = 0;

  if (exampleOne(functionOne, functionTwo, "function") === true) {
    if (arrayLengthEven(array) === false) {
      array.push(10);
    } else {
      for (let i = 0; i < array.length; i += 2) {
        if (isExampleTwo(array[i], array[i + 1]) === true) {
          arryResult[test][1] = array[i + 1];
          arryResult[test][0] = array[i];
          test++;
        } else {
          arryResult[test][0] = array[i + 1];
          arryResult[test][1] = array[i];
          test++;
        }
        // ! 로직을 짜는 곳에서 시간을 많이 사용 하였다.
        // * 사실 위에 isExampleTwo()함수에서 해주는 조건을 다시 보았다면 좀 더 빠르게 했을수 있을거 같고 사실 도저히 이해가 안가 말로 설명을 혼자 해보았다. 이게 true일때 하면서 과정을 해보니 이해가 되서 로직을 작성할 수 있었다.
      }
    }
  }
  return arryResult;
}

console.log(exampleTree(basicData, exampleOne, isExampleTwo));

// Q 위의 콘솔을 확인하여 함수 exampleThree()의 리턴값을 통해 재조립된 배열을 만든다.

// ! 정수형으로 값을 넣어도 fasle가 나오는걸 확인 하였지만 왜 계속 fasle로 나오는지는 해결을 하지 못 하였다.
// !!! 따로 생각 하다 보니 이해를 못 하였지만 TWO() 함수에서 ONE()함수를 부를 사용 할 때 타입을 넣어서 사용 하면 되겠구나 생각이 들었다..
// let isIntegerArray = basicData.every((test) => {return Number.isInteger(test)});
// console.log(typeof(Number.isInteger()));

// console.log(exampleOne(isExampleTwo, arrayLengthEven, "function"));
// ? 모듈이 잘 작동 하는지 테스트 해보았따.
