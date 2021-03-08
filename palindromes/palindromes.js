const palindromes = function(str) {
let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
let rawChar = str;
let cleanChar = rawChar.filter(function(letter){
    return punctuation.indexOf(letter) === -1;
})
let cleanString = cleanChar.join(''); 
let reverStr = cleanString.split('').reverse().join('');
str.toLowerCase();

return reverStr === str;
}

// module.exports = palindromes
