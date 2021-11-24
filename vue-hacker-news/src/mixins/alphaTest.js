const alphaArray = [
]


console.log(alphaArray)
const VUE_KEY_TL= [6472]
const VUE_KEY_FL = [601]
const response = []

for (let i = 0; i < alphaArray.length; i++) {
  const target = alphaArray[i]

  if (VUE_KEY_FL.indexOf(target) !== -1) {
    response.push("R")
  }

  if (VUE_KEY_TL.indexOf(target) !== -1) {
    response.push("L")
  }
}

console.log(response)
