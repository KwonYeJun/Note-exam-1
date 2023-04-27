let str = "자동차를 타면서 음악을 신호에 맞게 신나게나 즐겁게 틀어준다. 농산물을 관리를 하는데 기계가 대신 해준다. 장치를 이용 하여 특정 인문이 다가 온다면 알림을 보내주면 좋겠다. 운동을 하면서 즐거운 노래나 신나는 음악을 클라이맥스만 틀어주면 좋겠다.";
let words = str.split(" ");
let counts = {};

for(let i=0; i<words.length; i++) {
  let word = words[i];
  if(counts[word] === undefined) {
    counts[word] = 1;
  } else {
    counts[word] += 1;
  }
}

console.log(counts);
