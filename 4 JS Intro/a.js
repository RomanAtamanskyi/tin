
function facRec(x) 
{ 
  if (x === 0){return 1;}
  return x * facRec(x-1);       
}

console.log(facRec(5));

function facIt(n){
    let sum = 1;
    if (n == 0 || n == 1) return sum;
    else{
      for(var i = n; i >= 1; i--){sum = sum * i;}
      return sum;
    }  
  }
  let n = 5;
  res = facIt(n)
  console.log("factorial of " + n + " - " + res);