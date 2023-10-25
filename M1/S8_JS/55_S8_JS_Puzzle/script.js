function countWords(msg){
  let words = msg.split(/[^a-z]/)
  let count = 0

  for (i in words){
    if (words[i] !== '') {
      count++
    }
  }
  return count
}

console.log(countWords('sss.aasd.sss'))
console.log(countWords('sssaasdsSs'))
console.log(countWords('sssa1asdss'))
