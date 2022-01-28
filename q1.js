// 1. input = "My name is Ram. I am Ram Kumar. Ram, Please come here"

const findWordCount = (s) => {
    const wordsArray = s.replace(",", "").replace(".", "").split(" ");
    const res = {};
  
    for (let i = 0; i < wordsArray.length; i++) {
      if (res[wordsArray[i]] === undefined) {
        res[wordsArray[i]] = 1;
      } else {
        res[wordsArray[i]] += 1;
      }
    }
    return res;
  };
  
  console.log(
    findWordCount("My name is Ram. I am Ram Kumar. Ram, Please come here")
  );
  