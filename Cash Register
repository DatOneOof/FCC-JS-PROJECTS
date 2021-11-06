function checkCashRegister(price, cash, cid) {
  let change = [];
  let totalChange = 0;
  let newPrice = price;
  let refArr = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
];
let curArr = [];
let inCid = [];
  let difference = cash - price;
    let totalCash = 0;
  for(let i = 0; i < cid.length; i++){
    curArr.unshift(refArr[i]);
    inCid.unshift(cid[i]);
  }
  for(let i = 0; i < cid.length; i++){
    totalCash += cid[i][1];
    
  }
  totalCash = totalCash.toFixed(2);
  console.log(totalCash);
  
  //console.log(difference);
  if(totalCash < difference){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if(totalCash == difference){
    return {status: "CLOSED", change: [...cid]};
  }
  else{
    for(let i = 0; i < inCid.length; i++){
      if(difference > 0 && difference >= curArr[i][1] && inCid[i][1] > 0){
          /*if(difference == inCid[i][1]){
          change.push([inCid[i]]);
          difference -= inCid[i][1];
          continue;
        }*/
        console.log(difference);
        if(difference < inCid[i][1]){
          change.push([inCid[i][0], Math.floor(difference / curArr[i][1]) * curArr[i][1]]);
          difference -= Math.floor(difference / curArr[i][1]) *  curArr[i][1];
          difference = difference.toFixed(2);
          
          totalChange += Math.floor(difference / curArr[i][1]) * curArr[i][1];
          if(inCid[i][0] == "PENNY"){

          }
          continue;
          
        }
        if(difference >= inCid[i][1]){
          console.log(inCid[i][1]);
          change.push(inCid[i]);
          difference -= inCid[i][1];
          difference = difference.toFixed(2);
          continue;
        }
     
        
      }
    }
      console.log(change);
      for(let i = 0; i < change.length; i++){
        totalChange += change[i][1];
      }
      totalChange = totalChange.toFixed(2);
      console.log(totalChange);
      if(totalChange == (cash - price)){
         return {status: "OPEN", change: change};
      }
      else{
        return {status: "INSUFFICIENT_FUNDS", change: []};
      }
      
    }
  
  


}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
