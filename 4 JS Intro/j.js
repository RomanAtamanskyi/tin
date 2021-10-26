function binary(arr, n, start=0, stop=(arr.length-1)) {
    let median = Math.floor(((stop-start)/2) + start)
    switch (true) {
      case arr[median] === n:return true
      case stop - start === 0:return false
      case arr[median] < n:return binary( arr, n, median+1, stop )
      case arr[median] > n:return binary( arr, n, start, median )
    }
  }

var arr = [1,2,3,4,5,6,7,8,9,10];
  console.log(binary(arr, 2))