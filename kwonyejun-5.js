const basicData = [
  {number : 1,name : "코카콜라", price: 1000},
  {number : 2,name : "사이다", price:2300 },
  {number : 3,name : "포카리스웨트", price: 2100},
  {number : 4 ,name : "칸쵸", price:1200 },
  {number : 5 ,name : "오예스", price: 5400},
  {number : 6 ,name : "초코파이", price:1000 },
  {number : 7 ,name : "오징어땅콩", price: 2300},
  {number : 8 ,name : "빼빼로", price:1700 },
  {number : 9 ,name : "매운새우깡", price: 1900},
  {number :  10 ,name : "스윙칩", price:500 },
]

const currency = {
  thousand: { value: 1000, name: "일천원권" },
  fiveThousand: { value: 5000, name: "오천원권" },
  tenThousand: { value: 10000, name: "일만원권" },
  fiveHundred: { value: 500, name: "오백원" },
  hundred: { value: 100, name: "일백원" }
};


function exampleOne(inputPrice,currency,basicData) {

  switch(inputPrice){
    case 1000:
      console.log(currency.thousand.name,'일천원권을 넣었습니다.');
  }
  
// Q 만약 inputPrice가 1000이면 currency.thousand.name을 반환하여 "일천원권을 넣었습니다."라는문구를 console.log로 출력한다.

// Q 만약 inputPrice가 1000원일 때, basicData를 통해 구매 가능한 제품을 콘솔

// Q 만약 inputPrice가 모든 제훔의 가격보다 적다면 "잔액 부족합니다"를 띄원준다

// Q 만약 inputPricerk 가 모든 제품의 가격보다 많다면 '"당신은 무자입니다. 라는 문구를 출력"

}

exampleOne(1000,currency,basicData);