function sameFrequency(num1, num2) {
  let numStr1 = num1.toString()
  let numStr2 = num2.toString()
  if (numStr1.length !== numStr2.length) return false;
  let obj = {}
  for (let i = 0; i < numStr1.length; i++) {
    obj[numStr1[i]] = (obj[numStr1[i]] || 0) + 1
    // console.log(obj[numStr1[i]])
  }

  for (let i = 0; i < numStr2.length; i++) {
    if (!obj[numStr2[i]]) {
      return false
    }
    obj[numStr2[i]]--
  }
  console.log(obj)
}

sameFrequency(182, 281)