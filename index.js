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



const titleCased = (input) => {
  return tutorials.map ( sentence => {
    //console.log("first test ====", tutorials)
    let words = sentence.split(' '); //split by space
    //console.log("test=====", words)
    let capWords = words.map (
       word => word.charAt(0).toUpperCase() + word.slice(1) );
       //console.log("slice===", word.slice(1)) // this will slice off everything after index 0 from word to join together with capW/ord
    //upperCase each char at 0 index and 
    //console.log("map ====", capWords)
    let newSentence = capWords.join(' '); //join all words with a space
    return newSentence;
  })
}
