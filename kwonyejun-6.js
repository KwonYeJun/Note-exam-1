let basicData = {
  header: {
    id: "header",
    type: "div",
    children: null,
  },
  main: {
    id: "main",
    type: "div",
    children: null,
  },
  footer: {
    id: "footer",
    type: "div",
    children: null,
  },
};

let elementData = ["게시판", "수업과제", "사용자", "성적", "로그아웃"];
// function tagmaker(tagName, attribute) {
//   const element = document.createElement(tagName);
//   if (attribute && typeof attribute === "object") {
//     Object.assign(element, attribute);
//   }
//   return element;
// }
function exampleOne(object, array) {
  // basic 객체의 children 속성이 null 데이터타입이 할당되어있는지를 판별하고 null 데이터타입이 할당되어 있으면 매개변수를 각각 할당한다.
  // header, main, footer HTML 태그를 생성하는 로직으로 최종적으로 문자열로 제작된 HTML 태그 데이터를 가공/편집하시오

  let value;
  for (let ket in object) {
    if (object[ket].children === null) {
      const test = (object[ket].children = array.shift());
      console.log(test);
    }
  }


  for(let ket in object){
    
    // ! 직접 만들어 본 예시
    // console.log(object[ket].type,object[ket]);
//  value =  Object.assign(object[ket].type,object[ket])

// ! gpt를 참고 하여 만들어 보았다
// ! 이렇게 작성을 하는건 생각은 해보았지만 이렇게 작성을 하는지 잘 모르겠어서 gpt에게 물어 보았는데 이런식으로 알려주는거 보고 더 줄일수 있지 않을까 라는 생각을 해보았지만 마음 처럼 잘 되지 않았다.
// ? 문제를 이해 하는게 아직 많이 어려운거 같습니다.
 value += `<${object[ket].type} id="${object[ket].id}">${object[ket].children}</${object[ket].type}>`;
  }
  
  return value;

}


console.log(exampleOne(basicData, elementData));
// for(let ket in basicData){
//   console.log(basicData[ket].type,basicData[ket]);
//  Object.assign(basicData[ket].type,basicData[ket])
// }

// const test= tagmaker("div",basicData);
// console.dir(test);