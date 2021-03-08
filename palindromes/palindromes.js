const palindromes = function(str) {
//check punctuation
const backtic = "`";
const punctuation = `!#$%&\()*+,"'-./ :;<=>?@[\\]^_{|}~${backtic}`;
const arrayPunc = [...punctuation];

//Convert str to lowercase
const toLowerCase = str.toLowerCase();
//change string to array
let strArray = [...toLowerCase];

//remove Punc from array
function removePunctuation(strInput){    
   let puncRemove = strInput.filter(char => arrayPunc.indexOf(char) === -1);
    return puncRemove;
}

//assign array to puncRemoved
let puncRemoved = removePunctuation(strArray);

//convert puncRemoved to string
let strPuncRemoved = puncRemoved.toString();
//remove commas
strPuncRemoved = strPuncRemoved.replace(/,/g, '');

//check palendrome:
    function isPaldrome (str){
    const cleanStr = str;
    const reverseStr = cleanStr.split('').reverse().join('');
    return reverseStr === cleanStr;
}

const palendromeBool = isPaldrome(strPuncRemoved);

return palendromeBool;
}

module.exports = palindromes
