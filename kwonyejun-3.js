// 정적인 객체 리터럴, 데이터를 넣을 자리를 마련했다.
let basicData = {
  header: {},
  main: {},
  footer: {},
};

// fromJaonData 변수는 json.parse()를 통해 받아온 데이터라고 가정한다.

let fromJsonData = {
  header: {
    content: "header 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#ccc",
    },
  },
  main: {
    content: "main 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#333",
    },
  },
  footer: {
    content: "footer 부분입니다.",
    style: {
      width: "100vw",
      height: "100px",
      backgroundColor: "#666",
    },
  },
};

function exampleOne(basicData, fromJsonData) {
  let value = "";
  basicData.header = fromJsonData.header;
  basicData.main = fromJsonData.main;
  basicData.footer = fromJsonData.footer;

  value = new ExampleTwo(basicData.header,basicData.main,basicData.footer);
  
  // 아래의 호출부를 참고하여 ,지역변수 value에 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.
  return  value ;
}


// 위의 fromJsonData과 같은 객체나 JSON을 생성하기 위한 생성자 함수, 클래스를 작성한다.
// 생성자함수, 클래스를 작성한다.
//setter 기능을 활용하여 인스턴스의 값들은 모두 '문자열'만 들어가도록 안정성을 확보한다.
class ExampleTwo {
  constructor(header,main,footer) {
   this.header = header;
   this.main = main;
   this.footer = footer;
  }

  // ! set은 값을 받아와 확인 하는 곳이라고 이해를 하였다.
  set header(test) {

      this._header = test;
 
  }
  set main(test) {
    if (typeof test === "string") {
      this._main= test;
    }
  }
  set footer(test) {
    if (typeof test === "string") {
      this._footer = test;
    }
  }
  // ! set에서 요리를 해주었으면 get이 받아서 요리를 먹는다 라고 이해를 하였다.
  get header() {
    return this.basicData.header;
  }
}
const test = new ExampleTwo(fromJsonData.main,fromJsonData.footer,fromJsonData.header);
const element = "";
element.innerHTML = exampleOne(basicData,fromJsonData);
console.log(test);
