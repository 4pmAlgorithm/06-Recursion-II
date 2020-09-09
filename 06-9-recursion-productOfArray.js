
productOfArray = (arr) => {

    let total = 1
  
    helper = (newArr) => { //[1,2,3]
      if(newArr.length === 0) return total
  
      total *= newArr[0]
  
      helper(newArr.slice(1))
    }
  
    helper(arr)
    return total
  }
  
  //productOfArray([1,2,3]) // 6
  productOfArray([1,2,3,10]) // 60
  
  // .splice
  // concat
  // ...
  