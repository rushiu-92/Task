// secound highest element using inbuilt function




// 4. Find the second highest element of the array using inbuild functions.

const secondHighest = (arr) => {
    return arr.sort((a, b) => b - a)[1];
  };
  
  console.log(secondHighest([1, 3, 5, 6, 7]));
  
  
  
  