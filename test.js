let test = {
  a:[1,2,3],
  b:[3,4]
}

let aa = 0;
for(let key in test){
  if(typeof(test[key]) === 'object'){
    for(let i = 0; i<test[key].length;i++ ){
      if(typeof(test[key][i]) === 'number'){
        console.log(Boolean(test[key][i]));
      
      }
    }
  }
}