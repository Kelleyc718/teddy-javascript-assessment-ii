"use strict"

/**
 * Write tests s.t. they can't be passed w/ literals
 */

describe('isTen', function() {
  it('should be a defined function', function() {
    expect(typeof isTen).toBe('function')
  })
  it('should return a boolean value', function() {
    expect(typeof isTen(10)).toBe('boolean')
    expect(typeof isTen(11)).toBe('boolean')
  })
  it('returns true for the value 10', function() {
    expect(isTen(10)).toBe(true)
  })
  it('returns false for both 9 and 11', function() {
    expect(isTen(9)).toBe(false)
    expect(isTen(11)).toBe(false)
  })
})

describe('double', function() {
  it('should be a defined function', function() {
    expect(typeof double).toBe('function')
  })
  it('should return a number', function() {
    expect(typeof double(12)).toBe('number')
  })
  it('should double the passed number', function() {
    const random = Math.floor(Math.random() * 10)
    expect(double(random)).toBe(random + random)
  })
  it('should return 10 when passed 5', function() {
    expect(double(5)).toBe(10)
  })
  it('should return -4 when passed -2', function() {
    expect(double(-2)).toBe(-4)
  })
  it('should return 0 when passed 0', function() {
    expect(double(0)).toBe(0)
  })
})

describe('remove9s', function() {
  it('should be a defined function', function() {
    expect(typeof remove9s).toBe('function')
  })
  it('should return an array', function() {
    expect(Array.isArray(remove9s([1, 2, 3]))).toBe(true)
  })
  it('should remove the element from the passed array if it is 9', function() {
    const input = [7, 8, 9, 10]
    const output = [7, 8, 10]
    expect(remove9s(input)).toEqual(output)
  })
  it('should not modify an array without any 9s in it', function() {
    const input = [1, 2, 3, 4, 5]
    const output = [1, 2, 3, 4, 5]
    expect(remove9s(input)).toEqual(output)
  })
  it('should remove every 9 in the input array', function() {
    const input = [9, 9, 9, 9]
    const output = []
    expect(remove9s(input)).toEqual(output)
  })
})

describe('capitalizeName', function() {
  it('should be a defined function', function() {
    expect(typeof capitalizeName).toBe('function')
  })
  it('should return a string', function() {
    expect(typeof capitalizeName('alan turing')).toBe('string')
  })
  it('should capitalize both names (first and last) in the passed string', function() {
    const input = 'alan turing'
    const output = 'Alan Turing'
    expect(capitalizeName(input)).toBe(output)
  })
  it('should not change an already capitalized name', function() {
    const input = 'Alan Turing'
    const output = 'Alan Turing'
    expect(capitalizeName(input)).toBe(output)
  })
})

describe('capitalizeAllNames', function() {
  it('should be a defined function', function() {
    expect(typeof capitalizeAllNames).toBe('function')
  })
  it('should return an array of strings', function() {
    const output = capitalizeAllNames(['ada lovelace', 'charles babbage'])
    expect(Array.isArray(output)).toBe(true)
    expect(typeof output[0]).toBe('string')
    expect(typeof output[1]).toBe('string')
  })
  it('should capitalize every name string in the passed array', function() {
    const input = ['ada lovelace', 'charles babbage', 'grace hopper']
    const output = ['Ada Lovelace', 'Charles Babbage', 'Grace Hopper']
    expect(capitalizeAllNames(input)).toEqual(output)
  })
  it('should not modify already capitalized names in the input array', function() {
    const input = ['Ada Lovelace', 'Charles Babbage']
    const output = ['Ada Lovelace', 'Charles Babbage']
    expect(capitalizeAllNames(input)).toEqual(output)
  })
})

describe('countVowels', function() {
  it('should be a defined function', function() {
    expect(typeof countVowels).toBe('function')
  })
  it('should return a number', function() {
    expect(typeof countVowels('abc')).toBe('number')
  })
  it('should return 1 for the input string "abc"', function() {
    expect(countVowels('abc')).toBe(1)
  })
  it('should return 3 for the input string "rubber duck"', function() {
    expect(countVowels('rubber duck')).toBe(3)
  })
  it('should return 0 for the input string "zxcv"', function() {
    expect(countVowels('zxcv')).toBe(0)
  })
  it('should return for the input string "be liberal in what you accept"', function() {
    const input = 'be liberal in what you accept'
    expect(countVowels(input)).toBe(10)
  });
  it('"and conservative in what you send"', function() {
    const input = 'and conservative in what you send'
    expect(countVowels(input)).toBe(11)
  });
})

describe('averageSales', function() {
  const testInput = [
    {name: 'Jim', sales: 1},
    {name: 'Pam', sales: 2},
    {name: 'Dwight', sales: 3},
    {name: 'Andy', sales: 4},
  ]
  it('should be a defined function', function() {
    expect(typeof averageSales).toBe('function')
  })
  it('returns a number', function() {
    expect(typeof averageSales(testInput)).toBe('number')
  })
  it('passes the example problem from the readme', function() {
    const output = averageSales([
      {name: 'Jim Halpert', sales: 100},
      {name: 'Dwight Schrute', sales: 50},
      {name: 'Andy Bernard', sales: 150},
    ])
    expect(output).toBe(100)
  })
  it('should average the "sales" properties for the passed array of objects', function() {
    expect(averageSales(testInput)).toBe(2.5)
  })
})

describe('analyzeWord', function() {
  it('should be a defined function', function() {
    expect(typeof analyzeWord).toBe('function')
  })
  it('should return an object', function() {
    const output = analyzeWord('codeup')
    expect(typeof output).toBe('object')
  })
  it('the returned object should have a "word" property that is a string', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(typeof output.word).toBe('string')
  })
  it('the returned object should have a "numberOfLetters" property that is a number', function() {
    const output = analyzeWord('codeup')
    expect(typeof output.numberOfLetters).toBe('number')
  })
  it('the returned object should have a "numberOfVowels" property that is a number', function() {
    const output = analyzeWord('codeup')
    expect(typeof output.numberOfVowels).toBe('number')
  })
  it('the "word" property should be the original word that was passed in', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(output.word).toBe(input)
  })
  it('the "numberOfVowels" property should be the number of vowels in the input word', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(output.numberOfVowels).toBe(input.replace(/[^aeiou]/g, '').length)
  })
  it('the "numberOfLetters" property should be the number of letters in the input word', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(output.numberOfLetters).toBe(input.length)
  })
  it('analyzes longer words', function() {
    let word = 'maximum';
    expect(analyzeWord(word)).toEqual({word, numberOfVowels: 3, numberOfLetters: 7})
    word = 'supercalifragilisticexpialidocious'
    expect(analyzeWord(word)).toEqual({word, numberOfVowels: 16, numberOfLetters: 34})
  });
})

describe('analyzeAllWords', function() {
  it('should be a defined function', function() {
    expect(typeof analyzeAllWords).toBe('function')
  })
  it('takes in an array of words and gives information on all of them', function() {
    const input = ['foo', 'bar', 'baz']
    const output = analyzeAllWords(input)
    expect(output).toEqual([
      {word: 'foo', numberOfVowels: 2, numberOfLetters: 3},
      {word: 'bar', numberOfVowels: 1, numberOfLetters: 3},
      {word: 'baz', numberOfVowels: 1, numberOfLetters: 3},
    ])
  })
  it('passes the example problem from the readme', function() {
    expect(
      analyzeAllWords(['html', 'css', 'javascript'])
    ).toEqual(
      [
        {word: 'html', numberOfLetters: 4, numberOfVowels: 0},
        {word: 'css', numberOfLetters: 3, numberOfVowels: 0},
        {word: 'javascript', numberOfLetters: 10, numberOfVowels: 3}
      ]
    )
  });
})

describe('padArray', function() {
  it('should be a defined function', function() {
    expect(typeof padArray).toBe('function')
  });
  it('should return an array', function() {
    expect(Array.isArray(padArray([1, 2, 3], 5, 0))).toBe(true)
  });
  it('should not modify the passed array if it is already at or above the passed length', function() {
    expect(padArray([1, 2, 3], 3, 0)).toEqual([1, 2, 3])
    expect(padArray([1, 2, 3], 2, 0)).toEqual([1, 2, 3])
  });
  it('should pad the array with elements if it is less than the specified length', function() {
    expect(padArray([], 3, 0)).toEqual([0, 0, 0])
    expect(padArray([], 3, 'a')).toEqual(['a', 'a', 'a'])
  });
  it('should pass the example problems in the readme', function() {
    const numbers = [1, 2, 3];
    expect(padArray(numbers, 5, 0)).toEqual([1, 2, 3, 0, 0])
    expect(padArray(numbers, 2, 0)).toEqual([1, 2, 3])
    expect(padArray(numbers, 5, 'a')).toEqual([1, 2, 3, 'a', 'a'])
  });
});

// /**
//  * Show the spec list by default (instead of the failures)
//  */
// const currentWindowOnload = window.onload
// // wait for jasmine to boot
// window.onload = function() {
//   if (currentWindowOnload) {
//     currentWindowOnload()
//   }
//   // this is a little hacky, but it works
//   setTimeout(function() {
//     if (location.search) { return } // if we want to examine an individual spec
//     const div = document.querySelector('.jasmine_html-reporter')
//     div.classList.remove('failure-list')
//     div.classList.add('spec-list')
//   }, 300)
