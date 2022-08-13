'use strict';
const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  let splitword = word.toLowerCase().trim().split("")
  if (
    splitword[0] === "a" || 
    splitword[0] === "e" || 
    splitword[0] === "i" ||
    splitword[0] === "o" ||
    splitword[0] === "u"  )
  { return word + "yay"}
  else if (
    splitword[1] === "a" || 
    splitword[1] === "e" || 
    splitword[1] === "i" ||
    splitword[1] === "o" ||
    splitword[1] === "u")
    { let yay1 = splitword.shift();
      return splitword.join("") + yay1 + "ay"
    }
    else if (
      splitword[2] === "a" || 
      splitword[2] === "e" || 
      splitword[2] === "i" ||
      splitword[2] === "o" ||
      splitword[2] === "u")
    {
      let yay2 = splitword.splice(0, 2)
      return splitword.join("") + yay2.join("") + "ay"
    }
    else if (
      splitword[3] === "a" || 
      splitword[3] === "e" || 
      splitword[3] === "i" ||
      splitword[3] === "o" ||
      splitword[3] === "u")
    {
      let yay3 = splitword.splice(0, 3)
      return splitword.join("") + yay3.join("") + "ay"
    }
    else return "That is not an English word."
}

const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
