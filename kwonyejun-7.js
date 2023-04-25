// function exampleOne(arr, dataType, itemToFind) {
//   if (Array.isArray(arr) === false) {
//     console.log("배열이 아닙니다.");
//     return false;
//   }
//   const isDataTypeMatched = typeof itemToFind === dataType;
//   const isItemExist = arr.includes(itemToFind);

//   if (isDataTypeMatched === true && isItemExist === true) {
//     console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
//     return true;
//   } else if (isItemExist === false) {
//     console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
//     return false;
//   } else if (isDataTypeMatched === false) {
//     console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`);
//     return false;
//   }
// }

// ! 목적 데이터 타입이 string인지 확인을 하면서 데이터가 배열에 있는 데이터 인지 확인을 해보고 싶다.
class madeInKwon {
  // ! 배열을 초기화 해준다.
  constructor(arr,dataType,itemToFind) {
    // if (Array.isArray(arr) === false) {
    //   console.log("배열이 아닙니다.");
    //   this.arr = [];
    // } else {
    //   console.log("배열인거 같아요");
    //   this.arr = arr;
      
    //   this.dataType = dataType;
    //   this.itemToFind = itemToFind;
    // }
    this.arr = arr;
    this.dataType = dataType;
    this.itemToFind = itemToFind;
  }

  // ! set을 사용 할려면 매개변수가 하나 있어야 한다는것을 알게 되어 배열을 확인 하는 곳에서 set을 사용 하여 요리를 해보았다.
  set arrif(arr){
    if(Array.isArray(arr) === false) {
      console.log("배열이 아닙니다.");
      this._arr;
    }
  }
  get arrif() {
    this._arr;
  }

  search(dataType,itemToFind){

    const isDataTypeMatched = typeof itemToFind === dataType;
    const isItemExist = this.arr.includes(itemToFind);
    
    if (isDataTypeMatched === true && isItemExist === true) {
      console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
      return true
    }
    else if (isItemExist === false) {
      console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
      return false;
    }
    else if (isDataTypeMatched === false) {
      console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`);
      return false;
    }
  }

  // * set으로 데이터 타입과 배열에 데이터를 확인 해본다.
  // ! 아직 get,set을 이해를 잘 못하고 있는거 같다.
//   set dataType(dataType) {
//  this.isDataTypeMatched = (typeof(this.itemToFind) === dataType);
//   }
//   get dataType() {
//     this.isDataTypeMatched;
//   }
//   // * get으로 데이터 타입과 배열에 데이터를 확인 해본다.

//   set itemToFind(itemToFind){
//     this.isItemExist = this.arr.includes(itemToFind);
//   }
//   get itemToFind() {
//     this.isItemExist;
//   }

  // if(this.isItemExist === true) {
    
  // }
  
}

//! GPT를 통해 얻은 코드
class ArraySearcher {
  constructor(arr) {
    if (Array.isArray(arr)) {
      this.arr = arr;
    } else {
      console.log("배열이 아닙니다.");
      this.arr = [];
    }
  }

  search(dataType, itemToFind) {
    const isDataTypeMatched = typeof itemToFind === dataType;
    const isItemExist = this.arr.includes(itemToFind);

    if (isDataTypeMatched === true && isItemExist === true) {
      console.log(`${itemToFind}은(는) 배열에 존재합니다.`);
      return true;
    } else if (isItemExist === false) {
      console.log(`${itemToFind}은(는) 배열에 존재하지 않습니다.`);
      return false;
    } else if (isDataTypeMatched === false) {
      console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`);
      return false;
    }
  }
}

const basicData = [
  "안녕하세요",
  "어디선가",
  "입력된",
  "데이터를",
  "찾아보는",
  "함수입니다.",
];
//? 배열 값 확인 해보기
// const test = basicData.includes("찾아보는");
// console.log(test);
// console.log(exampleOne(basicData, "string", "안녕하세요"));

// ! get 버전 클래스
const gpt = new madeInKwon(basicData);
console.log(gpt.search("string", "안녕하세요"));

// ! 함수 지향 프로그래밍을 객체 지향 프로그램으로 바꾸어 보았다.
const kwon = new madeInKwon(basicData);
console.log(kwon.search("string", "안녕하세요"));
