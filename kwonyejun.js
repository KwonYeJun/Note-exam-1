function examOne(first, second) {
  if ("string" === typeof first || "string" === typeof second) {
    return "문자열 데이터를 입력하셨습니다.";
  } else {
    return first + second;
  }
}
function examTwo(first, second, third) {
  if (
    "number" === typeof first &&
    "number" === typeof second &&
    "number" === typeof third
  ) {
    return first * second * third;
  } else {
    return "문자열 데이터를 입력하셨습니다.";
  }
}
function examThree(str) {
  if ("string" === typeof str) {
    let test = 0;
    for (let i = 0; i < [...str].length; i++) {
      test++;
    }
    return test;
  } else return "숫자를 입력하셨습니다.";
}
function examFour(array) {
  // ! 반복문을 활용 하여 최솟값 찾기
  //   let min = array[0];
  //  for(let i = 1; i < array.length;i++){
  //   if(array[i] < min){
  //     min = array[i];
  //   }
  //  }
  //  return min;

  // ? 자바스크립트 방법으로 최솟값 찾기
  if ("object" === typeof array) {
    let min = Math.min(...array);
    return min;
  }
}

function examFive(array) {
  if ("object" === typeof array) {
    // ! 반복문을 활용 하여 배열 인덱스값 더하기
    //   let sum = 0;
    //   for (let i = 0; i < array.length; i++) {
    //     sum += array[i];
    //   }
    //   return sum;
    // ? 자바스크립트 방식으로 구하기
    let sum = array.reduce(function(a,b){
      return a+b;
    })
    return sum;
  }
}

console.log(examOne("2", 1));
// ! 덧셈 로직 만들기
console.log(examTwo(2, 3, 4));
// !곱셈 로직 만들기
console.log(examThree("hello"));
// ! 문자열 길이 구하기
console.log(examFour([3, 1, 4, 2]));
// ! 최솟값 판별하기
console.log(examFive([1, 2, 3]));
// ! 배열값 누산(총합)하기
