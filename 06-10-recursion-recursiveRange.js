/////////////////////////////////////////
///////**** recursiveRange ******////////
/////////////////////////////////////////
//write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function. 


function recursiveRange(n){ //2

    if(n === 0) return 0
  
    let total = 0
  
    return total += n + recursiveRange(n-1) 
  
  }
  
  //recursiveRange(6) // 21
  recursiveRange(10) // 55 