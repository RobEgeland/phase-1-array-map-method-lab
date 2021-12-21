const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function toTitleCase(tutorials) {
  console.log('THIS SHOULD BE THE STRING TO LOWER');
  const lower = tutorials.map(tutorial => tutorial.toLowerCase())
  console.log(lower)
  
  // return str.toLowerCase().split(' ').map(function(word) {
  //   return (word.charAt(0).toUpperCase() + word.slice(1));
  // }).join(' ');
}

const titleCased = (tutorials) => {
  console.log('THIS FUNC IS RUNNING')
  console.log(tutorials)
  toTitleCase(tutorials)
  return tutorials
}


