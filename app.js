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
    return first * second * third
  } else {
    return "문자열 데이터를 입력하셨습니다.";
  }
}
function examThree(str) {}
function examFour(array) {}
function examFive(array) {}

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
