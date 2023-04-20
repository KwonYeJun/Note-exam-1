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

  // * header 데이터를 넣어서 확인 할려고 해본다.
  value = new ExampleTwo(
    basicData.header.content,
    basicData.header.style.width,
    basicData.header.style.height,
    basicData.header.style.backgroundColor
  );
  // * main 데이터를 넣어서 확인 할려고 해본다.
  value = new ExampleTwo(
    basicData.main.content,
    basicData.main.style.width,
    basicData.main.style.height,
    basicData.main.style.backgroundColor
  ); // * footer 데이터를 넣어서 확인 할려고 해본다.
  value = new ExampleTwo(
    basicData.footer.content,
    basicData.footer.style.width,
    basicData.footer.style.height,
    basicData.footer.style.backgroundColor
  );

  // 아래의 호출부를 참고하여 ,지역변수 value에 적정한 문자열 데이터로 객체를 가공하는 코드를 작성한다.
  return value;
}

// 위의 fromJsonData과 같은 객체나 JSON을 생성하기 위한 생성자 함수, 클래스를 작성한다.
// 생성자함수, 클래스를 작성한다.
//setter 기능을 활용하여 인스턴스의 값들은 모두 '문자열'만 들어가도록 안정성을 확보한다.
class ExampleTwo {
  constructor(content, width, height, backgroundColor) {
    this.content = content;
    this.width = width;
    this.height = height;
    this.backgroundColor = backgroundColor;
  }

  // ! set은 값을 받아와 확인 하는 곳이라고 이해를 하였다.
  set content(test) {
    if (typeof test === "string") {
      this._content = test;
    }
  }
  set width(test) {
    if (typeof test === "string") {
      this._width = test;
    }
  }
  set height(test) {
    if (typeof test === "string") {
      this._height = test;
    }
  }
  set backgroundColor(test) {
    if (typeof test === "string") {
      this._backgroundColor = test;
    }
  }
}
// ! set에서 요리를 해주었으면 get이 받아서 요리를 먹는다 라고 이해를 하였다.
// get header() {
//   return this.basicData.header;
// }

// ? exampleOne() 함수를 거치지 않고 제이슨 데이터값을 바로 넣어 확인 해볼려고 테스트를 해보았다.
const test = new ExampleTwo(
  fromJsonData.header.content,
  fromJsonData.header.style.width,
  fromJsonData.header.style.height,
  fromJsonData.header.style.backgroundColor
);
const element = "";
element.innerHTML = exampleOne(basicData, fromJsonData);
console.log(exampleOne(basicData, fromJsonData));
