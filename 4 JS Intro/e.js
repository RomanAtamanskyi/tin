function longest(str) {
    var longest = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longest[0];
  }
  function Length(str) {
    var longest = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longest[0].length;
  }
  var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nihil quia veniam ipsa quos debitis explicabo, nisi vel! Consectetur, neque?";
  console.log(longest(str) + " length - " + Length(str));