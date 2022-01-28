 // 3. input =
// [
//  [2,3,0],
//  [5,9,8],
//  [7,6,3]
// ]

const daigonalSum = (matrix) => {
    let firstSum = 0;
    let secondSum = 0;
  
    for (let row = 0; row < matrix.length; row++) {
      firstSum += matrix[row][row];
      secondSum += matrix[row][matrix.length - row - 1];
    }
  
    return [firstSum, secondSum];
  };
  
  console.log(
    daigonalSum(
      (input = [
        [2, 3, 0],
        [5, 9, 8],
        [7, 6, 3],
      ])
    )
  );