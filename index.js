const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let finalArray = []
  tutorials.map(function(string) {
    let newArray = string.split(' ');
    let stringsArray = []
    let upCasedWords = newArray.map(function(word){
      const initial = word[0].toUpperCase()
      const final = word.slice(1)
      stringsArray.push(initial + final)
    })
    finalArray.push(stringsArray.join(' '))
  })
  return finalArray
  // return tutorials
}

function makeUpCase(tutorials) {
  finalArray = []
  tutorials.map(function(string) {
    newArray = string.split(' ');
    let stringsArray = []
    upCasedWords = newArray.map(function(word){
      const initial = word[0].toUpperCase()
      const final = word.slice(1)
      stringsArray.push(initial + final)
    })
    finalArray.push(stringsArray.join(' '))
  })
  return finalArray
}

makeUpCase(tutorials)


  // console.log(upCasedWords)
  // console.log(newArray)