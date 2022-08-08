function convertToRoman(num) {
  let thousands = ["","M","MM","MMM"];
  let hundreds = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
  let tens = ["", "X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]
  let units = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
  let numArr = [];
  let romArr = [thousands, hundreds, tens, units];
  let newNum = "";

  let numStr = num + "";
  let curNum = 0;
  let curStr = "";
  for(let i = 0; i < num.toString().length; i++){
      curNum = parseInt(num.toString()[i]);
      //curNum *= 10 ** (num.toString().length - 1 - i);
      numArr.push(curNum);
  }
 let x = romArr.length - numArr.length;
  for(let i = 0; i < numArr.length; i++){
   
console.log(romArr[i+x][numArr[i]]);
   numArr[i] = romArr[i+x][numArr[i]];

  }
console.log(numStr);
 numArr = numArr.join("");
 return numArr;
}

console.log(convertToRoman(1004));
