function am(am, coins)
{
	if (am === 0) return [];
 	else
    {
    	if (am >= coins[0]) 
        {
        	left = (am - coins[0]);
        	return [coins[0]].concat( am(left, coins) );
        } 
        else
        {
        	coins.shift();
        	return am(am, coins);
        }
    }
}

console.log(am(46, [25, 10, 5, 2, 1]));