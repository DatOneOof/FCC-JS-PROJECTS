function palindrome(str) {
  let newStr = str.toLowerCase();
  let testStr = "";
  let regex = /\W|_/;
  let revStr = [];
  while(regex.test(newStr) == true){
    newStr = newStr.replace(regex, "");
  }
  for(let i = 0; i < newStr.length; i++){
    revStr.unshift(newStr[i]);
  }
  testStr = "_eye";
  console.log(testStr.replace(regex, ""));
  revStr = revStr.join("");
  console.log(newStr);
  console.log(revStr);
  if(revStr === newStr){
    return true;
  }
  else{
    return false;
  }


}

palindrome("eye");
