
function compareprice(firstchefprice,secondchefprice,order="asc") {
    if(firstchefprice > secondchefprice) {
      if (order === "asc") return -1 
      else return 1
    }
    else if(firstchefprice < secondchefprice) {
      if (order === "desc") return -1 
      return 1
    }
    return 0
  }

  export default compareprice