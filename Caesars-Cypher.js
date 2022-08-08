function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let newStr = str.split("");
  for(let i = 0; i < newStr.length; i++){
     if(alphabet.indexOf(newStr[i]) != -1){
        newStr[i] = alphabet[(alphabet.indexOf(newStr[i]) + 13) % 26];
     }
     
  }
  newStr = newStr.join("");
  console.log((24 + 13) % 26)
  return newStr;
}
console.log(rot13("SERR CVMMN!"));
