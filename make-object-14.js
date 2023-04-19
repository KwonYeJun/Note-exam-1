class co{
  constructor(id){
    this.id = id;
  }
  set id(value){
    if(typeof value === 'string'){
      this._id = value;
    }
  }
}

const test = new co('kyj');
console.log(test);