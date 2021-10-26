function palindrome( str )
{
  let m = str.length -1;
  for( let i = 0 ; i < m/2 ;i++)
  {
    let x = str[i] ;
    let y = str[m-i];
    if( x != y) return false;
  }
  return true;
}

function check(str)
{
  let ans = palindrome(str);
  if(ans == true) console.log("palindrome");
  else console.log("not palindrome");
}
let t = "palindrome";
check(t);
t = "lal";
check(t);