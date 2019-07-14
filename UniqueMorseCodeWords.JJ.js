const morseLetters = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]

function uniqueMorseRepresentations(words) {
  const set = new Set()
  for (let i = 0; i < words.length; i++) {
    let morseCode = convertToMorse(words[i])
    set.add(morseCode)
  }
  return set.size
}

function convertToMorse(word) {
  let morse = ''
  for (let i = 0; i < word.length; i++) {
    let index = word.charCodeAt(i)
    morse += morseLetters[index - 97]
  }
  return morse
}


const res = uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])
debugger