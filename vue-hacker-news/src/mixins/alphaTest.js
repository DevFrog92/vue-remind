const alphaArray = [
  0,
  0,
  1021,
  731,
  4785,
  9611,
  1013,
  2886,
  4422,
  6937,
  9481,
  5679,
  2886,
  9374,
  6110,
  7524,
  1001,
  458,
  4381,
  4783,
  6687,
  9458,
  2937,
  1025,
  6047,
  7861,
  4381,
  5111,
  797,
  8264,
  1066,
  1001,
  2886,
  5208,
  5679,
  2278,
  8633,
  4773,
  458,
  5961,
  5930,
  4513,
  9301,
  1993,
  8348,
  4810,
  1001
]


console.log(alphaArray)
const VUE_KEY_TL= [6472]
const VUE_KEY_FL = [601]

for (let i = 0; i < alphaArray.length; i++) {
  const target = alphaArray[i]

  if (VUE_KEY_FL.indexOf(target) !== -1) {
    console.log("Right")
  }

  if (VUE_KEY_TL.indexOf(target) !== -1) {
    console.log("Left")
  }

}
