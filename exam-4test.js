function arrayLengthEven(array) {
  if (array.length % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


let basicData = [4, 6, 23, 5, 94, 35, 44];

if(arrayLengthEven(basicData) === false){
  basicData.push(10);
  console.log(basicData.length);
  // push()를 사용하여 인덱스 10을 추가 하였따.
 }  
else{
  console.log(arrayLengthEven(basicData))

}
